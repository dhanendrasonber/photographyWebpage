/*
 * HomePage
 *
 * Get list location folders with: GET https://www.googleapis.com/drive/v2/files/1Iv8dHdXs7Vvdz0PC9lnU2fE-oBmXOIlh/children
 * Map over this list to convert IDs to strings with: GET https://www.googleapis.com/drive/v2/files/folderId
 * Get a list of each of the photos in each folder with: GET https://www.googleapis.com/drive/v2/files/folderId/children
 * Build URL for each of the photos with the following template: https://drive.google.com/uc?export=view&id=fileId
 * Refresh Token: 1/YEFQ_GC-IbEauYPBZ6HPleAV5IU0jkF_ytX0dmg8fNQ
 * Images loaded via Google drive load slowly; going to load them all prior to rendering
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from 'components/PhotoCard';
import HeaderBar from 'components/HeaderBar';
import { Grid, Row, Col } from 'react-bootstrap/lib';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
// import { RESTART_ON_REMOUNT } from 'utils/constants';ss
import saga from './saga';

import messages from './messages';
import * as actions from './actions';
import { makeSelectTitleList, makeSelectUrlList } from './selectors';
import Wrapper from './Wrapper';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activePage: null,
      loadedItems: [],
    };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    console.log('MOUNT');
    this.props.onPageLoad();
  }
  onButtonClick = (index) => {
    console.log('buttonclick', index);
    this.setState({ loadedItems: [] });
    this.setState({ activePage: index });
  }
  onLoad(feedItem) {
    console.log('running onLoad ', feedItem.target.src);
    feedItem.persist();
    const newCard = (
      <Col lg={6}>
        <PhotoCard source={feedItem.target.src} />
      </Col>
    );
    this.setState(({ loadedItems }) => {
      return { loadedItems: this.state.loadedItems.concat(newCard) };
    })
  }
  render() {
    const { titleList, urlList } = this.props;
    const { activePage, loadedItems } = this.state;
    // console.log(urlList);
    // console.log('active page: ', this.state.activePage);

    // const loadPhotos = urlList[activePage].map((regionList) => {
    //   return (regionList.map((url) => (
    //     <img src={url} onLoad={this.onLoad} key={url}/>
    //   )));
    // });

    const photoLoader = urlList.map((regionList) => {
      return (regionList.map((url, i) => (
        <img src={url} onLoad={this.onLoad} key={`${url}-${i}`} />
      )));
    });
    const photos = urlList.map((regionList) => {
      return (regionList.map((url) => (
        <Col lg={6}>
          <PhotoCard source={url} onLoad={this.onLoad} />
        </Col>
      )));
    });
    // const displayPhotos = photos[activePage];

    // const displayPhotos = this.state.loadedItems.map((item, i) => {
    //   console.log('***');
    //   console.log(item.src);
    //   console.log(i);
    //   return (
    //     <Col lg={6}>
    //       <PhotoCard source={item.url} />
    //     </Col>
    //   );
    // });
    console.log(this.state.loadedItems);
    return (
      <Wrapper>
        <div className="photo-canvas">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <Grid>
            <Row>
              <HeaderBar titles={titleList} onButtonClick={this.onButtonClick} />
              {this.state.loadedItems}
              <div className="hidden">
                {photoLoader[activePage]}
              </div>
            </Row>
          </Grid>
        </div>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  titleList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  urlList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  titleList: makeSelectTitleList(),
  urlList: makeSelectUrlList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad() {
      dispatch(actions.pageLoadAction());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
// const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(HomePage);

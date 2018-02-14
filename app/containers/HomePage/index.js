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
import TransitionGroup from 'react-addons-transition-group';

import injectSaga from 'utils/injectSaga';
// import { RESTART_ON_REMOUNT } from 'utils/constants';ss
import saga from './saga';

import messages from './messages';
import * as actions from './actions';
import { makeSelectTitleList, makeSelectUrlList, makeSelectDataRetrieved } from './selectors';
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
    // console.log('MOUNT');
    this.props.onPageLoad();
  }
  onButtonClick = (index) => {
    // console.log('buttonclick', index);
    this.setState({ loadedItems: [] });
    this.setState({ activePage: index });
  }
  onLoad(feedItem) {
    // console.log('running onLoad ', feedItem.target.src);
    feedItem.persist();
    const newCard = (
      <Col lg={6}>
        <PhotoCard key={feedItem.target.src} source={feedItem.target.src} />
      </Col>
    );
    this.setState(({ loadedItems }) => {
      return { loadedItems: this.state.loadedItems.concat(feedItem.target.src) };
    })
  }
  render() {
    const { titleList, urlList, dataRetrieved } = this.props;
    const { activePage, loadedItems } = this.state;

    const photoLoader = urlList.map((regionList) => {
      return (regionList.map((url, i) => (
        <img src={url} onLoad={this.onLoad} key={`${url}-${i}`} />
      )));
    });
    const loadedPhotos = loadedItems.map((url, i) => {
      // console.log(url);
      return (
        <Col lg={6} key={`${url}-${i}`}>
          <PhotoCard key={url} source={url} />
        </Col>
      );
    });
    return (
      <Wrapper>
        <div className="photo-canvas">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <Grid>
            <TransitionGroup>
              {dataRetrieved && (<HeaderBar titles={titleList} onButtonClick={this.onButtonClick} />)}
              <Row>
                {loadedPhotos}
              </Row>
            </TransitionGroup>
          </Grid>
        </div>
        <div className="hidden">
          {photoLoader[activePage]}
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
  dataRetrieved: PropTypes.bool,
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dataRetrieved: makeSelectDataRetrieved(),
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

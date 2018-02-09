/*
 * HomePage
 *
 * Get list location folders with: GET https://www.googleapis.com/drive/v2/files/1Iv8dHdXs7Vvdz0PC9lnU2fE-oBmXOIlh/children
 * Map over this list to convert IDs to strings with: GET https://www.googleapis.com/drive/v2/files/folderId
 * Get a list of each of the photos in each folder with: GET https://www.googleapis.com/drive/v2/files/folderId/children
 * Build URL for each of the photos with the following template: https://drive.google.com/uc?export=view&id=fileId
 * Refresh Token: 1/YEFQ_GC-IbEauYPBZ6HPleAV5IU0jkF_ytX0dmg8fNQ
 *
 * Images loaded via Google drive load slowly; going to load them all prior to rendering
 */

import React from 'react';
import PhotoCard from 'components/PhotoCard';
import HeaderBar from 'components/HeaderBar';
import { Grid, Row, Button, Col } from 'react-bootstrap/lib';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
// import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './saga';

import messages from './messages';
import * as actions from './actions';
import { makeSelectActivePage } from './selectors';
import Wrapper from './Wrapper';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('MOUNT');
    this.props.onPageLoad();
  }
  onButtonClick = () => {
    console.log('buttonclick');
    this.props.onPageLoad();
  }
  render() {
    return (
      <Wrapper>
        <div className="photo-canvas">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <Grid>
            <Row>
              <HeaderBar />
              <Col lg={6}>
                <PhotoCard key="a" source="http://vaughanstedman.me/a2a7e31342fa30e92761e3996b0403d8.jpg" />
              </Col>
              <Col lg={6}>
                <PhotoCard key="b" source="http://vaughanstedman.me/b3ae6362db9706d6eb1de8c202f1956f.jpg" />
              </Col>
              <Col lg={6}>
                <PhotoCard key="c" source="https://drive.google.com/uc?export=view&id=1EYOolrJoOvkZHV9bL1jkaGl9-57H6NFT" />
              </Col>
              <Col lg={6}>
                <PhotoCard key="d" source="http://vaughanstedman.me/b3ae6362db9706d6eb1de8c202f1956f.jpg" />
              </Col>
            </Row>
          </Grid>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
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

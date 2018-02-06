/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PhotoCard from 'components/PhotoCard';
// import HeaderBar from 'components/HeaderBar';
import { Grid, Row } from 'react-bootstrap/lib';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Wrapper from './Wrapper';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div className="photo-canvas">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <Grid>
            <Row>
              <PhotoCard key="a" source="http://vaughanstedman.me/a2a7e31342fa30e92761e3996b0403d8.jpg" />
              <PhotoCard key="b" source="http://vaughanstedman.me/b3ae6362db9706d6eb1de8c202f1956f.jpg" />
              <PhotoCard key="c" source="https://drive.google.com/uc?export=view&id=1EYOolrJoOvkZHV9bL1jkaGl9-57H6NFT" />
              <PhotoCard key="d" source="http://vaughanstedman.me/b3ae6362db9706d6eb1de8c202f1956f.jpg" />
            </Row>
          </Grid>
        </div>
      </Wrapper>
    );
  }
}

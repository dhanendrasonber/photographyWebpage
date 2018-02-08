/**
*
* PhotoCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Col, Image } from 'react-bootstrap/lib';

import Wrapper from './Wrapper';
// import styled from 'styled-components';


class PhotoCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleImageLoaded = () => {
    console.log('LOADED IMAGE!');
  }
  render() {
    return (
      <div>
        <Wrapper>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="photo-card">
              <Image src={this.props.source} onLoad={this.handleImageLoaded} />
            </div>
          </Col>
        </Wrapper>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  source: PropTypes.string,
};

export default PhotoCard;

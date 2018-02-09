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
          <div className="photo-card">
            <Image src={this.props.source} onLoad={this.handleImageLoaded} />
          </div>
        </Wrapper>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  source: PropTypes.string,
};

export default PhotoCard;

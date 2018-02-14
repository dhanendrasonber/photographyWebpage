/**
*
* PhotoCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap/lib';

import Wrapper from './Wrapper';
// import styled from 'styled-components';


class PhotoCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Wrapper>
          <div className="photo-card">
            <Image src={this.props.source} onLoad={this.props.onLoad} />
          </div>
        </Wrapper>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  source: PropTypes.string,
  onLoad: PropTypes.func,
};

export default PhotoCard;

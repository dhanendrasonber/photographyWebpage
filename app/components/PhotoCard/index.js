/**
*
* PhotoCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap/lib';

import { Transition } from 'react-transition-group'

import Wrapper from './Wrapper';
// import styled from 'styled-components';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};


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

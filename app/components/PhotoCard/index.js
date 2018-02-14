/**
*
* PhotoCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Image, Button } from 'react-bootstrap/lib';

import { TweenMax } from 'gsap';
import Wrapper from './Wrapper';
// import styled from 'styled-components';

class PhotoCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, { y: -80, x: -10, opacity: 0 }, { y: 0, x: 0, opacity: 1, onComplete: callback });
  }
  render() {
    return (
      <div ref={(c) => (this.container = c)}>
        <Wrapper>
          <div className="photo-card">
            <a href="javascript:void(0)" onClick={this.props.onClick}><Image src={this.props.source} onLoad={this.props.onLoad} /></a>
          </div>
        </Wrapper>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  source: PropTypes.string,
  onLoad: PropTypes.func,
  onClick: PropTypes.func,
};

export default PhotoCard;

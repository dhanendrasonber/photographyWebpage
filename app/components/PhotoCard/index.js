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
  render() {
    return (
      <div>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Wrapper>
            <div className="photo-card">
              <Image src={this.props.source} />
            </div>
          </Wrapper>
        </Col>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  plotTitle: PropTypes.string,
};

export default PhotoCard;

/**
*
* HeaderBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Button, Col } from 'react-bootstrap/lib';

class HeaderBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const titleButtons = this.props.titles.map((title, index) => {
      console.log(index);
      return (<Button key={title} onClick={this.props.changeLocation}> {title} </Button>);
    });
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        {titleButtons}
      </Col>
    );
  }
}

HeaderBar.propTypes = {
  titles: PropTypes.array,
  changeLocation: PropTypes.func,
};

export default HeaderBar;

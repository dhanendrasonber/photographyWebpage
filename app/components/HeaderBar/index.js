/**
*
* HeaderBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button, Col } from 'react-bootstrap/lib';

class HeaderBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <Button onClick={this.onButtonClick}> BERLIN </Button>
        <Button> MELBOURNE </Button>
        <Button> DUBLIN </Button>
      </Col>
    );
  }
}

HeaderBar.propTypes = {

};

export default HeaderBar;

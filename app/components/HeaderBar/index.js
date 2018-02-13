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
    const titleButtons = this.props.titles.map((title) => {
      console.log(title);
      return (<Button> {title} </Button>);
    })
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        {titleButtons}
      </Col>
    );
  }
}

HeaderBar.propTypes = {

};

export default HeaderBar;

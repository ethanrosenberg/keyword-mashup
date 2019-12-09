import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'

const NavigationBar = () => {

  const divStyle = {
    marginLeft: '20px',
  };

    return (
      <div className="NavigationBar">
      <Navbar  expand="xl" variant="dark" bg="dark">
        <Navbar.Brand style={divStyle} href="#">Keyword Mashup</Navbar.Brand>
      </Navbar>
      </div>
    )

}

export default NavigationBar

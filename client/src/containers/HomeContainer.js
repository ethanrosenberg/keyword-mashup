
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class HomeContainer extends React.Component {

   render() {

     const divStyle = {
       marginLeft: '20px',
     };

     return (

        <Navbar  expand="xl" variant="dark" bg="dark">
          <Navbar.Brand style={divStyle} href="#">Keyword Mashup</Navbar.Brand>
        </Navbar>



     )


   }

 }

 export default HomeContainer;

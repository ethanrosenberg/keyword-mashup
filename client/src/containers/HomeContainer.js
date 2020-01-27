
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/SearchForm';

import Container from 'react-bootstrap/Container';



class HomeContainer extends React.Component {
  constructor() {
    super()

  }


   render() {

     return (
      <>
      <NavigationBar />
      <br></br>

        <Container>
        <h1>Dive Deep into Google...</h1>
        <h6>Discover what users are really searching for... </h6>
        <br></br>

      <SearchForm />

        </Container>

        </>

     )

   }

 }

 export default HomeContainer;

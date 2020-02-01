
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/SearchForm';

import Container from 'react-bootstrap/Container';
import HomeDescription from '../components/HomeDescription'


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
        <HomeDescription />

      <SearchForm />

        </Container>

        </>

     )

   }

 }

 export default HomeContainer;

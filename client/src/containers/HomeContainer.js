
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/SearchForm';

import Container from 'react-bootstrap/Container';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'


class HomeContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword : '',
      success : ''
    }
  }

   handleSearchChange = event => {
    this.setState({
      keyword: event.target.value
    });
  }

   render() {



     const handleSearchSubmit = event => {

     event.preventDefault()

     const headers = {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({  keyword: this.state.keyword })
     }

     fetch('http://localhost:3000/api/v1/new_search', headers)
       .then(r => r.json())
       .then(response => {

         this.setState({
           success: true
         })


       })

   }



     return (
      <>
      <NavigationBar />
      <br></br>

        <Container>
        <h1>Get New Keyword Suggestions</h1>
        <br></br>


      <SearchForm />




        </Container>




        </>

     )


   }

 }

 export default HomeContainer;

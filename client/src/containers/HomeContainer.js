
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
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

     const divStyle = {
       marginLeft: '20px',
     };

     return (
<>
        <Navbar  expand="xl" variant="dark" bg="dark">
          <Navbar.Brand style={divStyle} href="#">Keyword Mashup</Navbar.Brand>
        </Navbar>
<br></br>

        <Container>
        <h1>Get New Keyword Suggestions</h1>
        <br></br>


        <Form onSubmit={handleSearchSubmit} >
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="eg. how to build a deck"
                  aria-label="comment..."
                  aria-describedby="basic-addon2"
                  onChange={this.handleSearchChange}
                />
                <InputGroup.Append>
                    <Button variant="dark" type="submit" size="sm">
                    Enter keyword
                 </Button>
                </InputGroup.Append>
              </InputGroup>
              </Form>


        <br></br>
        <Button variant="primary" size="lg">
          Search
        </Button>
        </Container>




        </>

     )


   }

 }

 export default HomeContainer;

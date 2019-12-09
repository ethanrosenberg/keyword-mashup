import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'

 class SearchForm extends React.Component {
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
      <div className="searchForm">
      <Form onSubmit={this.handleSearchSubmit} >
              <FormControl
                placeholder="eg. how to build a deck"
                aria-label="comment..."
                aria-describedby="basic-addon2"
                onChange={this.handleSearchChange}
              />

              <br></br>
                <Button variant="primary" type="submit" size="lg">
                  Enter keyword
               </Button>
            </Form>
      </div>
    )

  }


}


export default SearchForm

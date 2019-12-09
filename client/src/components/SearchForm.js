import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'

 class SearchForm extends React.Component {
   constructor() {
     super()

     this.state = {
       keyword : '',
       results: '',
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

          console.log(response)

          this.setState({
            success: true,
            results: response
          })
        })
  }

    const divStyle = {
      marginLeft: '20px',
    };


    return (
      <div className="searchForm">
      <Form onSubmit={handleSearchSubmit} >
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
            <br></br>
            <h6>Results</h6>
            { this.state.results.length > 0
              ?
              this.state.results.map((item, key) =>
                <p>{item}</p>
              )
              :
              null

            }
      </div>
    )

  }


}


export default SearchForm

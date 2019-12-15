import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'

import Toggle from 'react-bootstrap-toggle';

 class SearchForm extends React.Component {
   constructor() {
     super()

     this.state = {
       keyword : '',
       results: '',
       success : '',
       recursive: false
     }


   }

   handleSwitchChange = () => {

     this.setState({
       recursive: !this.state.recursive
     });
   }

   handleSearchChange = event => {
    this.setState({
      keyword: event.target.value
    });


  }

   formBg = { backgroundColor: '#c6e2ff' };


  render() {

    const handleKeywordClick = event => {

     this.setState({
       keyword: event.target.textContent
     }, () => search());

   }

    const search = () => {

      const queryType = this.state.recursive ? 'deep-dive' : 'normal'



      const headers = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  keyword: this.state.keyword, searchType: queryType })
      }

      console.log("keyword being passed for search: ")
      console.log(this.state.keyword)

      fetch('http://localhost:3000/api/v1/new_search', headers)
        .then(r => r.json())
        .then(response => {

          console.log(response)

          this.setState({
            success: true,
            results: [...this.state.results, ...response.results]

          })
        })
    }

    const handleSearchSubmit = event => {

      event.preventDefault()

      search()


  }

    const divStyle = {
      marginLeft: '20px',
    };

    const toggleStyle = {
      float: 'right',
    };



    return (
      <div className="searchForm">
      <br></br>

      <Form onSubmit={handleSearchSubmit} >
              <FormControl
              style={this.state.recursive ? this.formBg : null}
                placeholder="eg. how to build a deck"
                aria-label="comment..."
                aria-describedby="basic-addon2"
                onChange={this.handleSearchChange}
              />

              <Form>
                <Form.Check
                style={toggleStyle}
                  type="switch"
                  id="custom-switch"
                  onChange={this.handleSwitchChange}
                  label="Deep Dive?"
                />

              </Form>

              <br></br>
                <Button variant="primary" type="submit" size="lg">
                  Search New Suggestions
               </Button>
            </Form>
            <br></br>
            <h6>Results - {this.state.results.length}</h6>
            { this.state.results.length > 0
              ?
              this.state.results.map((item, key) =>
                <p key={key} onClick={handleKeywordClick} align="left">{item}</p>
              )
              :
              null

            }
            <br></br>
            <br></br>
            <br></br>


      </div>
    )

  }


}


export default SearchForm

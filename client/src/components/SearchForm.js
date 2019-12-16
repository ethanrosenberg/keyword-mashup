import React from 'react';

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'

import Toggle from 'react-bootstrap-toggle';
import ReactDOM from 'react-dom';

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

  handleResetClick = event => {

     this.setState({
       results: '',
       keyword: '',
       success: '',
       recursive: false
     });

     ReactDOM.findDOMNode(this.refs.sStrike).value = '';
     ReactDOM.findDOMNode(this.refs.deepswitch).value = ''
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
          const updatedState = [...this.state.results, ...response.results]
          const unique = updatedState.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

          this.setState({
            success: true,
            results: unique

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

    const formInputStyle = {
      backgroundColor: this.state.recursive ? '#c6e2ff' : '#FFFFFF',
      height: '50px',
      fontSize: '20px'

    };

    const submitStyle = {
      backgroundColor: '#000000'
    };

    const resetStyle = {
      marginLeft: '3px',
      backgroundColor: '#2c5887'
    };



    return (
      <div className="searchForm">
      <br></br>

      <Form onSubmit={handleSearchSubmit} >
              <FormControl
              style={formInputStyle}
               ref="sStrike"
                placeholder="eg. how to build a deck"
                aria-label="comment..."
                aria-describedby="basic-addon2"
                onChange={this.handleSearchChange}
              />

              <Form>
                <Form.Check
                style={toggleStyle}
                  type="switch"
                  ref='deepswitch'
                  id="custom-switch"
                  onChange={this.handleSwitchChange}
                  label="Deep Dive?"
                />

              </Form>

              <br></br>
                <Button style={submitStyle} variant="primary" type="submit" size="lg">
                  Search New Suggestions
               </Button>
               <Button onClick={this.handleResetClick} style={resetStyle} variant="primary" type="button" size="lg">
                 Reset
              </Button>
            </Form>
            <br></br>
            <h6 style={ { align: 'left' } }>Results - {this.state.results.length}</h6><br></br>
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

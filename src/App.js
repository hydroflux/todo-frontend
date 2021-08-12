import React, { Component } from 'react'
import './App.css'

const baseURL = 'http://localhost:3000/to_dos'
const parseHTTPResponse = response => response.json()

class App extends Component {
  
  state = {
    to_dos: []
  }

  // Lifecycle Method which runs at the beginning of a components lifecycle and
  // only runs one time
  componentDidMount(){
    this.getToDos()
  }
  
  getToDos = () => {
    fetch( baseURL )
      .then( parseHTTPResponse )
      .then( to_dos => this.setState( to_dos ) )
  }


  render(){
    return (
      <h1>To Do App</h1>
    )
  }
}

export default App;

import React, { Component } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDoContainer from './containers/ToDoContainer'

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
      .then( to_dos => this.setState({ to_dos }) )
  }

  addToDo = ( newToDo ) => {
    this.setState({
      to_dos: [...this.state.to_dos, newToDo]
    })

    fetch( baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( newToDo )
    })
  }

  render(){
    return (
      <div className="App">
        <h1>To Do App</h1>
        <ToDoForm addToDo={this.addToDo}/>
        <ToDoContainer to_dos={this.state.to_dos}/>
      </div>
    )
  }
}

export default App;

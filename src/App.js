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

  updateToDo = (updatedToDo) => {
    let to_dos = this.state.to_dos.map( to_do => to_do.id === updatedToDo.id ? updatedToDo : to_do )
    this.setState({to_dos})
  }

  deleteToDo = ( id ) => {
    const filteredState = this.state.to_dos.filter( to_do => to_do.id !== id )
    this.setState({
      to_dos: filteredState
    })

    fetch( `${baseURL}/${id}`, { method: 'DELETE' })
  }

  render(){
    return (
      <div className="App">
        <h1>To Do App</h1>
        <ToDoForm submitAction={this.addToDo}/>
        <ToDoContainer to_dos={this.state.to_dos} submitAction={this.updateToDo} deleteToDo={this.deleteToDo}/>
      </div>
    )
  }
}

export default App;

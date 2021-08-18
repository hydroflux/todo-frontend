import React, { Component } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDoContainer from './containers/ToDoContainer'
import { baseURL, deleteToDo, patchToDo, postToDo } from './helpers'

const parseHTTPResponse = response => response.json()

class App extends Component {
  
  state = {
    to_dos: []
  }


  getToDos(){
    fetch( baseURL )
      .then( parseHTTPResponse )
      .then( to_dos => this.setState({ to_dos }) )
  }

  // Lifecycle Method which runs at the beginning of a components lifecycle and
  // only runs one time
  componentDidMount(){
    this.getToDos()
  }

  addToDo = ( newToDo ) => {
    this.setState({ to_dos: [...this.state.to_dos, newToDo] })
    postToDo(newToDo)
  }

  updateToDo = (updatedToDo) => {
    let to_dos = this.state.to_dos.map( to_do => to_do.id === updatedToDo.id ? updatedToDo : to_do )
    this.setState({to_dos})
    patchToDo(updatedToDo)
  }

  removeToDo = ( id ) => {
    const filteredState = this.state.to_dos.filter( to_do => to_do.id !== id )
    this.setState({ to_dos: filteredState })
    deleteToDo(id)
  }

  render(){
    return (
      <div className="App">
        <h1>To Do App</h1>
        <ToDoForm submitAction={this.addToDo}/>
        <ToDoContainer to_dos={this.state.to_dos} submitAction={this.updateToDo} removeToDo={this.removeToDo}/>
      </div>
    )
  }
}

export default App;

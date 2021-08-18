import React, { Component } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import SignUpForm from './components/SignUpForm'
import ToDoContainer from './containers/ToDoContainer'
import { baseURL, deleteToDo, patchToDo, postToDo } from './helpers'
import { Switch, Route } from 'react-router-dom'

const parseHTTPResponse = response => response.json()

class App extends Component {
  
  state = {
    to_dos: [],
    user: {},
    alerts: [] // Could be good or bad alerts (not necessarily errors)
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

  signUp = user => {
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    })
    .then( parseHTTPResponse )
    .then( response => {
      if ( response.errors ){
        this.setState({ alerts: response.errors })
      } else {
        localStorage.setItem('token', response.token)
        this.setState({
          user: response.user,
          alerts: ["User successfully created!"] // Change the error state in case previous alerts are set in state
      })}
    })
  }

  render(){
    return (
      <div className="App">
        <h1>To Do App</h1>
        <Switch>
          <Route path="/signup" render={ routerProps => <SignUpForm signUp={this.signUp} alerts={this.state.alerts}/> }/>
          <Route render={ routerProps => <ToDoForm submitAction={this.addToDo}/>}></Route>
          <ToDoContainer to_dos={this.state.to_dos} submitAction={this.updateToDo} removeToDo={this.removeToDo}/>
        </Switch>
      </div>
    )
  }
}

export default App;

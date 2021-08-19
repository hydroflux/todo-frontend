import React, { Component } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import { deleteToDo, patchToDo, postToDo } from './helpers'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

const parseHTTPResponse = response => response.json()

class App extends Component {
  
  state = {
    to_dos: [],
    user: {},
    alerts: [], // Could be good or bad alerts (not necessarily errors)
    loggedIn: false
  }

  componentDidMount = () => {
    this.authorize_user()
  }

  authorize_user = () => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then( parseHTTPResponse )
    .then( response => {
      this.setState({
        user: response.user,
        to_dos: response.to_dos
      })

      if (this.state.user) this.setState({ loggedIn: true })
    })
  }

  addToDo = ( newToDo ) => {
    this.setState({ to_dos: [...this.state.to_dos, newToDo] })
    postToDo(newToDo, this.state.user)
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

  loginUser = ({username, password}) => {
    return fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then( parseHTTPResponse )
    .then( response => {
      if ( response.errors ){
        this.setState({ alerts: [response.errors] })
      } else {
        console.log("there")
        localStorage.setItem('token', response.token)
        this.setState({
          user: response.user,
          alerts: ["Login successful!"],
          to_dos: response.to_dos
      })}

      if (this.state.user) this.setState({ loggedIn: true })
    })
  }

  signUp = user => {
    return fetch(`http://localhost:3000/users`, {
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
        console.log("here")
        localStorage.setItem('token', response.token)
        this.setState({
          user: response.user,
          alerts: ["User successfully created!"], // Change the error state in case previous alerts are set in state
          to_dos: response.to_dos
      })}

      if (this.state.user) this.setState({ loggedIn: true })
    })
  }

  logoutUser = () => {
    localStorage.removeItem('token')
    this.setState({ 
      loggedIn: false,
      to_dos: [],
      alerts: [],
      user: {}
    })
  }

  render(){
    return (
      <div className="App">
        <header>
            {this.state.user
            ? (
                <>
                  <p>Welcome back {this.state.user.username}</p>
                  <nav>
                    <Link to="/signup" onClick={this.logoutUser}>Logout</Link>
                  </nav>
                </>
              )
            : null }
        </header>
        <h1>To Do App</h1>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            addToDo={this.addToDo}
            to_dos={this.state.to_dos}
            updateToDo={this.updateToDo}
            removeToDo={this.removeToDo}
          />
          <Route path="/signup" render={ routerProps => {
            return (
              <SignUpForm
                signUp={this.signUp}
                alerts={this.state.alerts}
                {...routerProps}
              />
            )}
          }/>
          <Route path="/login" render={ routerProps => {
            return (
              <LoginForm
                loginUser={this.loginUser}
                alerts={this.state.alerts}
                {...routerProps}
              />
            )}
          }/>
          <Redirect to="/" /> 
        </Switch>
      </div>
    )
  }
}

export default App;
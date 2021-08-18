import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Home from './Home'

export default function PrivateRoute(props) {
    return localStorage.token
        ? <Route render={ () => <Home /> }/>
        : <Redirect to="/signup" />
}

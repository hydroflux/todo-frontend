import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ path, component: Component, ...props }) {
    console.log(props)
    return localStorage.token
        ? <Route exact path={path} render={ (routerProps) => <Component {...props}/> }/>
        : <Redirect to="/signup" />
}

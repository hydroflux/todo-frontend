import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ path, component: Component}) {
    return localStorage.token
        ? <Route exact path={path} render={ (routerProps) => <Component /> }/>
        : <Redirect to="/signup" />
}

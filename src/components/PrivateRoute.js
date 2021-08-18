import React from 'react'
import { Route } from 'react-router-dom'

export default function PrivateRoute(props) {
    return localStorage.token
        ? <Route render={ () => (
            <>
                <ToDoForm submitAction={this.addToDo}/>
                <ToDoContainer to_dos={this.state.to_dos} submitAction={this.updateToDo} removeToDo={this.removeToDo}/>
            </>
        )}/>
}

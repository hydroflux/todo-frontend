import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoContainer from '../containers/ToDoContainer'

export default function Home(props) {
    return (
        <>
            <ToDoForm
                submitAction={props.addToDo}
            />
            <ToDoContainer 
                to_dos={props.to_dos}
                submitAction={props.updateToDo}
                removeToDo={props.removeToDo}
            />
        </>
    )
}

import React from 'react'
import ToDoItem from '../components/ToDoItem'

export default function ToDoContainer({ to_dos, submitAction, deleteToDo }){

    const showToDos = () => {
        return to_dos.map( to_do => <ToDoItem key={to_do.id} to_do={to_do} submitAction={submitAction} deleteToDo={deleteToDo}/> )
    }

    return (
        <ul className="to-do-list">
            { showToDos() }
        </ul>
    )
}
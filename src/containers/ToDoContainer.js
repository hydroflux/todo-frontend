import React from 'react'
import ToDoItem from '../components/ToDoItem'

export default function ToDoContainer({ to_dos, deleteToDo }){

    const showToDos = () => {
        return to_dos.map( to_do => <ToDoItem key={to_do.id} {...to_do} deleteToDo={deleteToDo}/> )
    }

    return (
        <ul className="to-do-list">
            { showToDos() }
        </ul>
    )
}
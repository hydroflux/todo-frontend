import React from 'react'
import ToDoItem from '../components/ToDoItem'

export default function ToDoContainer({ to_dos }){

    const showToDos = () => {
        return to_dos.map( to_do => <ToDoItem key={to_do.id} {...to_do}/> )
    }

    return (
        <ul>
            { showToDos() }
        </ul>
    )
}
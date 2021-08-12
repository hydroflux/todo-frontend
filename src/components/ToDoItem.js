import React from 'react'

export default function ToDoItem({ id, title, content, deleteToDo }){

    const handleClick = event => deleteToDo(id)

    return (
        <li className="to-do-item">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button className="delete-button" onClick={handleClick}>
            DELETE
            </button>
        </li>
    )
}
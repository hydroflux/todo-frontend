import React, { useState } from 'react'
import ToDoForm from './ToDoForm'

export default function ToDoItem({ id, title, content, deleteToDo }){

    const [ isToggled, setIsToggled] = useState(false)
    const handleClick = event => deleteToDo(id)
    const handleToggle = () => setIsToggled( !isToggled )

    const toDoCard = () => (
        <li className="to-do-item">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button className="delete-button" onClick={handleClick}>DELETE</button>
            <button className="edit-button" onClick={handleToggle}>EDIT</button>
        </li>
    )

    return isToggled ? <ToDoForm /> : toDoCard()
}
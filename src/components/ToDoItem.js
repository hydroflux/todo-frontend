import React from 'react'

export default function ToDoItem({ title, content }){

    return (
        <li className="to-do-item">
            <h2>{title}</h2>
            <h3>{content}</h3>
        </li>
    )
}
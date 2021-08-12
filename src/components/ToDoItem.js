import React from 'react'

export default function ToDoItem({ title, content }){

    return (
        <li>
            <h2>{title}</h2>
            <h3>{content}</h3>
        </li>
    )
}
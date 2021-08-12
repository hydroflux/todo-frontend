import React, { Component } from 'react'

export default class ToDoForm extends Component {
    render() {
        return (
            <form>
                <h2>Create A New To Do Item</h2>
                <label>Title</label>
                <input type="text" name="title"/>
                <label>Content</label>
                <input type="text" name="text"/>
                <label>Urgent</label>
                <input type="checkbox" name="urgent"/>
                <input type="submit" />
            </form>
        )
    }
}

// Using a class component because controlled forms get their inputs from state
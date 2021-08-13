import React, { Component } from 'react'

const initialState = {
    title: "",
    content: "",
    urgent: false,
    done: false
}

export default class ToDoForm extends Component {

    state = initialState

    handleChange = event => {
        let { name, value, checked } = event.target

        value = ( name === "urgent" || "done" ) ? checked : value
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToDo( this.state )
    }

    render() {
        const { title, content, urgent, done } = this.state

        return (
            <form className="to-do-form" onSubmit={this.handleSubmit}>
                {this.props.to_do ? <h2>Edit To Do</h2> : <h2>Create A New To Do Item</h2>}
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange}/>
                <label>Content</label>
                <input type="text" name="content" value={content} onChange={this.handleChange}/>
                <div className="input-group">
                    <label>Urgent</label>
                    <input type="checkbox" name="urgent" checked={urgent} onChange={this.handleChange}/>
                </div>
                {this.props.to_do
                ? (
                    <div className="input-group">
                        <label>Completed</label>
                        <input type="checkbox" name="done" checked={done} onChange={this.handleChange}/>
                    </div>
                ) : null
                }
                <input type="submit" />
            </form>
        )
    }
}
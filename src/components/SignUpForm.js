import React, { useState } from 'react'

export default function SignUpForm({ alerts, signUp }) {
    
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        let user = {
            username,
            password
        }
        signUp(user)
    }

    const handleChange = ({ target }) => {
        target.name === "username"
            ? setUsername(target.value)
            : setPassword(target.value)
    }

    const showAlerts = () => alerts.map( alert => <p>{alert}</p> )

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={username} 
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <input type="submit"/>
            { alerts ? showAlerts() : null }
        </form>
    )
}

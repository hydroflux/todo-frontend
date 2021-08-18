import React, { useState } from 'react'

export default function SignUpForm({ signUp }) {
    
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

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={username} 
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    )
}

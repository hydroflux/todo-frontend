import React { useState } from 'react'

export default function SignUpForm(props) {
    
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleChange = ({ target }) => {
        target.name === "username"
            ? setUsername(target.value)
            : setPassword(target.value)
    }

    return (
        <form className="signup-form">
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
            <input type="submit" />
        </form>
    )
}

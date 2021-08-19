import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUpForm({ alerts, history, loginUser }) {
    
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        let user = {
            username,
            password
        }
        
        loginUser(user)
            .then( () => history.push('/'))
    }

    const handleChange = ({ target }) => {
        target.name === "username"
            ? setUsername(target.value)
            : setPassword(target.value)
    }

    const showAlerts = () => alerts.map( alert => <p key={alerts.indexOf(alert)} >{alert}</p> )

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Log In</h1>
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
            <p>Not A Member?
                <Link to={"/signup"}>Sign Up</Link>
            </p>
            { alerts ? showAlerts() : null }
        </form>
    )
}

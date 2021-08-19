import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUpForm({ alerts, signUp, history }) {
    
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    useEffect( () => {
        localStorage.removeItem('token')
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        let user = {
            username,
            password
        }
        
        signUp(user)
            .then( () => history.push('/') )
    }

    const handleChange = ({ target }) => {
        target.name === "username"
            ? setUsername(target.value)
            : setPassword(target.value)
    }

    const showAlerts = () => alerts.map( alert => <p key={alerts.indexOf(alert)} >{alert}</p> )

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
            <p>Already a member?
                <Link to="/login">Log In</Link>
            </p>
            { alerts ? showAlerts() : null }
        </form>
    )
}

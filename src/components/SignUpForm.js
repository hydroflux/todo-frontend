import React, { useState } from 'react'

export default function SignUpForm({ alerts, signUp, history, loginUser }) {
    
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ login, setLogin ] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        let user = {
            username,
            password
        }

        login
        ? loginUser(user)
            .then( history.push('/'))
        : signUp(user)
            .then( history.push('/') )
    }

    const handleChange = ({ target }) => {
        target.name === "username"
            ? setUsername(target.value)
            : setPassword(target.value)
    }

    const handleLoginForm = event => {
        event.preventDefault()
        setLogin(!login)
    }

    const showAlerts = () => alerts.map( alert => <p>{alert}</p> )

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            { login ? <h1>Log In</h1> : <h1>Sign Up</h1> }
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
            { login 
                ? (
                    <p>Not A Member?
                        <button onClick={handleLoginForm}>Sign Up</button>
                    </p>
                ) : (
                    <p>Already a member?
                        <button onClick={handleLoginForm}>Log In</button>
                    </p>
                )
            }
            { alerts ? showAlerts() : null }
        </form>
    )
}

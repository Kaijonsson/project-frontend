import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"

function Register() {
    const navigate = useNavigate()
    const [password, setPassword] = useState(String)
    const [repeatPsw, setRepeatPsw] = useState(String)
    const [username, setUsername] = useState(String)
    const [errorMessage, setErrorMessage] = useState(String || null)

    const onRegister = async ()=> {

        if(password !== repeatPsw){
            setErrorMessage("Passwords do not match")
        }
        const response =  await fetch("http://localhost:3015/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({username: username, password: password})
        })
        const data = await response.json()
        if(data.status === "400"){
            setErrorMessage(data.message)
        }
        if(data.status === "200"){
            localStorage.setItem(data.user.username, data.user.token)

        }else {
            setErrorMessage("Something is terribly wrong!")
        }
        
    }


    return (
        <form id="registerForm" >
        <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <p style={{color: "red", textDecoration: "underline"}}>{errorMessage}</p>
            <label id="username"><b>Username</b></label>
            <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter username" name="email" id="email" required />

            <label id="psw"><b>Password</b></label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label id="psw-repeat"><b>Repeat Password</b></label>
            <input onChange={(e)=> setRepeatPsw(e.target.value)} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />

            <button type="button" className="registerbtn" onClick={()=> onRegister()}>Register</button>
        </div>

        <div className="container signin">
            <p>Already have an account? <Link to="/Login">Sign in</Link>.</p>
        </div>
        </form>
    )
}

export default Register
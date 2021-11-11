import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../store/Store'
import "./Login.css"

function Login() {
const navigate = useNavigate()    
const {dispatch} = useContext(Context)
const [password, setPassword] = useState(String)
const [username, setUsername] = useState(String)
const [errorMessage, setErrorMessage] = useState(String || null)

const Login = async (event: React.SyntheticEvent) =>{
    event.preventDefault() //prevent reload when event is activated.
    if(!password || !username){
        setErrorMessage("Can't submit empty fields") //input-check.
        return
    }
    const response = await fetch("https://api.axeljonsson.tech/Login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({username: username, password: password})
    })
    const data = await response.json()

    if(data.status === "400"){
        setErrorMessage(data.message) //error handling.
    }else {
        sessionStorage.setItem("token", data.user.token) //set token in sessionstorage
        dispatch({type: "ADD_INFO", payload: { //set userinfo in global-state.
            username: data.user.username,
            token: data.user.token,
        }})
        navigate("/") //navigate to home-component.
    }

}

    return (
        <div>
        <form onSubmit={Login}>
        <div className="container">
        <h1>Login</h1>
        <p style={{color: "red", textDecoration: "underline"}}>{errorMessage}</p>
        <label id="username"><b>Username</b></label>
        <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter username" name="email" id="email" />

        <label id="psw"><b>Password</b></label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" id="psw"/>

        <button type="submit" className="registerbtn">Login</button>
    </div>
        </form>
        </div>
    )
}

export default Login

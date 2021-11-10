import React, {useContext} from 'react'
import { Context } from '../store/Store'
import { useNavigate } from 'react-router-dom'

import "./Logout.css"
function Logout() {
    const {dispatch} = useContext(Context)
    const navigate = useNavigate()

    const Logout = () => {
        console.log("hej")
        dispatch({type: "RESET_STORE", payload: {
            username: "",
            token: "",
            isLoggedIn: false
        }})
        sessionStorage.clear()
        navigate("/Login")
    }
    return (
        <div>
            <button type="button" onClick={()=> Logout()} id="logOutButton">Log Out</button>
        </div>
    )
}

export default Logout

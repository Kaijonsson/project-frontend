import React, {useContext} from 'react'
import { Context } from '../store/Store'
import { useNavigate } from 'react-router-dom'

import "./Logout.css"
function Logout() {
    const navigate = useNavigate()

    const Logout = () => {
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

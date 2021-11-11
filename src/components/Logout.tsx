import { useNavigate } from 'react-router-dom'

import "./Logout.css"

/*
A Component that handles logging out.
*/
function Logout() {
    const navigate = useNavigate() 

    const Logout = () => {
        sessionStorage.clear() //remove userinfo from sessionstorage
        navigate("/Login") //Navigate out of userarea
    }
    return (
        <div>
            <button type="button" onClick={()=> Logout()} id="logOutButton">Log Out</button>
        </div>
    )
}

export default Logout

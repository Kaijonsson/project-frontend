import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/Logout';
// import Logout from '../components/Logout';
import {Context} from "../store/Store"

function Home() {
    const {state} = useContext(Context)

    const navigate = useNavigate();

    useEffect(() => {
        if(state.isLoggedIn !== true){
            navigate("/Login")
        }
        fetch("http://localhost:3015/authorized/api/all_users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded'
                // "x-access-token": state.token
              },
              body: JSON.stringify({token: state.token})
        }).then((response)=> response.json().then((data)=>console.log(data)))

    }, [state.isLoggedIn])

    return (
        <div>
            {state.isLoggedIn && <Logout/>}
        </div>
    )
}

export default Home
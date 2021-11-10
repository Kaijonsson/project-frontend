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
    }, [state.isLoggedIn])

    return (
        <div>
            {state.isLoggedIn && <Logout/>}
        </div>
    )
}

export default Home
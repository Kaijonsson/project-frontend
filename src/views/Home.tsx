import React, {useEffect, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/Logout';
// import Logout from '../components/Logout';
import {Context} from "../store/Store"

interface APIObject{
    _id: string,
    id: string,
    name: string,
    username: string,
    email: string,
}

function Home() {
    const {state} = useContext(Context)
    const [data, setData] = useState<Array<APIObject>>([]) || undefined

    const navigate = useNavigate();

    useEffect(() => {
        if(state.isLoggedIn !== true){
            navigate("/Login")
        }
        (async()=> {
    
            const response = await fetch("https://api.axeljonsson.tech/authorized/api/all_users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    // "x-access-token": state.token
                  },
                  body: JSON.stringify({token: state.token})
            })
            setData(await response.json())
        })()

    }, [state.isLoggedIn])
   
        return (
            <div>
                {state.isLoggedIn && <Logout/>}
                {console.log(data)}
            </div>
        )

}

export default Home
import React, {useContext} from 'react'
import { Context } from '../store/Store'

function Login() {    
const {state, dispatch} = useContext(Context)
console.log(state)
    return (
        <div>
            <p>{state.isLoggedIn}</p>
            <p>{state.username}</p>
            <p>{state.token}</p>
        </div>
    )
}

export default Login

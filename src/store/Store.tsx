import React, {createContext, useReducer} from 'react'
import reducer from '../reducer/reducer'
import {initialState, action} from "../types"

interface childrenProp{
    children: React.ReactNode
}

        const initState = {
            username: "",
            token: sessionStorage.getItem("token") || "",
        }
        
        export const Context = createContext<{
            state: initialState,
            dispatch: React.Dispatch<action>;
        }>({
            state: initState,
            dispatch: () => null
        })



function Store({children}: childrenProp) {
    const [state, dispatch] = useReducer(reducer, initState)
    console.log("storeToken: ", state.token)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
        )
}

export default Store

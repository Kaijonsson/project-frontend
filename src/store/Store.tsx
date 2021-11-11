import React, {createContext, useReducer} from 'react'
import reducer from '../reducer/reducer'
import {initialState, action} from "../types"

interface childrenProp{
    children: React.ReactNode  //Type that specifies react child-components.
}

        const initState = {
            username: "",
            token: sessionStorage.getItem("token") || "", //fetches sessionstorage as a part of initial state in reducer.
        } 
        
        export const Context = createContext<{ //creating context for global state in the react-app.
            state: initialState,
            dispatch: React.Dispatch<action>; 
        }>({
            //Initial state of context.
            state: initState,
            dispatch: () => null 
        })



function Store({children}: childrenProp) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
        )
}

export default Store

import React, {createContext, useReducer} from 'react'
import reducer from '../reducer/reducer'
import {initialState, action} from "../types"

interface childrenProp{
    children: React.ReactNode
}
// export const Context = createContext<Array<React.Dispatch<action>|initialState>>([])
// const AppContext = createContext<{
    //     state: InitialStateType;
    //     dispatch: React.Dispatch<any>;
    //   }>({
        //     state: initialState,
        //     dispatch: () => null
        //   });
        const initState = {
            username: "",
            token: "",
            isLoggedIn: false
        }
        
        export const Context = createContext<{
            state: initialState,
            dispatch: React.Dispatch<action>;
        }>({
            state: initState,
            dispatch: () => null
        })


// const Context = createContext<initialState>(initState)

function Store({children}: childrenProp) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
        )
}

export default Store

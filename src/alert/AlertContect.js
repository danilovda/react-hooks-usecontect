import React, { useContext,  useReducer } from 'react'

const AlertContect =React.createContext()

export const useAlert =() =>{
    return useContext(AlertContect)
}

//const
const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

//reducer
const reduser =(state, action) => {
    switch(action.type){
        case SHOW_ALERT: return {...state, visible: !state.visible, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({children})=>{   

    const [state, dispatch] =  useReducer(reduser, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({type: SHOW_ALERT, text})
    const hide = () => dispatch({type: HIDE_ALERT})

    return(
        <AlertContect.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
            {children}
        </AlertContect.Provider>
    )
}
import React from 'react'
import { useAlert } from './alert/AlertContect'

export default function Main(){
    const {show} = useAlert()

    //<h1>Привет в примере с Context</h1>
    return(
        <>  
            <button onClick={()=>show('Этот текст из Main.js')} className='btn btn-success'>Показать alert</button>
        </>
    )
}
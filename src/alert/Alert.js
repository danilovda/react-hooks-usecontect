import React from 'react'
import { useAlert } from './AlertContect'

export default function Alert() {
    const alert = useAlert()

    if(!alert.visible) return null

    return (
        <div className='pt-3'>
            <div className={'alert alert-danger'} onClick={alert.hide}>
                {alert.text}
            </div>
        </div>
    )
}
import React from 'react'
import './Button.css'

export const Button = ({children, onClick}) => {
    return (
        <button className="add--button " onClick={onClick}>
            {children}
        </button>
    )
}

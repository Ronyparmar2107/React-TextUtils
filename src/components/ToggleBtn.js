import React from 'react'
import './ToggleBtn.css'

export default function toggleBtn(props) {
    return (
        <div>
            <label className="switch">
            <input onClick={props.toggleMode} type="checkbox"/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}

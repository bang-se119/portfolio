import React from 'react'
import "./NavigatorBar.css"

const NavigatorBar = () => {
    return (
        <div className='navigator-bar-container'>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavigatorBar
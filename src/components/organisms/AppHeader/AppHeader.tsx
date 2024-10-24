import React from 'react'
import "./AppHeader.css"
import NavigatorBar from '../../molecules/NavigatorBar/NavigatorBar'

const AppHeader = () => {
    return (
        <div className='app-header-container animate__animated animate__fadeInDown'>
            <div className='title'>
                Portfolio Profile
            </div>
            <NavigatorBar />
        </div>
    )
}

export default AppHeader

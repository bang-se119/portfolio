import React from 'react'
import "./AppHeader.css"
import NavigatorBar from '../../molecules/NavigatorBar/NavigatorBar'

const AppHeader = () => {
    return (
        <div className='app-header-container'>
            <div className='title'>
                Portfolio Profile
            </div>
            <NavigatorBar />
        </div>
    )
}

export default AppHeader

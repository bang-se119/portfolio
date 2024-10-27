import React from 'react'
import "./PopupStartGame.css"
import TextBold from '@components/atoms/TextBold/TextBold'

const PopupStartGame = () => {
    return (
        <div className='popup-start-game-container'>
            <div className='overlay-wrapper'>
                <a className='option'>
                    <img alt='pointer-opt1' src='/portfolio/images/pointer.png' />
                    <TextBold size={17}>START GAME</TextBold>
                </a>
                <a className='option'>
                    <img alt='pointer-opt2' src='/portfolio/images/pointer.png' />
                    <TextBold size={17}>HOW TO PLAY</TextBold>
                </a >
                <a className='option'>
                    <img alt='pointer-opt3' src='/portfolio/images/pointer.png' />
                    <TextBold size={17}>SETTINGS</TextBold>
                </a>
                <a href='#experience' className='option'>
                    <img alt='pointer-opt4' src='/portfolio/images/pointer.png' />
                    <TextBold size={17}>QUIT</TextBold>
                </a>
            </div>
        </div>
    )
}

export default PopupStartGame
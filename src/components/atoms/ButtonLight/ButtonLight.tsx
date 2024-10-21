import React from 'react'
import "./ButtonLight.css"
import TextNormal from '../TextNormal/TextNormal'

interface ButtonLightProsp {
    children?: React.ReactNode
}

const ButtonLight = (props: ButtonLightProsp) => {
    const { children } = props
    return (
        <button className='button-light-container'>
            <TextNormal size={18} color={"white"}>{children}</TextNormal>
        </button>
    )
}

export default ButtonLight
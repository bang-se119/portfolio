import React from 'react'
import "./TextNormal.css"

interface TextNormalProps {
    children?: React.ReactNode;
    className?: string;
    size?: number;
    color?: string;
}

const TextNormal = (props: TextNormalProps) => {
    const { children, className, size = 30, color } = props
    return (
        <div className="text-normal-container">
            <p style={{fontSize: size, color}} className={`text ${className}`}>{children}</p>
        </div>
    )
}

export default TextNormal
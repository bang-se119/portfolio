import React from 'react'
import "./TextBold.css"

interface TextBoldProps {
    children?: React.ReactNode;
    className?: string;
    size?: number;
    color?: string;
}

const TextBold = (props: TextBoldProps) => {
    const { children, className, size, color } = props
    return (
        <div className="text-bold-container">
            <p style={{fontSize: size, color}} className={`text ${className}`}>{children}</p>
        </div>
    )
}

export default TextBold
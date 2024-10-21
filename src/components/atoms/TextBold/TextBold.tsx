import React from 'react'
import "./TextBold.css"

interface TextBoldProps {
    children?: React.ReactNode;
    className?: string;
}

const TextBold = (props: TextBoldProps) => {
    const { children, className } = props
    return (
        <div className="text-bold-container">
            <p className={`text ${className}`}>{children}</p>
        </div>
    )
}

export default TextBold
import React from 'react'
import "./TextTyping.css"

interface TextTypingProps {
    children?: React.ReactNode;
    className?: string
}

const TextTyping = (props: TextTypingProps) => {
    const { children, className } = props
    return (
        <div className="text-typing-container">
            <p className={`text ${className}`}>
                {children}
            </p>
        </div>
    )
}

export default TextTyping
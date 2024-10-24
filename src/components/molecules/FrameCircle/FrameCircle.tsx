import React from 'react'
import "./FrameCircle.css"

interface FrameCircleProps {
  className?: string;
  src?: string;
}

const FrameCircle = (props: FrameCircleProps) => {
  const { className, src } = props

  return (
    <div className={`frame-circle-container ${className}`}>
      <div className='circle-inside' />
      <div className='frame-image'>
        <img alt='avatar' src={src}/>
      </div>
    </div>
  )
}


export default FrameCircle
import React from 'react'
import "./FrameCircle.css"

interface FrameCircleProps {
  src?: string;
}

const FrameCircle = (props: FrameCircleProps) => {
  const { src } = props

  return (
    <div className='frame-circle-container'>
      <div className='circle-inside' />
      <div className='frame-image'>
        <img alt='avatar' src={src}/>
      </div>
    </div>
  )
}


export default FrameCircle
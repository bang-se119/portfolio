import React from 'react'
import "./CardEducation.css"

interface ICardEducationProps {
  onClose?: () => void
}

const CardEducation = (props: ICardEducationProps) => {
  const { onClose } = props;

  return (
    <div className='card-education-container animate__animated animate__fadeInUp'>
      <div onClick={onClose} className='close-button'>Close</div>
      <div className='title'>
        <div className='school-name'>University of Information Technology (UIT)</div>
        <div className='certification'>The degree of Engineer in Software Engineering</div>
        <div className='period'>2019 - 2023</div>
      </div>
      <div className='content'>
        <div className='item'>
          <img className='icon' alt='graduation' src='public/images/major.gif' />
          <p className='label'>Major: </p>
          <p className='value'>Software Engineering</p>
        </div>
        <div className='item'>
          <img className='icon' alt='graduation' src='public/images/gpa.png' />
          <p className='label'>GPA: </p>
          <p className='value'>3.2/4</p>
        </div>
        <div className='item'>
          <img className='icon' alt='graduation' src='public/images/graduation.gif' />
          <p className='label'>Graduation Year: </p>
          <p className='value'>2023</p>
        </div>
      </div>
    </div>
  )
}

export default CardEducation
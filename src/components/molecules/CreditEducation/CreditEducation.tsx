import { ESchool } from '@components/organisms/Education/Education'
import React from 'react'
import PopupStartGame from '../PopupStartGame/PopupStartGame'
import "./CreditEducation.css"

const CreditEducation = () => {
    const schoolsList = [
        {
            level: ESchool.Kindergarten
        },
        {
            level: ESchool.PrimarySchool
        },
        {
            level: ESchool.SecondarySchool
        },
        {
            level: ESchool.HighSchool
        },
        {
            level: ESchool.University
        }
    ]

    return (
        <div className='credit-education-container'>
            <div className='stone'>
                <img className='stone-s' alt='stone' src='/portfolio/images/stone.png' />
                <img className='stone-m' alt='stone' src='/portfolio/images/stone.png' />
                <img className='stone-l' alt='stone' src='/portfolio/images/stone.png' />
            </div>
            <div className='schools'>
                {
                    schoolsList.map((data) => {
                        return <img
                            id={data.level}
                            className={data.level}
                            alt={data.level}
                            src={`/portfolio/images/${data.level}.png`}
                        />
                    })
                }
            </div>
            <PopupStartGame />
        </div>
    )
}

export default CreditEducation
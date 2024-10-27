import React, { useState } from 'react'
import "./Education.css"
import 'react-vertical-timeline-component/style.min.css';
import CardEducation from '../../molecules/CardEducation/CardEducation';
import PopupStartGame from '@components/molecules/PopupStartGame/PopupStartGame';

enum ESchool {
    Kindergarten = "kindergarten",
    PrimarySchool = "primary-school",
    SecondarySchool = "secondary-school",
    HighSchool = "high-school",
    University = "university"
}

const Education = () => {
    const [selectedSchool, setSelectedSchool] = useState<ESchool>();

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

    const openCardEducation = (select: ESchool) => {
        setSelectedSchool(select)
    }

    const closeCardEducation = () => {
        setSelectedSchool(undefined);
    }

    return (
        <div id="#education" className='education-container'>
            <div className="road"></div>
            <div className="city"></div>
            <div className='schools'>
                {
                    schoolsList.map((data) => {
                        return <img
                            id={data.level}
                            onClick={() => openCardEducation(data.level)}
                            className={`${data.level} ${selectedSchool === data.level && "selected"}`}
                            alt={data.level}
                            src={`/portfolio/images/${data.level}.png`}
                        />
                    })
                }
            </div>
            <div className='car'>
                <div className="chassis">
                    <img alt='chassis' src='/portfolio/images/chassis.png' />
                </div>
                <div className='wheels'>
                    <img className='front-wheel' alt='front-wheel' src='/portfolio/images/wheel.png' />
                    <img className='back-wheel' alt='back-wheel' src='/portfolio/images/wheel.png' />
                </div>
            </div>
            {selectedSchool ? <CardEducation onClose={closeCardEducation} /> : <></>}
            <PopupStartGame />
        </div>
    )
}

export default Education
import React from 'react'
import "./LandingPage.css"
import About from '../About/About'
import Education from '../Education/Education'

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <section className='section part-about'>
                <About />
            </section>
            <section className='section part-education'>
                <Education />
            </section>
        </div>
    )
}

export default LandingPage
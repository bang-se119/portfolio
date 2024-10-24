import React from 'react'
import "./LandingPage.css"
import About from '../About/About'
import Education from '../Education/Education'
import 'animate.css';
import Experience from '../Experience/Experience';

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <section id='about' className='section part-about'>
                <About />
            </section>
            <section id='education' className='section part-education'>
                <Education />
            </section>
            <section id='experience' className='section part-experience'>
                <Experience />
            </section>
        </div>
    )
}

export default LandingPage
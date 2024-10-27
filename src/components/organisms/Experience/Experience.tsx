import React from 'react'
import './Experience.css';
import pkg, { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const { VerticalTimelineElement } = pkg;

const Experience = () => {
    return (
        <div id="#experience" className='experience-container'>
            <div className='timeline-wrapper'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - present"
                        iconStyle={{ background: 'hsla(193, 100%, 84%, 1)', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                        icon={<img style={{ width: 50 }} alt='work-1' src='/portfolio/images/work.gif' />}
                    >
                        <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">224A, Dien Bien Phu S.t</h4>
                        <p>
                            Frontend, Backend, Server, Testing, Business Analysis, Task Management, Resolve Problem, Present Ideas
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'HSLA(144,100%,77%,1)', color: '#fff',display: "flex", justifyContent: "center", alignItems: "center" }}
                        icon={<img style={{ width: 50 }} alt='work-1' src='/portfolio/images/star.gif' />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience
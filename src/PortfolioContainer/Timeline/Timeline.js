import React from 'react';
import './Timeline.css'

export default function Timeline() {
  return (
    <>
    <div className='timeline container-fluid' id='timeline'>
    <div className='timeline-Box container'>
        <h2 className='timeline-header text-center'>My Timeline</h2>
        <div className='row'>
        <div className='col-md-6'>
            <h6> <i className="fa-solid fa-briefcase timeline-icon"></i><span className='timeline-period'>2022-PRESENT</span></h6>
                <h5 className='timeline-position'>Freelance Web Developer</h5>
                <p className='timeline-para'>I’m developing an ecommerce web application with ReactJS and ExpressJS. And I developed some 
                    projects with HTML, CSS, BootStrap, JS, ReactJS, NodeJS and MongoDB.</p>
            </div>
            <div className='col-md-6'>
            <h6> <i className="fa-solid fa-briefcase timeline-icon"></i> <span className='timeline-period'>2019 - 2021</span></h6>
                <h5 className='timeline-position'>Associate Network Engineer <span className='timeline-period'>-Frontiir Co,Ltd</span></h5>
                <p className='timeline-para'>3.1 years experience as Associate Network Engineer (CPE installation Engineer, MS Team
                    CPE Management Team and NOC-SbS-Level2. </p>
            </div>
            <div className='col-md-6'>
            <h6> <i className="fa-solid fa-briefcase timeline-icon"></i> <span className='timeline-period'>2018/04 - 2018/08</span> </h6>
                <h5 className='timeline-position'>Telecom Engineer <span className='timeline-period'>-ZTE Myanmar Co,Ltd</span></h5>
                <p className='timeline-para'>Three months of Internship training as site enginner.</p>
            </div>
        </div>
       
    </div>
    </div>
    </>
  )
}

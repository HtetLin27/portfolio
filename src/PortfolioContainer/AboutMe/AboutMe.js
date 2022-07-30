import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <>
    <div className='aboutme'>
    <h2 className='text-center about-title'>About Me</h2>
    <div className='container about-box'>
    <div className='row'>
            <div className='col-md-6  col-sm-12'> 
            <p className='about-text-box'>I’m preparing to get a software developer job. In reviewing my professional history, you will find that I worked as an Associate Network Engineer about 3years. I want to change my career because I love learning new things and new tech. I am confident that my ability to work as a junior developer. Currently, I’m developing an ecommerce web application with ReactJS and ExpressJS. And I developed some mini projects with JS. I am able to work under pressure. I’m very eager for this opportunity and please kindly be concerned with me.</p>
            <div className='text-center'>
              <a href='https://drive.google.com/file/d/1oZYmv2Jq8qBERCdauKyIKdkU_kV8qb9M/view' target='_blank' className='cvdownload'>
                <i className="fa-solid fa-download "></i> Download CV
              </a>
            </div>
            </div>
            <div className='col-md-6 col-sm-12'><img className='profile-img' src='/assets/image/profile.jpg'/></div>
        </div>
        
        
    </div>
    </div>
    </>
  )
}

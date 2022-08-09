import React from 'react';
import Typical from 'react-typical';

import './Profile.css'

export default function Profile() {
  return (<>
    <div className='profile-container container-fluid  text-center ' id='home'>
        <div className='profile-parent text-center '>
            <div className='profile-details'>
                <div className='colz'>
                    <a className='mr-2' href='https://www.facebook.com/htetlin.ko.7'  target='_blank'>
                    <i className="fa-brands fa-square-facebook "></i>
                    </a>
                    <a className='mr-2' href='https://www.linkedin.com/in/htet-lynn-ko-411b02204'  target='_blank'>
                    <i className="fa-brands fa-linkedin "></i>
                    </a>
                    <a className='mr-2' href='https://github.com/HtetLin27'  target='_blank'>
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a className='mr-2' href='https://join.skype.com/invite/ujSEc9HYTnHR'  target='_blank'>
                    <i className="fa-brands fa-skype "></i>
                    </a>
                    <a className='mr-2' href='https://t.me/HtetLynnKo' target='_blank'>
                    <i className="fa-brands fa-telegram"></i>
                    </a>
                </div>
            
            <div className='profile-details-name'>
              <span className='primary-text'>
                {" "} Hello, I'm <span className='highlighted-text'>Htet Lynn Ko</span>
              </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                {" "}
                <h3>
                  <Typical className='typical-text'
                  loop={Infinity}
                  steps={[
                    "Web Developer",
                    1000,
                    "ReactJS Developer",
                    1000,
                    "MERN Stack Developer",
                    1000
                  ]}
                  />
                </h3>
                <div className='profile-role-tagline '>
                  <div>I love building websites</div>
                  <div> with front and back end operations.</div>
                </div>
              </span>
            </div>
            </div>
        </div>
        <div className='text-center'>
        <a href='https://drive.google.com/file/d/1oZYmv2Jq8qBERCdauKyIKdkU_kV8qb9M/view' target='_blank' className='cvdownload'>
        <i className="fa-solid fa-download "></i> Download CV
        </a>
        </div>
    </div>
    
    </>
  )
}

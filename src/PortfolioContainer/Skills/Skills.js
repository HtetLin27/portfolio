import React from 'react';
import './Skill.css';
export default function Skills() {
  return (
    <>
    <div className='skills' id='skills'>
    <div className='container skill-box'>
        <h2 className='skill-title text-center'>Skills And Education</h2>
        <div className='row edu-row'>
            <div className='col-md-6 edu-list'>
            Bachelor of Engineering Electronic and Communication
            </div>
            <div className='col-md-6 edu-list'>
            2012-2018
            </div>
            <div className='col-md-6 edu-list'>
            CCNA(Certified)
            </div>
            <div className='col-md-6 edu-list'>
            2020-2021
            </div>
        </div>
        <div className='row row-box'>
            <div className='col-md-6'>
                <div className='progress-title'>
                    <h4>HTML</h4>
                    <div className='progress '>
                        <div className='progress-bar html-bar '>
                        </div>
                    </div>
                </div>
                <div className='progress-title'>
                    <h4>CSS</h4>
                    <div className='progress '>
                        <div className='progress-bar css-bar '>
                        </div>
                    </div>
                </div>
                <div className='progress-title'>
                    <h4>Bootstrap</h4>
                    <div className='progress '>
                        <div className='progress-bar bootstrap-bar '>
                        </div>
                    </div>
                </div>
                <div className='progress-title'>
                    <h4>MongoDB</h4>
                    <div className='progress '>
                        <div className='progress-bar mongo-bar '>
                        </div>
                    </div>
            </div>
            </div>
            <div className='col-md-6'>
            <div className='progress-title'>
                    <h4>JavaScript</h4>
                    <div className='progress '>
                        <div className='progress-bar js-bar '>
                        </div>
                    </div>
            </div>
            <div className='progress-title'>
                    <h4>ReactJs</h4>
                    <div className='progress '>
                        <div className='progress-bar react-bar '>
                        </div>
                    </div>
            </div>
            <div className='progress-title'>
                    <h4>NodeJs</h4>
                    <div className='progress '>
                        <div className='progress-bar node-bar '>
                        </div>
                    </div>
            </div>
            <div className='progress-title'>
                    <h4>JQuery</h4>
                    <div className='progress '>
                        <div className='progress-bar jquery-bar '>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

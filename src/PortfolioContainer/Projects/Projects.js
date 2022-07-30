import React from 'react';
import './Projects.css'

export default function Projects() {
  return (
    <div>
        <div className='project-box'>
            <div className='project-header text-center'>
                <h2>My Projects</h2>
            </div>
            <div className='container project-list'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='project-item'>
                        <div className='project-title'>
                            <h5>Ecommerce Frontend</h5>
                        </div>
                         <img className='project-img' src='/assets/image/ecommerce1.jpg'/>
                         <div className='project-link'>
                            <a  href='https://github.com/HtetLin27/ecommerce_frontend' target='_blank'><i className="fa-brands fa-github"></i>
                             <h6 className='link-text'>More Details</h6>
                            </a>
                         </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                    <div className='project-item'>
                        <div className='project-title'>
                            <h5>Ecommerce Backend</h5>
                        </div>
                        <img className='project-img' src='/assets/image/ecommerce2.png'/>
                         <div className='project-link'>
                            <a  href='https://github.com/HtetLin27/ecommerce_backend' target='_blank'><i className="fa-brands fa-github"></i>
                             <h6 className='link-text'>More Details</h6>
                            </a>
                         </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='project-item'>
                        <div className='project-title'>
                            <h5>Resturant</h5>
                        </div>
                        <img className='project-img' src='/assets/image/resturant.jpg'/>
                         <div className='project-link'>
                            <a  href='https://github.com/HtetLin27/OMINI-Food' target='_blank'><i className="fa-brands fa-github"></i>
                             <h6 className='link-text'>More Details</h6>
                            </a>
                         </div>
                        </div>
                    
                    </div>
                    <div className='col-md-4'>
                    <div className='project-item'>
                        <div className='project-title'>
                            <h5>Solo</h5>
                        </div>
                        <img className='project-img' src='/assets/image/solo.jpg'/>
                         <div className='project-link'>
                            <a  href='https://github.com/HtetLin27/SoloCreativeWebsite' target='_blank'><i className="fa-brands fa-github"></i>
                             <h6 className='link-text'>More Details</h6>
                            </a>
                         </div>
                        </div>
                    
                    </div>
                    <div className='col-md-4'>
                    <div className='project-item'>
                        <div className='project-title'>
                            <h5>Referce Portfolio</h5>
                        </div>
                        <img className='project-img' src='/assets/image/refport.jpg'/>
                         <div className='project-link'>
                            <a  href='https://github.com/HtetLin27/Porfolio-Refer-FreeCodeCamp' target='_blank'><i className="fa-brands fa-github"></i>
                             <h6 className='link-text'>More Details</h6>
                            </a>
                         </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

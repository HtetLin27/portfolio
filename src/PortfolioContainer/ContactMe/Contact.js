import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export default function Contact() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_as9i97p','template_kc8wgvq',e.target,'S1yYAmTqff02krqXx')
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
    }
  return (
    <div className='contact' id='contact'>
        <div className='container'>
        <div className='contact-header text-center'>
            <h2>contact me</h2>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <h4 className='contactme-title'>Contact Me Here</h4>
                <div className='row'>
                    <div className='col-md-6 col-5  contact-info col-left'>
                    <i className="fa-solid fa-location-dot contact-icon"></i>  Location
                    </div>
                    <div className='col-md-6 col-7 contact-info col-right'>
                        :Mogok, Myanmar
                    </div>
                    <div className='col-md-6 col-5 contact-info col-left'>
                    <i className="fa-solid fa-envelope contact-icon"></i> Email
                    </div>
                    <div className='col-md-6 col-7 contact-info col-right'>
                        :htetlynnko27@gmail.com
                    </div>
                    <div className='col-md-6 col-5 contact-info col-left'>
                    <i className="fa-solid fa-user-graduate contact-icon"></i> Education
                    </div>
                    <div className='col-md-6 col-7 contact-info col-right'>
                        :Bachelor of Engineering
                    </div>
                    <div className='col-md-6 col-5 contact-info col-left'>
                    <i className="fa-solid fa-phone contact-icon"></i> Mobile Num
                    </div>
                    <div className='col-md-6  col-7 contact-info col-right'>
                        :09954779906,09254351761
                    </div>
                    <div className='col-md-6 col-5 contact-info col-left'>
                    <i className="fa-solid fa-earth-asia contact-icon"></i> Languages
                    </div>
                    <div className='col-md-6 col-7  contact-info col-right'>
                        :Myanmar, English
                    </div>

                </div>
                <div className='colz col-social'>
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
                <div className='cvdown'>
        <a href='https://drive.google.com/file/d/1oZYmv2Jq8qBERCdauKyIKdkU_kV8qb9M/view' target='_blank' className='cvdownload text-center'>
        <i className="fa-solid fa-download "></i> Download CV
        </a>
        </div>
            </div>
            <div className='col-md-6 '>
                <form onSubmit={sendEmail} className='form-box'>
                    <div className="form-group">
                        <input type="text" name='name' className="form-control"  placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name='user_email' className="form-control"  placeholder="Enter email"/>
                    </div>
                     <div className="form-group">
                    <textarea className="form-control" name='message' placeholder='Message'></textarea>
                    </div>
                    <button type="submit" className="btn btn-send">Send</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

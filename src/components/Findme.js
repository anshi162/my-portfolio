import './Findmestyles.css';
import React from "react";
import emailjs from '@emailjs/browser';
import {FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane} from 'react-icons/fa';

const findme = () => {

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jhrl1bb','template_uyb7crh',e.target,'tlIxYr_K1M5htj2jg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='findme ambient-bg'>
      <div className='contact-grid'>
        <div className='mail'>
          <p className='h1'>FIND ME ON</p>
          <p className='head1'>Get In Touch</p>
          <p>Let's talk about everything! <span>Don't like forms? Send me an email.</span></p>
          <div className='contact-links'>
            <a href='mailto:g.anshi012@gmail.com'><FaEnvelope size={18}/><span>g.anshi012@gmail.com</span></a>
            <a href='https://www.github.com/anshi162' target="_blank" rel="noreferrer"><FaGithub size={18}/><span>GitHub</span></a>
            <a href='https://www.linkedin.com/in/anshigupta16/' target="_blank" rel="noreferrer"><FaLinkedinIn size={18}/><span>LinkedIn</span></a>
          </div>
        </div>
        <div className='touch'>
            <form onSubmit={sendEmail} className='f-control glass'>
                <div className="contact-form__heading"><span>Send a message</span><FaEnvelope size={17}/></div>
                <div className="f-row">
                    <input type="text" placeholder='Insert your name' name='username' required/>
                    <input type='email' placeholder='Insert your email' name='email' required/>
                </div>
                <input type="text" placeholder='Insert your subject' name='subject' required/>
                <textarea placeholder='Write your message' name='msg' cols={30} rows={7} required/>
                <div><button type='submit' className='sub-btn' >Send Message <FaPaperPlane size={14}/></button></div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default findme

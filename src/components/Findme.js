import './Findmestyles.css';
import React from "react";
import Introimg from "../images/intro.jpg";
import emailjs from '@emailjs/browser';
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const findme = () => {

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5vcyy3m', 'template_kweg2lq', e.target, 'C2XEpAZLTscYSx0By')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='findme' style={{ backgroundImage:`url(${Introimg})`}}>
      <div className='mail'>
        <div className='h1'><p>FIND ME ON</p></div>
        <p>Feel free to <span>connect</span> with me</p>
        <p>Email - g.anshi012@gmail.com</p>
        <div className='social'>
        <a href='https://www.github.com/anshi162'><FaGithub size={50} style={{color:"white",marginRight:"2rem"}}/></a>
        <a href='https://www.linkedin.com/in/anshigupta16/'><FaLinkedinIn size={50} style={{color:"white",marginRight:"2rem"}}/></a>
        <a href='https://www.instagram.com/anshi.16'><FaInstagram size={50} style={{color:"white",marginRight:"2rem"}}/></a>
        </div>
      </div>
      <div className='touch'>
            <p className='head1'>Get In Touch</p>
            <p>Let's talk about everything!</p>
            <p>Dont't like forms? Send me an email.</p>
        <div>
            <form onSubmit={sendEmail} className='f-control'>
                <input type="text" placeholder='Insert your name' name='username' required/>
                <input type='email' placeholder='Insert your email' name='email' required/>
                <input type="text" placeholder='Insert your subject' name='subject' required/>
                <textarea placeholder='Write your message' name='msg' cols={30} rows={10} required/>
                <div><button type='submit' className='sub-btn' >Send Message</button></div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default findme

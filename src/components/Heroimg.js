import "./Heroimgstyles.css"
import React from 'react'
import Introimg from "../images/intro.jpg";
import laptop from "../images/laptop.jpg";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"/>

      </div>

      
      <div className="content">
        <p className="p1">Hi, I am...</p>
        <h2>Anshi Gupta</h2>
        <h1>Web Developer</h1>
        <div className="laptopimg">
         <img className="laptop" src={laptop} alt="lapimg"/>
        </div></div>
        
      
      
    
    </div>
  )
}

export default Heroimg

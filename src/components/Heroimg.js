import "./Heroimgstyles.css"
import React from 'react'
import Introimg from "../images/intro.jpg";
import laptop from "../images/laptop.jpg";
import Type from "react-typed";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"/>

      </div>

      
      <div className="content">
        <p className="p1">Hi, I am...</p>
        <h2>Anshi Gupta</h2>
        <div className="type">
        <Type
          strings={[
            "Software Developer",
            "Frontend Developer",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />

          </div>
        <div className="laptopimg">
         <img className="laptop" src={laptop} alt="lapimg"/>
        </div></div>
        
      
      
    
    </div>
  )
}

export default Heroimg

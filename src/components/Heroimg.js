import "./Heroimgstyles.css"
import React from 'react'
import Introimg from "../images/intro.jpg";
import laptop from "../images/laptop.jpg";
import Typewriter from "typewriter-effect";

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
        <Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString("Software Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Frontend Developer")
                        .start();
                }}
            />
          </div>
        <div className="laptopimg">
         <img className="laptop" src={laptop} alt="lapimg"/>
        </div></div>
        
      
      
    
    </div>
  )
}

export default Heroimg

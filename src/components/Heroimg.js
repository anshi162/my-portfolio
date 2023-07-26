import "./Heroimgstyles.css"
import React from 'react'
import Introimg from "../images/intro.jpg";
import laptop from "../images/laptop.jpg";
//import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Heroimg = () => {
  const [text] = useTypewriter({
    words: ['Software Developer', 'Frontend Developer'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"/>

      </div>

      
      <div className="content">
        <p className="p1">Hi, I am...</p>
        <h2>Anshi Gupta</h2>
        <div className="type">
            <span>{text}</span>
          <Cursor cursorColor='rgb(99, 4, 130);' />
          </div>
        <div className="laptopimg">
         <img className="laptop" src={laptop} alt="lapimg"/>
        </div></div>
        
      
      
    
    </div>
  )
}

export default Heroimg

import "./Navbarstyles.css";
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import {FaBars,FaTimes,FaHome} from "react-icons/fa";
import {GoPerson} from "react-icons/go"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineContacts} from "react-icons/ai"


const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const[color,setColor]=useState(false);
    const changeColor=()=>{
      if(window.scrollY>=100){
        setColor(true);
      }
      else{
        setColor(false);
      }
    }
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/"><FaHome className="ico" size={20} style={{color:"white",marginRight:".5rem"}}/>Home</Link>
        </li>
        <li>
            <Link to="/project"><AiOutlineFundProjectionScreen className="ico" size={20} style={{color:"white",marginRight:".5rem"}}/>Project</Link>
        </li>
        <li>
            <Link to="/about"><GoPerson className="ico" size={20} style={{color:"white",marginRight:".5rem"}}/>About</Link>
        </li>
        <li>
            <Link to="/contact"><AiOutlineContacts className="ico" size={20} style={{color:"white",marginRight:".5rem"}}/>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
        
        
      </div>
    </div>
  )
}

export default Navbar

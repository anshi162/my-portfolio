import React from 'react'
import Introimg from '../images/intro.jpg'
import './Aboutmestyle.css'
import Faceimg from "../images/face.png";
import {FaPython} from 'react-icons/fa'
import {AiOutlineHtml5} from "react-icons/ai"
import {BiLogoCss3} from "react-icons/bi"
import {RiReactjsFill} from "react-icons/ri"
import {SiMysql} from "react-icons/si"

const Aboutme = () => {
  return (
    <div className='me' style={{ backgroundImage:`url(${Introimg})`}}  >
        <div className="introduce">
            <div className="written">
                <p className="h2">Know who I'M</p>
                <div className='who'>
                <p >Hi Everyone, I am <span>Anshi Gupta</span></p>
                <p>I am a final year undergrad student pursuing B.tech 
                from Pranveer Singh Institute of Technology, Kanpur.</p>
                <br/>
                <p>My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.
                 Apart from academics, I am a social worker and love binge watching shows.</p>
                </div>
                </div>
            <div className="face">
                <img src={Faceimg} alt="face"/>
            </div>
        </div>
        <div className='skill'>
            <p className='head'>Professional <span>Skillset</span></p>
            <div className='container1'>
                <div className='card'><FaPython size={100} style={{color:'white'}}/></div>
                <div className='card'><AiOutlineHtml5 size={100} style={{color:'white'}}/></div>
                <div className='card'><BiLogoCss3 size={100} style={{color:'white'}}/></div>
                <div className='card'><RiReactjsFill size={100} style={{color:'white'}}/></div>
                <div className='card'><SiMysql size={100} style={{color:'white'}}/></div>
            </div>
        </div>
        <div className='edu'>
            <p className='head2'>Education</p>
            <div className='education'>
                <div className='vertical'></div>
                <dl>
                    <dd>2020 - present</dd>
                      <dd> B.tech</dd>
                    <dd>Pranveer Singh Institute of Technology, Kanpur</dd>
                    <dd>8.2 CGPA</dd>
                </dl>
                
                <dl>
                    <dd>2018 - 2019</dd>
                      <dd> Class Xll</dd>
                    <dd>SSD Education Centre, Kanpur</dd>
                    <dd>90.2%</dd>
                </dl>
                <dl>
                    <dd>2016 - 2017</dd>
                      <dd>Class X</dd>
                    <dd>SSD Education Centre, Kanpur</dd>
                    <dd>10 CGPA</dd>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Aboutme

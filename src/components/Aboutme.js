import React from 'react'
import Introimg from '../images/intro.jpg'
import './Aboutmestyle.css'
import Faceimg from "../images/face.png";
import {FaPython, FaDocker, FaGithub, FaBrain} from 'react-icons/fa'
import {SiKubernetes, SiApachekafka, SiPostgresql, SiGrafana} from "react-icons/si"
import {VscAzure} from "react-icons/vsc"
import {RiReactjsFill} from "react-icons/ri"

const Aboutme = () => {
  return (
    <div className='me' style={{ backgroundImage:`url(${Introimg})`}}  >
        <div className="introduce">
            <div className="written">
                <p className="h2">Know who I'M</p>
                <div className='who'>
                <p >Hi Everyone, I am <span>Anshi Gupta</span></p>
                <p>I am a Data Engineer at Bayer, with 2+ years of experience building
                production data pipelines, backend services, and AI/LLM systems for enterprise clients (previously at Accenture).</p>
                <br/>
                <p>My interests are in <span>Data Engineering, DevOps, and Generative AI</span> — I love building systems
                that run reliably in production, not just work in a demo. Apart from work, I am a social worker and love binge watching shows.</p>
                </div>
                </div>
            <div className="face">
                <img src={Faceimg} alt="face"/>
            </div>
        </div>
        <div className='skill'>
            <p className='head'>Professional <span>Skillset</span></p>
            <div className='container1'>
                <div className='card'><FaPython size={100} style={{color:'white'}}/><span className='skill-name'>Python</span></div>
                <div className='card'><SiApachekafka size={100} style={{color:'white'}}/><span className='skill-name'>Apache Kafka</span></div>
                <div className='card'><SiKubernetes size={100} style={{color:'white'}}/><span className='skill-name'>Kubernetes</span></div>
                <div className='card'><FaDocker size={100} style={{color:'white'}}/><span className='skill-name'>Docker</span></div>
                <div className='card'><SiPostgresql size={100} style={{color:'white'}}/><span className='skill-name'>PostgreSQL</span></div>
                <div className='card'><VscAzure size={100} style={{color:'white'}}/><span className='skill-name'>Azure</span></div>
                <div className='card'><SiGrafana size={100} style={{color:'white'}}/><span className='skill-name'>Grafana</span></div>
                <div className='card'><RiReactjsFill size={100} style={{color:'white'}}/><span className='skill-name'>React.js</span></div>
                <div className='card'><FaGithub size={100} style={{color:'white'}}/><span className='skill-name'>Git</span></div>
                <div className='card'><FaBrain size={100} style={{color:'white'}}/><span className='skill-name'>AI</span></div>
            </div>
        </div>
        <div className='edu' id="experience">
            <p className='head2'>Experience</p>
            <div className='education'>
                <div className='vertical'></div>
                <dl>
                    <dd className='job-header'>
                        <b className='job-role'>Data Engineer, Accenture, Gurugram</b>
                        <span className='job-date'>July 2024 - Present</span>
                    </dd>
                    <br/>
                    <dd><b>Unilever (2024 - 2025):</b> &ensp; &ensp;Engineered real-time server-side data pipelines using Apache Kafka and Kubernetes, designed scalable storage on Azure (Docker, PostgreSQL, Redis), and built a monitoring stack (Grafana + Prometheus).</dd><br/>
                    <dd><b>Bayer (2025 - Present):</b> &ensp; &ensp;  Architected backend AI query-processing service using LLMs and RAG, deployed end-to-end on Azure, and built an AI-powered request routing application using LangGraph.</dd>
                </dl>
            </div>
        </div>
        
        <div className='edu' id="education">
            <p className='head2'>Education</p>
            <div className='education'>
                <div className='vertical'></div>
                <dl>
                    <dd>2020 - 2024</dd>
                      <dd> B.tech, Computer Science &amp; Engineering</dd>
                    <dd>Pranveer Singh Institute of Technology, Kanpur (AKTU)</dd>
                    <dd>8.4 CGPA</dd>
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

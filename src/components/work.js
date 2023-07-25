import React from 'react'
import './workstyles.css'
import savi from '../images/savi.jpg'
import { NavLink } from 'react-router-dom'
import intro from '../images/intro.jpg'
import intel from '../images/intell.jpg'

const work = () => {
  return (
    <div className='work' style={{backgroundImage:`url(${intro})`}}>
        <div className='name'>
            <h1>My Recent    <span>Work</span></h1>
            Here are a few projects I've worked on recently
        </div>
        <div className='proj-container'>
        <div className='proj-card'>
            <img src={savi} alt='savicare'/>
            <h2 className='proj-title'> Savi-Care</h2>
            <div className='proj-detail'>
                <p>A website where user can search for nearby doctors with the type of
                problem they have.</p>
                </div>
                <div className='proj-btns'>
                    <NavLink to="https://github.com/anshi162/savi-_care" className="btn">View</NavLink>
                </div>
        </div>
        <div className='proj-card'>
            <img src={intel} alt='savicare'/>
            <h2 className='proj-title'>Intelligent Farming</h2>
            <div className='proj-detail'>
                <p>Machine learning based system which predicts best kind of
                crop suited for the type of soil</p>
                </div>
                <div className='proj-btns'>
                    <NavLink to="https://github.com/anshi162/Intelligent_farming" className="btn">View</NavLink>
                </div>
        </div>
        </div>
      
    </div>
  )
}

export default work

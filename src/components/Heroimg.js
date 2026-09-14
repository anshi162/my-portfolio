import "./Heroimgstyles.css"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Heroimg = () => {
  const [text] = useTypewriter({
    words: ['Data Engineer', 'DevOps Engineer', 'AI/LLM Engineer'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <div className="hero ambient-bg">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"></span> Data &amp; AI Engineering</div>
          <p className="p1">Hi, I am...</p>
          <h1>Anshi Gupta</h1>
          <div className="type">
            <span>{text}</span>
            <Cursor cursorColor='#4ad6e5' />
          </div>
          <p className="lede">
            I build production data pipelines, backend services, and AI/LLM systems —
            currently at Bayer, previously at Accenture.
          </p>
          <div className="hero-actions">
            <NavLink to="/project" className="btn btn-primary">View Projects</NavLink>
            <a href="https://www.github.com/anshi162" target="_blank" rel="noreferrer" className="btn btn-light">
              <FaGithub size={17}/> GitHub
            </a>
          </div>
          <div className="stats" aria-label="Highlights">
            <div className="stat-panel glass">
              <strong>2+</strong>
              <span>Years experience</span>
            </div>
            <div className="stat-panel glass">
              <strong>Bayer</strong>
              <span>Current role</span>
            </div>
            <div className="stat-panel glass">
              <strong className="text-accent">AI/LLM</strong>
              <span>Focus area</span>
            </div>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="hero-orbit__ring" />
          <div className="hero-orbit__core">
            <span>AG</span>
            <small>Build · Learn · Refine</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroimg

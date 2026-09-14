import React from 'react'
import './workstyles.css'
import intel from '../images/intelligent-farming.jpg'
import llmcost from '../images/llm-cost.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
    {
        number: '01',
        category: 'AI / LLM',
        title: 'LLM Cost & Routing Calculator',
        description: 'A tool that models monthly LLM spend across providers, and shows how much smart routing and prompt caching can save.',
        tags: ['Next.js', 'TypeScript', 'API cost modeling'],
        href: 'https://llmcost-two.vercel.app/',
        image: llmcost,
        alt: 'LLM Cost and Routing Calculator cost comparison bars',
        layout: 'wide',
    },
    {
        number: '02',
        category: 'Machine learning',
        title: 'Intelligent Farming',
        description: 'A machine-learning system that recommends the best crop for a field using its soil characteristics.',
        tags: ['Machine learning', 'Crop prediction', 'Data analysis'],
        href: 'https://github.com/anshi162/Intelligent_farming',
        image: intel,
        alt: 'intefarming',
        layout: 'compact',
    },
]

const Work = () => {
  return (
    <div className='work ambient-bg'>
        <div className='name'>
            <div className="eyebrow"><span className="dot"></span> Selected work</div>
            <h1>My Personal <span>Projects</span></h1>
            <p>A few projects developed by me</p>
        </div>
        <div className='proj-container'>
        {projects.map((project) => (
            <article key={project.title} className={`proj-card proj-card--${project.layout}`}>
                <div className="proj-topline">
                    <span>{project.number}</span>
                    <span className="proj-category">{project.category}</span>
                </div>
                <a href={project.href} target="_blank" rel="noreferrer" className="proj-visual" aria-label={`Open ${project.title}`}>
                    <img src={project.image} alt={project.alt}/>
                    <span className="visual-action" aria-hidden="true"><FaExternalLinkAlt size={13}/></span>
                </a>
                <h2 className='proj-title'>{project.title}</h2>
                <div className='proj-detail'>
                    <p>{project.description}</p>
                </div>
                <div className="proj-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className='proj-btns'>
                    <a href={project.href} target="_blank" rel="noreferrer" className="proj-link">
                        View project <FaExternalLinkAlt size={11}/>
                    </a>
                </div>
            </article>
        ))}
        </div>
    </div>
  )
}

export default Work

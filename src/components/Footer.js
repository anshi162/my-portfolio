import "./Footerstyles.css";
import React from 'react'
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer ambient-bg">
        <div className="footer-panel glass">
        <div className="introduce">
            <div className="written">
                <p className="h2">Let me introduce myself</p>
                <dl className="list1">
                <dd>
                   I build production data pipelines, backend services, and DevOps infrastructure.
                </dd><br/>
                <dd>
                    A problem solver with technical proficiency in <span>Python</span>, <span>Kafka</span>, <span>CI/CD Pipelines</span>, <span>Kubernetes</span> &amp; <span>Docker</span>.
                </dd><br/>
                <dd>
                My field of interest is building reliable <span>Data & AI Systems</span> that run in real production
                </dd>
                </dl>
                </div>

            <div className="about-monogram" aria-hidden="true">
                <span>A</span><span>G</span>
            </div>
        </div>

        <div className="btndiv">
         <Link to="/project" className="btn btn-primary">Projects</Link>
        </div>
        </div>
    </div>
  )
}

export default Footer
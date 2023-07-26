import "./Footerstyles.css";
import React from 'react'
import Introimg from "../images/intro.jpg";
import Faceimg from "../images/face.png";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage:`url(${Introimg})`  }} >
        
        <div className="introduce">
            <div className="written">
                <p className="h2">Let me introduce myself</p>
                <dl className="list1">
                <dd>
                   I weild good web development skills.
                </dd><br/>
                <dd>
                    A problem solver with Technical proficiency in <span>Python</span> and <span>C++</span>.
                </dd><br/>
                <dd>
                My field of Interest's are building new  <span>Web Technologies and Products</span>
                </dd>
                </dl>
                </div>

            <div className="face">
                <img src={Faceimg} alt="face"/>
            </div>
        </div>

        <div className="btndiv">
         <Link to="/project" className="btn">Projects</Link>
        </div>
     
      
      
    </div>
  )
}

export default Footer

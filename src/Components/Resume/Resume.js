import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './Resume.css'
import React from 'react';
import Lineproces from '../templates/LineProces';
const Resume = () => {
  const frontendskills = [
    {
      skill:'HTML5',
      rate:'80',
    },
    {
      skill:'CSS',
      rate:'80',
    },
    {
      skill:'JavaScript',
      rate:'60',
    },
    {
      skill:'ReactJs',
      rate:'65',
    },


  ]
 
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div style={{minHeight:'100vh'}} className="container">
        <div className="row">
          <h1 className="brand-text mb-5">My Resume</h1>
          <div className="col-md-7">
            <p>
              My expertise are in frontend technologies such as HTML5, CSS, BOOTSTRAP,
              JAVASCRIPT, REACT. I am comfortable with backend technologies such as NODE,
              EXPRESS, MONGODB, FIREBASE that allows me to work with a backend team
              efficiently.<br/><br/>
              I am a solution-focused
              developer with the ability to develop interactive and responsive websites that
              satisfies a user’s experience.
            </p>
            <div className="hobbies mt-5">
              <h3>My Hobbies: </h3>
              <div className='content mt-3'>
                <li>Play Football</li>
                <li>Play Game</li>
                <li>Listen To Music</li>
                
              </div>
            </div>
          </div>
          <div className="col-md-5 skill">
            <h3 className="skills">My Skillset:</h3>
            <h4 className="brand-text">Frontend skills: </h4> 
            {
              frontendskills.map((item)=> <Lineproces props={item}/>)
            }
           
            
          <button className="btn brand-btn mt-5" style={{width:'40%'}}>Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
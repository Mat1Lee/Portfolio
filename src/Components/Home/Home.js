import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Aos from 'aos'
import './Home.css'
import React from 'react';
import Typed from 'react-typed'


const Home = () => {


  return (
    <motion.div
    initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div className='img'>

      </div>
      <div className="row">
        <div className=" col-md-6">
          <div style={{ height: '100vh', marginTop: '-56px' }}>
            <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
              <h1>Hi,</h1>
              <h1>I Am Manh Le, a</h1>
              <h1>
                <span className="brand-text">
                  <Typed



                    strings={['Front-End Developer', 'React Developer']}
                    typeSpeed={90}
                    backSpeed={70}
                    loop
                  />
                </span>
              </h1>
             
              <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"><button className="btn brand-btn">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button></a>
            </div>

          </div>
        </div>

        <div className="col-md-6">
          <div className="img col-md-4">

          </div>
          


        </div>

       
         
        
      </div>

    </motion.div>
  );
};

export default Home;
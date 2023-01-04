import { faGithub, faLinkedin, faFacebook, faGit, faTwitch, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import { useEffect } from 'react';
import Aos from 'aos'
import './Home.css'
import React from 'react';
import Typed from 'react-typed'


const Home = () => {


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home">
        <div className='img'>

        </div>
        <div className="row">
          <div className=" col-md-6">
            <div style={{ height: '100vh', marginTop: '-56px' }}>
              <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
                <h2>Hi,</h2>
                <h1 className='name-title'>I am Manh Le, a</h1>
                <h1>

                  <span className="art-code">
                    &lt;<i>code</i>&gt;{' '}
                    <Typed



                      strings={['Front-End Developer', 'React Developer']}
                      loop
                      typeSpeed={100}
                      backSpeed={25}

                      smartBackspace
                      shuffle={false}
                      backDelay={1}
                      fadeOut={false}
                      fadeOutDelay={100}
                      loopCount={0}
                      showCursor
                      cursorChar='|'
                    />
                    {' '}
                    &lt;/<i >code</i>&gt;
                  </span>

                </h1>

                <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"><button className="btn brand-btn">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button></a>

                <div class="socialTab">
                  <div class="button">
                    <div class="icon">
                      <a href="https://www.facebook.com/lee.michael.50702" ><FontAwesomeIcon className="myicon" icon={faFacebook}></FontAwesomeIcon></a>

                    </div>
                    <span>FaceBook</span>
                  </div>
                  <div class="button">
                    <div class="icon">
                      <a href="https://www.facebook.com/lee.michael.50702" ><FontAwesomeIcon className="myicon" icon={faTwitter}></FontAwesomeIcon></a>

                    </div>
                    <span>Twitter</span>
                  </div>
                  <div class="button">
                    <div class="icon">
                      <a href="https://www.instagram.com/manh_mad/" ><FontAwesomeIcon className="myicon" icon={faInstagram}></FontAwesomeIcon></a>

                    </div>
                    <span>Instagram</span>
                  </div>
                  <div class="button">
                    <div class="icon">
                      <a href="https://github.com/Mat1Lee" ><FontAwesomeIcon className="myicon" icon={faGithub}></FontAwesomeIcon></a>


                    </div>
                    <span>GitHub</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="img col-md-4">
                <img src="../images/h_n.psd " alt="" />
            </div>



          </div>




        </div>
      </div>


    </motion.div>
  );
};

export default Home;
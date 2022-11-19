import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_cycw3su', 'template_8hhkpjv', e.target, 'Hz_2gMnkyAJ_9rEH6')
      .then((result) => {
          setSuccess(!success)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div style={{minHeight:'100vh'}}>
        <div className="container">
          <div className="row mb-5">
            <h2 className="brand-text mb-3">Contact Me <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span> </h2>
            <div className="col-md-8 offset-md-2">
              <form className="contact-form" onSubmit={sendEmail}>
                {/* <input className="form-control" type="hidden" name="contact_number" /> */}
                <label>Name</label>
                <input className="form-control" placeholder="Your name" type="text" name="from_name" />
                <label>Email</label>
                <input className="form-control" placeholder="Your Email Address" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="form-control" placeholder="How can i help you?" name="message" />
                <input className="btn brand-btn px-5 mt-3" type="submit" value="Send Message" />
                {
                  success ? <p className="text-success">Email sent successfully</p> : ''
                }
              </form>
            </div>
          </div>
            <h4 className="brand-text">Other ways to get in touch</h4>
          <div className="row text-center mt-5 m-5">
            <div className="col-md-4">
              <a href="https://www.facebook.com/lee.michael.50702" ><FontAwesomeIcon className="myicon" icon={faFacebook}></FontAwesomeIcon></a>
            </div>
            <div className="col-md-4">
            <a href="sdfsdf"><FontAwesomeIcon className="myicon" icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
            <div className="col-md-4">
            <a href="sdfsdf"><FontAwesomeIcon className="myicon" icon={faTwitter}></FontAwesomeIcon></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
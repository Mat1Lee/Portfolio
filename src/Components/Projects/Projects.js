import React from 'react';
import Masonry from 'react-masonry-css';
import './Projects.css';
import diennuoc from '../images/dienNuoc.png';
import phone from '../images/Phone.png';


// import slider from '../images/slider.png';
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

const Projects = () => {
  const projects = [
    {img: diennuoc, title: 'Full stack website', description:'Full stack website with user and admin separate functionality', technology:['HTML', 'SCSS', 'REACTBOOTSTRAP', 'REACT', 'FIREBASE'], },
   
    {img: phone, title: 'Full stack website', description:'Full stack website with all user considered admin to be able to test the NODE CRUD operations', technology:['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'NODE', 'EXPRESS', 'FIREBASE'], },
  
   
  ]
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  };
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div className="container">
          <h2 className="brand-text mb-5">My Projects:</h2>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              {
                projects.map(project => <SingleProject project={project}></SingleProject>)
              }
        </Masonry>
      </div>
        </motion.div>
  );
};

export default Projects;
import React from 'react';

const SingleProject = ({project}) => {
  const {img, title, description,technology, livesite, github } = project;
  return (
    <div className="project-container p-4 position-relative">
              <img className="w-100" src={img} alt=""/>
              <h5 className="mt-2">{title}</h5>
              <p>{description}</p>
              {
                technology.map(tech => <span style={{fontSize:'10px'}} className="singleSkill">{tech}</span> )
              }
              <div className="project-links h-100 position-absolute top-0 start-0 w-100">
                <div className="h-100 d-flex justify-content-around align-items-center">
                <a target="_blank" href={github}><button className="btn brand-btn">Github</button></a>
                <a href={livesite} target="_blank"><button className="btn brand-btn">Live Site</button></a>
                </div>
              </div>
            </div>
  );
};

export default SingleProject;
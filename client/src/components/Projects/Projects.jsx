import React from "react";
import projects from "../../Info/projects";
import './Projects.css'

export default function Projects(){
  return(
    <div data-aos="zoom-in-up" id='Project' className="divMayTec">
      <h3 className="h3Tittle">Proyectos</h3>
      {projects.map(el => 
        <div data-aos="zoom-in-up" data-aos-duration="1000" key={el.name} className="divProjects">
          <a className="aProjects" href={el.linkDeploy} target='_blank'><h4 id='nameResponsive'>{el.name}</h4></a>
          <div className="divImgProjects">
            <img src={el.image} className='imgProjects'></img>
          </div>
          <div className="divTextProjects">
            <a className="aProjects" href={el.linkDeploy} target='_blank'><h4 className="h4Projects">{el.name}</h4></a>
            <p className="pProjects">{el.description}</p>
            <a className="aProjects" href={el.linkDeploy} target='_blank'><img className="iconProject" src="https://res.cloudinary.com/gescobar/image/upload/v1674499149/portfolio/web-svgrepo-com_uwzcpz.svg"/></a>
            <a className="aProjects" href={el.linkGithub} target='_blank'><img className="iconProject" src="https://res.cloudinary.com/gescobar/image/upload/v1674391974/portfolio/github-svgrepo-com_wbru5c.svg"/></a>
          </div>
        </div>
        )}
    </div>
  )
}


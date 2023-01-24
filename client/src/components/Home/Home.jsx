import React from "react";
import NavBar from "../NavBar/NavBar";
import './Home.css'
import { BsDownload } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import About from "../About/About";
// import './CV Gregorio Escobar.pdf'

export default function Home(){
  return(
    <div>
        <NavBar/>
        <div className="divHome" >
          <div className="divName">
            <h1 id="name">Gregorio Escobar</h1>
            <h1 id="fullStack">Desarrollador Web Full Stack</h1>
          </div>
          <div className="divInfoHome">
            <p className="pInfoHome">Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador <br/>Web Full Stack Hola, soy Desarrollador Web Full StackHola, soy Desarrollador Web Full StackHola, </p>
          </div>
        </div>
        <div className="divButton">
          <a className="aNav" href="../../Info/CV-Gregorio-Escobar.pdf" download>
            <button className="btnHome"><span className="spanHome"><BsDownload/></span>DESCARGAR CV</button>
          </a>
          <a className="aNav" href="https://github.com/Gescobar28" target="_blank">
            <button className="btnHome">
            <span className="spanHome"><BsGithub/></span>GITHUB</button>
          </a>
          <a className="aNav" href="https://www.linkedin.com/in/gregorioescobar28" target="_blank">
            <button className="btnHome">
            <span className="spanHome"><BsLinkedin/></span>LINKEDIN</button>
          </a>
        </div>
    </div>
  )
}
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
            <h1 id="name"><span id="spanName">Hola, mi nombre es<br/></span>Gregorio Escobar</h1>
            <h1 id="fullStack">Desarrollador Web Full Stack</h1>
          </div>
          <div className="divInfoHome">
            <p className="pInfoHome">Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador Web Full Stack Hola, soy Desarrollador <br/>Web Full Stack Hola, soy Desarrollador Web Full StackHola, soy Desarrollador Web Full StackHola, </p>
          </div>
        </div>
        <div className="divButton">
          <a className="aNav" href="https://drive.google.com/file/d/1RP-mDa2Kr4Yij7thtJhl9SRBD5JRVqCp/view?usp=sharing" target="_blank" download>
            <button className="btnHome">
              <BsDownload/><span className="spanHome">DESCARGAR CV</span>
            </button>
          </a>
          <a className="aNav" href="https://github.com/Gescobar28" target="_blank">
            <button className="btnHome">
              <BsGithub/><span className="spanHome">GITHUB</span>
            </button>
          </a>
          <a className="aNav" href="https://www.linkedin.com/in/gregorioescobar28" target="_blank">
            <button className="btnHome">
              <BsLinkedin/><span className="spanHome">LINKEDIN</span>
            </button>
          </a>
        </div>
    </div>
  )
}
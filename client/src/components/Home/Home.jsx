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
        <div  className="divHome" >
          <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-once="true" className="divName">
            <h1 id="name"><img width='40px' src="https://res.cloudinary.com/gescobar/image/upload/v1675258207/portfolio/383wavinghand1_100830_ushv3x.svg"/><span id="spanName">Hola! Soy<br/></span>Gregorio Escobar</h1>
            <h1 id="fullStack">Desarrollador Web Full Stack</h1>
          </div>
          {/* <div className="divInfoHome">
            <img className="imgHome" src='https://res.cloudinary.com/gescobar/image/upload/v1675256973/portfolio/WhatsApp_Image_2022-11-08_at_21.14.57_sqsevc.jpg'/>
          </div> */}
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-once="true" className="divButton">
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
import React from "react";
import Link from 'react-router-dom';
import Projects from "../Projects/Projects";
import Tecnologies from "../Tecnologies/Tecnologies";
import Contact from "../Contact/Contact";
import Home from "../Home/Home"
import Footer from "../Footer/Footer";
import './Portfolio.css'
import About from "../About/About";

export default function Portfolio(){
  return(
    <div id="Home" className="divFooter">
      <section className="sectionHome">
        <Home/>
      </section>
      <section className="sectionAbout">
        <About/>
      </section>
      <section className="sectionTec">
        <Tecnologies/>
      </section>
      <section className="sectionProjects">
        <Projects/>
      </section>
      <section className="sectionContact">
        <Contact/>  
      </section>
      <Footer/>
    </div>
  )
}
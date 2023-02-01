import React, {useEffect} from "react";
import Link from 'react-router-dom';
import Projects from "../Projects/Projects";
import Tecnologies from "../Tecnologies/Tecnologies";
import Contact from "../Contact/Contact";
import Home from "../Home/Home"
import Footer from "../Footer/Footer";
import './Portfolio.css'
import About from "../About/About";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio(){
  useEffect(() => {
    AOS.init();
  }, [])
  return(
    <div id="Home" className="divFooter">
      <section className="sectionHome divFooter">
        <Home/>
      </section>
      <section className="sectionAbout divFooter">
        <About/>
      </section>
      <section className="sectionTec divFooter">
        <Tecnologies/>
      </section>
      <section className="sectionProjects divFooter">
        <Projects/>
      </section>
      <section className="sectionContact divFooter">
        <Contact/>  
      </section>
      <Footer/>
    </div>
  )
}
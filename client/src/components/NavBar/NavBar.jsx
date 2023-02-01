import React from "react";
import './NavBar.css'

export default function NavBar(){
  return(
    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true" className="divNav">
      <nav>
        <div>
          <ul className="ulHeader">
            <li className="liHeader"><a className="aNav active" data-section="navegacion" data-value="home" href="#Home">Inicio</a></li>
            <li className="liHeader"><a className="aNav active" data-section="navegacion" data-value="about" href="#AboutMe">Acerca de mí</a></li>
            <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="skill" href="#Tecnologies">Tecnologías</a></li>
            <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="project" href="#Project">Proyectos</a></li>
            <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="contact" href="#Contact">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


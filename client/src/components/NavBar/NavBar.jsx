import React from "react";
import './NavBar.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

  return (
    <Navbar data-aos="zoom-in-up" data-aos-duration="2000" data-aos-once="true" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 divNav" navbarScroll>
              <ul className="ulHeader">
                <li className="liHeader"><a className="aNav active" data-section="navegacion" data-value="home" href="#Home">Inicio</a></li>
                <li className="liHeader"><a className="aNav active" data-section="navegacion" data-value="about" href="#AboutMe">Acerca de mí</a></li>
                <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="skill" href="#Tecnologies">Tecnologías</a></li>
                <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="project" href="#Project">Proyectos</a></li>
                <li className="liHeader"><a className="aNav" data-section="navegacion" data-value="contact" href="#Contact">Contacto</a></li>
              </ul>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

import React, {useEffect} from "react";
import './About.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function About(){
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return(
    <div data-aos="zoom-in-up" data-aos-duration="1000"  className="divGlobAbout">
      <h3 className="h3Tittle">Acerca de mí</h3>
      <div className="divAbout">
        <p className="pAbout">
          Desde pequeño siempre tuve un gusto especial por las computadoras y la tecnología, me encantan los videojuegos y soy un apasionado al fútbol. <br/><br/>Decidí inclinar mis estudios universitarios hacia la Ingeniería Industrial y logré obtener mi título de grado.
          Me sentía a gusto con mi carrera pero la curiosidad y mis ganas de seguir aprendiendo me llevaron a iniciar mis estudios de programación y terminé enamorándome de este mundo.<br/><br/>
          Mi objetivo es ser parte de un equipo al que le pueda aportar mis conocimientos, que me permita seguir aprendiendo y creciendo profesionalmente.
        </p>
      </div>
    </div>
  )
}
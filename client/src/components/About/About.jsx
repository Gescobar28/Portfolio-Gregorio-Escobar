import React from "react";
import './About.css'

export default function About(){
  return(
    <div id="AboutMe" className="divGlobAbout">
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
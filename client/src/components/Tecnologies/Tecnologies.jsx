import React from "react";
import tecnologies from "../../Info/tecnologies";
import './Tecnologies.css'

export default function Tecnologies(){
  return(
    <div id="Tecnologies" className="divMayTec">  
      <h3 className="h3Tittle">Tecnologías y Herramientas</h3>
      <div className="divTecTools">
        {tecnologies.map(el =>
          <div className="divOptions">
            <img src={el.image} className='imgTecTools'></img>
            <h5 className="h5TecTools">{el.name.toUpperCase()}</h5>
          </div>
          )}
      </div>
    </div>
  )
}
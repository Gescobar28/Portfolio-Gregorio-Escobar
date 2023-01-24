import React from "react";
import './Footer.css'

export default function Footer(){
  return(
    <div>
      <footer className="divFooter">
        <div className="divContFoot">
          {/* <div className="divContactFoot">
            <h4>gregorioescobar_28@hotmail.com</h4>
            <h4>+54 261-2652733</h4>
          </div> */}
          <div className="divCopy">
          <img className="iconCopy" src="https://res.cloudinary.com/gescobar/image/upload/v1674502460/portfolio/copyright-symbol-svgrepo-com_xqufih.svg"/>
          <p className="pFooter">2023 | Gregorio Escobar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
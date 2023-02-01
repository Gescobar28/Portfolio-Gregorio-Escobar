import React from "react";
import './Contact.css'

export default function Contact(){
  return(
    <div id="Contact" className="divMayTec" data-aos="zoom-in-down" data-aos-duration="1000">
      <h3 className="h3Tittle">Si estás buscando un desarrollador<br/> o quieres conectar, te invito a seguirme...</h3>
      <div className="divOptionsContact">
        <div className="divContactOp">
          <a className="aNav" href="mailto:gregorioescobar_28@hotmail.com" target="_blank">
            <img className="imgContact" src="https://res.cloudinary.com/gescobar/image/upload/v1674393007/portfolio/mail-svgrepo-com_bj8lmf.svg"></img>
            <h4 className="h4Contact">MAIL</h4>
          </a>
        </div>
        <div className="divContactOp">
          <a className="aNav" href="https://wa.me/542612652733" target="_blank">
          <img className="imgContact" src="https://cdn.icon-icons.com/icons2/806/PNG/96/whatsapp_icon-icons.com_65942.png"></img>
          <h4 className="h4Contact">WHATSAPP</h4>
          </a>
        </div>
        <div className="divContactOp">
          <a className="aNav" href="https://www.linkedin.com/in/gregorioescobar28" target="_blank">
            <img className="imgContact" src="https://cdn.icon-icons.com/icons2/99/PNG/96/linkedin_socialnetwork_17441.png"></img>
            <h4 className="h4Contact">LINKEDIN</h4>
          </a>
        </div>
        <div className="divContactOp">
          <a className="aNav" href="https://github.com/Gescobar28" target="_blank">
            <img className="imgContact" src="https://res.cloudinary.com/gescobar/image/upload/v1674391974/portfolio/github-svgrepo-com_wbru5c.svg"></img>
            <h4 className="h4Contact">GITHUB</h4>
          </a>
        </div>
        {/* <div className="divContactOp">
        </div> */}
        {/* <div className="divContactOp">
          <img className="imgContact" src="https://cdn.icon-icons.com/icons2/836/PNG/96/Twitter_icon-icons.com_66803.png"></img>
          <h4 className="h4Contact">TWITTER</h4>
        </div> */}
        {/* <div className="divContactOp">
          <img className="imgContact" src="https://cdn.icon-icons.com/icons2/886/PNG/96/file_pdf_download_icon-icons.com_68954.png"></img>
          <h4 className="h4Contact">CV</h4>
        </div> */}
      </div>
    </div>
  )
}
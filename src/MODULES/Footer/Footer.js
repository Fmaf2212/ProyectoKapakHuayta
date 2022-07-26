import React from 'react'
import './footer.css'

import {
  Link
} from "react-router-dom";

import iconLinkedin from '../../BASE/img/iconLinkedin.png'
import iconTwitter from '../../BASE/img/iconTwitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nameKapak">
        <span className="titulo">Kapak Huayta</span>
      </div>
      <div className="footer__email">
        <Link to="/">correo@kapaphuayta.com.pe</Link>
      </div>
      <div className="footer__socialNetworks">
        <Link to="/">
          <img src={iconLinkedin} alt="" />
        </Link>
        <Link to="/">
          <img src={iconTwitter} alt="" />
        </Link>
      </div>
      <div className="footer_copyright">
        <span>
          2022KapakHuayta | Política de Privacidad | Derechos de Autor
        </span>
      </div>
    </footer>
  )
}

export default Footer

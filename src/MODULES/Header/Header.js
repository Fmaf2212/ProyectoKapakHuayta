import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './header.css'

import logoKapak from '../../BASE/img/logoKapak.png'

const Header = () => {
  const [checked, setChecked] = useState(false)
  /* Para que la pagina no haga scroll cuando se abra el sanguche del navbar */
  const myFunction = () => {
    if (!checked) {
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'auto'
    }
  }

  // React.useEffect(() => {
  //   // cerrarUl()
  // }, []);

  // const cerrarUl = () => {
  //   console.log('entré en cerrarUl')
  //   if(window.innerWidth < 858){
  //     console.log('hola entré en menor a 858')
  //     document.getElementById('ul').style.left = '-100%';
  //     // document.querySelector('#check:checked~.hamburger>.line-main::after').style.transform = 'rotate(-45deg)';
  //     // document.querySelector('#check:checked~.hamburger>.line-main::before').style.transform = 'rotate(45deg)';
  //     // document.querySelector('#check:checked ~ .hamburger > .line-split::before').style.transform = 'translateX(-18px)';
  //     // document.querySelector('#check:checked ~ .hamburger > .line-split::before').style.opacity = '0';
  //     // document.querySelector('#check:checked ~ .hamburger > .line-split::after').style.transform = 'translateX(20px)';
  //     // document.querySelector('#check:checked ~ .hamburger > .line-split::after').style.opacity = '0';
  //   }
  // }

  window.addEventListener('scroll', function () {
    if (window.innerWidth > 1440) {
      if (document.body.getBoundingClientRect().top < -50) {
        // document.getElementById('box').innerText = '↑';
        // console.log('PONLE BACKGROUND AL NAVBAR')
        // document.getElementById('header__nav').style.backgroundColor = 'rgba(233, 233, 233, .9)'
        document.getElementById('header__nav').style.backgroundColor =
          'rgba(255, 255, 255, .9)'
        // document.getElementById('header__nav').style.padding = '10px 120px'
        document.getElementById('nav').style.padding = '0px 30px'
        document.getElementById('imgLogo').style.width = '50%'
      } else {
        // console.log('QUITAR BACKGROUND AL NAVBAR')
        document.getElementById('header__nav').style.backgroundColor =
          'transparent'
        // document.getElementById('header__nav').style.padding = '0 100px'
        document.getElementById('nav').style.padding = '10px 0px'
        document.getElementById('imgLogo').style.width = '50%'
        // document.getElementById('box').innerText = '↓';
        // scrollPos = (document.body.getBoundingClientRect()).top;
      }
    }
    if (window.innerWidth <= 1439 && window.innerWidth > 768) {
      if (document.body.getBoundingClientRect().top < -50) {
        // document.getElementById('box').innerText = '↑';
        // console.log('PONLE BACKGROUND AL NAVBAR')
        // document.getElementById('header__nav').style.backgroundColor = 'rgba(233, 233, 233, .9)'
        document.getElementById('header__nav').style.backgroundColor =
          'rgba(255, 255, 255, .9)'
        // document.getElementById('header__nav').style.padding = '0 60px'
        document.getElementById('nav').style.padding = '0px 10px'
        document.getElementById('imgLogo').style.width = '50%'
      } else {
        // console.log('QUITAR BACKGROUND AL NAVBAR')
        document.getElementById('header__nav').style.backgroundColor =
          'transparent'
        document.getElementById('header__nav').style.padding = '0 60px'
        document.getElementById('nav').style.padding = '10px 0px'
        document.getElementById('imgLogo').style.width = '50%'
        // document.getElementById('box').innerText = '↓';
        // scrollPos = (document.body.getBoundingClientRect()).top;
      }
    }
  })

  return (
    <header className="header">
      <div id="header__nav" className="header__nav contenedor">
        <nav id="nav">
          <input type="checkbox" id="check" onClick={() =>{
              setChecked(!checked)
              myFunction()
            }}
          />
          <label htmlFor="check" className="hamburger">
            <span className="line line-main"></span>
            <span className="line line-split"></span>
          </label>
          <div>
            <Link to="/">
              <img
                src={logoKapak}
                id="imgLogo"
                className="imgLogo"
                alt="logoKapak"
              />
            </Link>
          </div>
          <ul id='ul'>
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/Servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/Sostenibilidad">Sostenibilidad</Link>
            </li>
            <li>
              <Link to="/Certificaciones">Certificaciones</Link>
            </li>
            <li>
              <Link to="/Contactanos" className="nav-button">
                Contáctanos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

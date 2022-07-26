import React from 'react'
import './router.css'
import '../../BASE/normalize.css'
import '../../BASE/estilosGenerales.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../../MODULES/Home/Home'
import Nosotros from '../../MODULES/Nosotros/Nosotros'
import Servicios from '../../MODULES/Servicios/Servicios'
import Sostenibilidad from '../../MODULES/Sostenibilidad/Sostenibilidad'
import Certificaciones from '../../MODULES/Certificaciones/Certificaciones'
import Contactanos from '../../MODULES/Contactanos/Contactanos'
import Footer from '../../MODULES/Footer/Footer'
import Header from '../../MODULES/Header/Header'

const App = () => { 

  return (
    <Router>
      <Header />
      <Routes style={{ marginTop: '80px' }}>
        <Route path="/ProyectoKapakHuayta" exact element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Sostenibilidad" element={<Sostenibilidad />} />
        <Route path="/Certificaciones" element={<Certificaciones />} />
        <Route path="/Contactanos" element={<Contactanos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

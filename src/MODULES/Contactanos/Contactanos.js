import React from 'react'
import './contactanos.css'

import imagenDefault from '../../BASE/img/imagenDefault.png'

const Contactanos = () => {
  return (
    <div className='containContactanos'>
        <section className='containContactanos__image'>
            <h2>Lorem Ipsum Simply dummy text</h2>
            <img src={imagenDefault} alt="imagenDefault" />
        </section>
        <section className='containContactanos__form'>
            <h2>Estamos para apoyarte</h2>
            <h1>Formulario de contacto</h1>
        </section>
    </div>
  )
}

export default Contactanos
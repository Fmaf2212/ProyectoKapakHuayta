import React from 'react'
import Wave from '../Wave/Wave'
import './nosotros.css'

import frasePersuasiva from '../../BASE/img/frasePersuasiva.png'
import nosotrosLoremIpsum from '../../BASE/img/nosotrosLoremIpsum.png'

const Nosotros = () => {
  return (
    <div className="contentNosotros">
      <section className="contentNosotros__top">
        <div className="top__sectionTexto">
          <h1>Lorem ipsum is simply</h1>
        </div>
        <Wave />
      </section>
      <section className="contentNosotros__desc contenedor">
        <h2>Lorem ipsum is simply dummy text</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          maiores dolorem consequuntur nulla neque sint veniam, iure sed optio
          sapiente laudantium illo ipsum quos distinctio.
        </p>
      </section>
      <section className="contentNosotros__frasePersuasiva">
        <img src={frasePersuasiva} alt="imagenPersuasiva" />
      </section>
      <section className='contentNosotros__loremIpsum'>
        <img src={nosotrosLoremIpsum} alt='nosotrosLoremIpsum'/>
        <div className='loremIpsum__texto'>
          <div className='texto__desc'>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores dolorem consequuntur nulla neque sint veniam,
              iure sed optio sapiente laudantium illo ipsum quos distinctio nulla neque sint veniam,
              iure sed optio sapiente.
            </p>
          </div>
          <div className='texto__title'>
            <h2>Lorem Ipsum</h2>
          </div>
        </div>
        <img src={nosotrosLoremIpsum} alt='nosotrosLoremIpsum'/>
        <div className='loremIpsum__texto secondTexto'>
          <div className='texto__desc'>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis maiores dolorem consequuntur nulla neque sint veniam,
              iure sed optio sapiente laudantium illo ipsum quos distinctio.
            </p>
          </div>
          <div className='texto__title'>
            <h2>Lorem Ipsum</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros

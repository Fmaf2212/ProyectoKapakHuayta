import React from 'react'

import './nuestrosServiciosCarousel.css'

import $ from 'jquery'
import 'owl.carousel'
import './owl-carousel.css'

import { Link } from 'react-router-dom'

import nuestrosProcesosArbol1 from '../../../BASE/img/nuestrosProcesosArbol1.png'

const NuestrosServiciosCarousel = () => {
  $(document).ready(function(){
    $('.slider_div').owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      dots: false,
      margin: 600,
      marginLeft: -200,
      smartSpeed: 400,
      center: true,
      navText: [
        '<span data-slide="prev" data-target="#myCarousel1" class="1btn-vertical-slider glyphicon owl-prev prevv" style="display: table; background: white; border-radius: 50%;color: white; padding: 8.3px 15px;background: rgba(0,0,0,.2);font-family:FontAwesome;">❮</span>',
        '<span data-slide="next" data-target="#myCarousel1" class="1btn-vertical-slider glyphicon owl-next nextt" style="display: table; background: white; border-radius: 50%; color: white; padding: 8.3px 15px;background: rgba(0,0,0,.2);font-family:FontAwesome;">❯</span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        769: {
          items: 1,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  });
  

  return (
    <div className="sectionNuestrosServicios__carousel">
      <div id="publicaciones" className="feature_big_add_area">
        <div
          className="container"
          style={{ maxWidth: '100vw', width: '100%', padding: '0' }}
        >
          <div
            className="s_m_title col-12 scrollflow -opacity"
            style={{
              paddingBottom: '2em',
              marginLeft: '-15px',
              display: 'none',
            }}
          >
            <h2>Publicaciones y novedades</h2>
          </div>
          <div className="w-100"></div>

          <div
            className="container"
            style={{ width: '100%', maxWidth: '100vw', padding: '0' }}
          >
            <div id="slides" className="slider_div owl-carousel slides">
              <div className="item">
                <div className="slick">
                  <picture>
                    <img
                      src={nuestrosProcesosArbol1}
                      alt="nuestrosProcesosArbol1"
                    />
                  </picture>
                  <span>Servicio 1</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis sunt, eveniet dicta repudiandae, soluta delectus
                    quibusdam nisi.
                  </p>
                  <Link to="/">Ver más</Link>
                </div>
              </div>
              <div className="item">
                <div className="slick">
                  <picture>
                    <img
                      src={nuestrosProcesosArbol1}
                      alt="nuestrosProcesosArbol1"
                    />
                  </picture>
                  <span>Servicio 2</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis sunt, eveniet dicta repudiandae, soluta delectus
                    quibusdam nisi.
                  </p>
                  <Link to="/">Ver más</Link>
                </div>
              </div>
              <div className="item">
                <div className="slick">
                  <picture>
                    <img
                      src={nuestrosProcesosArbol1}
                      alt="nuestrosProcesosArbol1"
                    />
                  </picture>
                  <span>Servicio 3</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis sunt, eveniet dicta repudiandae, soluta delectus
                    quibusdam nisi.
                  </p>
                  <Link to="/">Ver más</Link>
                </div>
              </div>
              <div className="item">
                <div className="slick">
                  <picture>
                    <img
                      src={nuestrosProcesosArbol1}
                      alt="nuestrosProcesosArbol1"
                    />
                  </picture>
                  <span>Servicio 4</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis sunt, eveniet dicta repudiandae, soluta delectus
                    quibusdam nisi.
                  </p>
                  <Link to="/">Ver más</Link>
                </div>
              </div>
              <div className="item">
                <div className="slick">
                  <picture>
                    <img
                      src={nuestrosProcesosArbol1}
                      alt="nuestrosProcesosArbol1"
                    />
                  </picture>
                  <span>Servicio 5</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis sunt, eveniet dicta repudiandae, soluta delectus
                    quibusdam nisi.
                  </p>
                  <Link to="/">Ver más</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NuestrosServiciosCarousel

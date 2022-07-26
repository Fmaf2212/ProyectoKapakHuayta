import React from 'react'
import './home.css'

import NuestrosServiciosCarousel from './Carousel/NuestrosServiciosCarousel'

import Wave from '../Wave/Wave'

import ramaPorQueKapak from '../../BASE/img/ramaPorQueKapak.png' 
import imgComoEsNuestroProceso from '../../BASE/img/imgComoEsNuestroProceso.jpg' 
import nuestrosProcesosArbol1 from '../../BASE/img/nuestrosProcesosArbol1.png' 
import nuestrosProcesosArbol2 from '../../BASE/img/nuestrosProcesosArbol2.png' 
import nuestrosProcesosArbol3 from '../../BASE/img/nuestrosProcesosArbol3.png' 
import nuestrosProcesosArbol4 from '../../BASE/img/nuestrosProcesosArbol4.png' 
import fondoPrevioFooter from '../../BASE/img/fondoPrevioFooter.png' 

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home">
      <section className="home-header__textos">
        <div className='header__textos contenedor'>
          <h1>KAPAK HUAYTA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
            explicabo doloremque cum, consectetur enim pariatur eveniet molestias
            impedit error quis eum, dolores doloribus inventore magnam vero nobis
            fugit quo.
          </p>
          <div className="header__textos__botones">
            <button className="btnQuieroEmprender">Quiero Emprender</button>
            <Link to="/" id="saberMas" className="btnSaberMas">
              Saber más
            </Link>
          </div>
        </div>
      </section>
      <Wave />
      <section id="sectionPorQueKapak" className="sectionPorQueKapak">
        <div className="sectionPorQueKapak__top">
          <h2 className="titulo">¿Por qué Kapak Huayta?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, vero
            necessitatibus blanditiis voluptas veniam eligendi eaque iure quae
            aliquid expedita hic.
          </p>
        </div>
        <div className="sectionPorQueKapak__body">
          <article>
            <img
              src={ramaPorQueKapak}
              alt="ramaPorQueKapak"
            />
            <h3>Tittle</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </article>
          <article>
            <img
              src={ramaPorQueKapak}
              alt="ramaPorQueKapak"
            />
            <h3>Tittle</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </article>
          <article>
            <img
              src={ramaPorQueKapak}
              alt="ramaPorQueKapak"
            />
            <h3>Tittle</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </article>
          <article>
            <img
              src={ramaPorQueKapak}
              alt="ramaPorQueKapak"
            />
            <h3>Tittle</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </article>
        </div>
      </section>
      <section id="sectionProcesoKapak" className="sectionProcesoKapak contenedor">
        <img
          src={imgComoEsNuestroProceso}
          alt="imgComoEsNuestroProceso"
        />
        <div className="sectionProcesoKapak__texto">
          <h2 className="titulo">¿Cómo es nuestro proceso?</h2>
          <div className="sectionProcesoKapak__texto__contenido">
            <article>
              <img
                src={nuestrosProcesosArbol1}
                alt="nuestrosProcesosArbol1"
              />
              <div>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, accusamus?
                </p>
              </div>
            </article>
            <article>
              <img
                src={nuestrosProcesosArbol2}
                alt="nuestrosProcesosArbol2"
              />
              <div>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, accusamus?
                </p>
              </div>
            </article>
            <article>
              <img
                src={nuestrosProcesosArbol3}
                alt='nuestrosProcesosArbol3'
              />
              <div>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, accusamus?
                </p>
              </div>
            </article>
            <article>
              <img
                src={nuestrosProcesosArbol4}
                alt="nuestrosProcesosArbol4"
              />
              <div>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, accusamus?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="sectionNuestrosServicios"
        className="sectionNuestrosServicios contenedor"
      >
        <div className="sectionNuestrosServicios__top">
          <h2 className="titulo">Nuestros Servicios</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            obcaecati illum possimus sint minus at quae amet. Et, quasi amet eos
            distinctio omnis corporis laborum maxime repellendus dignissimos,
            eveniet aspernatur!
          </p>
        </div>
        <NuestrosServiciosCarousel />
      </section>
      <section
        id="sectionNuestroTeam"
        className="sectionNuestroTeam"
        style={{ display: 'none' }}
      >
        <h2 className="titulo">Nuestro Team</h2>
        <div className="sectionNuestroTeam__body">
          <div className="profile">
            <figure data-value="product owner">
              <img
                src={
                  require('../../BASE/img/nuestrosProcesosArbol1.png')
                    .default
                }
                alt="photo1"
              />
              <figcaption>bill mahoney</figcaption>
            </figure>
          </div>

          <div className="profile">
            <figure data-value="art director">
              <img
                src={
                  require('../../BASE/img/nuestrosProcesosArbol1.png')
                    .default
                }
                alt="photo2"
              />
              <figcaption>saba cabrera</figcaption>
            </figure>
          </div>

          <div className="profile">
            <figure data-value="tech lead">
              <img
                src={
                  require('../../BASE/img/nuestrosProcesosArbol1.png')
                    .default
                }
                alt="photo3"
              />
              <figcaption>shae le</figcaption>
            </figure>
          </div>

          <div className="profile">
            <figure data-value="ux designer">
              <img
                src={
                  require('../../BASE/img/nuestrosProcesosArbol1.png')
                    .default
                }
                alt="photo4"
              />
              <figcaption>skylah lu</figcaption>
            </figure>
          </div>

          <div className="profile">
            <figure data-value="developer">
              <img
                src={
                  require('../../BASE/img/nuestrosProcesosArbol1.png')
                    .default
                }
                alt="photo5"
              />
              <figcaption>griff richards</figcaption>
            </figure>
          </div>
        </div>
        <div className="sectionNuestroTeam__btnSaberMas">
          <button>Saber más</button>
        </div>
      </section>
      <section className="sectionfondoPrevioFooter">
        <img
          src={fondoPrevioFooter}
          alt="fondoPrevioFooter"
        />
      </section>
    </main>
  )
}

export default Home

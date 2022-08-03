import React from 'react'
import './servicios.css'
import ScrollToTop from "react-scroll-to-top";

import imagenDefault from '../../BASE/img/imagenDefault.png'

const Servicios = () => {
  const [checked1, setChecked1] = React.useState(true)
  const [checked2, setChecked2] = React.useState(true)
  const links = [
    { id: 1, href: '#servicio1', text: 'Servicio 1'},
    { id: 2, href: '#servicio2', text: 'Servicio 2'},
    { id: 3, href: '#servicio3', text: 'Servicio 3'},
  ]

  return (
    <div className="containServicios">
      <section className="containServicios__headerServicios">
        <h5>Servicios</h5>
        <h1>¿Lorem ipsum is simply dummy text?</h1>
      </section>
      <section className="containServicios__descServicios">
        <div>
          <h5>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </h5>
        </div>
        <div>
          <img src={imagenDefault} alt="imagenDefault" />
        </div>
      </section>
      <section className="containServicios__infoServicios">
        <section className="infoServicios__navbar">
          {links.map((link) => (
            <a key={link.id} href={link.href}>
              <h5>{link.text}</h5>
              <span>↓</span>
            </a>
          ))}
          {/* <Link to="#servicio1">
            <h5>Servicio 1</h5>
            <span>↓</span>
          </Link>
          <Link to="#servicio2">
            <h5>Servicio 2</h5>
            <span>↓</span>
          </Link>
          <Link to="#servicio3">
            <h5>Servicio 3</h5>
            <span>↓</span>
          </Link> */}
        </section>
        <section className="infoServicios__contain">
          <section id="servicio1" htmlFor="servicio1" className="servicio1">
            <section className="servicio1__info">
              <div>
                <h5>Servicio 1</h5>
              </div>
              <div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum dicta totam ullam nam repellat mollitia.
                  Harum eaque perspiciatis quia nesciunt earum laudantium ipsam
                  dolore, corporis modi velit esse? Sequi?
                </p>
              </div>
            </section>
            <section className="servicio1__carrusel">
              <div id="scene">
                <div id="left-zone">
                  <ul className="list">
                    <li className="item">
                      <input
                        type="radio"
                        id="Lorem 1"
                        name="basic_carousel1"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate harum dicta totam ullam nam repellat mollitia.
                        Harum eaque perspiciatis quia."
                        defaultChecked={checked1}
                        onChange={() => setChecked1(!checked1)}
                      />
                      <label className="label_strawberry" htmlFor="Lorem 1">
                        Lorem 1
                      </label>
                      <div className="content content_strawberry">
                        <span className="picto"></span>
                        <h1>Lorem 1</h1>
                        <p>
                          Lorem 1 (or simply strawberry /ˈstrɔːbᵊri/; Fragaria ×
                          ananassa) is a widely grown hybrid species of the
                          genus Fragaria (collectively known as the
                          strawberries)
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Lorem 2"
                        name="basic_carousel1"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate harum dicta totam ullam nam repellat mollitia.
                        Harum eaque perspiciatis quia."
                      />
                      <label className="label_banana" htmlFor="Lorem 2">
                        Lorem 2
                      </label>
                      <div className="content content_banana">
                        <span className="picto"></span>
                        <h1>Lorem 2</h1>
                        <p>
                          Lorem 2 is an edible fruit, botanically a berry,
                          produced by several kinds of large herbaceous
                          flowering plants in the genus Musa.
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Lorem 3"
                        name="basic_carousel1"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate harum dicta totam ullam nam repellat mollitia.
                        Harum eaque perspiciatis quia."
                      />
                      <label className="label_apple" htmlFor="Lorem 3">
                        Lorem 3
                      </label>
                      <div className="content content_apple">
                        <span className="picto"></span>
                        <h1>Lorem 3</h1>
                        <p>
                          Lorem 3 (Malus domestica) is a deciduous tree in the
                          rose family best known for its sweet, pomaceous fruit,
                          the apple. It is cultivated worldwide as a fruit tree,
                          and is the most widely grown species in the genus
                          Malus.
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Lorem 4"
                        name="basic_carousel1"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate harum dicta totam ullam nam repellat mollitia.
                        Harum eaque perspiciatis quia."
                      />
                      <label className="label_orange" htmlFor="Lorem 4">
                        Lorem 4
                      </label>
                      <div className="content content_orange">
                        <span className="picto"></span>
                        <h1>Lorem 4</h1>
                        <p>
                          Lorem 4 (specifically, the sweet orange) is the fruit
                          of the citrus species Citrus × sinensis in the family
                          Rutaceae.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="middle-border"></div>
                <div id="right-zone"></div>
              </div>
            </section>
          </section>
          <section id="servicio2" className="servicio2">
            <section className="servicio2__info">
              <div>
                <h5>Servicio 2</h5>
              </div>
              <div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum dicta totam ullam nam repellat mollitia.
                  Harum eaque perspiciatis quia nesciunt earum laudantium ipsam
                  dolore, corporis modi velit esse? Sequi?
                </p>
              </div>
            </section>
            <section className="servicio2__articles">
              <article>
                <img src={imagenDefault} alt="imagenDefault" />
                <p>
                  Lorem ipsum pola if so you dolor sit amet solo trae
                  consectetur adipisicing elit.
                </p>
              </article>
              <article>
                <img src={imagenDefault} alt="imagenDefault" />
                <p>
                  Lorem ipsum pola if so you dolor sit amet solo trae
                  consectetur adipisicing elit.
                </p>
              </article>
              <article>
                <img src={imagenDefault} alt="imagenDefault" />
                <p>
                  Lorem ipsum pola if so you dolor sit amet solo trae
                  consectetur adipisicing elit.
                </p>
              </article>
              <article>
                <img src={imagenDefault} alt="imagenDefault" />
                <p>
                  Lorem ipsum pola if so you dolor sit amet solo trae
                  consectetur adipisicing elit.
                </p>
              </article>
            </section>
          </section>
          <section className="previoServicio3">
            <div>
              <h1>Lorem ipsum is simply dummy text</h1>
            </div>
            <div>
              <img src={imagenDefault} alt="imagenDefault" />
            </div>
          </section>
          <section id="servicio3" className="servicio3">
            <section className="servicio3__info">
              <div>
                <h5>Servicio 3</h5>
              </div>
              <div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum dicta totam ullam nam repellat mollitia.
                  Harum eaque perspiciatis quia nesciunt earum laudantium ipsam
                  dolore, corporis modi velit esse? Sequi?
                </p>
              </div>
            </section>
            <section className="servicio3__carrusel">
              <div id="scene">
                <div id="left-zone">
                  <ul className="list">
                    <li className="item">
                      <input
                        type="radio"
                        id="Ipsum 1"
                        name="basic_carousel2"
                        value="Ipsum 1 (or simply strawberry
                          /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown
                          hybrid species of the genus Fragaria (collectively
                          known as the strawberries)"
                        defaultChecked={checked2}
                        onChange={() => setChecked2(!checked2)}
                      />
                      <label className="label_strawberry" htmlFor="Ipsum 1">
                        Ipsum 1
                      </label>
                      <div className="content content_strawberry">
                        <span className="picto"></span>
                        <h1>Ipsum 1</h1>
                        <p>
                          Ipsum 1 (or simply strawberry /ˈstrɔːbᵊri/; Fragaria ×
                          ananassa) is a widely grown hybrid species of the
                          genus Fragaria (collectively known as the
                          strawberries)
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Ipsum 2"
                        name="basic_carousel2"
                        value="Ipsum 2 is an edible fruit, botanically a berry,
                        produced by several kinds of large herbaceous
                        flowering plants in the genus Musa."
                      />
                      <label className="label_banana" htmlFor="Ipsum 2">
                        Ipsum 2
                      </label>
                      <div className="content content_banana">
                        <span className="picto"></span>
                        <h1>Ipsum 2</h1>
                        <p>
                          Ipsum 2 is an edible fruit, botanically a berry,
                          produced by several kinds of large herbaceous
                          flowering plants in the genus Musa.
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Ipsum 3"
                        name="basic_carousel2"
                        value="Ipsum 3 (Malus domestica) is a deciduous tree
                        in the rose family best known for its sweet, pomaceous
                        fruit, the apple. It is cultivated worldwide as a
                        fruit tree, and is the most widely grown species in
                        the genus Malus."
                      />
                      <label className="label_apple" htmlFor="Ipsum 3">
                        Ipsum 3
                      </label>
                      <div className="content content_apple">
                        <span className="picto"></span>
                        <h1>Ipsum 3</h1>
                        <p>
                          Ipsum 3 (Malus domestica) is a deciduous tree in the
                          rose family best known for its sweet, pomaceous fruit,
                          the apple. It is cultivated worldwide as a fruit tree,
                          and is the most widely grown species in the genus
                          Malus.
                        </p>
                      </div>
                    </li>
                    <li className="item">
                      <input
                        type="radio"
                        id="Ipsum 4"
                        name="basic_carousel2"
                        value="Ipsum 4 (specifically, the sweet orange) is the
                        fruit of the citrus species Citrus × sinensis in the
                        family Rutaceae."
                      />
                      <label className="label_orange" htmlFor="Ipsum 4">
                        Ipsum 4
                      </label>
                      <div className="content content_orange">
                        <span className="picto"></span>
                        <h1>Ipsum 4</h1>
                        <p>
                          Ipsum 4 (specifically, the sweet orange) is the fruit
                          of the citrus species Citrus × sinensis in the family
                          Rutaceae.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="middle-border"></div>
                <div id="right-zone"></div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <ScrollToTop top='1000' viewBox="0 0 256 256" />
    </div>
  )
}

export default Servicios

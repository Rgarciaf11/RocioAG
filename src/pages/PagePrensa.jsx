import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import './PagePrensa.css'

const CATEGORIAS = [
  'Speaker en ferias y congresos del sector',
  'Congreso Mujeres en Gastronomía',
  'Apariciones en prensa especializada',
  'Jurado en concursos gastronómicos',
  'Colaboraciones en radio y televisión',
  'Embajadora de marca y presentaciones',
  'Cobertura de eventos gastronómicos',
]

const APARICIONES = [
  { tipo: 'Speaker', titulo: 'Speaker en Feria Gastronómica', img: 'SpeakerFeria.jpg' },
  { tipo: 'Congreso', titulo: 'Congreso Mujeres en Gastronomía', img: 'CongresoMujeresEnGastronomia.jpg' },
  { tipo: 'Prensa', titulo: 'Apariciones en prensa', img: 'RocioPrensa.jpg' },
  { tipo: 'Radio', titulo: 'Terrena Radio', img: 'TerrenaRadio.jpg' },
  { tipo: 'Feria', titulo: 'Feria de Valencia', img: 'FeriaValencia.jpg' },
  { tipo: 'Feria', titulo: 'Feria de Girona', img: 'FeriaGirona.jpg', position: 'center 20%' },
]

export default function PagePrensa() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i === 0 ? APARICIONES.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === APARICIONES.length - 1 ? 0 : i + 1))

  return (
    <div className="page-prensa">

      <PageHeader
        eyebrow="Prensa & Eventos"
        title={<>Intervenciones,<br />speaker y <em>jurado.</em></>}
        lead="Rocío Riquelme participa activamente en ferias, congresos, medios de comunicación y concursos gastronómicos como experta del sector."
      />

      {/* CATEGORÍAS + CARRUSEL */}
      <section className="pp-main">

        {/* Lista de categorías */}
        <div className="pp-categorias">
          <p className="eyebrow pp-categorias__eyebrow">Ámbitos</p>
          <ul className="pp-categorias__list">
            {CATEGORIAS.map((c, i) => (
              <li key={i} className="pp-categoria">
                <span className="pp-categoria__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="pp-categoria__text">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Carrusel */}
        <div className="pp-carrusel">
          <div className="pp-carrusel__main">
            <img
              src={`/img/${APARICIONES[current].img}`}
              alt={APARICIONES[current].titulo}
              style={{ objectPosition: APARICIONES[current].position || 'center center' }}
            />
            <div className="pp-carrusel__info">
              <span className="pp-carrusel__tipo">{APARICIONES[current].tipo}</span>
              <h3 className="pp-carrusel__titulo">{APARICIONES[current].titulo}</h3>
            </div>
          </div>

          <div className="pp-carrusel__bottom">
            <div className="pp-carrusel__controls">
              <button className="pp-carrusel__btn" onClick={prev} aria-label="Anterior">←</button>
              <span className="pp-carrusel__count">
                {String(current + 1).padStart(2, '0')} / {String(APARICIONES.length).padStart(2, '0')}
              </span>
              <button className="pp-carrusel__btn" onClick={next} aria-label="Siguiente">→</button>
            </div>

            <div className="pp-carrusel__thumbs">
              {APARICIONES.map((a, i) => (
                <button
                  key={i}
                  className={`pp-thumb ${i === current ? 'pp-thumb--active' : ''}`}
                  onClick={() => setCurrent(i)}
                >
                  <img
                    src={`/img/${a.img}`}
                    alt={a.titulo}
                    style={{ objectPosition: a.position || 'center center' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="pp-cta">
        <p className="eyebrow pp-cta__eyebrow">Contacto de prensa</p>
        <h2 className="pp-cta__title">
          ¿Quieres contar con Rocío<br />en tu evento o medio?
        </h2>
        <p className="pp-cta__sub">
          Para colaboraciones, entrevistas, ponencias o participación como jurado,
          escríbenos y lo organizamos.
        </p>
        <a href="/contacto" className="btn-dark">Contactar con Rocío →</a>
      </section>

    </div>
  )
}
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      {/* Left — copy */}
      <div className="hero__main">
        <div className="hero__top">
          <p className="hero__tag">
            <span className="hero__tag-dot" />
            Asesoría gastronómica · Alicante &amp; España
          </p>
          <h1 className="hero__title">
            Tu restaurante,<br />
            <em>rentable</em><br />
            y sin excusas.
          </h1>
        </div>

        <div className="hero__bottom">
          <p className="hero__sub">
            Asesoramiento completo del local, sala, cocina e instalaciones.
            Para hosteleros que quieren dejar de sobrevivir y empezar a crecer.
          </p>
          <div className="hero__btns">
            <Link to="/contacto" className="btn-dark">Empezar ahora</Link>
            <a href="#servicios" className="btn-ghost">Ver servicios →</a>
          </div>
        </div>
      </div>

      {/* Right — stats panel */}
      <div className="hero__panel">
        <div className="hero__panel-bg" />
        <p className="hero__panel-label">Resultados que hablan</p>
        <ul className="hero__stats">
          <li className="hero__stat">
            <span className="hero__stat-n">+10</span>
            <span className="hero__stat-l">Años de experiencia</span>
          </li>
          <li className="hero__stat">
            <span className="hero__stat-n">100+</span>
            <span className="hero__stat-l">Establecimientos asesorados</span>
          </li>
          <li className="hero__stat">
            <span className="hero__stat-n">13</span>
            <span className="hero__stat-l">Áreas de servicio</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

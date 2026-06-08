import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="/" className="navbar__logo">
        Adelante <em>Gastronómica</em>
      </a>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
        <li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
        <li><a href="#testimonios" onClick={() => setMenuOpen(false)}>Colaboraciones</a></li>
      </ul>

      <a href="#contacto" className="navbar__cta btn-dark">
        Contactar
      </a>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

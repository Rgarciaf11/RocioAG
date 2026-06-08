import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/servicios',      label: 'Servicios' },
  { to: '/sobre-mi',       label: 'Sobre mí' },
  { to: '/colaboraciones', label: 'Colaboraciones' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { pathname }              = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        Adelante <em>Gastronómica</em>
      </Link>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={pathname === link.to ? 'navbar__link--active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/#contacto" className="navbar__cta btn-dark">
        Contactar
      </Link>

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

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        Adelante <em>Gastronómica</em>
      </div>

      <ul className="footer__links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="/privacidad">Privacidad</a></li>
        <li><a href="/cookies">Cookies</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.instagram.com/adelantegastronomica/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://es.linkedin.com/in/adelante-gastronómica-rocío-riquelme-80591922a" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

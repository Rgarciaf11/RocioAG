import './Footer.css'

const IG_POSTS = [
  { id: 1, img: 'tac.jpg' },
  { id: 2, img: 'tac2.jpg' },
  { id: 3, img: 'QuieroHablarConRocio.jpg' },
  { id: 4, img: 'ArrocesPrivados.jpg' },
]

export default function Footer() {
  return (
    <footer className="footer">

      {/* Instagram feed strip */}
      <div className="footer__ig">
        <div className="footer__ig-header">
          <div className="footer__ig-title-block">
            <p className="footer__ig-eyebrow">Instagram</p>
            <h3 className="footer__ig-title">Síguenos en Instagram</h3>
          </div>
          <a
            href="https://www.instagram.com/adelantegastronomica/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__ig-handle"
          >
            @adelantegastronomica ↗
          </a>
        </div>

        <div className="footer__ig-grid">
          {IG_POSTS.map(post => (
            <a
              key={post.id}
              href="https://www.instagram.com/adelantegastronomica/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__ig-post"
            >
              <img src={`/img/${post.img}`} alt="Post de Instagram" className="footer__ig-post-img" />
              <div className="footer__ig-post-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bar">
        <div className="footer__logo">
          Adelante <em>Gastronómica</em>
        </div>

        <ul className="footer__links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/sobre-mi">Sobre mí</a></li>
          <li><a href="/colaboraciones">Colaboraciones</a></li>
          <li><a href="/#contacto">Contacto</a></li>
          <li><a href="/privacidad">Privacidad</a></li>
          <li><a href="/cookies">Cookies</a></li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/adelantegastronomica/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a
            href="https://es.linkedin.com/in/adelante-gastron%C3%B3mica-roc%C3%ADo-riquelme-80591922a"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="4" />
              <line x1="8" y1="11" x2="8" y2="17" />
              <line x1="8" y1="8" x2="8" y2="8.5" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 11v6M12 14c0-1.7 1-3 2.5-3S17 13 17 14.5V17" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer__copy">
        © {new Date().getFullYear()} Adelante Gastronómica · Rocío Riquelme
      </div>

    </footer>
  )
}

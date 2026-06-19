import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'María Luisa Rivera',
    time: 'hace 9 meses',
    text: 'Rocío Riquelme de Adelante Gastronómica es un puntal básico para mi negocio del restaurante. A parte de llevarme todos los permisos, escandallos, inspecciones sanitarias etc., me acompaña en asesoramiento en mi cocina.',
  },
  {
    name: 'Jorge Yáñez',
    time: 'hace 4 años',
    text: 'Muy buenos servicios, un placer trabajar de la mano de Rocío, ayudó en mi establecimiento desde el minuto 0 y alcanzó las expectativas que siempre quise tener en mi negocio. Sin duda cuento con ella siempre que mi restaurante lo necesita.',
  },
  {
    name: 'María Ocaña Torres',
    time: 'hace 4 años',
    text: 'Como cocinera Rocío me dio formaciones y su ayuda en la organización fue fundamental para seguir creciendo y llegar a Chef, siempre aprenderé de ella.',
  },
  {
    name: 'Pedro Millán',
    time: 'hace 4 años',
    text: 'Contamos con sus servicios en varios eventos, es una gran profesional asesorando, gestionando equipos y elaborando menús atractivos y diferentes. Sin duda recomendable.',
  },
  {
    name: 'María Alejandra Cedeño',
    time: 'hace una semana',
    text: 'Trabajar con Rocío Riquelme de Adelante Gastronómica ha sido una experiencia excelente. Su asesoría nos ha aportado claridad, criterio y herramientas prácticas para mejorar la gestión gastronómica del negocio. Destacamos su profesionalidad, cercanía y capacidad para entender las necesidades reales de un restaurante. Muy recomendable para cualquier proyecto de hostelería que quiera crecer con orden y estrategia.',
  },
  {
    name: 'Jennifer Miñarro',
    time: 'hace 2 años',
    text: 'Mi vida ha cambiado. He pasado de vivir estresada con un negocio a cuestas, a saber cómo llevarlo, optimizar mis horas y ganar más trabajando menos.',
  },
]

function getInitial(name) {
  return name.charAt(0).toUpperCase()
}

function getColor(name) {
  const colors = ['#4285F4', '#EA4335', '#34A853', '#FBBC05', '#9C27B0', '#00BCD4']
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__header">
        <div className="testimonials__header-left">
          <p className="eyebrow testimonials__eyebrow">Reseñas</p>
          <h2 className="section-title light testimonials__title">
            Lo que dicen quienes<br />ya dieron el paso.
          </h2>
        </div>
        <div className="testimonials__score">
          <div className="testimonials__score-num">5.0</div>
          <div className="testimonials__score-stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="#FBBC05">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="testimonials__score-label">
            Basado en {TESTIMONIALS.length} reseñas de Google
          </div>
          <div className="testimonials__google-logo">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </div>
        </div>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className="testi-card">
            <div className="testi-card__top">
              <div
                className="testi-card__avatar"
                style={{ background: getColor(t.name) }}
              >
                {getInitial(t.name)}
              </div>
              <div className="testi-card__meta">
                <span className="testi-card__name">{t.name}</span>
                <span className="testi-card__time">{t.time}</span>
              </div>
              <div className="testi-card__google">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </div>
            <div className="testi-card__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="#FBBC05">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="testi-card__text">{t.text}</p>
          </article>
        ))}
      </div>

      <div className="testimonials__footer">
        <a
          href="https://www.google.com/maps/search/adelante+gastronomica"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonials__google-btn"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Ver todas las reseñas en Google
        </a>
      </div>
    </section >
  )
}
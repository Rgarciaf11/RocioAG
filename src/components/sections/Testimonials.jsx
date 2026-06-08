import './Testimonials.css'

const TESTIMONIALS = [
  {
    text: 'Mi vida ha cambiado. He pasado de vivir estresada con un negocio a cuestas, a saber cómo llevarlo, optimizar mis horas y ganar más trabajando menos.',
    author: 'Jennifer Miñarro',
  },
  {
    text: 'Me acompañó durante todo el proceso de apertura. Fue de gran ayuda contar con una experta en gastronomía, sanidad y licencias. Actualmente nos sigue supervisando.',
    author: 'Manuel Martínez',
  },
  {
    text: 'Tuve la oportunidad de trabajar con Rocío en un gran evento en Dubái. Su experiencia y manera de aconsejar están siendo de gran ayuda para mi empresa.',
    author: 'María Luisa Rivera',
  },
  {
    text: 'La organización y la gestión de Rocío me ayudaron a abrir la perspectiva de mi negocio. Mis empleados son desde entonces más productivos.',
    author: 'Fran Sellés',
  },
  {
    text: 'Dar aire fresco a nuestra carta y la formación con el personal de cocina fue un antes y un después para nuestra cervecería.',
    author: 'Ana Rubio',
  },
  {
    text: 'Ojalá pudiera volver al inicio para contratar los servicios de Rocío mucho antes. Imprescindible para asentar las bases y emprender con cabeza.',
    author: 'Silvia de Félix',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__header">
        <p className="eyebrow testimonials__eyebrow">Testimonios</p>
        <h2 className="section-title light testimonials__title">
          Lo que dicen quienes<br />ya dieron el paso.
        </h2>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className="testi-card">
            <span className="testi-card__open">"</span>
            <p className="testi-card__text">{t.text}</p>
            <div className="testi-card__footer">
              <span className="testi-card__line" />
              <span className="testi-card__author">{t.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

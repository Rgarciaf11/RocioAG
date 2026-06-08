import './About.css'

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      {/* Left — photo placeholder */}
      <div className="about__img-col">
        <div className="about__img-placeholder">
          <svg className="about__img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span className="about__img-label">Foto de Rocío Riquelme</span>
        </div>
        <div className="about__badge">
          <span className="about__badge-dot" />
          Delegada · Mujeres en Gastronomía
        </div>
      </div>

      {/* Right — text */}
      <div className="about__text">
        <p className="eyebrow">Sobre mí</p>
        <h2 className="section-title about__title">
          Criada entre fogones<br />desde 1995.
        </h2>
        <blockquote className="about__quote">
          "La cocina es una experiencia.<br />La gastronomía, un arte."
        </blockquote>
        <p className="about__body">
          Soy <strong>Rocío Riquelme</strong>, asesora gastronómica y formadora hostelera.
          Nacida en Alicante — la tierra de los arroces —, con la gastronomía como herencia
          de toda una saga familiar de cocineros.
        </p>
        <p className="about__body">
          Viajo por establecimientos de toda España asesorando y formando a profesionales
          que comparten mi entusiasmo por la hostelería. Si has llegado hasta aquí,
          seguro que eres uno de ellos.
        </p>
        <a href="#sobre-mi" className="btn-dark about__btn">
          Saber más de mí →
        </a>
      </div>
    </section>
  )
}

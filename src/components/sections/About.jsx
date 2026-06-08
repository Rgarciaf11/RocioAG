import './About.css'

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__img-col">
        <img src="/img/FotoRocio.jpg" alt="Rocío Riquelme" className="about__img-real" />
        <div className="about__badge">
          <span className="about__badge-dot" />
          Delegada · Mujeres en Gastronomía
        </div>
      </div>

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
        <a href="/sobre-mi" className="btn-dark about__btn">
          Saber más de mí →
        </a>
      </div>
    </section>
  )
}
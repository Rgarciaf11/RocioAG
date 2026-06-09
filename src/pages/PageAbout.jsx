import './PageAbout.css'
import { Link } from 'react-router-dom'

export default function PageAbout() {
  return (
    <div className="page-about">

      <section className="pa-hero">
        <div className="pa-hero__text">
          <p className="eyebrow">Sobre mí</p>
          <h1 className="pa-hero__title">
            Me presento,<br />soy <em>Rocío Riquelme</em>
          </h1>
          <p className="pa-hero__lead">
            Criada entre fogones desde 1995. Nacida en la tierra de los arroces, Alicante.
            Amante de la gastronomía y sus productos.
          </p>
        </div>
        <div className="pa-hero__img">
          <img src="/img/FotoRocio.jpg" alt="Rocío Riquelme" className="pa-hero__img-real" />
        </div>
      </section>

      <section className="pa-bio">
        <div className="pa-bio__quote">
          <blockquote>
            "De mente inquieta y hambre de conocimiento. Mi plato favorito,
            la cocina autóctona. El mejor ingrediente, la pasión por la hostelería."
          </blockquote>
        </div>
        <div className="pa-bio__text">
          <p>
            Considero la gastronomía un arte. Descubrir sus productos se ha convertido
            en uno de mis hobbies y estudiar los ingredientes para explotar su sabor y
            poder transmitir sus emociones con ellos es mi forma de comunicarme.
          </p>
          <p>
            Durante años he cocinado a fuego lento mi formación en cocina, añadiendo
            cucharadas de conocimiento de mis referentes, mi familia — toda una saga de
            cocineros. Ahora formo en hostelería a profesionales del sector con un método
            de aprendizaje directo y práctico.
          </p>
          <p>
            En la actualidad viajo por diferentes establecimientos de hostelería,
            asesorando y formando a profesionales que comparten como yo su entusiasmo
            por la gastronomía. Si has llegado hasta aquí es porque eres uno de ellos.
            <strong> ¿Empezamos?</strong>
          </p>
          <Link to="/contacto" className="btn-dark">Hablamos</Link>
        </div>
      </section>

      <section className="pa-meg">
        <div className="pa-meg__content">
          <p className="eyebrow">Delegada</p>
          <h2 className="pa-meg__title">Mujeres en Gastronomía</h2>
          <p className="pa-meg__desc">
            Rocío es delegada de <strong>Mujeres en Gastronomía (MEG)</strong>, una
            asociación que trabaja por la visibilidad e igualdad de las mujeres en el
            sector gastronómico. Una labor que refleja su compromiso con la profesión
            más allá del asesoramiento.
          </p>
        </div>
        <div className="pa-meg__gallery">
          {['MujeresGastronomia.jpg', 'MujeresGastronomia2.jpg', 'MujeresGastronomia3.jpg', 'MujeresGastronomia4.jpg'].map((img, i) => (
            <div key={i} className="pa-meg__photo">
              <img src={`/img/${img}`} alt={`Evento Mujeres en Gastronomía ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="pa-values">
        <p className="eyebrow pa-values__eyebrow">Mis valores</p>
        <h2 className="pa-values__title">Lo que llevo a cada proyecto</h2>
        <div className="pa-values__grid">
          {[
            { n: '01', title: 'Pasión', desc: 'La hostelería no es solo un negocio, es una vocación. Trabajo con el mismo entusiasmo en cada proyecto.' },
            { n: '02', title: 'Honestidad', desc: 'Te diré lo que necesitas escuchar, no lo que quieres oír. El diagnóstico real es la base del cambio real.' },
            { n: '03', title: 'Método', desc: 'Cada asesoramiento sigue un proceso estructurado y probado, adaptado a las particularidades de tu negocio.' },
            { n: '04', title: 'Resultados', desc: 'No mido el éxito en horas de consultoría sino en el impacto real sobre la rentabilidad de tu establecimiento.' },
          ].map(v => (
            <div key={v.n} className="pa-value">
              <span className="pa-value__num">{v.n}</span>
              <h3 className="pa-value__title">{v.title}</h3>
              <p className="pa-value__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
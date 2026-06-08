import './PageBlog.css'

const COLABORACIONES = [
  {
    id: 'gastronova',
    tag: 'Consultoría',
    title: 'Cómo montar tu restaurante',
    img: 'ComoMontarTuRestaurante.jpg',
    img2: 'ComoMontarTuRestaurante2.jpg',
    body: 'En Gastronova Consulting transformamos ideas gastronómicas en negocios rentables y escalables. Somos un equipo multidisciplinar con más de 10 años de experiencia en el sector de la restauración y la consultoría, especializado en diseñar, estructurar y optimizar negocios gastronómicos con visión de crecimiento.',
    cta: 'Más info',
    url: 'https://comomontarturestaurante.com/equipo/',
  },
  {
    id: 'blw',
    tag: 'Taller',
    title: 'Taller alimentación complementaria',
    img: 'tac.jpg',
    body: 'El inicio de la Alimentación Complementaria puede traer muchas dudas a la familia. ¿Cuándo es el mejor momento para incluir alimentos sólidos? ¿Los purés son la única opción? ¿Es seguro el método BLW? En este taller te daremos todas las herramientas para iniciar la Alimentación Complementaria de forma segura con tu bebé.',
    objetivos: [
      'Conocerás las opciones para iniciar la Alimentación Complementaria con tu bebé.',
      'Aprenderás a detectar cuándo es el momento más indicado para empezar con el método BLW.',
      'Sabrás qué alimentos son los más indicados y en qué medida incluirlos en la dieta.',
      'Aprenderás cómo presentar los alimentos y cuáles son susceptibles de atragantamiento.',
      'Lograrás que tu bebé disfrute con la comida y cree una relación sana desde sus primeros meses.',
    ],
    beneficios: [
      { title: 'Hábitos saludables', desc: 'Dieta rica en frutas, verduras, hidratos de calidad y proteínas desde el principio.' },
      { title: 'Alimentación en familia', desc: 'Los lactantes comerán lo mismo que el resto, sirviendo los padres como modelo a seguir.' },
      { title: 'Desarrollo psicomotor', desc: 'El bebé maneja los alimentos con sus manos, potenciando coordinación y psicomotricidad.' },
      { title: 'Prevención de la obesidad', desc: 'Los alimentos enteros generan saciedad natural y una relación sana con la comida.' },
    ],
    extra: 'Te llevarás un recetario lleno de ideas para organizarte mejor y disfrutar de la Alimentación Complementaria.',
    cta: 'Reservar plaza',
    url: 'https://nombredemujer.es/event/taller-alimentacion-complementaria-blw-3/',
  },
]

export default function PageBlog() {
  return (
    <div className="page-blog">

      <section className="pb-hero">
        <p className="eyebrow">Colaboraciones</p>
        <h1 className="pb-hero__title">
          Proyectos y colaboraciones<br />con otros profesionales.
        </h1>
        <p className="pb-hero__sub">
          Iniciativas en las que Rocío participa junto a otros expertos del sector.
        </p>
      </section>

      <section className="pb-list">

        {/* COLABORACIÓN 1 — Gastronova */}
        <article className="pb-colab">
          <div className="pb-colab__img pb-colab__img--double">
            <img src="/img/ComoMontarTuRestaurante.jpg" alt="Cómo montar tu restaurante" />
            <img src="/img/ComoMontarTuRestaurante2.jpg" alt="Cómo montar tu restaurante equipo" />
          </div>
          <div className="pb-colab__body">
            <span className="pb-colab__tag">{COLABORACIONES[0].tag}</span>
            <h2 className="pb-colab__title">{COLABORACIONES[0].title}</h2>
            <p className="pb-colab__text">{COLABORACIONES[0].body}</p>
            <a
              href={COLABORACIONES[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              {COLABORACIONES[0].cta} →
            </a>
          </div>
        </article>

        {/* COLABORACIÓN 2 — BLW */}
        <article className="pb-colab pb-colab--reverse">
          <div className="pb-colab__img">
            <img src={`/img/${COLABORACIONES[1].img}`} alt={COLABORACIONES[1].title} />
          </div>
          <div className="pb-colab__body">
            <span className="pb-colab__tag">{COLABORACIONES[1].tag}</span>
            <h2 className="pb-colab__title">{COLABORACIONES[1].title}</h2>
            <p className="pb-colab__text">{COLABORACIONES[1].body}</p>

            <div className="pb-objetivos">
              <p className="pb-objetivos__label">Objetivos del taller</p>
              <ul>
                {COLABORACIONES[1].objetivos.map((o, i) => (
                  <li key={i} className="pb-objetivo">
                    <span className="pb-objetivo__dot" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pb-beneficios">
              <p className="pb-beneficios__label">Beneficios del método BLW</p>
              <div className="pb-beneficios__grid">
                {COLABORACIONES[1].beneficios.map((b, i) => (
                  <div key={i} className="pb-beneficio">
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="pb-extra">{COLABORACIONES[1].extra}</p>
            <a
              href={COLABORACIONES[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              {COLABORACIONES[1].cta} →
            </a>
          </div>
        </article>

      </section>
    </div>
  )
}
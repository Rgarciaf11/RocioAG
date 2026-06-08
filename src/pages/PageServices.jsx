import './PageServices.css'

const SERVICES = [
  {
    num: '01',
    name: 'Gestión y administración de restaurantes',
    desc: 'Tendrás los conocimientos y herramientas necesarias para gestionar y administrar todas las áreas de tu restaurante. Conseguirás reducir costes, optimizar tu gestión de proveedores, contar con un equipo alineado a tu filosofía y tendrás más clientes.',
  },
  {
    num: '02',
    name: 'Apertura de restaurantes',
    desc: 'Te acompaño en el montaje de tu restaurante. Desarrollaremos un plan de negocio, crearemos una experiencia en tu local, implementaremos una oferta gastronómica actual, aprenderás sobre la gestión y administración de tu negocio, diseñaremos un plan online, y mucho más.',
  },
  {
    num: '03',
    name: 'Estudio de la competencia',
    desc: 'Este análisis es vital para saber cuál es nuestro tipo de cliente, a quién vamos dirigidos, para poder mejorar la empresa y los servicios que ofrecemos. Con datos reales del mercado tomarás decisiones informadas.',
  },
  {
    num: '04',
    name: 'Gestión y administración de cocina',
    desc: 'La gestión es fundamental para la rentabilidad del negocio. En la cocina es primordial para poder llevar a cabo una carta y una oferta gastronómica. Tener esto controlado con escandallos y fichas técnicas nos ayudará a realizar nuestras tareas y fijar precios correctamente.',
  },
  {
    num: '05',
    name: 'Recursos humanos y equipo',
    desc: 'Elegir bien al equipo es la clave de la eficiencia en un establecimiento de hostelería. Un equipo integrado, profesional y que sepa seguir el sistema de trabajo hará que todo fluya, y los servicios serán mucho más eficientes y rentables.',
  },
  {
    num: '06',
    name: 'Control de calidad',
    desc: 'Esta debe ser la primera meta: además de gestionar bien hay que mantener unos estándares de calidad para que nuestro cliente nos vuelva a elegir. El control sistemático garantiza la consistencia en cada servicio.',
  },
  {
    num: '07',
    name: 'APPCC',
    desc: 'La normativa europea 852/2004 obliga a los establecimientos de restauración a aplicar todos los planes del APPCC para garantizar la seguridad alimentaria. El control es primordial para detectar puntos de peligro y aplicar medidas correctivas a tiempo.',
  },
  {
    num: '08',
    name: 'Creación o actualización de carta',
    desc: 'La carta es nuestro escaparate. Crearla nos dará la identidad. Es importante dedicarle el tiempo necesario para que nuestra oferta gastronómica sea la adecuada e ideal. La actualización es primordial ya que el cliente espera novedades y tendencias continuamente.',
  },
  {
    num: '09',
    name: 'Estudio y actualización de la oferta gastronómica',
    desc: 'El estudio y la actualización de nuestra oferta será la base del negocio. La oferta tiene que estar muy bien definida porque de ella se forjarán muchos más aspectos del establecimiento, desde el posicionamiento hasta la fijación de precios.',
  },
  {
    num: '10',
    name: 'Sistema de trabajo',
    desc: 'El sistema de trabajo en un establecimiento es la garantía de eficacia. Estableciéndolo conseguiremos garantizar el desempeño de tareas y funciones siempre de la misma manera, reduciendo errores y aumentando la productividad del equipo.',
  },
  {
    num: '11',
    name: 'Asesoramiento del local e instalaciones',
    desc: 'La imagen y estética de nuestra marca tiene que tener coherencia con nuestras instalaciones. Con ello podremos ofrecer una experiencia completa a nuestro cliente, desde que entra por la puerta hasta que se va.',
  },
  {
    num: '12',
    name: 'Estudio de la rentabilidad',
    desc: 'La rentabilidad es el deseo de cualquier negocio. Para alcanzarla de la manera más óptima posible debemos realizar una buena gestión de todos los ámbitos del establecimiento y tomar las decisiones correctas basadas en datos reales.',
  },
  {
    num: '13',
    name: 'Formación presencial y online personalizada',
    desc: 'Formación sala y cocina, formación en arroces y paellas, formación en gastronomía nacional y formación en estrategia de venta. Adaptada completamente a las necesidades de tu equipo y tu establecimiento.',
  },
]

const BENEFITS = [
  'Conseguirás hacer un negocio rentable, disminuyendo sus costes y aumentando el ahorro anual.',
  'Lograremos optimizar tu plantilla, mejorando su rendimiento y los beneficios de tu restaurante.',
  'Aplicando técnicas de neuromarketing en la carta, lograremos aumentar tus ingresos.',
  'Tendrás todos tus procesos optimizados para un funcionamiento óptimo desde dentro.',
]

export default function PageServices() {
  return (
    <div className="page-services">

      {/* HERO */}
      <section className="ps-hero">
        <div className="ps-hero__content">
          <p className="eyebrow">Servicios</p>
          <h1 className="ps-hero__title">
            Con el asesoramiento gastronómico<br />
            conseguirás que tu negocio sea<br />
            <em>óptimo y rentable.</em>
          </h1>
          <a href="/#contacto" className="btn-dark ps-hero__cta">
            Empezar ahora
          </a>
        </div>
        <div className="ps-hero__panel">
          <div className="ps-hero__panel-bg" />
          <p className="ps-hero__panel-label">¿Trabajamos juntos?</p>
          <ul className="ps-benefits">
            {BENEFITS.map((b, i) => (
              <li key={i} className="ps-benefit">
                <span className="ps-benefit__dot" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="ps-list">
        <div className="ps-list__grid">
          {SERVICES.map(s => (
            <article key={s.num} className="ps-card">
              <span className="ps-card__num">{s.num}</span>
              <div className="ps-card__body">
                <h2 className="ps-card__name">{s.name}</h2>
                <p className="ps-card__desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ps-cta">
        <p className="eyebrow ps-cta__eyebrow">¿Hablamos?</p>
        <h2 className="ps-cta__title">
          Imagina aprender a tener el control<br />
          de tu negocio de hostelería.
        </h2>
        <p className="ps-cta__sub">
          Una llamada de 30 minutos para ver cómo puedo ayudarte. Sin compromisos.
        </p>
        <a href="/#contacto" className="btn-dark">Contactar con Rocío</a>
      </section>

    </div>
  )
}

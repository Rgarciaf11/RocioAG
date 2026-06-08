import './Services.css'

const SERVICES = [
  {
    num: '01',
    name: 'Gestión y administración de restaurantes',
    desc: 'Herramientas para reducir costes, optimizar proveedores y alinear a tu equipo con la filosofía de tu negocio.',
  },
  {
    num: '02',
    name: 'Apertura de restaurantes',
    desc: 'Te acompaño desde el plan de negocio hasta el primer servicio: licencias, oferta gastronómica, equipo y más.',
  },
  {
    num: '03',
    name: 'Estudio de la competencia',
    desc: 'Análisis del mercado para posicionar tu oferta con criterio real y diferenciación frente a la competencia.',
  },
  {
    num: '04',
    name: 'Gestión y administración de cocina',
    desc: 'Escandallos, fichas técnicas y control de mermas para que tu cocina sea tan rentable como creativa.',
  },
  {
    num: '05',
    name: 'Creación o actualización de carta',
    desc: 'Tu carta como escaparate: identidad propia, tendencias actuales y neuromarketing aplicado al precio.',
  },
  {
    num: '06',
    name: 'APPCC y control de calidad',
    desc: 'Cumplimiento de la normativa europea 852/2004 y estándares de seguridad alimentaria en tu establecimiento.',
  },
  {
    num: '07',
    name: 'Recursos humanos y equipo',
    desc: 'Selección, formación y alineación del equipo para que cada servicio fluya de forma eficiente y sin fricciones.',
  },
  {
    num: '08',
    name: 'Sistema de trabajo',
    desc: 'Procesos estandarizados que garantizan la misma calidad en cada turno, sin depender de una sola persona.',
  },
  {
    num: '09',
    name: 'Formación presencial y online',
    desc: 'Formación en sala, cocina, arroces, gastronomía nacional y estrategia de venta adaptada a tu negocio.',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__header">
        <p className="eyebrow">Servicios</p>
        <h2 className="section-title services__title">
          Todo lo que necesita<br />tu negocio, en un solo lugar.
        </h2>
      </div>

      <div className="services__grid">
        {SERVICES.map(s => (
          <article key={s.num} className="svc-card">
            <span className="svc-card__num">{s.num}</span>
            <h3 className="svc-card__name">{s.name}</h3>
            <p className="svc-card__desc">{s.desc}</p>
            <span className="svc-card__arrow">→</span>
          </article>
        ))}
      </div>
    </section>
  )
}

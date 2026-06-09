import './Services.css'

const SERVICES = [
  { num: '01', name: 'Gestión de restaurantes', img: 'GestionyAdministracionRestaurantes.jpg' },
  { num: '02', name: 'Apertura de restaurantes', img: 'AperturaRestaurantes.jpg' },
  { num: '03', name: 'Estudio de la competencia', img: 'EstudioCompetencia.jpg' },
  { num: '04', name: 'Gestión de cocina', img: 'GestionyAdministracionCocina.jpg' },
  { num: '05', name: 'Recursos humanos y equipo', img: 'RrhhyEquipo.jpg' },
  { num: '06', name: 'Control de calidad', img: 'ControlCalidad.jpg' },
  { num: '07', name: 'APPCC', img: 'Appcc.jpg' },
  { num: '08', name: 'Creación de carta', img: 'CreacionActualizacionCarta.jpg' },
  { num: '09', name: 'Oferta gastronómica', img: 'EstudioyActualizacionOferta.jpg' },
  { num: '10', name: 'Sistema de trabajo', img: 'SistemaDeTrabajo.jpg' },
  { num: '11', name: 'Local e instalaciones', img: 'AsesoramientoLocalEInstalaciones.jpg' },
  { num: '12', name: 'Estudio de rentabilidad', img: 'EstudioRentabilidad.jpg' },
  { num: '13', name: 'Formación presencial y online', img: 'FormacionOnliceoPresencial.jpg' },
]

export default function Services() {
  return (

    <section className="services" id="servicios">
      <div className="services__header">
        <p className="eyebrow">Servicios</p>
        <h2 className="section-title services__title">
          Todo lo que necesita<br />tu negocio, en un solo lugar.
        </h2>
        <a href="/servicios" className="btn-ghost services__link">
          Ver todos los servicios →
        </a>
      </div>

      <div className="services__grid">
        {SERVICES.map(s => (
          <a key={s.num} href="/servicios" className="svc-card">
            <div className="svc-card__img">
              <img src={`/img/${s.img}`} alt={s.name} />
              <div className="svc-card__overlay">
                <span className="svc-card__num">{s.num}</span>
                <h3 className="svc-card__name">{s.name}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
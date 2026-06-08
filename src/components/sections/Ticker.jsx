import './Ticker.css'

const ITEMS = [
  'Gestión de cocina',
  'Diseño de carta',
  'Apertura de restaurantes',
  'Formación del equipo',
  'Control de calidad',
  'APPCC',
  'Rentabilidad',
  'Estudio de mercado',
  'Recursos humanos',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__sep" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

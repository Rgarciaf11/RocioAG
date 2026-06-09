import './PageCatering.css'
import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'

const SERVICIOS = [
    {
        num: '01',
        titulo: 'Catering gastronómico',
        desc: 'Servicio de catering de alto nivel con una propuesta gastronómica basada en producto local, cocina mediterránea y elaboraciones de autor. Para eventos que quieren marcar la diferencia.',
    },
    {
        num: '02',
        titulo: 'Eventos corporativos',
        desc: 'Soluciones gastronómicas para empresas: desayunos de trabajo, almuerzos de negocios, cócteles corporativos y cenas de gala. Profesionalidad y sabor en cada detalle.',
    },
    {
        num: '03',
        titulo: 'Showcookings',
        desc: 'Demostraciones culinarias en vivo para eventos, ferias y presentaciones. Una experiencia interactiva que combina espectáculo y gastronomía de primer nivel.',
    },
    {
        num: '04',
        titulo: 'Presentaciones de producto',
        desc: 'Showcookings y experiencias gastronómicas diseñadas para el lanzamiento y presentación de productos alimentarios, vinos, aceites y otros productos gourmet.',
    },
    {
        num: '05',
        titulo: 'Inauguraciones',
        desc: 'Servicio gastronómico para inauguraciones de locales, tiendas y espacios. Hacemos que el primer día de tu negocio sea inolvidable para todos los asistentes.',
    },
    {
        num: '06',
        titulo: 'Eventos privados',
        desc: 'Celebraciones privadas con una propuesta gastronómica personalizada: cumpleaños, aniversarios, bodas íntimas y cualquier ocasión especial que merezca una gastronomía excepcional.',
    },
]

export default function PageCatering() {
    return (
        <div className="page-catering">

            {/* HEADER */}
            <PageHeader
                eyebrow="Catering & Eventos"
                title={<>Gastronomía de nivel<br />para <em>cada ocasión.</em></>}
                lead="Catering gastronómico, showcookings, eventos corporativos y celebraciones privadas. Cada evento merece una propuesta gastronómica única."
            />

            {/* SERVICIOS */}
            <section className="pc-servicios">
                <div className="pc-servicios__header">
                    <p className="eyebrow">Qué ofrecemos</p>
                    <h2 className="section-title pc-servicios__title">
                        Una propuesta gastronómica<br />para cada tipo de evento.
                    </h2>
                </div>
                <div className="pc-grid">
                    {SERVICIOS.map(s => (
                        <article key={s.num} className="pc-card">
                            <span className="pc-card__num">{s.num}</span>
                            <h3 className="pc-card__titulo">{s.titulo}</h3>
                            <p className="pc-card__desc">{s.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* GALERÍA */}
            <section className="pc-galeria">
                <div className="pc-galeria__img pc-galeria__img--tall">
                    <img src="/img/CateringyEventosPrivados.jpg" alt="Catering eventos" />
                </div>
                <div className="pc-galeria__img">
                    <img src="/img/CateringyEventosPrivados2.jpg" alt="Catering eventos 2" />
                </div>
                <div className="pc-galeria__img">
                    <img src="/img/Showcooking.jpg" alt="Showcooking" />
                </div>
            </section>

            {/* CTA */}
            <section className="pc-cta">
                <p className="eyebrow pc-cta__eyebrow">¿Hablamos?</p>
                <h2 className="pc-cta__title">
                    Cuéntanos tu evento y<br /><em>lo hacemos realidad.</em>
                </h2>
                <p className="pc-cta__sub">
                    Nos adaptamos a cualquier formato, número de comensales y presupuesto.
                    Contáctanos y te preparamos una propuesta personalizada.
                </p>
                <Link to="/contacto" className="btn-dark">Contactar con Rocío →</Link>
            </section>

        </div>
    )
}
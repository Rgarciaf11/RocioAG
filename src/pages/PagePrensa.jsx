import './PagePrensa.css'
import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'

const APARICIONES = [
    {
        tipo: 'Speaker',
        titulo: 'Speaker en Feria Gastronómica',
        img: 'SpeakerFeria.jpg',
        desc: 'Ponente en ferias y congresos del sector hostelero, compartiendo experiencias y tendencias gastronómicas con profesionales del sector.',
    },
    {
        tipo: 'Congreso',
        titulo: 'Congreso Mujeres en Gastronomía',
        img: 'CongresoMujeresEnGastronomia.jpg',
        desc: 'Participación activa en el congreso anual de Mujeres en Gastronomía, impulsando la visibilidad femenina en el sector.',
    },
    {
        tipo: 'Prensa',
        titulo: 'Apariciones en prensa',
        img: 'RocioPrensa.jpg',
        desc: 'Entrevistas y apariciones en medios especializados en gastronomía y hostelería a nivel nacional.',
    },
    {
        tipo: 'Radio',
        titulo: 'Terrena Radio',
        img: 'TerrenaRadio.jpg',
        desc: 'Colaboraciones en radio hablando sobre gastronomía, tendencias del sector y asesoramiento hostelero.',
    },
    {
        tipo: 'Feria',
        titulo: 'Feria de Valencia',
        img: 'FeriaValencia.jpg',
        desc: 'Presencia en las principales ferias del sector en Valencia, conectando con profesionales y marcas del mundo gastronómico.',
        position: 'center top',
    },
    {
        tipo: 'Feria',
        titulo: 'Feria de Girona',
        img: 'FeriaGirona.jpg',
        desc: 'Participación en ferias gastronómicas de Girona, uno de los epicentros de la alta cocina en España.',
        position: 'center 20%',
    },
]

const JURADO = [
    'Jurado en concursos gastronómicos a nivel regional y nacional.',
    'Evaluación de propuestas en certámenes de cocina mediterránea.',
    'Participación como experta en paneles de valoración del sector hostelero.',
]

export default function PagePrensa() {
    return (
        <div className="page-prensa">

            {/* HEADER */}
            <PageHeader
                eyebrow="Prensa & Eventos"
                title={<>Intervenciones,<br />speaker y <em>jurado.</em></>}
                lead="Rocío Riquelme participa activamente en ferias, congresos, medios de comunicación y concursos gastronómicos como experta del sector."
            />

            {/* APARICIONES */}
            <section className="pp-apariciones">
                <div className="pp-apariciones__header">
                    <p className="eyebrow">Apariciones</p>
                    <h2 className="section-title">Ferias, congresos y medios.</h2>
                </div>
                <div className="pp-grid">
                    {APARICIONES.map((a, i) => (
                        <article key={i} className="pp-card">
                            <div className="pp-card__img">
                                <img
                                    src={`/img/${a.img}`}
                                    alt={a.titulo}
                                    style={{ objectPosition: a.position || 'center center' }}
                                />
                                <span className="pp-card__tipo">{a.tipo}</span>
                            </div>
                            <div className="pp-card__body">
                                <h3 className="pp-card__titulo">{a.titulo}</h3>
                                <p className="pp-card__desc">{a.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* JURADO */}
            <section className="pp-jurado">
                <div className="pp-jurado__img">
                    <img src="/img/RocioCongreso.jpg" alt="Rocío Riquelme en congreso" />
                </div>
                <div className="pp-jurado__text">
                    <p className="eyebrow">Jurado</p>
                    <h2 className="pp-jurado__title">
                        Concursos y<br />certámenes gastronómicos.
                    </h2>
                    <ul className="pp-jurado__list">
                        {JURADO.map((j, i) => (
                            <li key={i} className="pp-jurado__item">
                                <span className="pp-jurado__dot" />
                                {j}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="pp-cta">
                <p className="eyebrow pp-cta__eyebrow">Contacto de prensa</p>
                <h2 className="pp-cta__title">
                    ¿Quieres contar con Rocío<br />en tu evento o medio?
                </h2>
                <p className="pp-cta__sub">
                    Para colaboraciones, entrevistas, ponencias o participación como jurado,
                    escríbenos y lo organizamos.
                </p>
                <Link to="/contacto" className="btn-dark">Contactar con Rocío →</Link>
            </section>

        </div>
    )
}
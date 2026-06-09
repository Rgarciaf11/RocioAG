import './PageExperiencias.css'
import PageHeader from '../components/ui/PageHeader'

const EXPERIENCIAS = [
    {
        num: '01',
        titulo: 'Talleres de cocina',
        desc: 'Talleres prácticos de cocina para grupos, adaptados a todos los niveles. Aprende técnicas, elabora recetas y disfruta de una experiencia gastronómica completa.',
        img: 'CursosdeCocina.jpg',
    },
    {
        num: '02',
        titulo: 'Cocina mediterránea',
        desc: 'Sumérgete en la riqueza de la cocina mediterránea. Productos de temporada, técnicas tradicionales y el sabor auténtico del Mediterráneo en cada elaboración.',
        img: 'OfertaGastronomica.jpg',
    },
    {
        num: '03',
        titulo: 'Masterclass de arroces',
        desc: 'Masterclass especializadas en el mundo del arroz: paellas, arroces caldosos, melosos y al horno. La cultura arrocera del Levante en estado puro.',
        img: 'ArrocesPrivados.jpg',
    },
    {
        num: '04',
        titulo: 'Team buildings gastronómicos',
        desc: 'Actividades de team building en torno a la cocina para empresas. Una forma diferente de unir equipos, fomentar la creatividad y disfrutar juntos.',
        img: 'OrganizacionFeriasyCongresos.jpg',
    },
    {
        num: '05',
        titulo: 'Actividades para turistas',
        desc: 'Experiencias gastronómicas diseñadas para turistas que quieren descubrir la cocina local de la mano de una experta. Cultura, producto y sabor en una sola experiencia.',
        img: 'DecoracionMesa.jpg',
    },
    {
        num: '06',
        titulo: 'Experiencias privadas',
        desc: 'Cenas privadas, showcookings exclusivos y experiencias gastronómicas personalizadas para ocasiones especiales. Una velada única e irrepetible.',
        img: 'CateringyEventosPrivados.jpg',
    },
]

export default function PageExperiencias() {
    return (
        <div className="page-experiencias">

            <PageHeader
                eyebrow="Experiencias gastronómicas"
                title={<>Vive la gastronomía<br />desde <em>dentro.</em></>}
                lead="Talleres, masterclass, team buildings y experiencias privadas para quienes quieren ir más allá de comer bien."
            />

            <section className="pe-list">
                {EXPERIENCIAS.map((e, i) => (
                    <article
                        key={e.num}
                        className={`pe-card ${i % 2 !== 0 ? 'pe-card--reverse' : ''}`}
                    >
                        <div className="pe-card__img">
                            <img src={`/img/${e.img}`} alt={e.titulo} />
                        </div>
                        <div className="pe-card__body">
                            <span className="pe-card__num">{e.num}</span>
                            <h2 className="pe-card__titulo">{e.titulo}</h2>
                            <p className="pe-card__desc">{e.desc}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="pe-cta">
                <p className="eyebrow pe-cta__eyebrow">¿Te apuntas?</p>
                <h2 className="pe-cta__title">
                    Diseñamos la experiencia<br /><em>perfecta para ti.</em>
                </h2>
                <p className="pe-cta__sub">
                    Cuéntanos qué tienes en mente y creamos una experiencia gastronómica
                    adaptada a tus necesidades y las de tu grupo.
                </p>
                <a href="/contacto" className="btn-dark">Contactar con Rocío</a>
            </section>

        </div>
    )
}
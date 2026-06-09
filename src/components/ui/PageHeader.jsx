import './PageHeader.css'

export default function PageHeader({ eyebrow, title, lead }) {
    return (
        <section className="page-header">
            <div className="page-header__left">
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="page-header__title">{title}</h1>
            </div>
            {lead && (
                <p className="page-header__lead">{lead}</p>
            )}
        </section>
    )
}
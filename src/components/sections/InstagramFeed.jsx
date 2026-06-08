import './InstagramFeed.css'

// Placeholder posts — reemplazables con datos reales de la API
const MOCK_POSTS = [
  { id: 1, bg: '#d4c4ae', label: 'Foto 1' },
  { id: 2, bg: '#c8b89a', label: 'Foto 2' },
  { id: 3, bg: '#e0d4c0', label: 'Foto 3' },
  { id: 4, bg: '#bfad98', label: 'Foto 4' },
]

function PostPlaceholder({ bg, label }) {
  return (
    <a
      href="https://www.instagram.com/adelantegastronomica/"
      target="_blank"
      rel="noopener noreferrer"
      className="ig-post"
      style={{ background: bg }}
    >
      <div className="ig-post__overlay">
        <svg className="ig-post__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        <span className="ig-post__label">{label}</span>
      </div>
    </a>
  )
}

export default function InstagramFeed() {
  return (
    <section className="ig-section">
      <div className="ig-section__header">
        <div className="ig-section__title-row">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="section-title ig-section__title">
              Síguenos en Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/adelantegastronomica/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-section__handle"
          >
            @adelantegastronomica
            <span className="ig-section__handle-arrow">↗</span>
          </a>
        </div>
        <p className="ig-section__sub">
          Consejos, casos reales y novedades del sector hostelero.
        </p>
      </div>

      <div className="ig-grid">
        {MOCK_POSTS.map(post => (
          <PostPlaceholder key={post.id} bg={post.bg} label={post.label} />
        ))}
      </div>

      <div className="ig-section__footer">
        <a
          href="https://www.instagram.com/adelantegastronomica/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark"
        >
          Ver más en Instagram →
        </a>
      </div>
    </section>
  )
}

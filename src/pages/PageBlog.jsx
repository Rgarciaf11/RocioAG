import './PageBlog.css'

const POSTS = [
  {
    slug: 'estudio-de-mercado',
    date: '27 Feb 2022',
    tag: 'Gestión',
    title: 'Estudio de mercado',
    excerpt: 'A menudo nos olvidamos de hacer o actualizar nuestro propio estudio de mercado para poder realizar un DAFO. Con el DAFO podemos tener el conocimiento necesario para tomar decisiones estratégicas en nuestro negocio.',
  },
  {
    slug: 'tendencias',
    date: '27 Feb 2022',
    tag: 'Tendencias',
    title: 'Tendencias gastronómicas',
    excerpt: 'El cliente y la sociedad marcan tendencias que en el gremio están cambiando continuamente. Necesitamos saber qué está esperando nuestro cliente de nosotros, qué espera de nuestra oferta y cómo adaptarnos.',
  },
  {
    slug: 'fichas-tecnicas',
    date: '13 Feb 2022',
    tag: 'Cocina',
    title: 'La importancia de las fichas técnicas',
    excerpt: 'Las fichas técnicas te darán los pasos a seguir del funcionamiento de la propia receta de tu cocina. Estas te darán la seguridad de que el plato siempre saldrá igual, independientemente de quién lo prepare.',
  },
]

export default function PageBlog() {
  return (
    <div className="page-blog">

      <section className="pb-hero">
        <p className="eyebrow">Colaboraciones</p>
        <h1 className="pb-hero__title">
          Novedades y consejos<br />del sector hostelero.
        </h1>
        <p className="pb-hero__sub">
          Artículos, reflexiones y tendencias para profesionales de la hostelería.
        </p>
      </section>

      <section className="pb-list">
        {POSTS.map((post, i) => (
          <article key={post.slug} className="pb-post">
            <div className="pb-post__meta">
              <span className="pb-post__tag">{post.tag}</span>
              <span className="pb-post__date">{post.date}</span>
            </div>
            <div className="pb-post__body">
              <h2 className="pb-post__title">{post.title}</h2>
              <p className="pb-post__excerpt">{post.excerpt}</p>
              <a href={`/colaboraciones/${post.slug}`} className="pb-post__link">
                Leer más →
              </a>
            </div>
            <span className="pb-post__num">0{i + 1}</span>
          </article>
        ))}
      </section>

    </div>
  )
}

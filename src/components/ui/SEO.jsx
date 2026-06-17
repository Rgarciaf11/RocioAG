import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url }) {
  const fullTitle = title
    ? `${title} | Adelante Gastronómica`
    : 'Adelante Gastronómica | Asesoría Gastronómica · Rocío Riquelme'

  const fullUrl = `https://www.adelantegastronomica.com${url || ''}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
    </Helmet>
  )
}
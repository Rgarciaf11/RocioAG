import SEO from '../components/ui/SEO'
import './PageLegal.css'

export default function PageAvisoLegal() {
    return (
        <div className="page-legal">
            <SEO
                title="Aviso Legal"
                description="Aviso legal de Adelante Gastronómica. Información sobre el titular y condiciones de uso del sitio web."
                url="/aviso-legal"
            />

            <section className="pl-header">
                <p className="eyebrow">Legal</p>
                <h1 className="pl-title">Aviso Legal</h1>
                <p className="pl-updated">Última actualización: junio 2025</p>
            </section>

            <section className="pl-content">

                <div className="pl-block">
                    <h2>1. Datos identificativos del titular</h2>
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
                    <ul>
                        <li><strong>Titular:</strong> Rocío Riquelme Sánchez</li>
                        <li><strong>NIF:</strong> 48672429J</li>
                        <li><strong>Dirección:</strong> Calle Virgen de Belén, 11, 3B</li>
                        <li><strong>Email:</strong> hola@adelantegastronomica.com</li>
                        <li><strong>Teléfono:</strong> 677 253 998</li>
                        <li><strong>Web:</strong> www.adelantegastronomica.com</li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>2. Objeto y ámbito de aplicación</h2>
                    <p>El presente aviso legal regula el uso del sitio web www.adelantegastronomica.com, del que es titular Rocío Riquelme Sánchez. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes condiciones de uso.</p>
                </div>

                <div className="pl-block">
                    <h2>3. Propiedad intelectual e industrial</h2>
                    <p>Todos los contenidos del sitio web — textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros — son propiedad intelectual de Rocío Riquelme Sánchez o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.</p>
                    <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de los contenidos sin autorización expresa del titular.</p>
                </div>

                <div className="pl-block">
                    <h2>4. Exclusión de garantías y responsabilidad</h2>
                    <p>Rocío Riquelme Sánchez no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por:</p>
                    <ul>
                        <li>Fallos o indisponibilidades en el acceso al sitio web</li>
                        <li>La falta de veracidad, exactitud o actualidad de los contenidos</li>
                        <li>Los contenidos de sitios web de terceros a los que se pueda acceder mediante enlaces</li>
                        <li>El uso que los usuarios pudieran hacer de los contenidos del sitio web</li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>5. Enlaces a terceros</h2>
                    <p>El sitio web puede contener enlaces a páginas de terceros. Rocío Riquelme Sánchez no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre Rocío Riquelme Sánchez y las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren.</p>
                </div>

                <div className="pl-block">
                    <h2>6. Política de privacidad y cookies</h2>
                    <p>El tratamiento de los datos personales recabados a través del sitio web se rige por la <a href="/privacidad">Política de Privacidad</a> y la <a href="/cookies">Política de Cookies</a>, que forman parte integrante del presente aviso legal.</p>
                </div>

                <div className="pl-block">
                    <h2>7. Legislación aplicable y jurisdicción</h2>
                    <p>Las presentes condiciones se rigen por la legislación española vigente. Para la resolución de cualquier controversia derivada del uso del sitio web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, salvo que la ley disponga otra cosa.</p>
                </div>

            </section>
        </div>
    )
}
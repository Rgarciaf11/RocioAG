import SEO from '../components/ui/SEO'
import './PageLegal.css'

export default function PageCookies() {
    return (
        <div className="page-legal">
            <SEO
                title="Política de Cookies"
                description="Política de cookies de Adelante Gastronómica. Información sobre el uso de cookies en este sitio web."
                url="/cookies"
            />

            <section className="pl-header">
                <p className="eyebrow">Legal</p>
                <h1 className="pl-title">Política de Cookies</h1>
                <p className="pl-updated">Última actualización: junio 2025</p>
            </section>

            <section className="pl-content">

                <div className="pl-block">
                    <h2>1. ¿Qué son las cookies?</h2>
                    <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para que el sitio recuerde tus preferencias y mejorar tu experiencia de navegación.</p>
                </div>

                <div className="pl-block">
                    <h2>2. Cookies que utilizamos</h2>
                    <p>Esta web utiliza únicamente cookies técnicas necesarias para su funcionamiento:</p>
                    <table className="pl-table">
                        <thead>
                            <tr>
                                <th>Cookie</th>
                                <th>Tipo</th>
                                <th>Finalidad</th>
                                <th>Duración</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>_session</td>
                                <td>Técnica</td>
                                <td>Mantener la sesión de navegación</td>
                                <td>Sesión</td>
                            </tr>
                            <tr>
                                <td>cookie_consent</td>
                                <td>Técnica</td>
                                <td>Recordar tu preferencia sobre cookies</td>
                                <td>1 año</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="pl-block">
                    <h2>3. Cookies de terceros</h2>
                    <p>Esta web puede cargar contenido de Instagram a través de su API oficial. Instagram puede establecer sus propias cookies según su <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>
                </div>

                <div className="pl-block">
                    <h2>4. Cómo gestionar las cookies</h2>
                    <p>Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que deshabilitar cookies técnicas puede afectar al funcionamiento de la web.</p>
                    <ul>
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>5. Más información</h2>
                    <p>Para cualquier consulta sobre el uso de cookies escríbenos a <a href="mailto:hola@adelantegastronomica.com">hola@adelantegastronomica.com</a>.</p>
                </div>

            </section>
        </div>
    )
}
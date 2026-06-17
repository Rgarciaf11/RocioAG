import SEO from '../components/ui/SEO'
import './PageLegal.css'

export default function PagePrivacidad() {
    return (
        <div className="page-legal">
            <SEO
                title="Política de Privacidad"
                description="Política de privacidad de Adelante Gastronómica. Información sobre el tratamiento de datos personales."
                url="/privacidad"
            />

            <section className="pl-header">
                <p className="eyebrow">Legal</p>
                <h1 className="pl-title">Política de Privacidad</h1>
                <p className="pl-updated">Última actualización: junio 2025</p>
            </section>

            <section className="pl-content">

                <div className="pl-block">
                    <h2>1. Responsable del tratamiento</h2>
                    <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales, te informamos de que los datos personales que nos facilites serán tratados por:</p>
                    <ul>
                        <li><strong>Titular:</strong> Rocío Riquelme Sánchez</li>
                        <li><strong>Actividad:</strong> Asesoría gastronómica</li>
                        <li><strong>Web:</strong> www.adelantegastronomica.com</li>
                        <li><strong>Email:</strong> hola@adelantegastronomica.com</li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>2. Datos que recogemos</h2>
                    <p>A través del formulario de contacto recogemos los siguientes datos:</p>
                    <ul>
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Nombre y tipo de establecimiento</li>
                        <li>Mensaje o consulta</li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>3. Finalidad del tratamiento</h2>
                    <p>Los datos personales que nos facilitas se utilizan exclusivamente para:</p>
                    <ul>
                        <li>Responder a tu consulta o solicitud de información</li>
                        <li>Gestionar la relación comercial si decides contratar nuestros servicios</li>
                        <li>Enviarte información relacionada con nuestros servicios si nos das tu consentimiento</li>
                    </ul>
                </div>

                <div className="pl-block">
                    <h2>4. Base legal</h2>
                    <p>El tratamiento de tus datos se basa en tu consentimiento expreso al enviar el formulario de contacto, así como en el interés legítimo para gestionar las consultas recibidas.</p>
                </div>

                <div className="pl-block">
                    <h2>5. Conservación de los datos</h2>
                    <p>Conservaremos tus datos personales durante el tiempo necesario para gestionar tu consulta y, en caso de relación comercial, durante el tiempo que dure la misma más los plazos legales aplicables.</p>
                </div>

                <div className="pl-block">
                    <h2>6. Cesión de datos</h2>
                    <p>No cedemos tus datos personales a terceros salvo obligación legal. Utilizamos Formspree como proveedor de gestión de formularios, que actúa como encargado del tratamiento bajo sus propias políticas de privacidad.</p>
                </div>

                <div className="pl-block">
                    <h2>7. Tus derechos</h2>
                    <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
                    <ul>
                        <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
                        <li><strong>Rectificación:</strong> corregir datos inexactos</li>
                        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
                        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
                        <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico</li>
                        <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
                    </ul>
                    <p>Para ejercer estos derechos escríbenos a <a href="mailto:hola@adelantegastronomica.com">hola@adelantegastronomica.com</a>. También puedes reclamar ante la Agencia Española de Protección de Datos en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
                </div>

            </section>
        </div>
    )
}
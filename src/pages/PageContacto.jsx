import './PageContacto.css'

export default function PageContacto() {
    return (
        <div className="page-contacto">

            <section className="pc2-hero">
                <div className="pc2-hero__text">
                    <p className="eyebrow">Contacto</p>
                    <h1 className="pc2-hero__title">
                        Haz rentable tu negocio<br />de hostelería <em>este año.</em>
                    </h1>
                    <p className="pc2-hero__lead">
                        Una llamada de 30 minutos para ver si podemos trabajar juntos.
                        Sin compromisos ni presión.
                    </p>
                    <div className="pc2-hero__data">
                        <div className="pc2-dato">
                            <span className="pc2-dato__label">Email</span>
                            <a href="mailto:hola@adelantegastronomica.com" className="pc2-dato__value">
                                hola@adelantegastronomica.com
                            </a>
                        </div>
                        <div className="pc2-dato">
                            <span className="pc2-dato__label">Instagram</span>
                            <a
                                href="https://www.instagram.com/adelantegastronomica/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pc2-dato__value"
                            >
                                @adelantegastronomica
                            </a>
                        </div>
                        <div className="pc2-dato">
                            <span className="pc2-dato__label">LinkedIn</span>
                            <a
                                href="https://es.linkedin.com/in/adelante-gastron%C3%B3mica-roc%C3%ADo-riquelme-80591922a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pc2-dato__value"
                            >
                                Adelante Gastronómica
                            </a>
                        </div>
                    </div>
                </div >

                <div className="pc2-hero__img">
                    <img src="/img/QuieroHablarConRocio.jpg" alt="Contactar con Rocío Riquelme" />
                </div>
            </section >

            <section className="pc2-form" id="contacto">
                <div className="pc2-form__header">
                    <p className="eyebrow">Cuéntame tu caso</p>
                    <h2 className="pc2-form__title">¿En qué puedo ayudarte?</h2>
                </div>

                <form
                    className="pc2-form__form"
                    action="https://formspree.io/f/TUCODIGO"
                    method="POST"
                >
                    <div className="pc2-form__row">
                        <div className="pc2-field">
                            <label htmlFor="nombre">Nombre</label>
                            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                        </div>
                        <div className="pc2-field">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="tu@email.com" required />
                        </div>
                    </div>
                    <div className="pc2-field">
                        <label htmlFor="negocio">Tu negocio</label>
                        <input id="negocio" name="negocio" type="text" placeholder="Nombre y tipo de establecimiento" />
                    </div>
                    <div className="pc2-field">
                        <label htmlFor="mensaje">Cuéntame</label>
                        <textarea id="mensaje" name="mensaje" rows="5" placeholder="¿Qué necesitas mejorar en tu negocio?" required />
                    </div>
                    <button type="submit" className="btn-dark pc2-form__submit">
                        Enviar mensaje →
                    </button>
                </form>
            </section>

        </div >
    )
}
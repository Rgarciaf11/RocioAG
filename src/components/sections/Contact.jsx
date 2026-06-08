import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__left">
        <p className="eyebrow contact__eyebrow">¿Empezamos?</p>
        <h2 className="section-title contact__title">
          Haz rentable tu negocio<br />
          de hostelería <em>este año.</em>
        </h2>
      </div>

      <div className="contact__right">
        <p className="contact__sub">
          Una llamada de 30 minutos para ver si podemos trabajar juntos.
          Sin compromisos ni presión.
        </p>

        <form className="contact__form" onSubmit={e => e.preventDefault()}>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Nombre</label>
              <input id="name" type="text" placeholder="Tu nombre" required />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="message">Cuéntame tu caso</label>
            <textarea id="message" rows="4" placeholder="¿Qué necesitas mejorar en tu negocio?" />
          </div>
          <button type="submit" className="btn-dark contact__submit">
            Enviar mensaje →
          </button>
        </form>
      </div>
    </section>
  )
}

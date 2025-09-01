import styles from './ContacModal.module.css'

export default function ContactModal({ open, onClose }){
  if(!open) return null
  const submit = (e)=>{ e.preventDefault(); alert('¡Gracias! Te contactaremos pronto.'); onClose(); }
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e=>e.stopPropagation()}>
        <h3>Contáctanos</h3>
        <form onSubmit={submit} className={styles.form}>
          <input placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <textarea placeholder="Tu mensaje" rows={4} required />
          <div className={styles.actions}>
            <button className="btn btnPrimary" type="submit">Enviar</button>
            <button className="btn" type="button" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

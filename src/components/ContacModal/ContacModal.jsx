import { useState } from 'react'
import styles from './ContacModal.module.css'

export default function ContactModal({ open, onClose }) {
  const [showThanks, setShowThanks] = useState(false)

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    setShowThanks(true)
    setTimeout(() => {
      setShowThanks(false)
      onClose()
    }, 2000)
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {showThanks ? (
          <div className={styles.thankYou}>
            <h3>¡Gracias!</h3>
            <p>Te contactaremos pronto.</p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}

import styles from './PaymentModal.module.css'

export default function PaymentModal({ open, onClose, onConfirm, total }){
  if(!open) return null
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e=>e.stopPropagation()}>
        <h3>Confirmar pago</h3>
        <p>Monto a pagar: <strong>S/ {total.toFixed(2)}</strong></p>
        <form onSubmit={(e)=>{ e.preventDefault(); onConfirm(); }} className={styles.form}>
          <input placeholder="Número de tarjeta" required maxLength={19}/>
          <div className={styles.row}>
            <input placeholder="MM/AA" required maxLength={5}/>
            <input placeholder="CVV" required maxLength={3}/>
          </div>
          <button className={styles.btnPrimary} type="submit">Simular pago</button>
          <button className={styles.btnCancel} type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}

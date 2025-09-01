import styles from './ModalDelete.module.css'

export default function ModalDelete({ open, onClose, onConfirm }) {
  if (!open) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>¿Estás seguro de eliminar este producto?</h3>
        <div className={styles.modalActions}>
            <button className={styles.confirmBtn} onClick={onConfirm}>Confirmar</button>
            <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

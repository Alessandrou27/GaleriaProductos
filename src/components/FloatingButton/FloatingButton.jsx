import styles from './FloatingButton.module.css'

export default function FloatingButton({ onClick }){
  return (
    <button className={styles.fab} onClick={onClick} aria-label="Contáctanos">
      ✉️
    </button>
  )
}

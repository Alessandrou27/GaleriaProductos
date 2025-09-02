import styles from './ProductCard.module.css'
import { useCart } from '../../hooks/userCart'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const cart = useCart()
  const { addItem } = cart || {}
  const [qty, setQty] = useState(1)
  const [showAlert, setShowAlert] = useState(false)

  const add = () => {
    addItem(product, qty)
    setQty(1)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2000)
  }

  return (
    <>
      {showAlert && (
        <div className={styles.toast}>Producto agregado</div>
      )}

      <article className={styles.card}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.body}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.cat}>{product.category}</p>
          <p className={styles.price}>S/ {product.price.toFixed(2)}</p>
          <div className={styles.controls}>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value) || 1)}
            />
            <button className="btn btnPrimary" onClick={add}>Agregar</button>
          </div>
        </div>
      </article>
    </>
  )
}

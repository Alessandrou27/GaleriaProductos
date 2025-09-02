import { useCart } from '../hooks/userCart'
import { useState } from 'react'
import PaymentModal from '../components/PaymentModal/PaymentModal'
import { simulatePayment } from '../services/payments'
import Cart from '../components/Cart/Cart'
import styles from '../style/Checkout.module.css'

export default function Checkout() {
  const cart = useCart()
  const { items = [], total = 0, clear } = cart || {}
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const handlePay = async () => {
    setToast('Procesando...')
    setShowToast(true)

    try {
      await simulatePayment(total)
      setToast('Pago exitoso ✅')
      clear()
    } catch (err) {
      setToast('Pago rechazado ❌')
    } finally {
      setTimeout(() => setShowToast(false), 2500)
      setOpen(false)
    }
  }

  return (
    <>
      {showToast && <div className={styles.toast}>{toast}</div>}

      <section className="container" style={{ padding: '1rem 0 2rem' }}>
        <h2>Carrito de compras</h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Tu carrito de confianza</h3>
          <Cart />
        </div>

        {items.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div className={styles.paymentSection}>
            <div className={styles.totalInfo}>
              <div className={styles.totalLabel}>Total a pagar:</div>
              <div className={styles.totalAmount}>S/ {total.toFixed(2)}</div>
            </div>
            <button className={styles.payButton} onClick={() => setOpen(true)}>
              Pagar ahora
            </button>
          </div>
        )}

        <PaymentModal
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={handlePay}
          total={total}
        />
      </section>
    </>
  )
}

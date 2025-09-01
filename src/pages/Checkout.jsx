import { useCart } from '../hooks/userCart'
import { useState } from 'react'
import PaymentModal from '../components/PaymentModal/PaymentModal'
import { simulatePayment } from '../services/payments'
import Cart from '../components/Cart/Cart'
import styles from '../style/Checkout.module.css'

export default function Checkout(){
  const cart = useCart()
  const { items = [], total = 0, clear } = cart || {}
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(null)

  const handlePay = async ()=>{
    setStatus('Procesando...')
    try{
      await simulatePayment(total)
      setStatus('Pago exitoso ✅')
      clear()
    }catch(err){
      setStatus('Pago rechazado ❌')
    }finally{
      setOpen(false)
    }
  }

  return (
    <section className="container" style={{padding:'1rem 0 2rem'}}>
      <h2>Carrito de compras</h2>
      
      <div style={{marginBottom:'2rem'}}>
        <h3>Tu carrito de confianza</h3>
        <Cart />
      </div>
      
      {items.length===0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className={styles.paymentSection}>
          <div className={styles.totalInfo}>
            <div className={styles.totalLabel}>Total a pagar:</div>
            <div className={styles.totalAmount}>S/ {total.toFixed(2)}</div>
          </div>
          <button className={styles.payButton} onClick={()=>setOpen(true)}>
            Pagar ahora
          </button>
        </div>
      )}
      {status && <p style={{marginTop:'1rem'}}>{status}</p>}
      <PaymentModal open={open} onClose={()=>setOpen(false)} onConfirm={handlePay} total={total} />
    </section>
  )
}


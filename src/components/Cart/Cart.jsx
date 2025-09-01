import styles from './Cart.module.css'
import { useCart } from '../../hooks/userCart'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModalDelete from "../../components/ModalDelete/ModalDelete"

export default function Cart(){
  const cart = useCart()
  const { items = [], removeItem, updateQty, total = 0 } = cart || {}

  const [showModal, setShowModal] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  const handleDeleteClick = (id) => {
    setItemToDelete(id)
    setShowModal(true)
  }

  const confirmDelete = () => {
    if(itemToDelete){
      removeItem(itemToDelete)
      setItemToDelete(null)
      setShowModal(false)
    }
  }

  if(items.length === 0){
    return (
      <div className="container" style={{padding:'2rem 0'}}>
        <h2 style={{marginBottom:'1.5rem'}}>Tu carrito está vacío</h2>
        <p style={{marginBottom:'2rem'}}>Explora nuestros productos frescos.</p>
        <Link to="/productos" className="btn btnPrimary" style={{display:'inline-block'}}>Ir a Productos</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <table className={styles.table}>
        <thead>
          <tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th></tr>
        </thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id}>
              <td className={styles.prodCell}>
                <img src={it.image} alt={it.name}/> 
                <div>
                  <strong>{it.name}</strong>
                  <div className={styles.cat}>{it.category}</div>
                </div>
              </td>
              <td>S/ {it.price.toFixed(2)}</td>
              <td>
                <input type="number" min={1} value={it.qty} onChange={(e)=>updateQty(it.id, Number(e.target.value)||1)} />
              </td>
              <td>S/ {(it.price * it.qty).toFixed(2)}</td>
              <td>
                <button className="btn" onClick={()=>handleDeleteClick(it.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        open={showModal}
        onClose={()=>setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

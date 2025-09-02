import { createContext, useContext, useMemo, useState } from 'react'

const CartCtx = createContext(null)

export function CartProvider({ children }){
  const [items, setItems] = useState([]) 

  const addItem = (product, qty=1) => {
    setItems(prev => {
      const exists = prev.find(i=>i.id===product.id)
      if(exists){
        return prev.map(i=> i.id===product.id ? {...i, qty: i.qty + qty} : i)
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeItem = (id) => setItems(prev=> prev.filter(i=> i.id!==id))
  const updateQty = (id, qty) => setItems(prev=> prev.map(i=> i.id===id ? {...i, qty: Math.max(1, qty)} : i))
  const clear = ()=> setItems([])

  const total = useMemo(()=> items.reduce((acc,i)=> acc + i.price * i.qty, 0), [items])
  const totalItems = useMemo(()=> items.reduce((acc,i)=> acc + i.qty, 0), [items])

  const value = { items, addItem, removeItem, updateQty, clear, total, totalItems }
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export const useCartCtx = () => {
  const context = useContext(CartCtx)
  if (!context) {
    console.warn('useCartCtx must be used within a CartProvider')
    return {
      items: [],
      addItem: () => {},
      removeItem: () => {},
      updateQty: () => {},
      clear: () => {},
      total: 0,
      totalItems: 0
    }
  }
  return context
}

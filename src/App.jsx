import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import FloatingButton from './components/FloatingButton/FloatingButton'
import ContactModal from './components/ContacModal/ContacModal'
import { CartProvider } from './context/CartContext'
import { useState } from 'react'

export default function App(){
  const [contactOpen, setContactOpen] = useState(false)
  
  console.log('App component rendering at:', new Date().toISOString())
  
  return (
    <CartProvider>
      <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <Navbar onContact={() => setContactOpen(true)} />
        <main style={{flex:1, padding:'1rem 0'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButton onClick={() => setContactOpen(true)} />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </CartProvider>
  )
}

import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { useCart } from '../../hooks/userCart'

export default function Navbar({ onContact }){
  const cart = useCart()
  const totalItems = cart?.totalItems || 0
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navWrap}`}>
        <Link to="/" className={styles.brand}>  
          <img src={logo} alt="FrutiMarket" className={styles.logo}/>
          <span>FrutiMarket</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/checkout">🛒({totalItems})</NavLink>
        </nav>
      </div>
    </header>
  ) 
}

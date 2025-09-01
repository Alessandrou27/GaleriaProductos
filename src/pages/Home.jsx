import { Link } from 'react-router-dom';
import styles from '../style/Home.module.css';
import mercadoImg from '../assets/mercado.jpg'; // Import directo

export default function Home() {
  const handleImageError = (e) => {
    e.target.style.display = 'none'; 
    const fallback = e.target.closest(`.${styles.heroImage}`).querySelector(`.${styles.imageFallback}`);
    if (fallback) {
      fallback.style.display = 'flex'; 
    }
  };

  return (
    <section className="container" style={{ padding: '2rem 0' }}>
      <h1>Bienvenido a FrutiMarket</h1>
      <p>Tu tienda de frutas y verduras frescas. Compra por categoría, agrega cantidades y pagos seguros.</p>

      <div className={styles.heroImage}>
        <img 
          src={mercadoImg} 
          alt="Frutas y verduras frescas de FrutiMarket"
          onError={handleImageError}
        />

        <div className={styles.overlayText}>
          <h2>Productos Frescos del Campo</h2>
          <p>La mejor selección de frutas y verduras frescas, directo a tu mesa</p>
        </div>

        <div className={styles.imageFallback}>
          <div className={styles.fallbackContent}>
            <h2>Productos Frescos del Campo</h2>
            <p>La mejor selección de frutas y verduras frescas, directo a tu mesa</p>
          </div>
        </div>
      </div>
      <Link to="/productos" className="btn btnPrimary">Ver productos</Link>
    </section>
  );
}

import styles from './Footer.module.css'
import emailImg from '../../assets/email.jpg'
import facebookImg from '../../assets/facebook.jpg'
import instagramImg from '../../assets/instagram.jpg'
import whatsappImg from '../../assets/whatsapp.jpg'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid3}>
          <div className={styles.companyInfo}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🥑</span>
              <span className={styles.logoText}>FrutiMarket</span>
            </div>
            <p className={styles.description}>
              Tu tienda de frutas y verduras frescas, directo del campo.
            </p>
            <p className={styles.description}>
              Integramos todos los servicios del mercado de abastos en una sola plataforma.
            </p>
            <div className={styles.socialMedia}>
              <a href="mailto:info@frutimarket.pe" className={styles.socialIcon} title="Email">
                <img src={emailImg} alt="Email" />
              </a>
              <a href="#" className={styles.socialIcon} title="Facebook">
                <img src={facebookImg} alt="Facebook" />
              </a>
              <a href="#" className={styles.socialIcon} title="Instagram">
                <img src={instagramImg} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Columna central - Recursos */}
          <div className={styles.resources}>
            <h4 className={styles.sectionTitle}>Recursos</h4>
            <ul className={styles.linksList}>
              <li><a href="/faq">Preguntas Frecuentes</a></li>
              <li><a href="/privacy">Política de privacidad</a></li>
              <li><a href="/terms">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Columna derecha - Contacto */}
          <div className={styles.contact}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <img src={whatsappImg} alt="WhatsApp" className={styles.contactIcon} />
                <span>WhatsApp</span>
              </div>
              <div className={styles.contactItem}>
                <img src={emailImg} alt="Email" className={styles.contactIcon} />
                <span>clientes@frutimarket.pe</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Av. Siempre Viva 123, Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.copy}>© {new Date().getFullYear()} FrutiMarket</div>
      </div>
    </footer>
  )
}

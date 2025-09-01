import styles from './Gallery.module.css'
import ProductCard from '../ProductCard/ProductCard'

export default function Gallery({ products }){
  return (
    <section className="container">
      <div className={styles.grid}> 
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}

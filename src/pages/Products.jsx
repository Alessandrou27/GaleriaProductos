import { useMemo, useState } from 'react'
import Gallery from '../components/Gallery/Gallery'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'
import { allProducts, categories } from '../services/products'

export default function Products(){
  const [selected, setSelected] = useState('all')

  const filtered = useMemo(()=>{
    if(selected==='all') return allProducts
    return allProducts.filter(p=>p.category===selected)
  },[selected])

  return (
    <section className="container" style={{padding:'1rem 0 2rem'}}>
      <h2>Productos</h2>
      <CategoryFilter categories={categories} selected={selected} onChange={setSelected} />
      <Gallery products={filtered} />
    </section>
  )
}

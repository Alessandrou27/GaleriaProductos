import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ categories, selected, onChange }){
  return (
    <div className={styles.wrap}>
      <label htmlFor="category">Categoría:</label>
      <select id="category" value={selected} onChange={e=>onChange(e.target.value)} className={styles.select}>
        <option value="all">Todas</option>
        {categories.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}

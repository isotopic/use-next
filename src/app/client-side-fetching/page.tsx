'use client';

import styles from './page.module.css';
import { useItems } from './useItems';

export default function Page({ params }:any) {

  const { items, isLoading, error } = useItems();
  if (isLoading) return 'Loading...'
  if (error) return 'Error'

  type Item = {
    id: number,
    title: string
  }

  return (
    <main className={styles.main}>
      <div>

        <h3>/client-side-fetching/page.tsx</h3>

        <br/>
        <br/>

        <ul>
          {items.slice(0, 10).map((item: Item) => {
            return <li key={item.id}><b>{item.id}.</b> {item.title}</li>
          })}
        </ul>
        
      </div>
    </main>
  )
}

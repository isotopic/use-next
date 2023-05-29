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

        <div className="page-info">
          <h2>Client-side fetching <p>/client-side-fetching/page.tsx</p></h2>
          <p>Example of client-side <a target="_blank" href="https://nextjs.org/docs/app/building-your-application/data-fetching">data fetching</a>.</p>
        </div>

        <ul>
          {items.slice(0,10).map((item: Item) => {
            return <li key={item.id}><b>{item.id}.</b> {item.title}</li>
          })}
        </ul>
        
      </div>
    </main>
  )
}

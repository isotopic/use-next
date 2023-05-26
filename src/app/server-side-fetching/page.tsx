import styles from './page.module.css';

export default async function Page({ children }: any) {

  return (
    <main className={styles.main}>
        <div>
          { children }
        </div>
    </main>
  )
}

import styles from './page.module.css';
import Link from 'next/link';

async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return res.json();
}


type User = {
  id: number,
  name: string
}

export default async function Page({children}: {children: React.ReactNode}) {

  const users = await getUsers();

  return (
    <main className={styles.main}>
      <div>

        <h3>/server-side-fetching/page.tsx</h3>

        <br/>

        <ul>
        {users.map((item: User) => {
            return <li key={item.id}><Link href={`/server-side-fetching/${item.id}`}><b>{item.id}.</b> {item.name}</Link></li>
          })}
        </ul>

        <br/>

        <div>
          { children }
        </div>
        
      </div>
    </main>
  )
}

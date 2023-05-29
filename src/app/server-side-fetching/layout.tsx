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

export default async function Layout({ children }: any) {

  const users = await getUsers();

  return (
    <main className={styles.main}>
      <div>

        <div className="page-info">
          <h2>Server-side fetching <p>/server-side-fetching/page.tsx</p></h2>
          <p>Example of server-side <a target="_blank" href="https://nextjs.org/docs/app/building-your-application/data-fetching">data fetching</a>.</p>
        </div>

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

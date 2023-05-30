import styles from "./page.module.css";
import Link from "next/link";

async function getUsers() {
  const res = await fetch(`https://dummyjson.com/users`);
  const parsed = await res.json();
  return parsed.users;
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  domain: string;
  image: string;
};

export default async function Layout({ children }: any) {
  const users = await getUsers();

  return (
    <main className={styles.main}>
      <div>
        <div className="page-info">
          <h2>
            Server-side fetching <p>/server-side-fetching/page.tsx</p>
          </h2>
          <p>
            Example of server-side{" "}
            <a
              target="_blank"
              href="https://nextjs.org/docs/app/building-your-application/data-fetching"
            >
              data fetching
            </a>
            .
          </p>
        </div>

        <ul>
          {users.slice(0, 10).map((item: User) => {
            return (
              <li key={item.id}>
                <Link href={`/server-side-fetching/${item.id}`}>
                  <b>{item.id}.</b> {item.firstName} {item.lastName}
                </Link>
              </li>
            );
          })}
        </ul>

        <br />

        <div>{children}</div>
      </div>
    </main>
  );
}

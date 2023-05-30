"use client";

import styles from "./page.module.css";
import { useUsers } from "./useUsers";
import { useState } from "react";

export default function Page({ params }: any) {
  const { items, isLoading, error } = useUsers();
  const [user, setUser] = useState<User>();
  const [loadingDetail, setLoadingDetail] = useState(false);

  if (isLoading) return "Loading...";
  if (error) return "Error";

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

  async function clickItem(id: number) {
    setUser(undefined);
    setLoadingDetail(true);
    const response = await fetch("https://dummyjson.com/users/" + id);
    const data = await response.json();
    setUser(data);
    setLoadingDetail(false);
  }

  return (
    <main className={styles.main}>
      <div>
        <div className="page-info">
          <h2>
            Client-side fetching <p>/client-side-fetching/page.tsx</p>
          </h2>
          <p>
            Example of client-side{" "}
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
          {items.slice(0, 10).map((item: User) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  clickItem(item.id);
                }}
              >
                <b>{item.id}.</b> {item.firstName} {item.lastName}
              </li>
            );
          })}
        </ul>

        {user && (
          <code>
            ID: <b>{user.id}</b>
            <br />
            Name: <b>{user.firstName}</b>
            <br />
            email: <b>{user.email}</b>
            <br />
            username: <b>{user.username}</b>
            <br />
            password: <b>{user.password}</b>
            <br />
            website: <b>{user.domain}</b>
            <br />
          </code>
        )}

        <br />
        {!!loadingDetail && "Loading details..."}
      </div>
    </main>
  );
}

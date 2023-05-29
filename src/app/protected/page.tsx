'use client';
import { useSession  } from 'next-auth/react';
export default function Page() {

  const { data: session } = useSession();

  return (
    <main>
      <div>
        <h3>/protected/page.tsx</h3>
        <br/>
        <p>This page is restricted to signed users and therefore has access to session properties obtained from dummyjson.com/auth.</p>
        <br/>
        <code>
          {JSON.stringify(session?.user)}
        </code>
      </div>
    </main>
  )
}

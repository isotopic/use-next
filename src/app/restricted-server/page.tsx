'use client';
import { useSession, signIn  } from 'next-auth/react';
export default function Page() {

  const { data: session } = useSession();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>Restricted on server-side <p>/restricted-client/page.tsx</p></h2>
          <p>Example of <a target="_blank" href="https://next-auth.js.org/tutorials/securing-pages-and-api-routes">server-side</a> access control via NextAuth.</p>
        </div>

        <div>
          <p>This page is restricted to signed users via middleware.</p>
          <code>
          {JSON.stringify(session?.user)}
          </code>
        </div>

      </div>
    </main>
  )
}

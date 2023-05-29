'use client';
import { useSession, signIn  } from 'next-auth/react';
export default function Page() {

  const { data: session } = useSession();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>Restricted on client-side <p>/restricted-client/page.tsx</p></h2>
          <p>Example of <a target="_blank" href="https://next-auth.js.org/tutorials/securing-pages-and-api-routes">client-side</a> access control via NextAuth.</p>
        </div>

        {session ?
          <div>
            <p>You are signed in.</p>
            <code>
            {JSON.stringify(session?.user)}
            </code>
          </div>
        :
          <p><a style={{cursor:'pointer'}} onClick={() => signIn()}>Sign in</a> to see all the content of this page.</p>
        }

      </div>
    </main>
  )
}

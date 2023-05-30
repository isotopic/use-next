'use client';
import { useSession, signIn  } from 'next-auth/react';
export default function Page() {

  const { data: session } = useSession();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>Restricted on server-side with role <p>/restricted-server-role/page.tsx</p></h2>
          <p>Example of <a target="_blank" href="https://next-auth.js.org/tutorials/securing-pages-and-api-routes">server-side</a> access control with role restriction.</p>
        </div>

        <div>
          <p>You are signed in. This page is restricted to signed users with role 'admin' via <i>src/middleware.ts</i>.<br/>Note: Female users are manually set 'admins' on [...mextauth] for testing this feature.</p>
          <code>
          {JSON.stringify(session?.user)}
          </code>
        </div>

      </div>
    </main>
  )
}

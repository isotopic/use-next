"use client";
import { useSession, signIn } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>
            Restricted on server-side <p>/restricted-server/page.tsx</p>
          </h2>
          <p>
            Example of{" "}
            <a
              target="_blank"
              href="https://next-auth.js.org/tutorials/securing-pages-and-api-routes"
            >
              server-side
            </a>{" "}
            access control via NextAuth.
          </p>
        </div>

        <div>
          <p>
            You are signed in. This page is restricted to signed users via{" "}
            <i>src/middleware.ts</i>.
          </p>
          <code>{JSON.stringify(session?.user)}</code>
        </div>
      </div>
    </main>
  );
}

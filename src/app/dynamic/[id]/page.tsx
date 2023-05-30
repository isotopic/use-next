"use client";

export default function Page({ params }: any) {
  return (
    <main>
      <div>
        <div className="page-info">
          <h2>
            Dynamic path <p>/dynamic/[id]/page.tsx</p>
          </h2>
          <p>
            Example of{" "}
            <a
              target="_blank"
              href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes"
            >
              dynamic routes
            </a>
            .
          </p>
        </div>
        <code>
          id: <b>{params.id}</b>
        </code>
      </div>
    </main>
  );
}

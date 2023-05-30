"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>
            Search params <p>/search-params/page.tsx</p>
          </h2>
          <p>
            Example of{" "}
            <a
              target="_blank"
              href="https://nextjs.org/docs/app/api-reference/functions/use-search-params"
            >
              useSearchParams
            </a>
            .
          </p>
        </div>
        <code>
          id: <b>{searchParams.get("id")}</b>
        </code>
      </div>
    </main>
  );
}

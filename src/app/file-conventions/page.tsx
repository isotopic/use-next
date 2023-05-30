"use client";

async function fakeLoadData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

export default async function Page() {
  let data = await fakeLoadData();

  return (
    <main>
      <div>
        <div className="page-info">
          <h2>
            File conventions <p>/special-files/page.tsx</p>
          </h2>
          <p>
            Example of{" "}
            <a
              target="_blank"
              href="https://nextjs.org/docs/app/api-reference/file-conventions"
            >
              file conventions
            </a>
            .
          </p>
        </div>
        <code>
          loading.tsx
          <br />
          error.tsx
        </code>
        <br />
        {data.length} items loaded.
      </div>
    </main>
  );
}

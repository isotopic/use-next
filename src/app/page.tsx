export default function Home() {
  return (
    <main>
      <div>
        <div className="page-info">
          <h2>
            Home <p>/page.tsx</p>
          </h2>
          <p>File for home page on app root.</p>
        </div>
        <p>
          This application is a collection of snippets for NextJS 13+ covering
          basic features like routing, layouts, server components, data fetching
          variations and anthentication.
        </p>
        <br />
        <p>
          Note: External data is loaded from{" "}
          <a target="_blank" href="https://dummyjson.com/docs">
            dummyjson.com
          </a>
          , including users and login information.
        </p>
      </div>
    </main>
  );
}

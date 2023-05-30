async function getUser(id: number) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const obj = await res.json();
  return obj;
}

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

export default async function Page({ params }: any) {
  const user: User = await getUser(params.id);

  return (
    <main className="grid-border" style={{ padding: "10px" }}>
      <div>
        <h3>/server-side-fetching/[id]/page.tsx</h3>
        <code>
          ID: <b>{user.id}</b>
          <br />
          Name: <b>{user.firstName}</b>
          <br />
          email: <b>{user.email}</b>
          <br />
          Website: <b>{user.domain}</b>
          <br />
        </code>
      </div>
    </main>
  );
}

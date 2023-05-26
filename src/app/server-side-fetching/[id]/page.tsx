
async function getUser(id:number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

type User = {
  id: number,
  name: string,
  email: string,
  website: string,
}

export default async function Page({params}: any) {

  const user:User = await getUser(params.id);

  return (
    <main>
      <div>

        <h3>/server-side-fetching/[id]/page.tsx</h3>

        <br/>

        <code>
        ID: <b>{user.id}</b><br/>
        Name: <b>{user.name}</b><br/>
        email: <b>{user.email}</b><br/>
        Website: <b>{user.website}</b><br/>
        </code>



      </div>
    </main>
  )
}

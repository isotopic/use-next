'use client';

async function fakeLoadData(){
  await new Promise(resolve => setTimeout(resolve, 2000));
  return [1,2,3,4];
}

export default async function Page() {
  let data = await fakeLoadData();

  return (
    <main>
      <div>
        <h3>/special-files/page.tsx</h3>
        <code>loading.tsx<br/>error.tsx</code>

        <br/>
        {data.length} items loaded.
      </div>
    </main>
  )
}

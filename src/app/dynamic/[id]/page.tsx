'use client';

export default function Page({ params }:any) {

  return (
    <main>
      <div>
        <h3>/dynamic/[id]/page.tsx</h3>
        <code>
            id: <b>{params.id}</b>
        </code>
      </div>
    </main>
  )
}

'use client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();

  return (
    <main>
      <div>
        <h3>/search-params/page.tsx</h3>
        <code>
          searchParams.get(id)
         <br/><b>{searchParams.get('id')}</b>
        </code>
      </div>
    </main>
  )
}

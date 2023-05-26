'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';
const fetcher = (...args:any) => fetch(...([args] as const)).then((res) => res.json());

export default function Page({ params }:any) {

  const pathname = usePathname();
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/${params.id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <div>
        <h3>/dynamic/[id]/page.tsx</h3>
        <code>
          <b>
            ID: {data.id}
          </b><br/>
          {data.title}
        </code>
        <br/><br/>
        <Link href={`/${pathname.split('/')[1]}/1`}>Load 1</Link><br/>
        <Link href={`/${pathname.split('/')[1]}/2`}>Load 2</Link><br/>
        <Link href={`/${pathname.split('/')[1]}/3`}>Load 3</Link>
      </div>
    </main>
  )
}

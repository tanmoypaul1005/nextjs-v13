import Link from 'next/link'
import React, { Suspense } from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // fetch('https://...', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <div>
  <Suspense fallback={<div>Loading.........................</div>}>
  {data?.map((item, index) => (
    <>
      <Link href={`users/${item?.id}`}>{item?.name} ffffff{item?.id}</Link>
      <br></br>
    </>
  ))}
  </Suspense>
</div>
}

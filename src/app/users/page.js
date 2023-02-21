import Link from 'next/link'
import React, { Suspense } from 'react'

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  // throw new Error("Error from get data")
  return data;
}

export default async function page() {
  const data = await fetchData();
  return (
    <div>
      <Suspense fallback={<div>Loading.........................</div>}>
      {data?.map((item, index) => (
        <>
          <Link href={`users/${item?.id}`}>{item?.name} {item?.id}</Link>
          <br></br>
        </>
      ))}
      </Suspense>
    </div>
    
  )
}

import Link from 'next/link'
import React, { Suspense } from 'react'

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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
    const data = await getData(1);

    return <div>
        <Suspense fallback={<div>Loading.........................</div>}>
            <div>{data?.name}</div>
        </Suspense>
    </div>
}

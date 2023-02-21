import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href="users/1">user1 </Link>
      <Link href="users/2">user2 </Link>
      <Link href="users/3">user3 </Link>
      <Link href="users/4">user4 </Link>
      <Link href="users/5">user5 </Link>
    </div>
  )
}

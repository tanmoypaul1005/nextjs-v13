"use client"
import React from 'react'

export default function User({params}) {

    console.log("params",params)
  return (
    <div>
      user {params?.id}
    </div>
  )
}

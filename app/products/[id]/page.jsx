import React from 'react'

export default function page({params}) {
  return (
    <div>
      <h2>Product id: {params.id}</h2>
    </div>
  )
}

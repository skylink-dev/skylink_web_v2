import React from 'react'
import Link from 'next/link'
export default function SecondMenu() {
  return (
    <div className="inline-flex flex-items-center justify-end grid-col-6 pad-l-xxs pad-r-xxs">
        <Link href="/">Find a store</Link>
        <div className="inline-flex rel flex-centered hydrated">
        <Link href="/" className='langLink inline-flex rel flex-centered type-14 pad-l-xxxs pad-r-xxxs mar-l-xxs mar-r-xxs'>Ver en español</Link>
        </div>
    </div>
  )
}

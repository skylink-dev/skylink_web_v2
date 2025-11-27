import React from 'react'
import Link from 'next/link'

export default function Menu() {

  return (
    <>
      <div className="inline-flex flex-items-center justify-start height-full grid-col-6 nopad company">
        <Link href="/" className="css-bold gn-active-link inline-flex rel flex-centered type-14 mar-l-xs mar-r-xs">Personal</Link>
        <Link href="/" className="inline-flex rel flex-centered type-14 mar-l-xs mar-r-xs">Business</Link>
      </div>
    </>
  )
}
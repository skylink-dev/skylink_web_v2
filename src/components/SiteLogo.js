import React from 'react'
import SiteImg from '../assets/skylink logo.png'
import Link from 'next/link'
import Image from "next/image"
export default function SiteLogo() {
  return (
    <>
      <Link href="/" className="inline-flex">
        <i className="inline-flex flex-centered">
          <Image width={140} height={40} src={SiteImg} alt="skylink" />
        </i>
      </Link>
    </>
  )
}

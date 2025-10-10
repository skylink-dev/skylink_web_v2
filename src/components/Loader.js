import React from 'react'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className="custom-height">
      <div className="text-center py-6">
        <div className="loader">Loading more plans...</div>
      </div>
    </div>
  )
}

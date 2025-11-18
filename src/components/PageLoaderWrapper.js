"use client";
import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"));
export default function PageLoaderWrapper({ children }) {
   const pathname = usePathname();
  const [loading, setLoading] = useState(false);
    useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 10); // fake delay
    return () => clearTimeout(timeout);
  }, [pathname]);   
  return (
    <>
      {loading && <Loader />}
      {!loading && children}
    </>
  )
}

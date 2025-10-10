'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const Tab = dynamic(() => import('@/components/Tab'));

export default function Page() {
  return (
    <>
      <Tab />
    </>
  );
}

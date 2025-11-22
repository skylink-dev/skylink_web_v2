import React from 'react';
import dynamic from 'next/dynamic';

const Pacakages = dynamic(() => import('@/components/Pacakages'));

export default function Page() {
  return <Pacakages />;
}

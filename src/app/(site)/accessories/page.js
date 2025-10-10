'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import {
  iconMenuData,
  IconContent,
  slidesData,
  dynamicSlidesData,
  productsData
} from "../../../data/accessories";

const IconMenu = dynamic(() => import('@/components/IconMenu'));
const IconDetails = dynamic(() => import('@/components/IconDetails'));
const Slider = dynamic(() => import('@/components/Slider'));
const ProductCard = dynamic(() => import('@/components/ProductCard'));
const DynamicCarousel = dynamic(() => import('@/components/DynamicCarousel'));

export default function Page() {
    const dummy = () => {
    console.log('test');
   }
  return (
    <>
      <IconDetails title="Accessories by category?" iconslist={IconContent} />
      <Slider title="Accessories you love. Deals you want." slides={slidesData} color="bg-att-blue-000" />
      <ProductCard title="Designed by skyplay" products={productsData} />
      <DynamicCarousel slidesData={dynamicSlidesData} color="bg-white" />
    </>
  );
}

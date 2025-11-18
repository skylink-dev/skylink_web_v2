'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AnimatePresence, motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import CustomIptvSlider from '@/components/customSlider';
import CustomSliderOtt from '@/components/CustomSliderOtt';
import Tab from './component/Tab';
import { Providers } from '../Providers';
import { PlanProvider } from './context/PlansContext';
import ContactPopup from './component/ContactPopup';
import StructuredData from "@/components/StructuredData";
import {getProductStructuredData} from "@/lib/structuredData";

const ReactSelectWithSearch = dynamic(
    () => import('@/components/SelectField'),
    { ssr: false }
);
const Drawyer = dynamic(() => import('@/components/Drawyer'));

export default function Page() {
    const productData = getProductStructuredData({
        name: "Skylink 1 Gbps Fiber Plan",
        description: "Lightning-fast 1 Gbps internet with unlimited data, free installation, and 24/7 customer support.",
        image: "https://skylinkfiber.com/assets/1gbps.jpg",
        price: "999",
        priceCurrency: "INR",
        sku: "SKYLINK-1GBPS",
    });
    return (
        <Providers>
          <PlanProvider>
              <><Tab></Tab>
                  <StructuredData data={productData}/>
              </>
        </PlanProvider>
        </Providers>
    )
}
       

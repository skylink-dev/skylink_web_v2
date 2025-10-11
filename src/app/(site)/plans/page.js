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


const ReactSelectWithSearch = dynamic(
    () => import('@/components/SelectField'),
    { ssr: false }
);
const Drawyer = dynamic(() => import('@/components/Drawyer'));

export default function Page() {
    return (
        <Providers>
          <PlanProvider>
            
            <><Tab></Tab></>
        </PlanProvider>
        </Providers>
    )
}
       

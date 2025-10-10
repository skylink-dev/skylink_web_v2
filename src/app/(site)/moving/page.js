import AvailabilityComponents from '@/components/AvailabilityComponents';
import BgSlider from '@/components/BgSlider';
import Faq from '@/components/Faq';
import HeroBanner from '@/components/HeroBanner';
import RightImageLeftContent from '@/components/RightImageLeftContents';
import StepByStepComponent from '@/components/StepByStepComponent';
import React from 'react'

export default function page() {
const HeroContent = {
  image: "assets/move-and-packers.jpg",
  title: "Shifting your home?",
  description: "Don't leave your internet behind.",
  additionaldescription: "Skylink makes broadband relocation smooth and hassle-free. Stay connected when you move — we’ll handle the transfer.",
  subcta: "Relocate with Skylink",
  maincta: "Call (+91) 99441 99448"
};
const stepsData = [
  {
    id: 1,
    title: 'Check Availability',
    description: 'Enter your new address to see if Skylink broadband is available at your new location.',
    link: '/check-availability',
  },
  {
    id: 2,
    title: 'Transfer or Upgrade',
    description: 'If service is available, move your current plan or upgrade to a new one with add-ons. We’ll let you know if a technician is needed or if self-installation is possible.',
    link: '/transfer-or-upgrade',
  },
  {
    id: 3,
    title: 'Schedule Setup',
    description: 'Reduce downtime by choosing a convenient time to disconnect at your old address and activate service at your new home.',
    link: '/schedule-move',
  },
];
const dynamicImageContent = [
  {
    img: "/assets/easy-move.jpg",
    icon: ("/assets/offer.png"),
   title: "Easy Move",
    description: "Moving your broadband is simple with Skylink. Just share your new address — we’ll handle the rest, with zero disruption to your service.",
  },
  {
    img: "/assets/flexible-setup.jpg",
    icon: ("/assets/get-award-only.png"),
      title: "Flexible Setup",
    description: "Moving? We've got a gift for you. Use code MOVE4REWARD at checkout and claim your ₹1000 reward card. Hurry – offer ends 30/09/25. Online only. Redemption required."
  },
  {
    img: "/assets/always-connected.jpg",
    icon: ("/assets/give-price-less.png"),
          title: "Always Connected",
    description: "We ensure your connection is active when you arrive. No delays, no downtime — seamless transition, uninterrupted internet.",
  },
]
const faqSecondContent = [
  {
    title: "Moving soon? Bring Skylink Fiber with you.",
    content: "Relocating doesn’t mean you need to compromise on internet quality. Skylink Fiber is available across select cities with ultra-fast, reliable speeds. Before you move, check your new address for availability and schedule a quick installation with no downtime."
  },
  {
    title: "How do I transfer my Skylink Fiber to a new location?",
    content: "Transferring your Skylink Fiber service is easy. Just notify us of your new address, and we’ll handle the rest — from checking service availability to scheduling your move-in installation. Plus, you may qualify for exclusive move-in offers."
  },
  {
    title: "New to Skylink? Get connected fast.",
    content: "If you're switching to Skylink Fiber at your new location, our team makes it effortless. Choose a plan, confirm service availability, and enjoy professional installation, fast Wi-Fi 6, and unlimited data — all ready when you move in."
  },
  {
    title: "Skylink coverage and service availability",
    content: "Skylink Fiber is expanding rapidly across India. Service availability varies by city and neighborhood. To ensure the best experience, check your new location online or contact our team to confirm coverage before your move."
  }
];

  return (
    <>
    <HeroBanner content={HeroContent} />
    <AvailabilityComponents />
    <StepByStepComponent steps={stepsData}></StepByStepComponent>
    <RightImageLeftContent title="We're glad you're here" Content={dynamicImageContent} />
    <BgSlider></BgSlider>
    <Faq title="Why Skylink Fiber is the Smarter Choice" content={faqSecondContent} />
    </>
  )
}

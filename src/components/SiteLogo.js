import React from "react";
import Link from "next/link";
import Image from "next/image";
import SiteImg from "../../public/newassets/Footer/SkylinkLogo.png";

export default function SiteLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
    >
      <Image
        src={SiteImg}
        alt="Skylink Logo"
        width={140}
        height={40}
        className="h-auto w-auto max-w-[140px] object-contain"
        priority
      />
    </Link>
  );
}

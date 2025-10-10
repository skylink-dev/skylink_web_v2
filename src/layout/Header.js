'use client';
import MainMenu from '@/components/MainMenu'
import Menu from '@/components/Menu'
import SecondMenu from '@/components/SecondMenu'
import SiteLogo from '@/components/SiteLogo'
import React from 'react'
import SearchForm from '@/components/SearchForm'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link'

export default function Header() {
  return (
    <div id="gnavSSR" className="staticGNAV">
    <header id="attgn_header" className="att_gnav_wrapper false">
    <div className="top-header" style={{ "display":"none", "backgroundColor": "#F8FAFB", "borderBottom": "1px solid #F3F4F6" }}>
        <nav className="container flex justify-between type-14 rel nopad color-black hidden-mobile">
          <Menu></Menu>
          <SecondMenu></SecondMenu>
        </nav>
      </div>
      <div className="header-special-div" style={{"marginTop":"12px"}}></div>
      <nav id="main-menu" className="container flex justify-between rel nopad type-16 false">
        <div id="z1_left_zone" className="flex flex-items-center pull-left">
          <div className="flex flex-items-center">
            <div className="inline-flex height-full flex-items-center rel mar-r-xxs-lg mar-l-xxs-lg pad-r-xxxs-lg pad-l-xxxs-lg mar-r-xxs-md mar-l-xxs-md pad-r-xxxs-md pad-l-xxxs-md site-logo-wrap">
              <SiteLogo></SiteLogo>
            </div>
            <MainMenu></MainMenu>
          </div>
        </div>
        <div id="z1_center_zone" className="flex flex-items-center justify-center">

        </div>
        <div id="z1_right_zone" className="flex flex-items-center pull-right justify-end">
          <div className="custom-button-wrap">
            <Link href="https://www.skylink.net.in/wp-content/uploads/large-files/skyplaytv.apk" className="btn-primary bg-gray-500" download>Download IPTV App</Link>
            <Link href="https://activations.skyplay.in/ott_subscription/login/" target='_blank' className="btn-primary bg-gray-600">Claim Your TV/OTT</Link>
            <Link href="https://www.skylinknet.in/customer_portal/account/sn" target="_blank" className="btn-primary bg-gray-800">Quick <br/> Pay</Link>
            <Link href="/plans" className="btn-primary bg-black">View Our Plans</Link>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

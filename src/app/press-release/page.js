"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import GETFUNDEDD from "../common/GETFUNDEDDTWO.js";
import PARTNERWITHUS from "../common/partnerTabopo.js";
import Footer from "../common/Footer.js";
import TestimonialSlideTwoN from "../common/TestimonialSlideTwo2.js";                 
import ClientsSay from "../common/Client.js"; 
import Tab from "../common/tabpartner2.js"; 
import Marquee from "../common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ExpertTwoJoin from "../img/beautiful-young-woman-home-office-working-from-home-teleworking-concept@2x.png";
import Arrow from "../img/arrow-up-right.png";
import BeginYour from "../img/Layer_1.png";
import GroupTW from "../img/Group-25.png";
import GroupTWoo from "../img/Layer_1@2x.png";
import GirlTwo from "../img/support_2058768@2x.png";
import GirlThree from "../img/press.jpg";
import GirlThreeNN from "../img/reputation-12133556@2x.png"; 
import GirlFour from "../img/factors_18377058@2x.png";    
import GirlFive from "../img/icckd.png"; 
import GirlFourT from "../img/factors_18377058@2x-white.png";    
import GirlFiveT from "../img/grow-chart_12411360@2x.png"; 
import Trusted from "../img/cash-flow_2751464@2x.png";
import headertopicon from "../img/header-top-icon.png";
import Arrowm from "../img/arrow-small.png";  
import headertopiconFL from "../img/Gear-Light-Bulb-Idea-Business-Management@2x.png";
import ExpertTwo from "../img/shutterstock_2479065559@2x.png";  
import Logo from "../img/fund-l.png";   
import LogoOne from "../img/logo-inverse.png"; 
import LogoTwo from "../img/Gold_RGB.png";  
import LogoThree from "../img/logo3.png"; 
import LogoFour from "../img/logo4.png"; 
import ExpertThree from "../img/shutterstock_1955362555@2x.png";    
import { GoogleTagManager } from "@next/third-parties/google";
export default function Arfactoring() {
  return (
    <>  
      <GoogleTagManager gtmId="GTM-MFH6JPN5" />                    
      <main className="partner-main-page">                   
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="=" />
        </Head>

        <header>
          <Header />
          <div className="mobile-menu-header">
            <div className="logo-mobilr">
            <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
            </div>
          <HeaderMobileIn />
          </div>
          </header> 

        

 <section className="How-It-Works-main-frame-partner tow">
<div className="container">
     <div className="How-It-Works-main-frame-partner-heading">
        <div className="How-It-Works-main-frame-partner-heading-left">
            <h3>Press  <span>Release</span></h3>
             </div>
      
     </div>
     <div className="press-frame-middle">
            <ul>
                <li>
                    <a target="_blank" href="https://www.abfjournal.com/fundedd-and-peapack-private-bank-finance-acquisition-of-technology-service-provider/">
                    <Image src={GirlThree} alt="" />
                    </a>
                    <h5>Fundedd and Peapack Private Bank Finance Acquisition of Technology Service Provider
</h5>
<p><a target="_blank" href="https://www.abfjournal.com/fundedd-and-peapack-private-bank-finance-acquisition-of-technology-service-provider/">Read More</a></p>    
                </li>
            </ul>
        </div>
   
</div>
</section>



        <Footer />                
      </main>          
    </>
  );
}

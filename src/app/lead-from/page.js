"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import HubSpotForm  from "./HubSpotForm.js";
import Footer from "../common/Footer.js";
import TestimonialSlideTwoN from "../common/TestimonialSlideTwo2.js";                 
import ClientsSay from "../common/Client.js"; 
import Tab from "../common/Tab2.js"; 
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
import GirlThree from "../img/management_11063187-1@2x.png";
import GirlThreeNN from "../img/reputation-12133556@2x.png"; 
import GirlFour from "../img/factors_18377058@2x.png";    
import GirlFive from "../img/icckd.png"; 
import GirlFourT from "../img/factors_18377058@2x-white.png";    
import GirlFiveT from "../img/icckd-white.png"; 
import Trusted from "../img/shutterstock_2510817173.png";
import headertopicon from "../img/header-top-icon.png";
import Arrowm from "../img/arrow-small.png";  
import headertopiconFL from "../img/15-Money@2x.png";
import ExpertTwo from "../img/pexels-tima-miroshnichenko-6693661@2x.png";
import Logo from "../img/fund-l.png";  
import ExpertThree from "../img/shutterstock_2280786247@2x.png";    

export default function Arfactoring() {
  return (
    <>                      
      <main>                   
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

        <section className="lead-from-main-section">
            <div className="container">
                 <div className="lead-from-main-section-middle">
                 <HubSpotForm />    
                 </div>
            </div>
        </section>

        <Footer />                
      </main>          
    </>
  );
}

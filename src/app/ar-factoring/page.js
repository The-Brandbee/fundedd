"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TestimonialSlide from "../common/TestimonialSlide.js"; 
import ClientsSay from "../common/Client.js"; 
import Tab from "../common/Tab2.js"; 
import Marquee from "../common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Girl from "../img/Mask-Group-1.png";
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
import TrustedTwo from "../img/shutterstock_2433120923@2x.png";
import Expert from "../img/Component-12-1@2x.png";
import ExpertTwo from "../img/shutterstock-5402044.png";
import ExpertThree from "../img/Ellipse-6@2x.png";    
import ExpertThreeTW from "../img/Fundedd-logo-04@2x.png";    

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
          </header> 
<section className="How-Fundedd-Stands-Out">
<div className="container">
<div className="How-Fundedd-Stands-Out-middle">
    <h4>How <span>Fundedd</span> Stands Out</h4>      
 <div className="tab-view">
 <Tab />
 </div>
</div>
</div>
</section>  
        <Footer />
      </main>
    </>
  );
}

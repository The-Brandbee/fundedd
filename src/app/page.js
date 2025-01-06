"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import TestimonialSlide from "../app/common/TestimonialSlide.js"; 
import ClientsSay from "../app/common/Client.js"; 
import Tab from "../app/common/Tab.js"; 

import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Girl from "../app/img/Mask-Group-1.png";
import Arrow from "../app/img/arrow-up-right.png";
import BeginYour from "../app/img/Layer_1.png";
import GroupTW from "../app/img/Group-25.png";
import GirlTwo from "../app/img/support_2058768@2x.png";
import GirlThree from "../app/img/management_11063187-1@2x.png";
import GirlFour from "../app/img/factors_18377058@2x.png";    
import GirlFive from "../app/img/icckd.png"; 
import GirlFourT from "../app/img/factors_18377058@2x-white.png";    
import GirlFiveT from "../app/img/icckd-white.png"; 
import Trusted from "../app/img/shutterstock_2510817173.png";
import headertopicon from "../app/img/header-top-icon.png";
import TrustedTwo from "../app/img/shutterstock_2433120923@2x.png";
import Expert from "../app/img/Component-12-1@2x.png";
import ExpertTwo from "../app/img/shutterstock-5402044.png";
import ExpertThree from "../app/img/Ellipse-6@2x.png";     

export default function Home() {
  
  
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

        <Footer />
      </main>
    </>
  );
}

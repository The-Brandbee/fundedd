"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import GETFUNDEDD from "../common/GETFUNDEDDTWO.js";
import ContactUsFrom from "../common/ContactUsFrom.js";
import ContactUsFromTwo from "../common/ContactUsFromTwo.js";
import PARTNERWITHUS from "../common/PARTNERWITHUS.js"; 
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
import GirlThree from "../img/Polygon-3@2x.png";
import GirlThreeNN from "../img/reputation-12133556@2x.png"; 
import GirlFour from "../img/factors_18377058@2x.png";    
import GirlFive from "../img/icckd.png"; 
import GirlFourT from "../img/email_7570711@2x.png";    
import GirlFiveT from "../img/grow-chart_12411360@2x.png"; 
import Trusted from "../img/cash-flow_2751464@2x.png";
import IMageone from "../img/Sia_logo@2x.png";
import IMageTwo from "../img/Conferences Image@2x.png";  
import IMageThree from "../img/team-02@2x.png";
import IMageFour from "../img/team-03@2x.png";    
import IMageFive from "../img/loc_icon.png";   
import IMageSix from "../img/dat_icon.png";     
import Logo from "../img/fund-l.png";  
import BlogBanner from "../img/Group-63@2x.png";     
import TestimonialSlide from "../common/TestimonialSlide.js"; 
import { GoogleTagManager } from "@next/third-parties/google";
export default function Arfactoring() {
  return (
    <div className="executive-forum">       
      <GoogleTagManager gtmId="GTM-MFH6JPN5" />                 
      <main className="contact-us-page">                   
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
<>
  <section className="funded_sia_section">
    <div className="funded_sia_container">
      {/* Left Side */}
      <div className="funded_sia_left">
        {/* Top Content (black) */}
        <div className="funded_sia_left_top">
          <h2 className="funded_sia_title">Executive Forum 2025</h2>
          <p className="funded_sia_info">
            <span>
               <Image src={IMageFive} alt="" className="funded_sia_icon"/>  
              
            </span>
            <span>Fontainebleau Miami Beach, FL</span>
          </p>
          <p className="funded_sia_info">
            <span>
              <Image src={IMageSix} alt="" className="funded_sia_icon"/>  
            </span>
            <span>March 11-14, 2025</span>
          </p>
        </div>
        {/* Bottom Content (white) */}
        <div className="funded_sia_left_bottom">
          <div className="funded_sia_logo">
            <Image src={IMageone} alt=""/>  
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="funded_sia_right">
        <Image src={IMageTwo} alt="" className=""/> 
      </div>
    </div>
  </section>
  <section className="fundedd_ateendie_section">
    <div className="fundedd_ateendie_container">
      {/* Row for Title */}
      <div className="fundedd_ateendie_row">
        <div className="fundedd_ateendie_col_12">
          <h2 className="fundedd_ateendie_title">Attendees</h2>
        </div>
      </div>
      {/* Row for Attendees */}
      <div className="fundedd_ateendie_row fundedd_ateendie_attendees">
        <div className="fundedd_ateendie_col_6 fundedd_ateendie_attendee">
          <Image src={IMageThree} alt="" className="fundedd_ateendie_img"/>  
          <p className="fundedd_ateendie_name">Evan</p>
        </div>
        <div className="fundedd_ateendie_col_6 fundedd_ateendie_attendee">
         <Image src={IMageFour} alt="" className="fundedd_ateendie_img"/> 
          <p className="fundedd_ateendie_name">Rahul</p>
        </div>
      </div>
      {/* Row for Description */}
      <div className="fundedd_ateendie_row">
        <div className="fundedd_ateendie_col_12">
          <div className="fundedd_ateendie_desc_box">
            <p>
              We recently joined industry leaders at the Executive Forum in
              Fontainebleau Miami Beach, March 11th - 14th, where Evan and Rahul
              engaged in high-level strategic discussions with staffing
              executives. This annual executive leadership conference provided
              the ideal platform to share insights on operational excellence,
              financial innovation, and market positioning strategies that
              deliver competitive advantage in today's evolving staffing
              landscape. Interested in the insights we gained? Connect with our
              team to explore strategic opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-main-page-maoin">
           <a target="_blank" href="https://calendly.com/evan-prodromo-fundedd">
            Book your Appointment
          </a>
      </div>
    </div>
  </section>
</>

        <Footer />                
      </main>          
    </div>
  );
}

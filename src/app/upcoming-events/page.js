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
import LogoTwoOMW from "../img/logo-nm.png"; 
import arrowupNae from "../img/arrow-up-right-co.png";    
import ArrowN from "../img/arrow-up-right.svg"; 
import SIAN from "../img/logo.svg";
import NIA from "../img/New-Jersey-Staffing-Alliance-NJSA-logo.svg";
import SIA from "../img/asgroup-logo.black_-300x59.png";  
import LogoTwo from "../img/asgroup-logo.black_-300x59.png";
import Logoone from "../img/Orlando-logo-1024x621-trimmed.png";    
import calendar from "../img/calendar.svg";   
import Location from "../img/location-pin.svg";     
import Logo from "../img/fund-l.png";  
import LogoTwoOM from "../img/ign-nnn.png";       
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
   {/* HERO SECTION */}
  <div className="section-wrapper">
    <section className="hero-section">
      <div className="hero-heading">On the Ground, In the Conversation</div>
      <div className="hero-subtext">
        Stay connected with Fundedd as we engage with industry leaders, explore
        innovations, and shape the future of staffing and finance. Here’s where
        we've been and where we're headed.
      </div>
    </section>
  </div>
  <hr className="divider" />
  {/* UPCOMING EVENTS */}
  <div className="events-section-wrapper">
    <section className="events-section">
      <div className="events-title">Upcoming Events</div>
      <div className="events-container">
       
      
       
          <div className="event-card">
          <div className="event-title">ITServe Synergy 2025</div>
          <div className="event-row">
             <Image src={Location} alt="" />  
            <div>San Juan, Puerto Rico</div>
          </div>
          <div className="event-row">
            <Image src={calendar} alt="" />  
            <div>December 4-5, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> ITServe Alliance
          </p>
          <p className="event-label">
            <b>Attending:</b>  Rahul Bajaj, Evan Prodromo
          </p>
          <p className="event-details-label">
            <b>Details:</b> Fundedd will be attending ITServe Synergy 2025, a premier gathering for technology, consulting, and staffing leaders. Our team will join discussions centered on funding innovation, operational scalability, and the evolving financial needs of high-growth tech enterprises. The event will serve as a platform for Fundedd to connect with founders, explore partnership opportunities, and share insights into smarter, faster capital solutions for emerging businesses.
   
          </p>
          <div className="event-logo">
           <Image src={LogoTwoOMW} alt="" />  
          </div>
          <div className="event-arrow">
            <Image src={ArrowN} alt="" />  
          </div>
        </div>
         <div className="event-card">
          <div className="event-title">IT and Leadership Summit 2025</div>
          <div className="event-row">
             <Image src={Location} alt="" />  
            <div>Mumbai & Online</div>
          </div>
          <div className="event-row">
            <Image src={calendar} alt="" />  
            <div>December 10, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> Trans-Venture
          </p>
          <p className="event-label">
            <b>Attending:</b>  Fundedd Leadership Team
          </p>
          <p className="event-details-label">
            <b>Details:</b> Fundedd will be attending the IT and Leadership Summit 2025, an evening centered on the theme Scaling Beyond Limits. The event brings together founders, CXOs, and investors to explore how AI, HR tech, and data-led models can accelerate global growth. With keynote insights from CP Gurnani, discussions will focus on scaling financial innovation across markets, unlocking 10x value through partnerships, and leveraging next-gen technology for smarter lending. For Fundedd, it offers a strategic platform to engage with decision-makers and gain perspectives on building transformative, future-ready financial ecosystems.
   
          </p>
          <div className="event-logo">
           <img src="https://virtuosicventures.com/img/Trans-Venture-logo.png" alt="" />  
          </div>
          <div className="event-arrow">
            <Image src={ArrowN} alt="" />  
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* PAST EVENTS */}
  {/* PAST EVENTS */}
  <div className="past-events-wrapper">
    <section className="past-events-section">
      <div className="past-events-title">Past Events</div>
      <div className="past-events-container">
        {/* Event Card 1 */}
         <div className="past-event-card">
          <div className="event-title">Ignite 2026 — Virtuosic Ventures Annual Summit</div>
          <div className="event-row">
             <Image src={Location} alt="" />  
            <div>Hyderabad, India</div>
          </div>
          <div className="event-row">
            <Image src={calendar} alt="" />  
            <div>November 17-18, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> Virtuosic Ventures
          </p>
          <p className="event-label">
            <b>Attended by:</b>  Fundedd Leadership Team
          </p>
          <p className="event-details-label">
            <b>Details:</b> Fundedd took part in Ignite 2026, engaging with founders, investors, and industry specialists on the future of financing and workforce ecosystems. Discussions highlighted capital innovation, risk intelligence, and new models for supporting fast-growing businesses. The summit offered valuable collaboration opportunities and strengthened Fundedd's strategic alignment within the Virtuosic group.
 
          </p>
          <div className="event-logo">
           <Image src={LogoTwoOM} alt="" />  
          </div>
          <div className="event-arrow">
            <Image src={ArrowN} alt="" />  
          </div>
        </div>
        <div className="past-event-card">
          <div className="event-title">2025 Fall Meeting - Atlanta, GA</div>
          <div className="event-row">
           <Image src={Location} alt="" />  
            <div>Atlanta, GA</div>
          </div>
          <div className="event-row">
          
            <Image src={calendar} alt="" />  
            <div>November 11-14, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> Affiliated Staffing Group
          </p>
          <p className="event-label">
            <b>Attended by:</b> Evan Prodromo, Rahul Bajaj
          </p>
          <p className="event-details-label">
            <b>Details:</b> Fundedd attended the Winter Conference 2025, joining industry leaders for discussions on staffing innovation, market trends, and operational best practices. The event provided valuable insights and strengthened our relationships with partners across the staffing ecosystem.
          </p>
          <div className="event-logo">
           <Image src={LogoTwo} alt="" />  
          </div>
          <div className="event-arrow">
             <Image src={ArrowN} alt="" />  
          </div>
        </div>
        <div className="past-event-card">
          <div className="event-title">Staffing World 2025</div>
          <div className="event-row">
             <Image src={Location} alt="" />  
            <div>Orlando, FL</div>
          </div>
          <div className="event-row">
              <Image src={calendar} alt="" />  
            <div>October 6-8, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> American Staffing Association
          </p>
          <p className="event-label">
            <b>Attended by:</b>  Evan Prodromo, Rahul Bajaj 
          </p>
          <p className="event-details-label">
            <b>Details:</b> The premier annual event for the staffing industry, brought together leaders to discuss growth strategies, AI-driven innovation, and the future of workforce solutions. Fundedd connected with partners and explored opportunities shaping next-generation staffing finance.

          </p>
          <div className="past-event-logo">
            <Link href="/staffing-world-2025">
                 <Image style={{ marginTop: "0px" }} src={Logoone} alt="" />
            </Link>
          </div>
          <div className="past-event-arrow">
            <Link href="/staffing-world-2025">
              <Image src={arrowupNae} alt="" />  
              </Link> 
          </div>
        </div>

       
        {/* Card 2 */}
        <div className="past-event-card">
          <div className="event-title">
          International Factoring Association Annual Conference 2025
          </div>
          <div className="event-row">
           <Image src={Location} alt="" />  
            <div>Palm Springs, CA</div>
          </div>
          <div className="event-row">
               <Image src={calendar} alt="" />  
            <div>May 6-9, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> International Factoring Association
          </p>
          <p className="event-label">
            <b>Attended by:</b>  Evan Prodromo, Asma Manzar   
          </p>
          <p className="event-details-label">
            <b>Details:</b> The largest event dedicated to the factoring industry. Fundedd engaged in key sessions on the future of receivable financing.
          </p>
          <div className="past-event-logo">
           
            <Image src={SIA} alt="" style={{ visibility: "hidden" }}/>
          </div>
          <div className="past-event-arrow">
          <Image src={arrowupNae} alt="" />  
          </div>
        </div>
        {/* Card 3 */}
        <div className="past-event-card">
          <div className="event-title">Executive Leadership Conference 2025</div>
          <div className="event-row">
            <Image src={Location} alt="" />  
            <div>Hard Rock Hotel, Atlantic City, NJ</div>
          </div>
          <div className="event-row">
            <Image src={calendar} alt="" />  
            <div>April 30 - May 1, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> New Jersey Staffing Alliance
          </p>
          <p className="event-label">
            <b>Attended by:</b> Evan Prodromo
          </p>
          <p className="event-details-label">
            <b>Details:</b> A regional leadership event for staffing executives. Fundedd joined discussions around scaling operations and smarter financing models.
          </p>
          <div className="past-event-logo">
           <Image src={NIA} alt=""/>
          </div>
          <div className="past-event-arrow">
           <Image src={arrowupNae} alt="" />  
          </div>
        </div>
        {/* Card 4 */}
        <div className="past-event-card">
          <div className="event-title">
            Executive Forum 2025
          </div>
          <div className="event-row">
            <Image src={Location} alt="" />  
            <div>Fontainebleau Miami Beach, FL</div>
          </div>
          <div className="event-row">
             <Image src={calendar} alt="" />  
            <div>October 06-08, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> Staffing Industry Analysts
          </p>
          <p className="event-label">
            <b>Attended by:</b>  Evan Prodromo, Rahul Bajaj
          </p>
          <p className="event-details-label">
            <b>Details:</b> Annual flagship event for staffing leaders and innovators. Fundedd explored next-gen capital solutions for staffing companies.
          </p>
          <div className="past-event-logo new">
           <Image src={SIAN} alt="" />  
          </div>
          <div className="past-event-arrow">
           <Image src={arrowupNae} alt="" />  
          </div>
        </div>
        {/* Card 
        <div className="past-event-card">
          <div className="event-title">Staffing World 2025</div>
          <div className="event-row">
            <Image src={Location} alt="" />  
            <div>Orlando, FL</div>
          </div>
          <div className="event-row">
             <Image src={calendar} alt="" /> 
            <div>October 6-8, 2025</div>
          </div>
          <p className="event-label">
            <b>Organized by:</b> American Staffing Association
          </p>
          <p className="event-label">
            <b>Attending:</b> Evan Prodromo, Rahul Bajaj
          </p>
          <p className="event-details-label">
            <b>Details:</b>Fundedd will be exhibiting at the premier staffing industry convention. Stop by our booth or book time via Calendly to connect with our team.
          </p>
          <div className="past-event-logo">
            <Image src={SIA} alt="" />
          </div>
          <div className="past-event-arrow">
          <Image src={arrowupNae} alt="" />  
          </div>
        </div>

5 */}
       
      
      </div>
    </section>
  </div>
</>

        <Footer />                
      </main>          
    </div>
  );
}
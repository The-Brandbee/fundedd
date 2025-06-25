"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import GETFUNDEDD from "../common/GETFUNDEDDTWO.js";
import PARTNERWITHUS from "../common/PARTNERWITHUS.js";
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
import GirlThree from "../img/Polygon-3@2x.png";
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
import LogoOne from "../img/logo1.svg"; 
import LogoTwo from "../img/logo2.png";  
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
            <h3>Partner with <span>Fundedd</span></h3>
            <p>Help your Customers Grow through Customized Financing Solutions <br/>and Earn Commissions</p>
        </div>
       
     </div>
     <div className="Referral-Process-work-frame">
        <div className="Referral-Process-work-frame-left">
            <h4>Referral Process</h4>
            <p>Simply refer your staffing company clients to Fundedd for funding options.</p>
        </div>
        <div className="Referral-Process-work-frame-left-two">
        <Image src={GirlThree} alt="" />
        </div>
        <div className="Referral-Process-work-frame-left">
            <h4>Customized Solutions</h4>
            <p>We assess the unique financial needs of each staffing business and offer personalized funding solutions, such as AR factoring, lines of credit, or growth capital.</p>
        </div>
        <div className="Referral-Process-work-frame-left-two">
        <Image src={GirlThree} alt="" />
        </div>
        <div className="Referral-Process-work-frame-left">
            <h4>Ongoing Support</h4> 
            <p>Our dedicated team ensures that your clients receive continuous support throughout the funding process, helping them stay on track with their financial goals.</p>
        </div>
     </div>
     <div className="Ongoing-Support-bottom-frame">
        <div className="Ongoing-Support-bottom-frame-left">
              <p>Get started today and refer your clients for immediate financial support!</p>
              <p> <PARTNERWITHUS/></p>
        </div>
        
     </div>
</div>
</section>

<section className="How-Fundedd-Stands-Out part-new">
<div className="container">
<div className="How-Fundedd-Stands-Out-middle">
  
 <div className="tab-view">
 <Tab />
 </div>
</div>
</div>
</section>


<section className="Expert-Advisory-for Reliable-Funding-When-You-Need What-is-AR-Factoring new">
<div className="container">
  
  <div className="Expert-Advisory-for-middle two">
      <div className="Expert-Advisory-for-middle-left">
      <Image src={ExpertTwo} alt="" className="left-Advisory"/>  
 
      </div>
      <div className="Expert-Advisory-for-middle-right">
      <div className="Expert-Advisory-for-middle-left-cont">
      <h5>Partner with Fundedd:
      </h5>
         <h3>Empowering Your<br/> Clients with Tailored<br/> Financial Solutions</h3>        
         <p>
         At Fundedd, we provide specialized financing solutions that support staffing companies with their unique financial requirements. By partnering with us, banks, investment firms, and business advisors can offer clients tailored funding options that drive sustainable business growth.
         </p>
    <div className="Customized-Financing-main-frame">
        <h5>Customized Financing Solutions
        </h5>
        <p>Flexible funding options tailored to client's cash flow and growth hurdles.</p>
    </div>
    <div className="Customized-Financing-main-frame">
        <h5>Expand Service Offerings
        </h5>
        <p>Add alternative financing solutions to your portfolio.</p>
    </div>
    <div className="Customized-Financing-main-frame">
        <h5>Strengthen Client Relationships
        </h5>
        <p>Provide transparent, reliable financial support.</p>
    </div>
    <div className="Customized-Financing-main-frame">
        
        <p>Partner with Fundedd today and enhance your service offerings with solutions that empower your clients to focus on what matters the most - success!</p>
    </div>
        </div>  
      </div>
  </div>
  
  </div>

</section>

<section className="home-page-lpgo-section-main">
  <div className="container">
    <div className="home-page-lpgo-section-main-heading">
         <h4>Our <span>Memberships</span> and Affiliations</h4>      
    </div>
    <div className="home-page-lpgo-section-main-middle">
        <div className="home-page-lpgo-section-main-middle-img">
            <Image src={LogoOne} alt="" />
        </div>
        <div className="home-page-lpgo-section-main-middle-img">
            <Image src={LogoTwo} alt="" />
        </div>
        <div className="home-page-lpgo-section-main-middle-img">
            <Image src={LogoThree} alt="" />
        </div>
        <div className="home-page-lpgo-section-main-middle-img">
            <Image src={LogoFour} alt="" /> 
        </div>
    </div>
  </div>
</section>

<section className="read-jon-main-frame-inner-two "> 
<div className="container">
  <div className="read-jon-main-frame-inner-two-middle">
    <div className="read-jon-main-frame-inner-two-middle-left">
    <div className="Begin-Your-Funding-Journey-middle-left-left">
      <h4><span>Partner with</span> Us Today!</h4> 
      <p className="today-and-help-your">By partnering with Fundedd, you're giving staffing companies the tools they need to thrive. Whether you're a bank, business advisor, or investment firm, together we can make a real difference in the financial success of staffing companies.</p>
    <p className="today-and-help-your">Ready to partner with Fundedd? Get in touch with us today and help your clients access the funding they need to grow and succeed!</p>
      <p className="today-and-help-your"> <PARTNERWITHUS/> </p></div>
    </div>
    <div className="read-jon-main-frame-inner-two-middle-right">
    <Image src={ExpertTwoJoin} alt="" className="left-Advisory"/>  
    </div>
  </div>
  </div>
</section>


        <Footer />                
      </main>          
    </>
  );
}

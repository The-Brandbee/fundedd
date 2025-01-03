"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import TestimonialSlide from "../app/common/TestimonialSlide.js"; 
import Marquee from "../app/common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

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

export default function Home() {
  
  
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
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
<section className="Empowering-Staffing-Companies">
<div className="container">
   <div className="Empowering-Staffing-Companies-middle">
       <div className="Empowering-Staffing-Companies-middle-left">
                 <h4>Empowering <br/><span>Staffing</span> Companies</h4>
       </div>
       <div className="Empowering-Staffing-Companies-middle-right">
           <p>Optimize your payroll and cash flow with funding solutions customized to your business needs. Access the funding you need, when you need it, by unlocking the value in your invoices</p>
           <p><a href="#">GET FUNDEDD</a></p>
        </div>  
   </div>
</div>
<Marquee /> 
</section>


<section className="Reliable-Funding-When-You-Need">
<div className="container">
    <div className="Reliable-Funding-When-You-Need-middle">
        <div className="Reliable-Funding-When-You-Need-middle-left">
           <div className="Reliable-Funding-When-You-Need-middle-left-header">
            <h4>Reliable Funding <br/>When <span>You Need It</span></h4>
           </div>
           <div className="Reliable-Funding-When-You-Need-middle-left-header-cont">
            <p>At Fundedd, we deliver specialized AR factoring solutions that put you in control of your cash flow. Our flexible funding approach ensures you can meet payroll demands, fuel growth, and optimize operations at every stage of your business journey.</p>
           <p><a href="#">APPLY NOW</a></p>
           </div>
           <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom">
             <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom-to-left">
                <h4>Long-Term Partnership</h4>
                <p>Building lasting relationships through dedicated support and consistent service delivery</p>
             </div>
             <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom-to-right">
             <Image src={GirlTwo} alt="" />
              </div>
           </div>
        </div>
        <div className="Reliable-Funding-When-You-Need-middle-right">
            
        <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom two">
             <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom-to-left">
                <h4>Custom Solutions</h4>
                <p>Designed to align with your business objectives and industry needs</p>
             </div>
             <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom-to-right">
             <Image src={GirlThree} alt="" />
              </div>
           </div>
           <div className="Rapid-Fund-Processing-main"> 
              <div className="Rapid-Fund-Processing-main-left">
              <div className="Rapid-Fund-Processing-main-left-middl">
                <h4>Rapid Fund Processing</h4>
                <div className="Rapid-Fund-Processing-main-left-middle">
                  <div className="Rapid-Fund-Processing-main-left-middle-left">
                    <p>Team response within 24 hours, ensuring your business operations stay on track</p>
                  </div>
                  <div className="Rapid-Fund-Processing-main-left-middle-right">
                     <Image src={GirlFour} alt="" className="normal" /> 
                     <Image src={GirlFourT} alt="" className="Hover" />   
                  </div>
                </div>
                </div>
                <div className="Rapid-Fund-Processing-main-left-middl twoo">
                <h4>Transparent Terms</h4>
                <div className="Rapid-Fund-Processing-main-left-middle">
                  <div className="Rapid-Fund-Processing-main-left-middle-left">
                    <p>Clear, competitive rates with no hidden costs - what you see is what you get.</p>
                  </div>
                  <div className="Rapid-Fund-Processing-main-left-middle-right">
                     <Image src={GirlFive} alt="" className="normal" />   
                     <Image src={GirlFiveT} alt="" className="Hover" />   
                  </div>
                </div>
                </div>
              </div>
              <div className="Rapid-Fund-Processing-main-right">
                 <div className="Rapid-Fund-Processing-main-right-midl">
                 <Image src={GirlFive} alt="" />  
                 <h4>Industry Expertise</h4>
                 <p>Specialized in staffing sector funding, delivering solutions that address your unique industry challenges.</p>
                 </div>
              </div>
           </div>
        </div>
    </div>
</div>
</section>


<section className="Your-Trusted-Partner-for-Payroll-Funding">
<div className="container">
    <div className="Your-Trusted-Partner-for-Payroll-Funding-middle">
      <div className="Your-Trusted-Partner-for-Payroll-Funding-left">
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left-left">
               <h4>Your Trusted Partner for Payroll Funding</h4>
               <p>At Fundedd, we deliver specialized AR factoring solutions that put you in control of your cash flow. Our flexible funding approach ensures you can meet payroll demands, fuel growth, and optimize operations at every stage of your business journey.</p>
          </div>
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left-right">
             <Image src={Trusted} alt="" />  
          </div>
      </div>
      <div className="Your-Trusted-Partner-for-Payroll-Funding-right">
        <div className="Your-Trusted-Partner-for-Payroll-Funding-right-left">
          <h4>Funding Solutions To Fuel Growth</h4>
          <ul>
            <li><Image src={headertopicon} alt="" /> Customized funding that scales with your growth</li>
            <li><Image src={headertopicon} alt="" /> 24-hour response on funding decisions</li>
            <li><Image src={headertopicon} alt="" /> Transparent pricing with no surprises</li> 
            <li><Image src={headertopicon} alt="" /> Decades of specialized staffing industry expertise</li>
          </ul>
        </div>
        <div className="Your-Trusted-Partner-for-Payroll-Funding-right-right">
        <Image src={Trusted} alt="" />  
        </div>
      </div>
    </div>
</div>
</section>


<section className="Insights-Industry-Trends">
<h4><span>Insights</span> and Industry Trends</h4>
<p>Stay updated with the latest trends and expert opinions in staffing and funding through our blog. Gain <span>the knowledge to keep your business thriving.</span></p>
<div className="rain-main-images-main">
              
              <TestimonialSlide />
            </div>
</section>
<section className="Begin-Your-Funding-Journey">
<div className="container">
  <div className="Begin-Your-Funding-Journey-middle">
      <div className="Begin-Your-Funding-Journey-middle-left">
           <div className="Begin-Your-Funding-Journey-middle-left-left">
             <h4>Begin Your Funding Journey <br/><span>with Fundedd</span></h4>
             <p>Speak to our experts about tailored financing that meets your staffing needs</p>
             <p><a href="#">APPLY NOW <Image src={Arrow} alt="" /></a></p>
           </div>
           <div className="Begin-Your-Funding-Journey-middle-left-right">
            <Image src={Girl} alt="" />
           </div>
      </div>
      <div className="Begin-Your-Funding-Journey-right-icon2">
         <Image src={GroupTW} alt="" />
      </div>
  </div>
  </div>
  <div className="Begin-Your-Funding-Journey-right-icon">
  <Image src={BeginYour} alt="" />
  </div>
</section>
        <Footer />
      </main>
    </>
  );
}

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

import MainB from "../img/group-multiethnic-busine.png";

import IconOne from "../img/icon-1-why.png";
import IconTwo from "../img/icon-2-why.png"; 
import IconThree from "../img/icon-3-why.png";    
import IconFour from "../img/icon-4-why.png"; 
import IconFive from "../img/icon-5-why.png";    
import IconSix from "../img/icon-6-why.png"; 



import Trusted from "../img/cash-flow_2751464@2x.png";
import headertopicon from "../img/header-top-icon.png";
import Arrowm from "../img/arrow-small.png";  
import headertopiconFL from "../img/Gear-Light-Bulb-Idea-Business-Management@2x.png";
import AdvantageOne from "../img/icckd.png";
import Logo from "../img/fund-l.png";  
import ExpertThree from "../img/people-business-laptop-office.png";     
import { GoogleTagManager } from "@next/third-parties/google";
export default function Arfactoring() {
  return (
    <>  
      <GoogleTagManager gtmId="GTM-MFH6JPN5" />                    
      <main className="partner-main-page Why-Choose-pagemiddle">                   
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

          <section className="Accelerate-Your-Business-frame">
          <div className="container">
              <div className="Accelerate-Your-Business-frame-middle new">
                      <div className="Accelerate-Your-Business-frame-left">
                      <h3>Why Choose <br/>Fundedd?</h3> 
                          
                          <div className="Accelerate-Your-Business-frame-left-cont">
                          <h4>Tailored Financial Solutions for the Staffing Industry</h4>
                            <p>Fundedd specializes in providing fast, flexible funding solutions tailored to the unique needs of staffing agencies. We understand the challenges of managing payroll, cash flow gaps, and fluctuating client payments. Our transparent process and competitive rates ensure staffing businesses maintain liquidity and operational stability.</p>
                           
                          </div>
                      </div>
                      <div className="Accelerate-Your-Business-frame-right">
                         <Image src={ExpertThree} alt="" /> 
                        </div>
              </div>
            </div>
            <div className="container">
                <div className="Experience-the-Fundedd-Advantage-frame">
                       <h3>Experience the <span>Fundedd</span> <br/>Advantage</h3>
                       <ul>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconOne} alt="" /> 
                            <h4>Fast Access to Funds</h4>
                            <p>Our streamlined process ensures rapid approval and disbursement. Staffing agencies can access funding within days, enabling them to cover payroll, recruit talent, and meet urgent financial needs without delays.</p>
                            </div>
                        </li>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconTwo} alt="" /> 
                            <h4>Transparent Pricing Structure</h4>
                            <p>We maintain a clear and straightforward fee structure. Our clients receive full visibility into costs, including discount rates, advance rates, and any additional fees, ensuring no hidden charges.</p>
                            </div>
                        </li>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconThree} alt="" /> 
                            <h4>Flexible Financing for Staffing Needs</h4>
                            <p>Our Accounts Receivable (AR) Factoring solutions are designed to accommodate the dynamic cash flow of staffing businesses. Whether bridging payroll gaps or managing high-volume placements, our financing adapts to your specific operational cycles.</p>
                            </div>
                        </li>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconFour} alt="" /> 
                            <h4>No Collateral Requirements</h4>
                            <p>Unlike traditional loans, our financing does not require physical assets as collateral. Staffing agencies can leverage unpaid invoices to access working capital without risking core assets.</p>
                            </div>
                        </li>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconFive} alt="" /> 
                            <h4>Expertise in Staffing Credit Risk Management</h4>
                            <p>Our streamlined process ensures rapid approval and disbursement. Staffing agencies can access funding within days, enabling them to cover payroll, recruit talent, and meet urgent financial needs without delays.</p>
                            </div>
                        </li>
                        <li>
                            <div className="Experience-the-Fundeddd-mdiie">
                            <Image src={IconSix} alt="" /> 
                            <h4>Dedicated Support for Staffing Agencies</h4>
                            <p>Our advanced underwriting and credit risk analytics focus on the staffing sector's unique needs. We evaluate customer creditworthiness, contract terms, and invoice volume to provide tailored solutions that mitigate financial risk.</p>
                            </div>
                        </li>
                       </ul>
                </div>  
                </div>
          </section>

 
<section className="How-Fundedd-Stands-Out-why-choose">
<div className="container">
    <div className="How-Fundedd-Stands-Out-why-choose-middle">
        <div className="How-Fundedd-Stands-Out-why-choose-middle-left">
            <h3>How <span>Fundedd</span> <br/>Stands Out</h3>
        </div>
        <div className="How-Fundedd-Stands-Out-why-choose-middle-right"> 
            <ul>
                <li>
                    <div className="How-Fundedd-Stands-Out-why-choose-list">
                    <h4> <Image src={headertopicon} alt="" /> Advance Rate</h4>
                      <p>We offer competitive advance rates ranging from 80% to 90%, providing immediate access to a significant portion of your invoice value.</p>
                    </div>
                </li>
                <li>
                    <div className="How-Fundedd-Stands-Out-why-choose-list">
                    <h4> <Image src={headertopicon} alt="" /> Fair Discount Rates</h4>
                      <p>Our discount rates range between 1.5% to 5% per month, calculated transparently based on industry standards and underwriting criteria.</p>
                    </div>
                </li>
                <li>
                    <div className="How-Fundedd-Stands-Out-why-choose-list">
                    <h4> <Image src={headertopicon} alt="" /> Comprehensive Service Model</h4>
                      <p>Beyond funding, we manage receivables, conduct credit checks, and facilitate payment collections, allowing staffing businesses to focus on talent acquisition and client relationships.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</section>

<section className="Our-Commitment-frame">
   <div className="Our-Commitment-frame-left">
   <Image src={MainB} alt="" />
   </div>
   <div className="Our-Commitment-frame-right">
      <div className="Our-Commitment-frame-right-cont">
         <h4>Our Commitment</h4>     
         <p>At Fundedd, we prioritize efficiency, transparency, and customer-centric solutions for staffing agencies. Our goal is to empower your business with the financial tools needed to meet payroll, grow operations, and maintain long-term success.</p>      
      </div>
   </div>
</section>


<section className="read-jon-main-frame-inner-two">
<div className="container">
  <div className="read-jon-main-frame-inner-two-middle">
    <div className="read-jon-main-frame-inner-two-middle-left">
    <div className="Begin-Your-Funding-Journey-middle-left-left">
      <h4><span>Get Fundedd</span> Today</h4> 
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

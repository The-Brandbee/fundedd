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
import Xicon from "../img/Group53@2x.png";
import Arrowm from "../img/incoming-call_9701033@2x.png";  
import IN from "../img/Group52@2x.png";
import ExpertTwo from "../img/location@2x.png";
import Logo from "../img/fund-l.png";  
import BlogBanner from "../img/Group-63@2x.png";     
import TestimonialSlide from "../common/TestimonialSlide.js"; 
import { GoogleTagManager } from "@next/third-parties/google";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  
  // Demo styles, see 'Styles' section below for some notes on use.
  import 'react-accessible-accordion/dist/fancy-example.css';



export default function Arfactoring() {
  return (
    <>      
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

       

        <section className="blog-page-inner-section-content faq-main-page-section">
        <div className="container">
            <div className="blog-page-inner-section-content-middle">

              <h1>FAQs</h1>
               
              <div className="container">
            <Accordion preExpanded={['a']}>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3><span>1</span> How is Fundedd different from other financing options?</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame">
                      <p>Fundedd offers fast, flexible, and transparent financing solutions designed specifically for staffing agencies. Unlike traditional loans, Fundedd provides quick access to funds within days through Accounts Receivable (AR) Factoring, without requiring physical collateral.</p>
                      <h4>Key differences include:</h4>
                      <ul>
                        <li><span>Quick Access to Funds:</span> Receive funding within days to cover payroll and urgent needs.</li>
                        <li><span>Transparent Pricing:</span> Clear fees with 80%-90% advance rates and 1.5%-5% discount rates—no hidden charges.</li>
                        <li><span>No Collateral Needed:</span> Unlock working capital using unpaid invoices.</li>
                        <li><span>Comprehensive Support:</span> We manage receivables, credit checks, and payment collections.</li>
                      </ul>
                      <p>Fundedd's tailored solutions help staffing agencies maintain cash flow and focus on growth.</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3><span>2</span> Is Fundedd right for my business? </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame PHASE-2">
                <p>If you're a staffing agency managing payroll gaps, fluctuating client payments, or cash flow challenges, Fundedd provides fast, flexible funding solutions tailored to your needs. With rapid approval, no collateral requirements, and a transparent pricing structure, we help you access working capital quickly. Our Accounts Receivable (AR) Factoring adapts to your operational cycles, ensuring you can cover payroll, recruit talent, and scale with ease. Plus, our dedicated support team understands the staffing industry and provides personalized assistance at every step.</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3><span>3</span> What is AR Factoring? </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                <p>AI introduces several security vulnerabilities, such as leakage and compliance risks. Ignoring the assessment of AI risk may lead to unexpected reversals in operations, along with huge losses in terms of money or data. 
                </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'d'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3><span>4</span> What costs and fees are associated with Fundedd?
                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                <p>What costs and fees are associated with Fundedd?
With Fundedd, you receive 75%-90% of your invoice upfront, and fees are charged after customer payment.
</p>
<h4>Key Costs:</h4>
<ul>
    <li>Discount Fee (1% - 2.5%/month): Charged after collection. For a $10,000 invoice at 1%, the fee is $100/month.</li>
    <li>Advance Rate (75%-90%): Upfront payment. For a $10,000 invoice at 90%, you get $9,000 immediately.</li>
<li>Reserve Amount: The remaining 10%-25% is held and released after payment, minus fees.</li>
<h4>Additional Fees:</h4>
<ul>
    <li>Origination Fee: One-time setup charge.</li>
    <li>Late Payment Fee: Applied after 91 days past due.
    </li>
    <li>Credit Check Fee: For customer assessments.
    </li>
    <li>Default Fee: For legal collections.</li>
</ul>
<p>No service fees apply, and our pricing is clear and flexible.</p>
</ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
              </div>
               
               
                </div>

    

         </div>
        </section>

        <Footer />                
      </main>          
    </>
  );
}

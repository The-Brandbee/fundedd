"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import Calculator from "../common/Calculator.js";
import GETFUNDEDD from "../common/GETFUNDEDD.js"; 
import ApplyNow from "../common/ApplyNow.js"; 
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
import { GoogleTagManager } from "@next/third-parties/google";

export default function Arfactoring() {
  return (
    <>  
     <GoogleTagManager gtmId="GTM-MFH6JPN5" />                       
      <main className="ar-factoring-main-page">                   
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
                          <h3>Turn Unpaid Invoices<br/> into Immediate Capital<br/> - Fuel Your Business<br/> Growth Today.</h3>
                          <div className="Accelerate-Your-Business-frame-left-cont">
                            <p>Get the working capital you need without delays. No collateral, no credit checks—just transparent funding solutions.</p>
                            <GETFUNDEDD/> 
                          </div>
                      </div>
                      <div className="Accelerate-Your-Business-frame-right">
                         <Image src={ExpertThree} alt="" /> 
                        </div>
              </div>
            </div>
          </section>

<section className="Reliable-Funding-When-You-Need What-is-AR-Factoring">
<section className="Expert-Advisory-for">
<div className="container">
  
  <div className="Expert-Advisory-for-middle two">
      <div className="Expert-Advisory-for-middle-left">
       
      </div>
      <div className="Expert-Advisory-for-middle-right">
      <div className="Expert-Advisory-for-middle-left-cont">
         <h3>What is <span>AR Factoring?</span></h3>        
         <p>
         Waiting months for invoice payments can slow your business growth. With Fundedd's Accounts Receivable (AR) Factoring, turn your unpaid invoices into immediate cash. Our robust underwriting and credit risk analytics ensure you get the best funding solution tailored to your needs. Whether you need working capital or a risk-free way to improve cash flow, AR factoring offers the flexibility to meet your goals.

         </p>
<h5>Key Advantages Over Loans:
</h5>
<ul>
  <li>No collateral requirements</li>
  <li>Zero impact on credit scores
  </li>
  <li>Transparent, no-obligation agreements
  </li>
  <li>No long-term debt commitments.</li>  
</ul>
<h5>Why Fundedd?
  <p>Credit risk analytics play a pivotal role in our pricing and approval process. We evaluate:</p>
  <ul>
    <li>Customer creditworthiness</li>
    <li>Invoice volume</li>  
    <li>Industry-specific risks</li>
  </ul>
  <p>Simply sell us your invoices, and get paid right away. We handle the collections while you focus on growing your business.</p>
</h5>   
       
        </div>  
      </div>
  </div>
  
  </div>

  <div className="Expert-Advisory-img-resp-main"> 
  <Image src={ExpertTwo} alt="" className="left-Advisory"/>  
 
  </div>

</section>
</section>

<section className="Top-Benefits-of-AR-Factoring-for-Your-Business">
<div className="container">      
    <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle">
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-left">
              <h3>Why <span>AR Factoring</span> is a Game-Changer for Your Business?
              </h3>
        </div>           
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-right">
              <p>AR factoring provides numerous advantages that can significantly benefit your business. Here's how:</p>   
              
        </div> 
    </div>
</div>
<div className="more-fel-slider">
    <TestimonialSlideTwoN />
</div>                  

</section>      
<section className="How-Fundedd-Stands-Out ndpage">
<div className="container">
<div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle new-md">
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-left">
              <h3>How Does AR <br/>Factoring Work?</h3>
        </div>           
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-right">
              <p>The process of AR factoring with Fundedd is designed to be<br/> simple, transparent, and efficient, ensuring businesses can focus<br/> on growth while we handle cash flow needs.</p>   
              
        </div> 
    </div>
<div className="How-Fundedd-Stands-Out-middle">
        
 <div className="tab-view">
 <Tab />
 </div>
</div>
</div>
</section>     
<section className="simple-prosess-main-frame ne-section">  
<div className="container">
  <div className="simple-prosess-main-frame-middle"> 
       <div className="simple-prosess-main-frame-middle-left">  
            <h4>How to <span>Calculate</span> <br/>AR Factoring</h4>
            <h5>The Simple Formula</h5>     
            <h6>Funding Amount <span>=</span> Total Invoice Value <span>×</span> Advance Rate</h6>    
       </div>
       <div className="simple-prosess-main-frame-middle-right">
       <Image src={headertopiconFL} alt="" />
       </div>
  </div>
  <div className="Example-Calculation-newaa">
    <h4>Example Calculation</h4>
  </div>
  <div className="Example-Calculation-new">
     <div className="Example-Calculation-new-middle">
       <div className="Example-Calculation-new-middle-left">
           <ul>
            <li>
          Total Invoice Value: $10,000 
            </li>
           
             <li>
          Advance Rate: 85%
            </li> 
           </ul>
       </div>
       <div className="Example-Calculation-new-middle-right">
        <h5><span>Funding Amount</span> = $10,000 × 85% <br/><span>Factoring fee </span> = $10,000 × 1.25%<br/><span>Total Funding Amount  </span> = $9,875</h5>
       </div>
     </div>
     <p>Note: Charges of Discount fee/Interest will be charged after collection from the Customer.</p>
  </div>
  <div className="container Calculator-middle-sect">
       <Calculator/>
    </div>
  <div className="Lets-break-it-down">
     <div className="Lets-break-it-down-heading-2">
      <div className="Lets-break-it-down-headingthre">
        <h4>Core Pricing Explained </h4>
        </div>
        <div className="Lets-break-it-down-heading-bottom">
       <ul>
        <li>
          <h4>Discount Rate/Fee <span>(1% - 2.5% per month)</span></h4>
          <ul>
            <li>
            A fee for factoring, calculated as a percentage of the invoice value.
            </li>
            <li>Lower rates (e.g., 1%) apply to low-risk invoices.</li>
            <li>Example: For a $10,000 invoice with a 1% fee, the cost is $100 per month.</li>
          </ul>
        </li>
        <li>
          <h4>Advance Rate <span>(75%-90%):</span></h4>
          <ul>
            <li>
            The percentage of the invoice value you receive upfront.
            </li>
            <li>Example: For a $10,000 invoice with a 90% advance rate, you receive $9,000 upfront.</li>
          
          </ul>
        </li>
        <li>
          <h4>Reserve <span>(Based on Underwriting):</span></h4>
          <ul>
            <li>
            A portion of the invoice value held back to cover risks, is released after the invoice is paid.
            </li>
            <li>90% advance is provided, with 10% reserved and returned after customer payment, minus discount fees.</li>
          
          </ul>
        </li>
       </ul>
     </div>  
     </div>
     <div className="These-components-ensure">
      <p>These components ensure pricing is tailored to your business risk level, offering transparency and flexibility. Sample calculations are <br/>hypothetical examples and not guarantees. Disclosure details below.</p>
     </div>
     <div className="expl-air-far">
     <h4>Additional Fees </h4>
     </div>
     
  </div>
  </div>
</section>

<section className="total-invoice-value-frame-main-page">
<div className="container">
   <div className="total-invoice-value-frame-main-page-middle">  
      <ul>
        <li>
          <div>
          <Image src={headertopicon} alt="" />
          </div>
          <div className="right-ico">
          <h4>Origination Fee</h4>
          <p>One-time fee during account setup.</p>
          </div>
        </li>
        <li>
          <div>
          <Image src={headertopicon} alt="" />
          </div>
          <div className="right-ico">
          <h4>Service Fee</h4>
          <p>No service fee is required.</p>
          </div>
        </li>
        <li>
          <div>
          <Image src={headertopicon} alt="" />
          </div>
          <div className="right-ico">
          <h4>Late Payment Fee</h4>
          <p>Late payment fee incurred after invoice is 91 days outstanding.</p>
          </div>
        </li>
        <li>
          <div>
          <Image src={headertopicon} alt="" />
          </div>
          <div className="right-ico">
          <h4>Credit Check Fee</h4>
          <p>For customer creditworthiness checks.</p>
          </div>
        </li>
        <li>
          <div>
          <Image src={headertopicon} alt="" />
          </div>
          <div>
          <h4>Default Fee</h4>
          <p>Legal collection or bankruptcy servicing.</p>
          </div>
        </li>
        </ul>    
    </div>
</div>
</section>

<div className="Why-Fundedd-Stands-Out new-add-section">
<div className="container">    
<div className="Begin-Your-Funding-Journey-middle-left-left">
            <h4>Why Fundedd Stands Out <br/>in <span>AR Factoring</span> Solutions for Your Business </h4>
              <p>At Fundedd, we specialize in helping businesses like yours access quick, hassle-free funding through AR factoring. Our process is simple, transparent, and tailored to your needs.</p>
                
          </div> 
          <div className="Key-Advantages-main-frame">
            <h4>Key Advantages:</h4>
            </div> 
     <div className="Why-Fundedd-Stands-Out-middle">
          <div className="Why-Fundedd-Stands-Out-middle-left">
          <div className="Why-Fundedd-Stands-Out-middle-right-top-left">
                    <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame">
                      <h4> <Image src={headertopicon} alt="" /> No Collateral Required</h4>
                      <p>Unlike traditional loans, we don't require collateral, which means no risk to your assets.</p>
                    </div>
                    <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame">
                      <h4> <Image src={headertopicon} alt="" /> Competitive Rates</h4>
                      <p>We offer fair and transparent rates with no hidden fees, ensuring you get the most out of your invoices.</p>
                    </div>    
                </div>
             
          </div>
          <div className="Why-Fundedd-Stands-Out-middle-right">
               <div className="Why-Fundedd-Stands-Out-middle-right-top">
               <div className="Why-Fundedd-Stands-Out-middle-right-top-right">
                <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame righr">
                      <h4> <Image src={headertopicon} alt="" /> Industry Expertise</h4>
                      <p>Years of experience serving businesses across multiple sectors</p>
                    </div>   
                  </div>
                  <div className="Why-Fundedd-Stands-Out-middle-right-top-right">
                <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame righr">
                      <h4> <Image src={headertopicon} alt="" /> Comprehensive <br/>Support</h4>
                      <p>Expert guidance from our financial team.</p>
                    </div>   
                  </div>
                  <div className="Why-Fundedd-Stands-Out-middle-right-top-right">
                <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame righr">
                      <h4> <Image src={headertopicon} alt="" /> Robust Technology <br/>Platform</h4>
                      <p>Seamlessly manage underwriting and operations.</p>
                    </div>   
                  </div>
               
               </div>
               <div className="Why-Fundedd-Stands-Out-middle-right-bottom">
               <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame righrtwo">
                      <h4> <Image src={headertopicon} alt="" /> Quick Access to Funds</h4>
                      <p>Our easy and efficient process means you get the cash you need without waiting for customer payments.</p>
                    </div>        
               </div>
              </div>
     </div>
  </div>
</div>
<section className="read-jon-main-frame-inner-two">
<div className="container">
  <div className="read-jon-main-frame-inner-two-middle">
    <div className="read-jon-main-frame-inner-two-middle-left">
    <div className="Begin-Your-Funding-Journey-middle-left-left">
      <h4><span>Get Started</span> Today</h4> 
      <p>Ready to boost your business cash flow with AR factoring? Apply now and get the funding you need to keep your operations running smoothly.</p>
      <p> <ApplyNow/> </p></div>
    </div>
    <div className="read-jon-main-frame-inner-two-middle-right">
    <Image src={ExpertTwoJoin} alt="" className="left-Advisory"/>  
    </div>
  </div>
  </div>
</section>
<section className="ar-part-footer-page-middle">
  <div className="container">
     <h5>*Streamlined Application Process ( Disclosure )</h5>
     <p>Our application process is designed to be straightforward and convenient, taking only a few minutes of your time to complete. Once you’ve submitted your application to Fundded, we will promptly provide you with an initial proposal that outlines your factoring and advance rates. It’s important to note that signing the application and proposal does not commit your business to utilize our services. It is also not a commitment for Fundded to advance any funds whatsoever until we conduct a complete review of the underlying information that we request. We prioritize privacy and are fully dedicated to maintaining the confidentiality of all information shared with us.</p>
  </div>

</section>

        <Footer />                
      </main>          
    </>
  );
}

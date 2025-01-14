"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
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
import TrustedTwo from "../img/shutterstock_2433120923@2x.png";
import headertopiconFL from "../img/15-Money@2x.png";
import ExpertTwo from "../img/pexels-tima-miroshnichenko-6693661@2x.png";
 
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
          </header> 

          <section className="Accelerate-Your-Business-frame">
          <div className="container">
              <div className="Accelerate-Your-Business-frame-middle new">
                      <div className="Accelerate-Your-Business-frame-left">
                          <h3>Turn Unpaid Invoices<br/> into Immediate Capital<br/> - Fuel Your Business<br/> Growth Today.</h3>
                          <div className="Accelerate-Your-Business-frame-left-cont">
                            <p>Get paid instantly on your outstanding invoices.<br/> No collateral. No credit checks. Just fast, reliable<br/> funding when you need it most.</p>
                            <p><a className="normal-color-buttom" href="#">GET FUNDEDD</a></p>
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
         <p>At Fundedd, we make managing your cash flow simpler with Accounts Receivable (AR) Factoring. This innovative financial solution allows you to convert your outstanding invoices into immediate cash, ensuring you always have the working capital needed to keep your operations running smoothly.</p>
         <p>Instead of waiting for your clients to pay their invoices, we help you unlock cash quickly by purchasing your accounts receivable. This means you can focus on growing your business without worrying about payment delays or cash flow gaps.</p>
         <p>Unlike traditional loans, AR factoring with Fundedd doesn’t require collateral or impact your credit rating. It’s a flexible, non-debt financing solution designed to help you stay on top of your payments, improve cash flow, and focus on growing your business. Let us take the financial burden off your shoulders so you can concentrate on what matters most—your success.</p>
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
              <h3><span>Top Benefits</span> of AR Factoring<br/> for Your Business</h3>
        </div>           
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-right">
              <p>AR factoring provides numerous advantages<br/> that can significantly benefit your business.<br/> Here's how:</p>   
              
        </div> 
    </div>
</div>
<div className="more-fel-slider">
    <TestimonialSlideTwoN />
</div>                  

</section>      
<section className="How-Fundedd-Stands-Out ndpage">
<div className="container">
<div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle">
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-left">
              <h3><span>Top Benefits</span> of AR Factoring<br/> for Your Business</h3>
        </div>           
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-right">
              <p>AR factoring provides numerous advantages<br/> that can significantly benefit your business.<br/> Here's how:</p>   
              
        </div> 
    </div>
<div className="How-Fundedd-Stands-Out-middle">
        
 <div className="tab-view">
 <Tab />
 </div>
</div>
</div>
</section>     
<section className="simple-prosess-main-frame">
<div className="container">
  <div className="simple-prosess-main-frame-middle"> 
       <div className="simple-prosess-main-frame-middle-left">  
            <h4>The Simple Process to Calculate<br/> <span>AR Factoring</span> and Unlock Funding</h4>
            <p>Calculating the amount of funding you can receive from AR <br/>factoring is simple. Use the following formula:</p>
            <h5>Funding Amount</h5>         
       </div>
       <div className="simple-prosess-main-frame-middle-right">
       <Image src={headertopiconFL} alt="" />
       </div>
  </div>
  </div>
</section>

<section className="total-invoice-value-frame-main-page">
<div className="container">
   <div className="total-invoice-value-frame-main-page-middle">      
     <p>If your total invoice value is $10,000, the advance rate is 90%,<br/> and the factoring fee is 2%, the calculation would be:</p>
   <h4>Funding Amount <span>=</span> $10,000 <span>×</span> 90% <span>-</span> ($10,000 <span>×</span> 2%) = $9,000 <span>-</span> $200 <span>=</span> $8,800</h4>
   </div>
</div>
</section>

<div className="Why-Fundedd-Stands-Out">
<div className="container">    
     <div className="Why-Fundedd-Stands-Out-middle">
          <div className="Why-Fundedd-Stands-Out-middle-left">
          <div className="Begin-Your-Funding-Journey-middle-left-left">
            <h4>Why Fundedd Stands Out in <span>AR Factoring</span> Solutions for Your Business</h4>
              <p>At Fundedd, we specialize in helping businesses like yours to access quick, hassle-free funding through AR factoring. Our process is simple, transparent, and designed to get you the cash you need without unnecessary delays or complicated terms. Whether you are a small or medium-sized business, our flexible AR factoring solutions can meet your unique financial needs and support your growth.</p>
              <p><a href="#">GET FUNDEDD</a></p>         
          </div>  
          </div>
          <div className="Why-Fundedd-Stands-Out-middle-right">
               <div className="Why-Fundedd-Stands-Out-middle-right-top">
                <div className="Why-Fundedd-Stands-Out-middle-right-top-left">
                    <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame">
                      <h4> <Image src={headertopicon} alt="" /> No Collateral Required</h4>
                      <p>Unlike traditional loans, we don't require collateral, which means no risk to your assets.</p>
                    </div>
                    <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame">
                      <h4> <Image src={headertopicon} alt="" />Competitive Rates</h4>
                      <p>We offer fair and transparent rates with no hidden fees, ensuring you get the most out of your invoices.</p>
                    </div>    
                </div>
                <div className="Why-Fundedd-Stands-Out-middle-right-top-right">
                <div className="Why-Fundedd-Stands-Out-middle-right-top-left-inner-frame righr">
                      <h4> <Image src={headertopicon} alt="" /> Industry Expertise</h4>
                      <p>Years of experience serving businesses across multiple sectors</p>
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
      <p><a href="#">APPLY NOW </a></p></div>
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

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
import ExpertThreeN from "../img/Ellipse-6@2x.png";
import ExpertTwo from "../img/pexels-tima-miroshnichenko-6693661@2x.png";
 
import ExpertThree from "../img/medium-shot-woman-repairing-fashion-goods@2x.png";    

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
              <div className="Accelerate-Your-Business-frame-middle">
                      <div className="Accelerate-Your-Business-frame-left">
                          <h3>Accelerate Your <br/>Business Growth by <br/><span>Converting Outstanding<br/> Invoices</span> into Instant<br/> Working Capital.</h3>
                          <div className="Accelerate-Your-Business-frame-left-cont">
                            <p>No collateral, no lengthy approvals—just fast, flexible funding tailored to your needs. Keep your operations running smoothly with Fundedd’s AR factoring solutions.</p>
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
              <h3><span>Top Benefits</span> of AR Factoring <br/>for Your Business</h3>
        </div>           
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-right">
              <p>AR factoring provides numerous advantages<br/> that can significantly benefit your business.<br/> Here’s how:</p>
        </div>
    </div>
</div>
<div className="more-fel-slider">
    <TestimonialSlideTwoN />
</div>                  

</section>      
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

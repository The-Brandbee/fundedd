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
import ExpertThree from "../img/shutterstock_1540204415@2x.png";    
import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from 'next/dynamic';

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
          <section className="contact-us-page-middle">
    <div className="container">
        <div className="contact-us-page-middle-middle">
            <div className="contact-us-page-middle-middle-left">
                <h4>Connect <span>with Our <br/>Funding Specialists</span></h4>
                <p>Explore funding opportunities or get your questions answered with ease. Access quick funding, grow your business, and discover your eligibility effortlessly. No complications—just solutions to meet your needs. Get started today!</p>
            </div>
            <div className="contact-us-page-middle-middle-right">
              <h4>Start your application now</h4>
                <p>Step 1:</p>
               
             
                <div className="contact-us-page-middle-middle-right-from">
                <iframe className="contact-us-page-frame" src="https://deciphercredit.net/products/jLKUVok3gGvYLdeHHbIxeGBKWkDubUR7PqnpdHrUYIpy2ulB5ZH2l2qzacDB/application/embed" ></iframe>
                    
                </div>
                <p className="After-submitting">*After submitting this form, you will be redirected to complete the remaining <br/>steps of your application.</p>
            </div>
        </div>
    </div>    
 </section>
          <section className="Accelerate-Your-Business-frame">
          <div className="container">
              <div className="Accelerate-Your-Business-frame-middle new">
                      <div className="Accelerate-Your-Business-frame-left">
                          <h3><span>Get Fundedd</span> Today<br/> - Simplifying Financial<br/> Solutions for You!</h3>
                          <div className="Accelerate-Your-Business-frame-left-cont">
                            <p>Have questions or need assistance? We're here to help. Whether you're looking for more information about our services or need support, feel free to reach out.</p>
                           <ul className="conta-us-list-main-page"> 
                            <h4>Get in Touch</h4>
                            <li>
                            <Image src={ExpertTwo} alt="" />  <span>2598 E. Sunrise Blvd., Suite 2104, Fort Lauderdale, Florida, 33304, United States of America</span>
                            </li>
                            <li className="nonenone">
                            <Image src={Arrowm} alt="" />  <span>+1 (123) 456-7890</span>
                            </li>
                            <li>
                            <Image src={GirlFourT} alt="" />  <span> growth@fundedd.com </span>
                            </li>
                           </ul>
                           <GETFUNDEDD/> 
                          </div>
                      </div>
                      <div className="Accelerate-Your-Business-frame-right">
                         <Image src={ExpertThree} alt="" /> 
                        </div>
              </div>
            </div>
          </section>

 

<section className="read-jon-main-frame-inner-two nonenone">
<div className="container">
  <div className="read-jon-main-frame-inner-two-middle">
    <div className="read-jon-main-frame-inner-two-middle-left">
    <div className="Begin-Your-Funding-Journey-middle-left-left">
      <h4><span>Stay Connected</span></h4> 
      <p>Follow us on social media for the latest updates and insights:</p>
      <ul className="social-media-icon nonenone">
        <li>
            <a href="#">
            <Image src={IN} alt=""/>  
            </a>
        </li>
        <li>
            <a href="#">
            <Image src={Xicon} alt=""/>  
            </a>
        </li>
      </ul>
      <p>We look forward to hearing from you!</p>
</div> 
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

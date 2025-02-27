"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import GETFUNDEDD from "../common/GETFUNDEDDTWO.js";
import ContactUsFrom from "../common/ContactUsFrom.js";
import TestimonialSlide from "../common/TestimonialSlide.js"; 
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
import ExpertThree from "../img/shutterstock_2122524395.png";    
import Industry from "../img/shutterstock_1932.png";
import IndustryTwo from "../img/arrow-up-right-2.png";
import BlogPost from "../component/BlogPost"; 

export default function Arfactoring() {
  return (
    <>                      
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

          <section className="Accelerate-Your-Business-frame">
          <div className="container">
              <div className="Accelerate-Your-Business-frame-middle new">
                      <div className="Accelerate-Your-Business-frame-left">
                          <h3><span>Payroll Funding Insights: </span> <br/>Tips, Trends & Strategies</h3>
                          
                      </div>
                      <div className="Accelerate-Your-Business-frame-right">
                         <Image src={ExpertThree} alt="" /> 
                        </div>
              </div>
            </div>
          </section>

 <section className="Insights-Industry-Trends blogmi"> 
 <div className="container">
    <div className="blog-main-pagge-middle">
        <div className="blog-main-pagge-middle-left">
        <h4>Featured <br/><span>This Week</span> </h4> 
        </div>
        <div className="blog-main-pagge-middle-right">
             <div className="font-blog-main-middle"> 
                  <div className="font-blog-main-middle-left">
                    <h4>Navigating Business Growth: How to Secure the Right Funding for Your Staffing Company</h4>
                    <p className="blog-arrow"><a href="/navigating-business-growth-how-to-secure-the-right-funding-for-your-staffing-company"><Image src={IndustryTwo} alt="" /></a></p>
                    </div> 
                    <div className="font-blog-main-middle-right">
                    <Image src={Industry} alt="" />
                    </div>    
        </div>
    </div>
    </div>
 <div className="rain-main-images-main">

               <TestimonialSlide />    
             </div>
          </div>   
 </section>


        <Footer />                
      </main>          
    </>
  );
}

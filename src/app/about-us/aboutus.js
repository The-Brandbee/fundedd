"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";

import Footer from "../common/Footer.js";
import TestimonialSlideTwoNow  from "../common/TestimonialSlideTwoNow.js";                 
import ClientsSay from "../common/Client.js"; 
import Tab from "../common/Tab2.js"; 
import Marquee from "../common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ExpertTwoJoin from "../img/beautiful-young-woman-home-office-working-from-home-teleworking-concept@2x.png";
import Arrow from "../img/arrow-up-right.png";
import BeginYour from "../img/Layer_1.png";
import GroupTW from "../img/teamwork_11933366.svg"; 
import GroupTWoo from "../img/money-bags_5557453.svg";
import GirlTwo from "../img/Speed.svg";
import GirlThree from "../img/thief_14015443.svg";
import GirlThreeNN from "../img/trust_14913416.svg"; 
import GirlFour from "../img/shutterstock_568024666@2x.png";    
import GirlFive from "../img/icckd.png"; 
import GirlFourT from "../img/factors_18377058@2x-white.png";    
import GirlFiveT from "../img/icckd-white.png"; 
import Trusted from "../img/team-main.png";
import TrustedNNN from "../img/team-02.jpg";
import Arrowm from "../img/arrow-small.png";  
import TrustedN from "../img/team-01.jpg";
import ExpertTwo from "../img/shutterstock_2159023891.png";
import TeamTwo from "../img/team-03.jpg";
import TeamThree from "../img/team-04.jpg";
import TeamFour from "../img/team-05.jpg";
import TeamFive from "../img/AmalAli.jpg";
import TeamSix from "../img/team-07.jpg";
import Logo from "../img/fund-l.png"; 
import ExpertThree from "../img/Fundedd-logo-04@2x.png";    
import { GoogleTagManager } from "@next/third-parties/google"


export default function Arfactoring() {
  return (
    <>  
    <GoogleTagManager gtmId="GTM-MFH6JPN5" />                             
      <main className="about-us-main-page">                   
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
                          <h3>About <span>Us</span></h3>
                          <div className="Accelerate-Your-Business-frame-left-cont">
                            <p>At Fundedd, we revolutionize how businesses access funding, empowering growth-oriented companies with seamless, fast, and reliable financial solutions. Whether you're navigating delayed payments or complex cash flow challenges, our solutions are designed to keep your operations running smoothly while enabling growth.</p>
                           
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
      <Image src={ExpertTwo} alt="" className="left-Advisory"/>  
 
      </div>
      <div className="Expert-Advisory-for-middle-right">
      <div className="Expert-Advisory-for-middle-left-cont">
         <h3><span>Our</span> Story</h3>        
         <p>
         At Fundedd, we've experienced firsthand the challenges that unpredictable payment cycles and restricted access to capital can create for businesses. These hurdles often stand in the way of growth and success. That’s why we built Fundedd—a funding platform designed to be both advanced and user-friendly.
         </p>
         <p>Our mission is to give you the financial flexibility you need, whether it's managing working capital, handling tight budgets, or overcoming cash flow constraints. With our transparent and adaptable solutions, you can focus on what truly matters: driving growth and achieving your business goals.</p>

       
        </div>  
      </div>
  </div>
  
  </div>

 

</section>
</section>

<section className="our-misson-middlem-main">
<div className="container">
  <div className="our-misson-middlem-main-middle">
    <h3><span>Our</span> Mission</h3>
    <p>To empower businesses across industries with funding solutions that are flexible,<br/> transparent, and designed to drive growth. At Fundedd, your success is our success.</p>
  </div>
</div>
    </section>     
    <section className="Top-Benefits-of-AR-Factoring-for-Your-Business">
    <div className="container">      
        <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle">
            <div className="Top-Benefits-of-AR-Factoring-for-Your-Business-middle-left">
                  <h3><span>What</span> Sets Us Apart
                  </h3>
            </div>           
           
        </div>
    </div>
    <div className="more-fel-slider">
        <TestimonialSlideTwoNow />
    </div>                  
    
    </section>  
  
<section className="Our-Values-main-about">
     <div className="container">
         <div className="Our-Values-main-about-middle">
            <div className="Our-Values-main-about-middle-left">
                  <div className="heading-about-us">
                    <h3><span>Our</span> Values</h3>
                    <p>At Fundedd, we believe funding is more than just financial capital—it’s an opportunity to build businesses, create jobs, and foster innovation. We are entrepreneurs, serving entrepreneurs, which means we understand your challenges and share your drive for success.</p>
                  </div>
                  <ul>
                    <li>
                    <Image src={GirlThreeNN} alt="" className="left-Advisory"/>  
                     <h4>Trust & <br/>Transparency</h4>
                    </li>
                    <li>
                    <Image src={GirlThree} alt="" className="left-Advisory"/>  
                     <h4>Customer-Centric <br/>Approach</h4>
                    </li>
                    <li>
                    <Image src={GirlTwo} alt="" className="left-Advisory"/>  
                     <h4>Speed & <br/>Efficiency</h4>
                    </li>
                    <li>
                    <Image src={GroupTWoo} alt="" className="left-Advisory"/>  
                     <h4>Financial <br/>Empowerment</h4>
                    </li> 
                    <li>
                    <Image src={GroupTW} alt="" className="left-Advisory"/>  
                     <h4>Collaboration</h4>
                    </li>
                  </ul>
            </div>
            <div className="Our-Values-main-about-middle-right">
            <Image src={GirlFour} alt="" className="left-Advisory"/>  
            </div>
         </div>
     </div>
</section>

 
<section className="leadership-team-about-us nonenone">
<div className="container">
     <div className="leadership-team-about-us-middle">
        <div className="leadership-team-about-us-left">
        <div className="heading-about-us">
                    <h3><span>Leadership</span> <br/>Team</h3>
                    <p>At Fundedd, we believe funding is more than just financial capital—it's an opportunity to build businesses, create jobs, and foster innovation. We are entrepreneurs, serving entrepreneurs, which means we understand your challenges and share your drive for success.</p>
                  </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TeamTwo} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Rahul Bajaj</h4>
                    <p>Strategic Chief Advisor
                    </p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
       
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TeamFour} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Asma Manzar</h4>
                    <p>Global Head of Finance and Revenue</p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TeamFive} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Amal Ali
                    </h4>
                    <p>Global Head of Marketing
                    </p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TeamSix} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Varun Ahuja</h4>
                    <p>Global Head of Operations</p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TrustedN} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Bill Fusselbaugh</h4>
                    <p>Financial Strategist</p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <Image src={TrustedNNN} alt="" className=""/>  
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Evan Prodromo</h4>
                    <p>Executive Vice President</p>
                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        
     </div>
</div>
</section>

        <Footer />                
      </main>          
    </>
  );
}

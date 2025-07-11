"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import Footer from "../common/Footer.js";
import GETFUNDEDD from "../common/GETFUNDEDD.js";
import ApplyNow from "../common/ApplyNow.js"; 
import TestimonialSlide from "../common/TestimonialSlide.js"; 
import ClientsSay from "../common/Client.js"; 
import Tab from "../common/Tab.js"; 
import Marquee from "../common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Girl from "../img/Mask-Group-1.png";
import Arrow from "../img/arrow-up-right.png";
import BeginYour from "../img/Layer_1.png";
import GroupTW from "../img/Group-25.png";
import GroupTWoo from "../img/shutterstock_2342458585@2x.png";
import GirlTwo from "../img/support_2058768@2x.png";
import GirlThree from "../img/management_11063187-1@2x.png";
import GirlThreeNN from "../img/reputation-12133556@2x.png"; 
import GirlFour from "../img/factors_18377058@2x.png";    
import GirlFive from "../img/icckd.png"; 
import GirlFourT from "../img/factors_18377058@2x-white.png";    
import GirlFiveT from "../img/icckd-white.png"; 
import Trusted from "../img/shutterstock_2429463813@2x.png";
import headertopicon from "../img/header-top-icon.png";
import headertopiconNN from "../img/header-top-icon-2.png";
import TrustedTwo from "../img/pexels-shkrabaanthony-5816291@2x.png";  
import Expert from "../img/Component-12-1@2x.png";
import ExpertTwo from "../img/shutterstock-5402044.png";
import ExpertThree from "../img/Ellipse-6@2x.png";    
import ExpertThreeTW from "../img/Fundedd-logo-04@2x.png"; 
import Logo from "../img/fund-l.png";   
import LogoOne from "../img/logo1.svg"; 
import LogoTwo from "../img/logo2.png"; 
import LogoThree from "../img/logo3.png"; 
import LogoFour from "../img/logo4.png"; 
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="new-home-page-main">     
    <GoogleTagManager gtmId="GTM-MFH6JPN5" />                  
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
          <div className="mobile-menu-header">
            <div className="logo-mobilr">
            <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
            </div>
          <HeaderMobileIn />
          </div>
          </header> 
<section className="Empowering-Staffing-Companies">
<div className="container">
   <div className="Empowering-Staffing-Companies-middle">
       <div className="Empowering-Staffing-Companies-middle-left">
                 <h1>Empowering <br/><span>Staffing</span> Companies</h1>
       </div>
       <div className="Empowering-Staffing-Companies-middle-right">
           <p>Optimize your payroll and cash flow with funding solutions customized to your business needs. Access the funding you need, when you need it, by unlocking the value in your invoices</p>
           <p>
           <GETFUNDEDD/> 
           </p>
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
           <p> <ApplyNow/> </p>  
           </div>
           <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom">
             <div className="Reliable-Funding-When-You-Need-middle-left-header-cont-bottom-to-left">
                <h4>Long-Term Partnership</h4>
                <p>Building lasting relationships through dedicated support and consistent service delivery.</p>
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
                <p>Designed to align with your business objectives and industry needs.</p>
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
                    <p>Team response within 24 hours, ensuring your business operations stay on track.</p>
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
                 <Image src={GirlThreeNN} alt="" />  
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
      <div className="Your-Trusted-Partner-for-Payroll-Funding-left nn">
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left-left">
               <h4>Your Trusted Partner for Payroll Funding</h4>
               <p>At Fundedd, we deliver specialized AR factoring solutions that put you in control of your cash flow. Our flexible funding approach ensures you can meet payroll demands, fuel growth, and optimize operations at every stage of your business journey.</p>
          </div>
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left none">
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left-none-middle">
              <div className="Your-Trusted-Partner-for-Payroll-Funding-left-none-middle-left">
                  <h4>Your Trusted Partner for Payroll Funding</h4>
                  <p>At Fundedd, we deliver specialized AR factoring solutions that put you in control of your cash flow. Our flexible funding approach ensures you can meet payroll demands, fuel growth, and optimize operations at every stage of your business journey.</p>
                  <p><ApplyNow/></p>                                       
              </div>
              <div className="Your-Trusted-Partner-for-Payroll-Funding-left-none-middle-right">
              <Image src={Trusted} alt="" />  

                </div>
          </div>
          
      </div>
      </div>
     
      <div className="Your-Trusted-Partner-for-Payroll-Funding-left twoo">
          <div className="Your-Trusted-Partner-for-Payroll-Funding-left-left two">
               <h4>Funding Solutions To Fuel Growth</h4>
             <ul className="ne-add">
            <li><Image src={headertopiconNN} alt="" /> Customized funding that scales with your growth</li>
            <li><Image src={headertopiconNN} alt="" /> 24-hour response on funding decisions</li>
            <li><Image src={headertopiconNN} alt="" /> Transparent pricing with no surprises</li> 
            <li><Image src={headertopiconNN} alt="" /> Decades of specialized staffing industry expertise</li>
          </ul>
          </div>
          <div className="Your-Trusted-Partner-for-Payroll-Funding-right two">
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
          <Image src={TrustedTwo} alt="" />  
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

<section className="Expert-Advisory-for">    
<div className="container">
  <div className="Expert-Advisory-for-middle home-sect-page">
      <div className="Expert-Advisory-for-middle-left">
        <div className="Expert-Advisory-for-middle-left-cont ">
        <h3>Empowering Staffing Success</h3>
       
         <p>Unlock tailored strategies to navigate challenges, optimize operations, and drive sustainable growth in the staffing and services industry. Partner with us for insights that help your business thrive.</p>
         </div>
      </div>
      <div className="Expert-Advisory-for-middle-right">
      <Image src={Expert} alt="" />  
      </div>
  </div>
  {
  /* This is a multi-line
     comment! 

  <div className="Expert-Advisory-for-middle two" >
      <div className="Expert-Advisory-for-middle-left">
       
      </div>
      <div className="Expert-Advisory-for-middle-right">
      <div className="Expert-Advisory-for-middle-left-cont">
         <h3>Expert Advisory for  <span>Growth and Stability</span></h3>
         <h4>“Empowering Staffing Success”</h4>
         <p>Unlock tailored strategies to navigate challenges, optimize operations, and drive sustainable growth in the staffing and services industry. Partner with us for insights that help your business thrive.</p>
         </div>
      </div>
  </div>*/
  }
  </div>
{
  /*
 <div className="Expert-Advisory-img-resp-main"> 
  <Image src={ExpertTwo} alt="" className="left-Advisory"/>  
  <Image src={ExpertThree} alt="" className="right-Advisory" />  
  </div>
  */
}
 

</section>




<section className="What-Our-Clients-Say nonenone">   
<div className="container">
  <div className="Our-Clients-middle">
       <div className="Our-Clients-middle-left">
<h4>What <br/><span>Our Clients</span> <br/>Say</h4>  
<p>Here's what our clients have to say about their experience with us:</p>
       </div>
       <div className="Our-Clients-middle-right">
          <ClientsSay/>
       </div>
  </div>
  </div>
  <div className="client-name-right-mig">
     <Image src={ExpertThreeTW} alt=""/>  
  </div>
</section>
<section className="Insights-Industry-Trends nonenone"> 
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
             <p><ApplyNow/> </p>
           </div>
           <div className="Begin-Your-Funding-Journey-middle-left-right">
            <Image src={Girl} alt="" />
           </div>
      </div>
      <div className="Begin-Your-Funding-Journey-right-icon2">   
         <Image src={GroupTW} alt="" className="one-one" />
        
      </div>             
  </div>
  </div>
  <div className="Begin-Your-Funding-Journey-right-icon">
        
         <Image src={GroupTWoo} alt="" className="two-two" />
  </div>
</section>
        <Footer />
      </main>
    </div>
  );
}

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
import TeamFiveb from "../img/Amit.png"; 
import Trusted from "../img/team-main.png";
import TrustedNNN from "../img/AG.png";
import Arrowm from "../img/arrow-small.png";  
import TrustedN from "../img/team-01.jpg";
import ExpertTwo from "../img/shutterstock_2159023891.png";
import TeamTwo from "../img/Rahul.png";
import TeamThree from "../img/team-04.jpg";
import TeamFour from "../img/Evan-new.png";
import TeamFive from "../img/Jay.png";
import TeamSix from "../img/DJB.png";
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
                    <p>At Fundedd, we believe funding is more than just financial capital—it's an opportunity to build businesses, create jobs, and foster innovation. We are entrepreneurs, serving entrepreneurs, which means we understand your challenges and share your drive for success.</p>
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

 
<section className="leadership-team-about-us">          
<div className="container">
     <div className="leadership-team-about-us-middle">
        <div className="leadership-team-about-us-left first-frame">
        <div className="heading-about-us">
                    <h3><span>Leadership</span> <br/>Team</h3>
                    <p>At Fundedd, we believe funding is more than just financial capital—it's an opportunity to build businesses, create jobs, and foster innovation. We are entrepreneurs, serving entrepreneurs, which means we understand your challenges and share your drive for success.</p>
                  </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
              <div className="tear-frame-left">
            <Image src={TeamTwo} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Rahul Bajaj</h4>
                    <p>Chairman of the Board
                    </p>
                    <p>Experienced in building businesses from inception to successful exits. Strategic, results-driven global team leader, relationship builder with a proven track record of building and growing global cross-functional teams to drive growth and meet business initiatives via mergers, integrations and acquisitions.</p>

                    <p>Leadership positions at IBM, Barnes & Noble, HSBC, Cofounder/CEO Data Glove, Inc, Co-founder OpsArc, Inc, Cofounder - Avistos innovative Solutions, LLC</p>

                </div>
                <div className="team-name-right"></div>
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left nonenone">
            <Image src={TeamFour} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 className="text-right"> Evan Prodromo</h4>
                    <p className="text-right">Executive Vice President, Sales & Business Development</p> 
                    <p className="text-right">
                      Evan is a seasoned financial professional with over 15 years of experience in commercial banking and specialty finance, advancing from commercial banking to become President of AGR Financial, LLC during his tenure. His specialized expertise encompasses working capital financing, M&A advisory, and tailored financial solutions for the staffing and IT consulting industries. With comprehensive advisory capabilities, he delivers exceptional financial guidance specifically for staffing and IT consulting organizations.

                    </p>
                </div>
                <div className="team-name-right"></div>
            </div>
            <div className="tear-frame-left desktop">
            <Image src={TeamFour} alt="" className=""/>  
            </div>
            </div>
        </div>
        <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left ">
                 <Image src={TrustedNNN} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 >Anirban Ghosh</h4>
                    <p >Global Head, Growth and Strategy</p> 
                    <p>With nearly two decades of experience with a proven record of driving business expansion, revenue growth and market positioning.</p>

<p>Skilled in market analysis, developing and executing innovative growth strategies, forging strategic partnerships, and leading cross-functional teams to achieve corporate objectives.</p>

<p>A visionary leader with strong analytical abilities and a strategic mindset. Excels in identifying new opportunities and implementing effective growth strategies.</p>

                </div>       
                <div className="team-name-right"></div>
            </div>
            
            </div>
        </div>
 <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left nonenone">
            <Image src={TeamFive} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 className="text-right">Jay Jaskiewicz</h4>
                    <p className="text-right">Associate Vice President, Customer Success</p> 
                    <p className="text-right">
                     Jay Jaskiewicz is an accomplished finance professional with over a decade of experience in commercial finance, specializing in factoring and asset-based lending. In a previous role, he led a fully remote team, doubling the portfolio to over $30M while maintaining a high employee retention rate. Jay excels in client relationship management, portfolio oversight, and process improvement. Known for his collaborative leadership, attention to detail, and ability to streamline operations, he is passionate about connecting businesses with resources that drive growth and success.</p>

                    
                </div>
                <div className="team-name-right"></div>
            </div>
            <div className="tear-frame-left desktop">
            <Image src={TeamFive} alt="" className=""/>  
            </div>
            </div>
        </div>

         <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left ">
                 <Image src={TeamSix} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 >Deeptanshu J. Bansal</h4>
                    <p>CMO (Fractional)</p> 
                    <p>Experienced in building brands and businesses from inception to successful exits. Strategic, results-driven global team leader, relationship builder with a proven track record of building and growing global cross-functional teams to drive growth and meet business initiatives. As an integrated marketing consultant with more than 18 years of experience and a knack of creating innovative marketing and branding strategies, his passion lies in generating incremental ROI for his customers.</p>

<p>MBA in Marketing and Finance, from Simon School of Business, University of Rochester, NY</p>
<p>Cofounder Nu Stock Images <br/>Founder Atmaya AI (Digital Humans)<br/> Cofounder One Eyed Jack (Poker)</p>


                </div>       
                <div className="team-name-right"></div>
            </div>
            
            </div>
        </div>
        
      <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left nonenone">
            <Image src={TeamFiveb} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 className="text-right">Amit Gupta</h4>
                    <p className="text-right">Legal Advisor</p> 
                    <p className="text-right">
                    With three decades of global experience, Amit is a trusted advisor in corporate legal, risk, and compliance. His career is marked by senior leadership roles at VFS Global and Teleperformance, where he led high-value transactions and post-acquisition integrations. He excels at building high-performing teams and has implemented robust operational control frameworks across more than 90 countries, demonstrating his expertise in navigating complex, multinational environments.
                    </p>
  
                    
                </div>
                <div className="team-name-right"></div>
            </div>
            <div className="tear-frame-left desktop">
            <Image src={TeamFiveb} alt="" className=""/>  
            </div>
            </div>
        </div>
        {/* <div className="leadership-team-about-us-left"> 
            <div className="team-img">
            <div className="tear-frame-left nonenone">
            <Image src={TeamFive} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 className="text-right">Amal Ali
                    </h4>
                    <p className="text-right">Global Head of Marketing
                    </p>
                    <p className="text-right">Amal Ali is a marketing powerhouse with over 15 years of experience in crafting impactful brand strategies and cultivating client relationships. She specializes in transforming complex financial services into relatable, compelling narratives that connect with businesses. Through data-driven digital campaigns and innovative market positioning, Amal ensures Fundedd’s offerings are accessible and resonant, championing success stories for clients across industries.
                    </p>
                </div>
                <div className="team-name-right"></div>
            </div>
            <div className="tear-frame-left desktop">
            <Image src={TeamFive} alt="" className=""/>  
            </div>
           
            </div>
        </div>
        <div className="leadership-team-about-us-left nonenone"> 
            <div className="team-img">
            <div className="tear-frame-left">
            <Image src={TeamSix} alt="" className=""/>  
            </div>
            <div className="team-name">
                <div className="team-name-left">
                    <h4 className="text-right">Varun Ahuja</h4>
                    <p className="text-right">Global Head of Operations</p>
                    <p className="text-right">With 15 years of expertise in global operations and service delivery optimization, Varun Ahuja ensures seamless funding experiences through efficient and scalable processes. A specialist in risk assessment and quality management, Varun applies the Six Sigma methodology to drive operational excellence. His focus on service delivery and rigorous standards guarantees exceptional client satisfaction and a dependable funding journey at Fundedd.
                     </p>
                </div>
                <div className="team-name-right"></div>
            </div>
          
            </div>
        </div>
        <div className="leadership-team-about-us-left nonenone"> 
            <div className="team-img">
            <div className="tear-frame-left">
            <Image src={TrustedN} alt="" className=""/> 
            </div> 
            <div className="team-name">
                <div className="team-name-left">
                    <h4>Bill Fusselbaugh</h4>
                    <p>Executive Vice President</p> 
                    <p>Bill brings extensive commercial finance expertise with a track record of leading transactions exceeding $1 billion across diverse asset classes in both private and public markets. He has served in key C-Suite positions while maintaining successful entrepreneurial ventures. Known for exceptional implementation of complex financial structures, Bill specializes in developing strategic funding solutions that prioritize business acceleration and liquidity as essential drivers of growth.</p>
                </div>
                <div className="team-name-right"></div>
            </div>
          
            </div>
        </div>*/}
      
        
     </div>
</div>
</section>

        <Footer />                
      </main>          
    </>
  );
}

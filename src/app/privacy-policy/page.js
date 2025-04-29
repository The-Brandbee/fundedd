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

       

        <section className="blog-page-inner-section-content">
        <div className="container">
            <div className="blog-page-inner-section-content-middle">

              <h1>Privacy Policy</h1>
  <p>This Privacy Policy describes how Fundedd Inc. ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website, www.fundedd.com (the "Site"), and any related services. This Privacy Policy is incorporated into our Terms of Use.</p>

  <h2>1. Information We Collect</h2>
  <p>We collect several types of information from and about users of our Site, including:  4</p>
  <h3>Information You Provide to Us:</h3>
  <ul>
    <li><strong>Personal Information:</strong> Name, address, email, phone number, SSN or TIN, date of birth, and financial information.</li>
    <li><strong>Account Information:</strong> Username, password, and other account-related details.</li>
    <li><strong>Communications:</strong> Info from emails, phone calls, or other communication methods.</li>
    <li><strong>Loan Information:</strong> Loan amounts, interest rates, repayment schedules, payment history.</li>
    <li><strong>KYC/AML Information:</strong> ID documents, source of funds.</li>
  </ul>

  <h3>Information We Collect Automatically:</h3>
  <ul>
    <li><strong>Log Data:</strong> IP address, browser type, pages visited, etc.</li>
    <li><strong>Cookies and Similar Technologies:</strong> Used to recognize your browser and remember preferences.</li>
    <li><strong>Device Information:</strong> Device type, OS, unique identifiers.</li>
    <li><strong>Usage Data:</strong> Site interactions, clicks, pages visited.</li>
  </ul>

  <h3>Information from Third Parties:</h3>
  <ul>
    <li><strong>Credit Bureaus:</strong> For assessing borrower creditworthiness.</li>
    <li><strong>Identity Verification Services:</strong> To verify identity.</li>
    <li><strong>Financial Institutions:</strong> For transaction and account verification.</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <ul>
    <li><strong>Providing and Improving Our Services:</strong> Facilitate loans, process applications, manage accounts, improve services.</li>
    <li><strong>Communicating with You:</strong> Account notifications, responses to inquiries, promotions (with consent).</li>
    <li><strong>Legal and Compliance:</strong> Follow laws, prevent fraud, enforce Terms of Use.</li>
    <li><strong>Other Purposes:</strong> As disclosed at the time of collection or with your consent.</li>
  </ul>

  <h2>3. How We Disclose Your Information</h2>
  <ul>
    <li><strong>Lenders and Borrowers:</strong> As needed for loan facilitation.</li>
    <li><strong>Service Providers:</strong> For services such as payment processing and customer service.</li>
    <li><strong>Credit Bureaus:</strong> As required by law.</li>
    <li><strong>Financial Institutions:</strong> To process transactions.</li>
    <li><strong>Legal Authorities:</strong> When required to comply with law or protect rights.</li>
    <li><strong>Business Transfers:</strong> During mergers, acquisitions, or restructuring.</li>
    <li><strong>Affiliates:</strong> Shared within our corporate group.</li>
    <li><strong>With Your Consent:</strong> When you permit us to do so.</li>
  </ul>

  <h2>4. Your Choices</h2>
  <ul>
    <li><strong>Access and Correction:</strong> You can update your info via your account.</li>
    <li><strong>Marketing Communications:</strong> Unsubscribe via email links.</li>
    <li><strong>Cookies:</strong> Manage through browser settings.</li>
    <li><strong>Do Not Track:</strong> We do not respond to such signals currently.</li>
    <li><strong>Data Retention:</strong> Retained as long as needed for stated purposes.</li>
  </ul>

  <h2>5. Security</h2>
  <p>We use encryption, access controls, secure storage, and regular security assessments. However, no online system is completely secure.</p>

  <h2>6. Children's Privacy</h2>
  <p>Our Site is not intended for users under 18. We do not knowingly collect data from minors. Contact us if you believe a child has submitted information.</p>

  <h2>7. Links to Other Websites</h2>
  <p>We are not responsible for the privacy practices of linked websites. Please review their privacy policies.</p>

  <h2>8. Changes to This Privacy Policy</h2>
  <p>We may update this policy and will post changes on the Site. Continued use means acceptance. Please review periodically.</p>

  <h2>9. Governing Law</h2>
  <p>This Privacy Policy is governed by the laws of the State of Florida.</p>

  <h2>10. Contact Us</h2>
  <p>If you have any questions, contact us at:</p>
  <p>
    Fundedd Inc.<br/>
    2598 E. Sunrise Blvd., Suite 2104<br/>
    Fort Lauderdale, Florida, 33304<br/>
    United States of America<br/>
    Email: <a href="mailto:growth@fundedd.com">growth@fundedd.com</a>
  </p>

  <p><strong>Last Updated:</strong> April 2025</p>
           </div>

    

         </div>
        </section>

        <Footer />                
      </main>          
    </>
  );
}

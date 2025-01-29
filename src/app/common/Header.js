import Head from "next/head";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/fund-l.png";
import headertopicon from "../img/header-top-icon.png";
import Search from "../img/search.png";
import HubSpotFormpopup from "../common/HubSpotFormpopup.js";

function IndexPage() {
    // State to track whether the content is visible
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
  
  
  return (
    <div className="header-top-frame_main-desktop">
      

    <div className="header-top-frame_main desktop">
      <div className="container">
      <div className="header-top-frame">
          <div className="header-top-left">
          <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
          </div>
          <div className="header-top-right">
              <ul>
                <li>
                  
                </li>
                <li>
                  <div className="header-top-right-left">
                  <Image src={headertopicon} alt="" />
                  </div>
                  <div className="header-top-right-right">
                    <h5>Fast, Seamless Funding</h5>
                    <p>Get to Access funds quickly to ensure uninterrupted operations.</p>
                  </div>
                </li>
                <li>
                  <div className="header-top-right-left">
                  <Image src={headertopicon} alt="" />
                  </div>
                  <div className="header-top-right-right">
                    <h5>Industry Expertise</h5>
                    <p>Custom solutions for staffing industry challenges.</p>
                  </div>
                </li>
                <li>
                <Link href="#" onClick={toggleVisibility}>
                   {isVisible ? '' : ''} GET FUNDEDD
                </Link>
                {isVisible && (
                  <HubSpotFormpopup /> 
                 )}
          
                </li>    
              </ul>
          </div>
      </div>
      </div>
      </div>
      <div className="header-bottom-frame_main">
        <div className="container">
           <div className="header-bottom-frame_main-middle">
              <div className="header-bottom-frame_main-middle-left">
                <ul>
                  <li>
                  <Link href="/ar-factoring">AR Factoring</Link>
                  </li>
                  <li>
                  <Link href="/partner">Partner</Link>
                  </li>
                  <li>
                  <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                  <Link href="/">Resources</Link>   
                  </li>
                  <li>
                  <Link href="/contact-us">Contact Us</Link>   
                  </li> 
                </ul>
              </div>
              <div className="header-bottom-frame_main-middle-right">
                 <div className="header-sech-frame">
                    <input type="text"/>
                    <a href="">
                    <Image src={Search} alt="" />
                    </a>
                 </div>
              </div>
           </div>
        </div>
       </div>
    </div>
  );
}

export default IndexPage;

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
    <>
     <Link href="/contact-us" >
                   APPLY NOW
                </Link>
                {isVisible && (
                  <HubSpotFormpopup /> 
                 )}
          
    </>
  );
}

export default IndexPage;

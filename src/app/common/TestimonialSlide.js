import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Industry from "../img/The-Ris.png";
import IndustryT from "../img/Understanding.png";
import IndustryTwo from "../img/arrow-up-right-2.png";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";


export default function TestimonialSlide() {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="cder-ca-slide">
      <Carousel
        infinite={false }
        autoPlay={false }
        autoPlaySpeed={2000}
        responsive={responsive}
      >          
        
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>The Rise of Non-Debt Financing: Why more Staffing Businesses are looking for alternative funding solutions</p>
              <p><a href="/the-rise-of-non-debt-financing-why-more-staffing-businesses-are-looking-for-alternative-funding-solutions"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={IndustryT} alt="" />
              <p>Understanding AR Factoring vs. Traditional Loans: What is Best for Your Staffing Business?</p>
              <p><a href="/understanding-ar-factoring-vs-traditional-loans-what-is-best-for-your-staffing-business"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
       
           
        
   
      
      
      </Carousel>
    </div>
  );
}

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Industry from "../img/shutterstock_1932.png";
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
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
      >
        
          <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>More Feasible than Loans</h4>
               <p>Fundedd's AR factoring doesn't require collateral or impact your credit rating, making it a more accessible and flexible option compared to traditional loans. </p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Improved Cash Flow</h4>
               <p>With Fundedd's AR factoring, you can quickly convert outstanding invoices into cash, ensuring a steady flow of funds to cover operational expenses, payroll, and other business needs.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Recourse vs. Non-Recourse Options</h4>
               <p> Fundedd offers recourse and non-recourse factoring options, so you can choose the risk level that best aligns with your business requirements and financial strategy.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Confidential Factoring</h4>
               <p>Fundedd provides discreet factoring solutions, allowing you to maintain strong client relationships while we manage the financing behind the scenes.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Outsourced Receivables Management</h4>
               <p>Fundedd takes care of credit checks, collections, and invoice verification, saving you valuable time and resources while you focus on growing your business.</p>
            </div>
             </div>
           </div>
           
          
           
         
           
        
      
      
      </Carousel>
    </div>
  );
}

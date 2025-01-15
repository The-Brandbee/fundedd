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
               <p>AR factoring doesn't require collateral and doesn't impact your credit rating, making it a more accessible option than traditional loans. </p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Improved Cash Flow</h4>
               <p>Convert outstanding invoices into immediate cash, ensuring a steady cash flow for operational expenses, payroll, and other business needs.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p> Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Maintains Business Control</h4>
               <p>Factoring doesn’t require monthly payments or the use of assets as collateral, giving you more control over your finances without the strain of debt obligations.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Outsourced Receivables Management</h4>
               <p>Factoring companies often manage accounts receivable tasks like credit checks, collections, and invoice verification, saving you time and resources while allowing you to focus on growing your business.</p>
            </div>
             </div>
           </div>
           
          
           
         
           
        
      
      
      </Carousel>
    </div>
  );
}

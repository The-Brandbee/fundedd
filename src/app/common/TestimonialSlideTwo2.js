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
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>No Impact on Credit</h4>
               <p>Unlike loans, AR factoring doesn't affect your credit score. It provides a way to access funds without the risk of damaging your creditworthiness.</p>
            </div>
             </div>
           </div>
        
      
      
      </Carousel>
    </div>
  );
}

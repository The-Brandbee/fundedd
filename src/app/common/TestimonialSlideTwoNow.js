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
      slidesToSlide: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0,
    },
  };

  return (
    <div className="cder-ca-slide">
      <Carousel
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000000}
        responsive={responsive}
      >
        
          <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Deep Industry Knowledge</h4>
               <p>We bring years of financial expertise to every client relationship, delivering solutions that fit your specific needs.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Adaptable Funding</h4>
               <p>Our solutions flex and scale with your business, ensuring you have the right level of support at every stage.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>Transparency in Service</h4>
               <p>No hidden fees or surprises—our solutions are straightforward and reliable.</p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two">
               <h4>True Partnership</h4>
               <p>We're more than just a funding provider. We invest in understanding your business and supporting your long-term success.</p>
            </div>
             </div>
           </div>
           
         
           
          
           
         
           
        
      
      
      </Carousel>
    </div>
  );
}

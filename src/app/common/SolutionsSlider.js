import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerOne from "../img/term-loan2.png";
import BannerTwo from "../img/term-loan.png";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";


export default function TestimonialSlide() {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0,
    },
  };

  return (
    <div className="customized-solutions-middle-page">
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
      >
        
          <div>
           <div className="customized-solutions-middle-page-main">
                <Image src={BannerOne} alt="" className=""/>  
                <div className="container">
                     <div className="customized-detail-page-middle">
                         <h4>Growth Capital That Moves <br/>With <span>Your Revenue</span></h4>
                         <p>Dynamic funding is designed for high-growth businesses that value flexibility and control.</p>
                     </div>
                </div>
           </div>
           </div>
            <div>
           <div className="customized-solutions-middle-page-main">
                <Image src={BannerTwo} alt="" className=""/>  
                <div className="container">
                     <div className="customized-detail-page-middle">
                         <h4>Unlock Potential with <br/>Bespoke <span>Lending Solutions</span></h4>
                         <p>Term loans curated to match your business ambitions — thoughtfully structured, expertly guided.</p>
                     </div>
                </div>
           </div>
           </div>
           
   
      
      
      </Carousel>
    </div>
  );
}

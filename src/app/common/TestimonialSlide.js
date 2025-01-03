import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Industry from "../img/shutterstock_1932.png";
import IndustryTwo from "../img/arrow-up-right-2.png";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

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
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
           
          <div>
           <div className="testimonial-frame-right">
              <Image src={Industry} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit nisl,</p>
              <p><a href="#"><Image src={IndustryTwo} alt="" /></a></p>
             </div>
           </div>
        
      
      
      </Carousel>
    </div>
  );
}

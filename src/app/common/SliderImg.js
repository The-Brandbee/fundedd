import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Three from "../img/Staffing-3.jpg";
import Two from "../img/Staffing-2.jpg";
import { useState, useEffect } from "react";
import One from "../img/Staffing.jpg"; 
import Four from "../img/Staffing-4.jpg"; 
import Image from "next/image";

export default function TestimonialSlide() {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
          <div className="upcom-img-sl">
            <Image src={One} alt="" />
          </div>
         <div className="upcom-img-sl">
            <Image src={Two} alt="" />
          </div>

          <div className="upcom-img-sl">
            <Image src={Three} alt="" />
          </div>
          <div className="upcom-img-sl">
            <Image src={Four} alt="" />
          </div>
           
        
      
      
      </Carousel>
    </div>
  );
}

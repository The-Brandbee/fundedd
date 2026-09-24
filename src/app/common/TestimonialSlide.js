import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Industry from "../img/The-Ris.png";
import IndustryT from "../img/Understanding.png";
import IndustryThree from "../img/blog-3.jpg";
import IndustryTwo from "../img/arrow-up-right-2.png";
import IndustryN from "../img/shutterstock_1932.png";
import IndustryBeyond from "../img/beyond-capital-growth-ready-staffing.jpg";
import Image from "next/image";

const blogs = [
  {
    href: "/beyond-capital-building-a-growth-ready-staffing-business",
    image: IndustryBeyond,
    title: "Beyond Capital: Building a Growth-Ready Staffing Business..",
    alt: "Beyond Capital: Building a Growth-Ready Staffing Business",
    latest: true,
    imageStyle: { width: "100%", height: "200px", objectFit: "cover" },
  },
  {
    href: "/navigating-business-growth-how-to-secure-the-right-funding-for-your-staffing-company",
    image: IndustryN,
    title:
      "Navigating Business Growth: How to Secure the Right Funding for Your Staffing Company..",
  },
  {
    href: "/the-rise-of-non-debt-financing-why-more-staffing-businesses-are-looking-for-alternative-funding-solutions",
    image: Industry,
    title:
      "The Rise of Non-Debt Financing: Why more Staffing Businesses are looking for alternative funding solutions..",
  },
  {
    href: "/understanding-ar-factoring-vs-traditional-loans-what-is-best-for-your-staffing-business",
    image: IndustryT,
    title:
      "Understanding AR Factoring vs. Traditional Loans: What is Best for Your Staffing Business..",
  },
  {
    href: "/why-ar-factoring-is-a-strategic-lever-for-staffing-firms-in-tight-credit-cycles",
    image: IndustryThree,
    title:
      "Why AR Factoring Is a Strategic Lever for Staffing Firms in Tight Credit Cycles..",
  },
];

export default function TestimonialSlide({ includeLatest = true }) {
  const responsive = {
    superLargeDesktop: {
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

  const items = blogs.filter((blog) => includeLatest || !blog.latest);

  return (
    <div className="cder-ca-slide">
      <Carousel
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={2000}
        responsive={responsive}
      >
        {items.map((blog) => (
          <div key={blog.href}>
            <a href={blog.href} className="testimonial-frame-right blog-card-link">
              <Image
                src={blog.image}
                alt={blog.alt || blog.title}
                style={blog.imageStyle}
              />
              <p>{blog.title}</p>
              <p className="blog-card-arrow">
                <Image src={IndustryTwo} alt="" />
              </p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

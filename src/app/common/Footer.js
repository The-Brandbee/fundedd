import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SUBSCRIBE from "../common/SUBSCRIBE.js";
import Logo from "../img/fund-l.png";
function IndexPage() {
  return (
    <footer>
       <div className="container">
          <div className="footer-middle">
            <div className="footer-middle-left">

               <h4><span>Sign up</span> for email updates</h4>
               <p>Your one-stop shop for the tech, business, and finance news you need <span>to know each week.</span></p>
             
               <SUBSCRIBE/>  
               <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
            </div>
            <div className="footer-middle-right">
               <div className="footer-middle-r">
                  <h4 className="nonenone">Products</h4>
                  <ul>
                    <li><a href="/ar-factoring">AR Factoring </a></li>
                    <li><a href="/partner">Partner </a></li>
                   
                  
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4 className="nonenone">Company</h4>
                  <ul>
                    <li><a href="/about-us">About Us
                    </a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                   
                   
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4 className="nonenone">Resources</h4>
                
                   
               </div>
               <div className="footer-middle-r">
                  <h4 className="nonenone">Connect Today</h4>
                  <ul>
                  
                  </ul>
               </div>
            </div>
          </div>
       </div>
    </footer> 
  );
}

export default IndexPage;

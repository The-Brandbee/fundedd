import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Logo from "../img/fund-l.png";
function IndexPage() {
  return (
    <footer>
       <div className="container">
          <div className="footer-middle">
            <div className="footer-middle-left">

               <h4><span>Sign up</span> for email updates</h4>
               <p>Your one-stop shop for the tech, business, and finance news you need <span>to know each week.</span></p>
               <div className="footer-middle-left-search">
                <input type="text"/>
                <button>SUBSCRIBE</button>
               </div>
               <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
            </div>
            <div className="footer-middle-right">
               <div className="footer-middle-r">
                  <h4>Products</h4>
                  <ul>
                    <li><a href="/partner">Partner </a></li>
                    
                    <li><a href="#">Banks
                    </a></li>
                    <li><a href="#">Business Advisors
                    </a></li>
                    <li><a href="#">Investment Firms
                    </a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="/about-us">About Us
                    </a></li>
                    <li><a href="#">Who we are?
                    </a></li>
                    <li><a href="#">How it works?
                    </a></li>
                    <li><a href="#">Our Differentiation
                    </a></li>
                    <li><a href="#">Our Team

                    </a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Resources</h4>
                  <ul>
                    <li><a href="#">Application</a></li>
                    <li><a href="#">Blog
                    </a></li>
                    <li><a href="#">Case Studies
                    </a></li>
                    <li><a href="#">Rates
                    </a></li>
                    <li><a href="#">FAQs

                    </a></li>
                    <li><a href="#">Calculators

                    </a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Connect Today</h4>
                  <ul>
                    <li><a href="#">Contact Us</a></li>
                   
                  </ul>
               </div>
            </div>
          </div>
       </div>
    </footer> 
  );
}

export default IndexPage;

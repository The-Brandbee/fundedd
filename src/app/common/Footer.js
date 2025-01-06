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
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Resources</h4>
                  <ul>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                  </ul>
               </div>
               <div className="footer-middle-r">
                  <h4>Contact</h4>
                  <ul>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                  </ul>
               </div>
            </div>
          </div>
       </div>
    </footer> 
  );
}

export default IndexPage;

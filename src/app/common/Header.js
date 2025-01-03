import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/Logo.png";
import headertopicon from "../img/header-top-icon.png";
import Search from "../img/search.png";

function IndexPage() {
  return (
    <>
    <div className="header-top-frame_main">
      <div className="container">
      <div className="header-top-frame">
          <div className="header-top-left">
          <Link href="/">
          <Image src={Logo} alt="" />
          </Link>
          </div>
          <div className="header-top-right">
              <ul>
                <li>
                  <div className="header-top-right-left">
                  <Image src={headertopicon} alt="" />
                  </div>
                  <div className="header-top-right-right">
                    <h5>Industry Expertise</h5>
                    <p>Minimal Documentation Required</p>
                  </div>
                </li>
                <li>
                  <div className="header-top-right-left">
                  <Image src={headertopicon} alt="" />
                  </div>
                  <div className="header-top-right-right">
                    <h5>Rapid Fund Processing</h5>
                    <p>Minimal Documentation Required</p>
                  </div>
                </li>
                <li>
                  <div className="header-top-right-left">
                  <Image src={headertopicon} alt="" />
                  </div>
                  <div className="header-top-right-right">
                    <h5>Easy Online Application </h5>
                    <p>Minimal Documentation Required</p>
                  </div>
                </li>
                <li>
                <Link href="/">
                APPLY NOW
          </Link>
                </li>
              </ul>
          </div>
      </div>
      </div>
      </div>
      <div className="header-bottom-frame_main">
        <div className="container">
           <div className="header-bottom-frame_main-middle">
              <div className="header-bottom-frame_main-middle-left">
                <ul>
                  <li>
                  <Link href="/">AR Factoring</Link>
                  </li>
                  <li>
                  <Link href="/">Partner</Link>
                  </li>
                  <li>
                  <Link href="/">About Us</Link>
                  </li>
                  <li>
                  <Link href="/">Resources</Link>   
                  </li>
                </ul>
              </div>
              <div className="header-bottom-frame_main-middle-right">
                 <div className="header-sech-frame">
                    <input type="text"/>
                    <a href="">
                    <Image src={Search} alt="" />
                    </a>
                 </div>
              </div>
           </div>
        </div>
       </div>
    </>
  );
}

export default IndexPage;

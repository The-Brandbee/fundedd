import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GirlTwoL from "../img/shutterstock_2480068229@2x.png";
import GirlTwoLL from "../img/icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
const App = () => {
  return (
    <div  className="client-say-frame">
       <Carousel>
                <div>
                <div className="test-midl-f">
              <div className="test-midl-f-left">
               <Image src={GirlTwoL} alt="" />
              </div>
              <div className="test-midl-f-right">
                  <div className="img-ggh">
                  <Image src={GirlTwoLL} alt="" className="left-img" />
                  <Image src={GirlTwoLL} alt="" className="right-img"/> 
                  </div>
                  <p>Fundedd has transformed our cash flow! Their fast funding solutions helped us meet payroll on time every month. Their team really understands the staffing industry.</p>
                  <p>-  John D., IT Staffing CEO</p>
              </div>
           </div>

                </div>
                <div>
                <div className="test-midl-f">
              <div className="test-midl-f-left">
               <Image src={GirlTwoL} alt="" />
              </div>
              <div className="test-midl-f-right">
                  <div className="img-ggh">
                  <Image src={GirlTwoLL} alt="" className="left-img" />
                  <Image src={GirlTwoLL} alt="" className="right-img"/> 
                  </div>
                  <p>We were able to grow faster thanks to Fundedd's tailored AR factoring. Their transparent terms and quick access to funds kept our business running smoothly.</p>
                  <p>- Sara P., Staffing Agency Owner</p>
              </div>
           </div>

                </div>
                <div>
                <div className="test-midl-f">
              <div className="test-midl-f-left">
               <Image src={GirlTwoL} alt="" />
              </div>
              <div className="test-midl-f-right">
                  <div className="img-ggh">
                  <Image src={GirlTwoLL} alt="" className="left-img" />
                  <Image src={GirlTwoLL} alt="" className="right-img"/> 
                  </div>
                  <p>The flexibility Fundedd offers in terms of repayment and funding amounts has been a game-changer for us. It's the kind of partner you can trust for long-term success.</p>
                  <p>- Michael R., Business Manager</p>
              </div>
           </div>

                </div>
                <div>
                <div className="test-midl-f">
              <div className="test-midl-f-left">
               <Image src={GirlTwoL} alt="" />
              </div>
              <div className="test-midl-f-right">
                  <div className="img-ggh">
                  <Image src={GirlTwoLL} alt="" className="left-img" />
                  <Image src={GirlTwoLL} alt="" className="right-img"/> 
                  </div>
                  <p>I highly recommend Fundedd. Their personalized approach and industry knowledge have made them an indispensable partner for our business.</p>
                  <p>- Amanda T., Operations Director</p>
              </div>
           </div>

                </div>
            </Carousel>
    </div>
  );
};

export default App;
  
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApplyNow from "../common/ApplyNow.js";
import PARTNERWITHUS from "../common/partnerTabopo.js"; 
import headertopicon from "../img/header-top-icon.png";
import Image from "next/image";  
import Logo from "../img/fund-l.png";

export default () => (
  <Tabs>
    <div className='part-logo-main'>
    <div className='part-logo'>
        <Image src={Logo} alt="" />
    </div>
    <div className='part-logo-c'>
        X
    </div>
    <TabList>
      <Tab>Banks</Tab>
      <Tab>Business Advisors</Tab>
      <Tab>Investment Firms</Tab>
            
    </TabList>
</div>
   
    <TabPanel>
       <div className='partrtner-middle-tab-main-section'>
          <div className='partrtner-middle-tab-main-section-left'>
             <h3>How Banks can help and benefit by Partnering with Fundedd?</h3>
             <p>Banks can provide staffing companies with essential working capital through customized AR factoring solutions. By unlocking cash from outstanding invoices, banks help ensure smooth operations and timely payroll, empowering businesses to overcome cash flow challenges.</p>
              <PARTNERWITHUS/>
       </div>
       <div className='partrtner-middle-tab-main-section-right'>
          <ul>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Flexible Funding Solutions</h4>
                    <p>Offer AR factoring that meets the unique needs of staffing companies.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Support for Scaling</h4>
                    <p>Empower staffing companies to grow with immediate working capital.</p>
                    </div>
                  </li>
                     <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Streamlined Funding Process</h4>
                    <p>Provide quick, easy access to cash, ensuring payroll continuity.</p>
                    </div>
                  </li>
                  
                  </ul>   
       </div>
       </div>
    </TabPanel>
    <TabPanel>
   <div className='partrtner-middle-tab-main-section'>
          <div className='partrtner-middle-tab-main-section-left'>
             <h3>How Business Advisors can help and benefit from partnering with Fundedd?</h3>
             <p>Business advisors play a crucial role in guiding staffing companies through financial challenges. By partnering with Fundedd, they can offer clients customized financing options to manage cash flow, secure expansion funding, and maintain business continuity.</p>
              <PARTNERWITHUS/>
       </div>
       <div className='partrtner-middle-tab-main-section-right'>
          <ul>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Customized Financial Solutions</h4>
                    <p>Provide clients with the right funding for their needs.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Cash Flow Management</h4>
                    <p>Help clients access capital that sustains operations.</p>
                    </div>
                  </li>
                     <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Strategic Growth Support</h4>
                    <p>Enable clients to plan for sustainable growth.</p>     
                    </div>
                  </li>
                  
                  </ul>   
       </div>
       </div>
    </TabPanel>
    <TabPanel>
   <div className='partrtner-middle-tab-main-section'>
          <div className='partrtner-middle-tab-main-section-left'>
             <h3>How Banks can help and benefit by Partnering with Fundedd?</h3>
             <p>Banks can provide staffing companies with essential working capital through customized AR factoring solutions. By unlocking cash from outstanding invoices, banks help ensure smooth operations and timely payroll, empowering businesses to overcome cash flow challenges.</p>
              <PARTNERWITHUS/>
       </div>
       <div className='partrtner-middle-tab-main-section-right'>
          <ul>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Flexible Funding Solutions</h4>
                    <p>Offer AR factoring that meets the unique needs of staffing companies.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Support for Scaling</h4>
                    <p>Empower staffing companies to grow with immediate working capital.</p>
                    </div>
                  </li>
                     <li>
                    <div>
                    <Image src={headertopicon} alt="" />
                    </div>
                    <div className="right-ico">
                    <h4>Streamlined Funding Process</h4>
                    <p>Provide quick, easy access to cash, ensuring payroll continuity.</p>
                    </div>
                  </li>
                  
                  </ul>   
       </div>
       </div>
    </TabPanel>
 
   
  </Tabs>
);  
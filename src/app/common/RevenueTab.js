import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExpertTwoJoinT from "../img/Layer1@2xnn.png";
import ExpertTwoJoin from "../img/Layer1@2xnn.png";
import Image from "next/image";


export default () => (
    <div className='tab-middle-mainRevenueFinancing-n'>

  <Tabs>
    <TabList>
      <Tab>Revenue Financing</Tab>
      <Tab>Term Loans</Tab>
    </TabList>

    <TabPanel>
      <div className='tab-middle-mainRevenueFinancing'>
        <div className='container'>
             <div className='tab-middle-mainRevenueFinancing-middle'>
                <div className='tab-middle-mainRevenueFinancing-middle-left'>
                    <h3>A Smarter Way to <span>Access Funds</span></h3>
                    <p>
                        Unlike traditional loans with fixed repayments or asset-based collateral requirements, revenue financing is structured around your actual earnings. Instead of pledging physical assets, you receive capital upfront and repay it as a small percentage of your future revenue. This means payments are lighter during slower months and scale seamlessly when your business booms. It’s ideal for fast-growing companies that need a flexible, non-dilutive way to fuel expansion without sacrificing ownership or predictability.
                    </p>
                    <p>To understand how it can work for you, <a href="#">let's connect.</a></p>
                </div>
                 <div className='tab-middle-mainRevenueFinancing-middle-right'>
                    <Image src={ExpertTwoJoin} alt="" className="left-Advisorynm"/>  
                 </div>
             </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
       <div className='tab-middle-mainRevenueFinancing'>
        <div className='container'>
             <div className='tab-middle-mainRevenueFinancing-middle'>
                <div className='tab-middle-mainRevenueFinancing-middle-left'>
                    <h3>Built-for-Growth <span>Term Loans, <br/>Designed Around You</span></h3>
                    <p>At Fundedd, we understand that every business has unique growth goals. Our Term Loan solutions are part of a broader suite of customized lending strategies crafted by a team of specialists with deep experience in structuring complex capital requirements.</p>
                    <p> We don't believe in one-size-fits-all. Whether you're exploring expansion, acquisition, or long-term investment, we design loan strategies tailored to your specific financial landscape.</p>
                    <p>To understand how it can work for you, <a href="/contact-us">let's connect.</a></p>
                </div>
                 <div className='tab-middle-mainRevenueFinancing-middle-right'>
<Image src={ExpertTwoJoinT} alt="" className="left-Advisorynm"/>  
                 </div>
             </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
  
    </div>
);
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApplyNow from "../common/ApplyNow.js"; 

export default () => (
  <Tabs>
    <TabList>
      <Tab>Custom AR Factoring Solutions</Tab>
      <Tab>Quick Fund Access</Tab>
      <Tab>Quick and Transparent Terms</Tab>
      <Tab>Staffing Industry Expertise</Tab>
      <Tab>Committed Partnerships</Tab>           
    </TabList>

   
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>We provide tailored funding solutions for the staffing industry’s cash flow needs, helping manage operations smoothly. Our flexible plans address your billing cycles, ensuring consistent funds to support your business’s growth and stability.</p>
        <p><ApplyNow/></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>Fundedd ensures rapid access to funds for payroll and business continuity. Our fast, efficient process eliminates financial stress, keeping your business running without delays, so you can focus on delivering excellent services to your clients.</p>
        <p><ApplyNow/></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>With Fundedd, you get clear, upfront pricing and no hidden fees. Our simple and transparent terms ensure you understand the costs involved, providing you peace of mind while securing the funding you need to thrive.</p>
        <p><ApplyNow/></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>Fundedd specializes in financial solutions for the staffing industry, especially for IT staffing. Our deep understanding of the sector allows us to offer efficient funding that supports your specific challenges, helping you scale and manage payroll effectively.</p>
        <p><ApplyNow/></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
        <p> We focus on building long-term relationships with clients, offering ongoing support and tailored solutions. Our commitment is to your business’s continuous success, providing flexible funding to help you grow sustainably while navigating any financial challenges.</p>
        <p><ApplyNow/></p> 
        </div>
    </TabPanel>
  </Tabs>
);
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Submit Your Invoices</Tab>
      <Tab>Receive an Advance</Tab>
      <Tab>Retained Funds as Security</Tab>
      <Tab>Collection of Payments</Tab>
      <Tab>Final Payment to You</Tab>           
    </TabList>

   
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>Begin by submitting your outstanding invoices to Fundedd. Our team will carefully review and verify their eligibility for factoring, ensuring that the invoices meet the necessary criteria. This step is crucial to streamline the process and avoid any disruptions, enabling you to access funds faster and more efficiently.</p>
        <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Begin by submitting your outstanding invoices to Fundedd. Our team will carefully review and verify their eligibility for factoring, ensuring that the invoices meet the necessary criteria. This step is crucial to streamline the process and avoid any disruptions, enabling you to access funds faster and more efficiently.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Begin by submitting your outstanding invoices to Fundedd. Our team will carefully review and verify their eligibility for factoring, ensuring that the invoices meet the necessary criteria. This step is crucial to streamline the process and avoid any disruptions, enabling you to access funds faster and more efficiently.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Begin by submitting your outstanding invoices to Fundedd. Our team will carefully review and verify their eligibility for factoring, ensuring that the invoices meet the necessary criteria. This step is crucial to streamline the process and avoid any disruptions, enabling you to access funds faster and more efficiently.</p>
        <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Begin by submitting your outstanding invoices to Fundedd. Our team will carefully review and verify their eligibility for factoring, ensuring that the invoices meet the necessary criteria. This step is crucial to streamline the process and avoid any disruptions, enabling you to access funds faster and more efficiently.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
  </Tabs>
);  
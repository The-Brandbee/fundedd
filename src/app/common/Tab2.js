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
        <p>Submit your outstanding invoices to Fundedd. We review and verify their eligibility to streamline the process and enable faster access to funds.</p>
        <p><a target="_blank" className="normal-color-buttom" href="https://share.hsforms.com/1M2ptOmxZTIOXFrkiaMvAIQt58xb">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Once approved, Fundedd provides an advance of 80%-90% of the total invoice value. For example, for an invoice worth $10,000 with a 90% advance rate, you’ll receive $9,000 upfront.</p>
     <p><a target="_blank" className="normal-color-buttom" href="https://share.hsforms.com/1M2ptOmxZTIOXFrkiaMvAIQt58xb">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Fundedd retains 8-10% as a security buffer. Once your customer pays the invoice in full, this amount (minus fees) is released to you.</p>
     <p><a target="_blank" className="normal-color-buttom" href="https://share.hsforms.com/1M2ptOmxZTIOXFrkiaMvAIQt58xb">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>We take over payment collections based on agreed terms (30-90 days). You can focus on your operations while we handle the administrative follow-ups.</p>
     <p><a target="_blank" className="normal-color-buttom" href="https://share.hsforms.com/1M2ptOmxZTIOXFrkiaMvAIQt58xb">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>After receiving full payment, we deduct our fees and transfer the remaining balance to your account. This ensures maximum benefit while we manage the complexities of factoring.</p>
     <p><a target="_blank" className="normal-color-buttom" href="https://share.hsforms.com/1M2ptOmxZTIOXFrkiaMvAIQt58xb">APPLY NOW</a></p>
        </div>
    </TabPanel>  
  </Tabs>
);  
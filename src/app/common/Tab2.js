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
        <p><a className="normal-color-buttom" href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Once your invoices are approved, Fundedd provides you with an advance of 80%-95% of the total invoice value upfront. For example, if you have an invoice worth $10,000 and the agreed advance rate is 90%, you’ll receive $9,000 immediately. This immediate cash infusion helps meet your operational needs without waiting for customer payments.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Fundedd retains a small portion of the invoice value, typically 8-10%, as a security buffer. This retained amount ensures that we can cover any potential risks during the payment cycle. Once your customer pays the invoice in full, this amount (minus fees) is released to you, completing the transaction seamlessly.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>Fundedd takes over the responsibility of collecting payments from your customers based on the agreed payment terms, which are typically 30-90 days. This allows you to focus on your business operations while we handle the administrative and follow-up tasks associated with payment collections.</p>
        <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
    <TabPanel>
     <div className='tab-inner-frame'>
     <p>After receiving the full payment from your customers, Fundedd deducts our agreed fees and promptly transfers the remaining balance to your account. This final step ensures that you get the maximum benefit from your invoices while we handle the complexities of the factoring process.</p>
     <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
  </Tabs>
);  
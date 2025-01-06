import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Custom AR Factoring Solutions</Tab>
      <Tab>Quick Access to Funds</Tab>
      <Tab>Transparent Terms</Tab>
      <Tab>Staffing Industry Expertise</Tab>
      <Tab>Committed Partnership</Tab>           
    </TabList>

   
    <TabPanel>
     <div className='tab-inner-frame'>
        <p>Dedicated to fostering long-term relationships and sustained business growth.</p>
        <p><a href="#">APPLY NOW</a></p>
        </div>
    </TabPanel>
  </Tabs>
);
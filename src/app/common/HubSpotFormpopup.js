import { useEffect } from 'react';
import Close from "../img/cross-small_curved@2x.png";
import Image from "next/image";

const HubSpotForm = () => {
  useEffect(() => {
    // You can add the HubSpot form embed script here if it's JavaScript-based
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/v2.js"; // This is HubSpot's form embed script
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48953711",
          formId: "336a6d3a-6c59-4c83-9716-b92268cbc021",
          target: "#hubspot-form",
        });
      } 
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className='hubspot-form-pop-main-all-page'>
        <div className='hubspot-form-pop-main-all-page-middle'>
            <div className='close-ion-main-page'>
                <a href=""> 
                 <Image src={Close} alt="" />
                 </a>
            </div>
            <h4>Connect <span>with Our Funding Specialists</span></h4>
            <iframe className="contact-us-page-frame" src="https://deciphercredit.net/products/jLKUVok3gGvYLdeHHbIxeGBKWkDubUR7PqnpdHrUYIpy2ulB5ZH2l2qzacDB/application/embed" ></iframe>
                 
         </div>
    </div>
  );
};

export default HubSpotForm;

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
          formId: "615dc126-40f4-4717-b3e0-32230977ce5c",
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
            <h4>Partner with <span>Fundedd</span></h4>  
            <div id="hubspot-form" className="contact-us-page-frame" />  
         </div> 
    </div>
  );
};

export default HubSpotForm;

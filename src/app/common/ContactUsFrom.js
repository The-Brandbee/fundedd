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
    <>
     <div id="hubspot-form"></div>   
    </>
  );
};

export default HubSpotForm;

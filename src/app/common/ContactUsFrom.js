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
          formId: "6b571ca5-d35c-4fbd-847b-9758f0348306",
          target: "#New",
        });
      } 
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
     <div id="New"></div>   
    </>
  );
};

export default HubSpotForm;

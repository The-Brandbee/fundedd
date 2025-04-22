import Contactus from "../contact-us/contactus.js";

export const metadata = {
  title: "Contact Us: Reach Out for Support or Inquiries | Fundedd",
  description: "Need assistance or have questions? Get in touch with our team for prompt support or service information. Our team is here to support.",
  alternates: {
    canonical: "https://www.fundedd.com/contact-us", 
  },
  openGraph: { 
    images:
      "",
  },
};

export default function MdrMain() {
  return (
    <>    
      <Contactus />
    </>
  );
}

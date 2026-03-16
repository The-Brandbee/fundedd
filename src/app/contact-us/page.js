import Contactus from "../contact-us/contactus.js";

export const metadata = {
  title: "Contact Our Funding Specialists | Fundedd",
  description: "Speak with our team to discuss payroll funding, AR factoring, or financing options tailored for your staffing business.",
  alternates: {
    canonical: "https://www.fundedd.com/contact-us", 
  },
   robots: {
    index: true,
    follow: true,
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

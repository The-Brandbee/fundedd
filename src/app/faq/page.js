import Faq from "../faq/faq.js";

export const metadata = {
  title: "FAQs | Fundedd",
  description: "Find clear answers to common questions about payroll funding, invoice factoring, approvals, rates, and how staffing financing works.",
  alternates: {
    canonical: "https://www.fundedd.com/faq", 
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
      <Faq />
    </>
  );
}

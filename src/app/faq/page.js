import Faq from "../faq/faq.js";

export const metadata = {
  title: "FAQs: Answers to Common Questions You Might Have | Fundedd",
  description: "Find answers to common questions about payroll funding and AR factoring services. Learn how we can help streamline your business operations.",
  alternates: {
    canonical: "https://www.fundedd.com/faq", 
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

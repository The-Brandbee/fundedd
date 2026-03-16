import Whychoose from "../why-choose/whychoose.js";

export const metadata = {
  title: "Why Choose Us | Fundedd",
  description: "See why staffing companies trust Fundedd for transparent payroll funding, dependable receivables factoring, and responsive support.",
  alternates: {
    canonical: "https://www.fundedd.com/why-choose", 
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
      <Whychoose />
    </>
  );
}

import PrivacyPolicy from "./PrivacyPolicy.js";


export const metadata = {
  title: "Privacy Policy | Fundedd",
  description: "Learn how Fundedd supports staffing companies with payroll funding, invoice factoring, and flexible  financing solutions built for steady growth.",
  alternates: {
    canonical: "https://www.fundedd.com/privacy-policy", 
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
        <PrivacyPolicy />
    </>
  );
}

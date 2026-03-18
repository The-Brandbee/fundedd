import TermsOfUse from "./TermsOfUse";



export const metadata = {
  title: "Terms of Use | Fundedd",
  description: "Review the terms and conditions governing your use of the Fundedd website and services.",
  alternates: {
    canonical: "https://www.fundedd.com/terms-of-use", 
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
      <TermsOfUse />
    </>
  );
}

import Datasecurity from "../data-security/datasecurity.js";

export const metadata = {
  title: "Data Security & Compliance Standards | Fundedd",
  description: "Discover how Fundedd protects financial data through secure systems, compliance protocols, and strict confidentiality practices.",
  alternates: {
    canonical: "https://www.fundedd.com/data-security", 
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
      <Datasecurity />
    </>
  );
}

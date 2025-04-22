import Datasecurity from "../data-security/datasecurity.js";

export const metadata = {
  title: "Data Security: How We Keep Your Business Data Safe | Fundedd",
  description: "We implement strict data protection measures to keep your sensitive information secure, private, and fully compliant with industry standards.",
  alternates: {
    canonical: "https://www.fundedd.com/data-security", 
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

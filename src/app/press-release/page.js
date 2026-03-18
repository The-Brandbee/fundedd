import PressRelease from "./PressRelease";



export const metadata = {
  title: "Press Release | Fundedd",
  description: "Learn how Fundedd supports staffing companies with payroll funding, invoice factoring, and flexible  financing solutions built for steady growth.",
  alternates: {
    canonical: "https://www.fundedd.com/press-release", 
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
        <PressRelease />
    </>
  );
}

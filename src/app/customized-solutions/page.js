import CustomizedSolutions from "./CustomizedSolutions";



export const metadata = {
  title: "Customized Solutions | Fundedd",
  description: "Learn how Fundedd supports staffing companies with payroll funding, invoice factoring, and flexible  financing solutions built for steady growth.",
  alternates: {
    canonical: "https://www.fundedd.com/customized-solutions", 
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
        <CustomizedSolutions />
    </>
  );
}

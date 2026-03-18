import StaffingWorld2025 from "./StaffingWorld2025";



export const metadata = {
  title: "Staffing World 2025 | Fundedd",
  description: "Learn how Fundedd supports staffing companies with payroll funding, invoice factoring, and flexible  financing solutions built for steady growth.",
  alternates: {
    canonical: "https://www.fundedd.com/staffing-world-2025", 
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
      <StaffingWorld2025 />
    </>
  );
}

// import Blog from "../blog/blog.js";
import AboutUs from "./aboutUs.js";


export const metadata = {
  title: "About Us | Fundedd",
  description: "Learn how Fundedd supports staffing companies with payroll funding, invoice factoring, and flexible  financing solutions built for steady growth.",
  alternates: {
    canonical: "https://www.fundedd.com/about-us", 
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
        <AboutUs />
    </>
  );
}

import Aboutus from "../about-us/aboutus.js";

export const metadata = {
  title: "Who We Are and What We Stand For | Fundedd",
  description: "Learn about our journey, our values, and how we empower businesses through smart payroll and AR factoring services that fuel long-term success.",
  alternates: {
    canonical: "https://www.fundedd.com/about-us",
  },
  openGraph: {
    images:
      "",
  },
};

export default function MdrMain() {
  return (
    <>    
      <Aboutus />
    </>
  );
}

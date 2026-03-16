import Partner from "../partner/partner.js";

export const metadata = {
  title: "Partner With Us | Fundedd",
  description: "Partner with Fundedd as a strategic partner and help firms secure dependable payroll funding and accounts receivable factoring solutions.",
  alternates: {
    canonical: "https://www.fundedd.com/partner",
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
      <Partner />
    </>
  );
}

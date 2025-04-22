import Partner from "../partner/partner.js";

export const metadata = {
  title: "Grow Your Business by Partnering with Us | Fundedd",
  description: "Join our network and grow together. We provide payroll and AR factoring services that help businesses improve cash flow and scalability.",
  alternates: {
    canonical: "https://www.fundedd.com/partner",
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

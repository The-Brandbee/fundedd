import Arfactoring from "../ar-factoring/arfactoring.js";

export const metadata = {
  title: "AR Factoring & Invoice Finance Solutions | Fundedd",
  description: "Access steady cash flow with account receivables factoring and accounts receivable financing services from a trusted invoice factoring company.",
  alternates: {
    canonical: "https://www.fundedd.com/ar-factoring",
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
      <Arfactoring />
    </>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Payroll Funding & Financing for Staffing Firms | Fundedd",
  description:
    "Get payroll funding for staffing companies, including invoice factoring and flexible financing solutions to help staffing agencies manage payroll and cash flow.",

  alternates: {
    canonical: "https://www.fundedd.com/",
  },
  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "lt0rwl2olLUmWdGmQOT2AL1s6DTzk5rAG30Sp8oT4Pg",
  },

  openGraph: {
    images: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "Payroll Funding Solutions for Staffing Agencies | Fundedd",
  description:
    "Explore payroll funding for staffing companies and small businesses. Fundedd offers payroll factoring, financing & staffing agency funding solutions.",

  alternates: {
    canonical: "https://www.fundedd.com/",
  },
  openGraph: {
    images:
      "",
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

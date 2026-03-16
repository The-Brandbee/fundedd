import Blog from "../blog/blog.js";

export const metadata = {
  title: "Our Blog - Staffing Finance Insights & Updates | Fundedd",
  description: "Explore expert insights on payroll funding, AR factoring, cash flow management, and smart financing strategies for staffing agencies.",
  alternates: {
    canonical: "https://www.fundedd.com/blog", 
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
      <Blog />
    </>
  );
}

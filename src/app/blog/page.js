import Blog from "../blog/blog.js";

export const metadata = {
  title: "Blog: Explore Insights, Tips & Industry Updates | Fundedd",
  description: "Read expert advice, success stories, and the latest trends shaping the financial landscape. Stay informed and inspired with every post.",
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

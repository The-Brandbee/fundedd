import Whychoose from "../why-choose/whychoose.js";

export const metadata = {
  title: "Why Businesses Choose Us Over the Rest | Fundedd",
  description: "Personalized service to fast approvals—discover the key reasons why businesses trust us. We offer reliable, flexible solutions tailored to your needs.",
  alternates: {
    canonical: "https://www.fundedd.com/why-choose", 
  },
  openGraph: { 
    images:
      "",
  },
};

export default function MdrMain() { 
  return (
    <>    
      <Whychoose />
    </>
  );
}

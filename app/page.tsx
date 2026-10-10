import { ContactCta } from "@/components/sections/ContactCta";
import { Engagement } from "@/components/sections/Engagement";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <Services />
        <Engagement />
        <Sectors />
        <WhyUs />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

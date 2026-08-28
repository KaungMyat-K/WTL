import HeroSection from "../components/home/HeroSection";
import ClientMarquee from "../components/home/ClientMarquee";
import ServiceSection from "../components/home/ServiceSection";
import LatestNewsSection from "../components/home/LatestNewsSection";
import CtaSection from "../components/contact/CtaSection";
import QuoteSection from "../components/home/QuoteSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <ServiceSection />
      <QuoteSection />
      <LatestNewsSection />
      <CtaSection />
    </>
  );
}

export default Home;

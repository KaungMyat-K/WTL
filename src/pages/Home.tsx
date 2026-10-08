import HeroSection from "../components/home/HeroSection";
import ClientMarquee from "../components/home/ClientMarquee";
import ServiceSection from "../components/home/ServiceSection";
import LatestNewsSection from "../components/home/LatestNewsSection";
import CtaSection from "../components/contact/CtaSection";
import QuoteSection from "../components/home/QuoteSection";
import CompanyDescriptionSection from "../components/home/CompanyDescriptionSection";
import { fetchNewsQuery } from "../api/query";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data: news = [], isPending, isError } = useQuery(fetchNewsQuery());

  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <CompanyDescriptionSection />
      <ServiceSection />
      <QuoteSection />
      {!isPending && !isError && news.length > 0 && (
        <LatestNewsSection news={news} />
      )}
      <CtaSection />
    </>
  );
}

export default Home;

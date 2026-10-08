import HeroSection from "../../components/blogs/HeroSection";
import BlogListSection from "../../components/blogs/BlogListSection";
import { fetchNewsQuery } from "../../api/query";
import { useQuery } from "@tanstack/react-query";
import Button from "../../components/ui/Button";
import CtaSection from "../../components/contact/CtaSection";

function Blog() {
  const {
    data: news = [],
    isPending,
    isError,
    refetch,
  } = useQuery(fetchNewsQuery());

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[65vh] xl:min-h-[80vh] py-16 sm:py-20 md:py-24 bg-[#e7eef1]">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
          <div className="absolute inset-0 rounded-full border-4 sm:border-5 md:border-6 lg:border-7 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 sm:border-5 md:border-6 lg:border-7 border-transparent border-t-secondary animate-spin" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[65vh] xl:min-h-[80vh] py-16 sm:py-20 md:py-24 bg-[#e7eef1]">
        <p className="text-sm  md:text-lg lg:text-2xl text-gray-500 mb-8">
          Something is wrong. Please try again.
        </p>
        <Button
          variant="primary"
          onClick={() => void refetch()}
          className="px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (!isPending && !isError && news.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[65vh] xl:min-h-[80vh] py-16 sm:py-20 md:py-24 bg-[#e7eef1]">
        <p className="text-sm md:text-lg lg:text-2xl text-gray-500">
          No News found.
        </p>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <BlogListSection news={news} />
      <CtaSection />
    </>
  );
}

export default Blog;

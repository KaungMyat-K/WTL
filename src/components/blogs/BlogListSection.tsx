import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import type { NewsData } from "../../types/index1";

interface BlogListProps {
  news: NewsData[];
}

function BlogListSection({ news }: BlogListProps) {
  const { t } = useTranslation();

  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 md:pb-28 lg:pb-32 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {news.map((post) => (
            <BlogCard key={post.bid} post={post} />
          ))}
        </div>

        <div className="text-center mt-20 sm:mt-28 md:mt-32">
          <Button
            variant="primary"
            className="px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {t("button.learnMoreButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogListSection;

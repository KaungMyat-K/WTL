import type { NewsData } from "../../types/index1";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";

interface RelatedArticlesProps {
  news: NewsData[];
}

function RelatedArticles({ news }: RelatedArticlesProps) {
  const { t } = useTranslation();

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
              {t("blogs.details.relatedArticles")}
            </h2>
          </div>
        </div>

        {/* Related Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {news.map((post, index) => (
            <BlogCard key={post.id ?? post.name ?? index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;

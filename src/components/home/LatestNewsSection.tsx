import LearnMoreLink from "../ui/LearnMoreLink";
import { FEATURED_POSTS, RECENT_POSTS } from "../../static/blogData";
import FeaturedPostCard from "../blogs/FeaturedPostCard";
import RecentPostCard from "../blogs/RecentPostCard";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../config/site1";

function LatestNewsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
              {t("home.blogs.primaryTitle")}
            </h2>
          </div>

          <LearnMoreLink
            href={ROUTES.NEWS}
            className="hidden lg:inline-flex"
            title={t("button.learnMoreButton")}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {FEATURED_POSTS.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {RECENT_POSTS.map((post, index) => (
              <RecentPostCard
                key={post.id}
                post={post}
                isLast={index === RECENT_POSTS.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:hidden">
          <LearnMoreLink
            href={ROUTES.NEWS}
            className="inline-flex"
            title={t("button.learnMoreButton")}
          />
        </div>
      </div>
    </section>
  );
}

export default LatestNewsSection;

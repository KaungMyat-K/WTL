import type { BlogPost } from "../../types";
import BlogCard from "./BlogCard";
import seaFreightImg from "../../assets/home/air-pic.jpg";

interface RelatedArticlesProps {
  articles?: BlogPost[];
  title?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Global Shipping in 2024",
    date: "Mar 15, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/1",
  },
  {
    id: 2,
    title: "Air Freight: Speed Meets Reliability",
    date: "Mar 12, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/1",
  },
  {
    id: 3,
    title: "Smart Warehousing Solutions for 2024",
    date: "Mar 10, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/1",
  },
];

interface RelatedArticlesProps {
  articles?: BlogPost[];
  title?: string;
}

function RelatedArticles({
  articles = BLOG_POSTS,
  title = "Related Articles",
}: RelatedArticlesProps) {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary">
              {title}
            </h2>
          </div>
        </div>

        {/* Related Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} post={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;

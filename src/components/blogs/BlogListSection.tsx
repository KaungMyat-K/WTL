import type { BlogPost } from "../../types";
import BlogCard from "./BlogCard";
import seaFreightImg from "../../assets/home/air-pic.jpg";

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
    href: "/blogs/2",
  },
  {
    id: 3,
    title: "Smart Warehousing Solutions for 2024",
    date: "Mar 10, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/3",
  },
  {
    id: 4,
    title: "Sustainable Sea Freight Practices",
    date: "Mar 8, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/4",
  },
  {
    id: 5,
    title: "Supply Chain Trends to Watch in 2024",
    date: "Mar 5, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/5",
  },
  {
    id: 6,
    title: "How Technology is Transforming Logistics",
    date: "Mar 3, 2024",
    imageUrl: seaFreightImg,
    href: "/blogs/6",
  },
];

interface BlogSectionProps {
  posts?: BlogPost[];
  onLearnMoreClick?: () => void;
}

function BlogListSection({
  posts = BLOG_POSTS,
  onLearnMoreClick,
}: BlogSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Grid - 3 Cards Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 sm:mt-28 md:mt-32">
          <a
            href="#"
            onClick={(e) => {
              if (onLearnMoreClick) {
                e.preventDefault();
                onLearnMoreClick();
              }
            }}
            className="group inline-flex items-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogListSection;

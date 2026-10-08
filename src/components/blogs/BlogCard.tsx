import { Link } from "react-router-dom";
import type { NewsData } from "../../types/index1";
import { ROUTES } from "../../config/site1";
import { Images } from "../images";
import { useLocalizedNewsTitle } from "../../hooks/useLocalizedNewsTitle";

interface BlogCardProps {
  post: NewsData;
}
function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.createdDate
    ? new Date(post.createdDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
  const blogLink = `${ROUTES.NEWS}/${post.bid ?? encodeURIComponent(post.bid)}`;
  const title = useLocalizedNewsTitle(post.names, "Blog Title");

  return (
    <article className="group overflow-hidden">
      <div className="relative h-48 sm:h-50 overflow-hidden rounded-md">
        {post.image ? (
          <img
            src={post.image}
            alt={post.names?.en ?? post.names?.th ?? "Blog Image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <img
            src={Images.defaultLogo.src}
            alt={Images.defaultLogo.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="py-3 sm:py-4 md:py-5">
        {formattedDate && (
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
            <span className="flex items-center gap-1">{formattedDate}</span>
          </div>
        )}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 hover:text-secondary hover:underline">
          <Link to={blogLink}>{title}</Link>
        </h3>
      </div>
    </article>
  );
}

export default BlogCard;

import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site1";
import type { NewsData } from "../../types/index1";
import { Images } from "../images";
import { useLocalizedNewsTitle } from "../../hooks/useLocalizedNewsTitle";

interface RecentPostCardProps {
  post: NewsData;
  isLast?: boolean;
}

function RecentPostCard({ post, isLast = false }: RecentPostCardProps) {
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
    <article
      className={`group overflow-hidden pb-3 sm:pb-4 ${
        !isLast ? "border-b border-gray-300" : ""
      }`}
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span className="flex items-center gap-1">{formattedDate}</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 hover:underline hover:text-secondary line-clamp-2">
            <Link to={blogLink}>{title}</Link>
          </h3>
        </div>
        <div className="relative w-20 h-20 md:w-32 md:h-32 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-md">
          {post.image ? (
            <img
              src={post.image}
              alt={post.names?.en ?? post.names?.th ?? "Blog Image"}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={Images.defaultLogo.src}
              alt={Images.defaultLogo.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export default RecentPostCard;

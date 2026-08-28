import type { BlogPost } from "../../types";

interface RecentPostCardProps {
  post: BlogPost;
  isLast?: boolean;
}

function RecentPostCard({ post, isLast = false }: RecentPostCardProps) {
  return (
    <article
      className={`group overflow-hidden pb-3 sm:pb-4 ${
        !isLast ? "border-b border-gray-300" : ""
      }`}
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span className="flex items-center gap-1">{post.date}</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 hover:underline hover:text-secondary line-clamp-2">
            <a href={post.href}>{post.title}</a>
          </h3>
        </div>
        <div className="relative w-20 h-20 md:w-32 md:h-32 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default RecentPostCard;

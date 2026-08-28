import type { BlogPost } from "../../types";

interface FeaturedPostCardProps {
  post: BlogPost;
}

function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <article className="group overflow-hidden">
      <div className="relative h-48 sm:h-50 md:h-56 lg:h-64 overflow-hidden rounded-md">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 sm:py-4 md:py-5">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-1 sm:mb-2">
          <span className="flex items-center gap-1">{post.date}</span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2 hover:text-secondary hover:underline line-clamp-2">
          <a href={post.href}>{post.title}</a>
        </h3>
      </div>
    </article>
  );
}

export default FeaturedPostCard;

import { Link } from "react-router-dom";
import type { BlogPost } from "../../types";

interface BlogCardProps {
  post: BlogPost;
}
function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden">
      <div className="relative h-48 sm:h-50 overflow-hidden rounded-lg">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 sm:py-4 md:py-5">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">{post.date}</span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 hover:text-secondary hover:underline">
          <Link to={post.href}>{post.title}</Link>
        </h3>
      </div>
    </article>
  );
}

export default BlogCard;

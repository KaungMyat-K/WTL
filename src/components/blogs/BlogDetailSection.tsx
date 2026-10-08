import { useLocalizedContent } from "../../hooks/useLocalizedContent";
import type { NewsDetailData } from "../../types/index1";
import { Icons } from "../icons";

interface BlogDetailsProps {
  post: NewsDetailData;
}

function BlogDetailSection({ post }: BlogDetailsProps) {
  const formattedDate = post?.createdDate
    ? new Date(post.createdDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const content = useLocalizedContent(post?.translations);

  return (
    <section className="py-12 md:py-16 lg:py-36 bg-[#e7eef1] -mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-18 lg:pt-16 xl:pt-0 ">
        {/* Category */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary/10 text-secondary text-xs sm:text-sm   px-3 py-1 rounded-md">
            {post?.category?.name}
          </span>
        </div>

        {/* Title */}
        <h1 className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-8 lg:mb-10 break-words">
          {content.name}
        </h1>

        {/* Date & Author */}
        <div className="flex items-center justify-center gap-4 md:gap-6 text-xs sm:text-sm text-gray-500 mb-8 md:mb-10 lg:mb-12">
          <span className="flex items-center gap-1.5 md:gap-2">
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formattedDate}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 pt-10">
          <div
            className="prose max-w-none text-gray-600  [&_img]:mx-auto [&_img]:rounded-md text-left"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>

        {(post.fbRef || post.linkedinRef) && (
          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 md:gap-5 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <span className="text-gray-600 font-bold text-sm sm:text-lg">
              Posted on
            </span>

            <div className="flex items-center gap-4 sm:gap-5">
              {post.fbRef && (
                <a
                  href={post.fbRef}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View post on Facebook"
                  className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#1877F2] hover:opacity-80 transition-opacity"
                >
                  <Icons.facebook className="w-full h-full" />
                </a>
              )}

              {post.linkedinRef && (
                <a
                  href={post.linkedinRef}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View post on LinkedIn"
                  className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#0A66C2] hover:opacity-80 transition-opacity"
                >
                  <Icons.linkedin className="w-full h-full" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogDetailSection;

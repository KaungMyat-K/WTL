import { Link } from "react-router-dom";
import { useLocalizedNewsContent } from "../../hooks/useLocalizedNewsContent";
import type { NewsDetailData } from "../../types/index1";
import { Icons } from "../icons";
import { ROUTES } from "../../config/site1";

interface BlogDetailsProps {
  post: NewsDetailData;
  parentLabel: string;
}

function BlogDetailSection({ post, parentLabel }: BlogDetailsProps) {
  const formattedDate = post?.createdDate
    ? new Date(post.createdDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const content = useLocalizedNewsContent(post?.translations);

  return (
    <section className="py-12 md:py-16 lg:py-36 bg-[#e7eef1] -mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-18 lg:pt-16 xl:pt-0 ">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 sm:gap-2 text-xs md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 min-w-0"
        >
          {/* Parent / Home Link */}
          <Link
            to={ROUTES.NEWS}
            className="hover:text-secondary transition-colors shrink-0 max-w-[100px] sm:max-w-none truncate"
          >
            {parentLabel}
          </Link>

          {/* Separator */}
          <span
            aria-hidden="true"
            className="text-gray-400 shrink-0 select-none"
          >
            ›
          </span>

          {/* Current Page Title */}
          <span
            className="text-secondary font-medium  truncate max-w-[180px] xs:max-w-[240px] sm:max-w-[350px] md:max-w-md lg:max-w-xl"
            title={content?.name}
          >
            {content?.name}
          </span>
        </nav>
        {/* Category */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary/10 text-secondary text-xs sm:text-sm   px-3 py-1 rounded-md">
            {post.category?.name}
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

        <div className="space-y-4 sm:space-y-5 md:space-y-6 pt-10 min-w-0">
          <div
            className="prose max-w-none text-gray-600 text-left
                       [word-break:break-word] [overflow-wrap:anywhere]
                       [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:rounded-md
                       [&_iframe]:max-w-full [&_video]:max-w-full
                       [&_table]:block [&_table]:overflow-x-auto [&_table]:max-w-full
                       [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>

        {(post.fbRef || post.linkedinRef) && (
          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 md:gap-5 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <span className="text-gray-600 font-medium text-sm sm:text-lg">
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

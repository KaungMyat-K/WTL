import { Link } from "react-router-dom";
import { useLocalizedJobContent } from "../../hooks/useLocalizedJobContent";
import type { JobDetailData } from "../../types/index1";
import { ROUTES } from "../../config/site1";
import { Icons } from "../icons";

interface BlogDetailsProps {
  job: JobDetailData;
  parentLabel: string;
}

function JobDetailsSection({ job, parentLabel }: BlogDetailsProps) {
  const title = useLocalizedJobContent(
    job.translations,
    "jobPosition",
    "Job Title"
  );
  const location = useLocalizedJobContent(job.translations, "location", "");
  const description = useLocalizedJobContent(
    job.translations,
    "jobDescription",
    ""
  );
  return (
    <section>
      <div className="relative bg-gray-900 -mt-12 pt-24 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16  lg:pb-20  xl:pb-28 2xl:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 sm:gap-2 text-xs md:text-lg text-gray-400 mb-4 sm:mb-6 md:mb-8 min-w-0"
            >
              {/* Parent Services Link */}
              <Link
                to={ROUTES.JOBS}
                className="hover:text-secondary transition-colors shrink-0 max-w-[120px] sm:max-w-none truncate"
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

              {/* Current Service Title */}
              <span
                className="text-secondary font-medium truncate min-w-0 max-w-[160px] xs:max-w-[220px] sm:max-w-[340px] md:max-w-md lg:max-w-xl"
                title={title}
              >
                {title}
              </span>
            </nav>
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              {title}
            </h1>
            <div className="flex items-center gap-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
              <div className="flex items-center gap-2">
                <Icons.mapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-100/70 shrink-0" />
                <span className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg ">
                  {location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Icons.briefcase className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-100/70 shrink-0" />
                <span className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg ">
                  {job.type?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div
            className="prose max-w-none text-gray-600 text-left min-w-0
                   [word-break:break-word] [overflow-wrap:anywhere]
                   [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:rounded-md
                   [&_iframe]:max-w-full [&_video]:max-w-full
                   [&_table]:block [&_table]:overflow-x-auto [&_table]:max-w-full
                   [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}

export default JobDetailsSection;

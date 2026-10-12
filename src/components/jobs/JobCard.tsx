import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site1";
import type { JobData } from "../../types/index1";
import { Icons } from "../icons";
import { useLocalizedJobTitle } from "../../hooks/useLocalizedJobTitle";

interface JobCardProps {
  job: JobData;
}

function JobCard({ job }: JobCardProps) {
  const jobLink = `${ROUTES.JOBS}/${job.jid ?? encodeURIComponent(job.jid)}`;
  const title = useLocalizedJobTitle(
    job.translations,
    "jobPosition",
    "Job Title"
  );
  const location = useLocalizedJobTitle(job.translations, "location", "");
  return (
    <Link
      to={jobLink}
      className="group p-4 sm:p-5 md:p-6 bg-white rounded-md min-h-48 sm:min-h-52 md:min-h-60 transition-colors duration-300 hover:bg-secondary"
    >
      <div className="flex flex-col h-full">
        {/* Title */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-normal text-gray-800 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Bottom row: arrow left, meta right */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 flex items-end justify-between gap-3">
          {/* Arrow */}
          <Icons.rightArrow
            strokeWidth="1.3"
            className="h-6 w-6 md:h-7 md:w-7 shrink-0 text-gray-800 group-hover:text-white transition-all duration-300 group-hover:translate-x-3"
          />

          {/* Location + Type */}

          <div className="mb-1.5  flex items-center gap-2 sm:gap-3 text-gray-800 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm ">
            <span className="flex items-center gap-1">
              <Icons.mapPin className="w-4 h-4 shrink-0 mt-0.5" />
              {location}
            </span>
            <span
              className="text-gray-800 group-hover:text-white"
              aria-hidden="true"
            >
              •
            </span>
            <span className="flex items-center gap-1">
              <Icons.briefcase className="w-4 h-4 shrink-0 mt-0.5" />
              {job.type}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;

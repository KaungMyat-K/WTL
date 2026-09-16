import type { Job } from "../../types";
import { Icons } from "../icons";

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <a
      href={"/jobs/1"}
      className="group p-4 sm:p-5 md:p-6 bg-white rounded-md min-h-48 sm:min-h-52 md:min-h-60 transition-colors duration-300 hover:bg-secondary"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-normal text-gray-800 group-hover:text-white transition-colors duration-300">
            {job.title}
          </h3>
        </div>

        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 flex justify-between">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
            <Icons.rightArrow
              strokeWidth="1.3"
              className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7 mt-1 transition-all duration-75 ease-in-out group-hover:translate-x-3 group-hover:text-white"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-all duration-75 ease-in-out group-hover:translate-x-3 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg> */}
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
            <Icons.checkmark
              strokeWidth="1"
              className="h-7 w-7 sm:h-7 sm:w-7 md:h-9 md:w-9 transition-all duration-75 group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default JobCard;

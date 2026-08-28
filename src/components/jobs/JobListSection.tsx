import type { Job } from "../../types";
import JobCard from "./JobCard";

const MOCK_JOBS: Job[] = [
  { id: 1, title: "Senior Logistics Manager", href: "#" },
  { id: 2, title: "Senior Logistics Manager", href: "#" },
  { id: 3, title: "Senior Logistics Manager", href: "#" },
  { id: 4, title: "Senior Logistics Manager", href: "#" },
  { id: 5, title: "Senior Logistics Manager", href: "#" },
  { id: 6, title: "Senior Logistics Manager", href: "#" },
];

interface JobListSectionProps {
  jobs?: Job[];
  onLearnMoreClick?: () => void;
}

function JobListSection({
  jobs = MOCK_JOBS,
  onLearnMoreClick,
}: JobListSectionProps) {
  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 md:pb-28 lg:pb-32 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Job Cards Grid - 3 Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 sm:mt-28 md:mt-32">
          <a
            href="#"
            onClick={onLearnMoreClick}
            className="group inline-flex items-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-medium text-sm sm:text-base transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default JobListSection;

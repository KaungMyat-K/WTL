import { useTranslation } from "react-i18next";
import type { Job } from "../../types";
import Button from "../ui/Button";
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
  const { t } = useTranslation();

  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 md:pb-28 lg:pb-32 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="text-center mt-20 sm:mt-28 md:mt-32">
          <Button
            variant="primary"
            onClick={onLearnMoreClick}
            className="px-6 sm:px-8 py-3 sm:py-3.5  text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {t("button.learnMoreButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default JobListSection;

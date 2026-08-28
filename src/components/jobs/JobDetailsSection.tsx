export interface JobDetailsProps {
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
}

function JobDetailsSection({
  description = "We are seeking an experienced Senior Logistics Manager to oversee and optimize our supply chain operations. The ideal candidate will have a strong background in logistics management, excellent leadership skills, and a proven track record of improving operational efficiency.",
  responsibilities = [
    "Oversee daily logistics operations and supply chain activities",
    "Develop and implement logistics strategies to improve efficiency",
    "Manage relationships with shipping partners and vendors",
    "Monitor and analyze logistics performance metrics",
    "Lead and mentor a team of logistics professionals",
  ],
  requirements = [
    "Bachelor's degree in Logistics, Supply Chain, or related field",
    "5+ years of experience in logistics management",
    "Strong leadership and team management skills",
    "Excellent communication and problem-solving abilities",
    "Proficiency in logistics software and MS Office Suite",
  ],
  benefits = [
    "Competitive Salary",
    "Health Insurance",
    "Flexible Working Hours",
    "Career Growth Opportunities",
  ],
}: JobDetailsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Job Description */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Job Description
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left">
              {description}
            </p>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Key Responsibilities
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 sm:space-y-3">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-600 text-left text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Requirements
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 sm:space-y-3">
              {requirements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-600 text-left text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Benefits
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 sm:space-y-3">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-600 text-left text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetailsSection;

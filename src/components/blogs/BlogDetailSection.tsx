import seaFreightImg from "../../assets/home/air-pic.jpg";

export interface BlogPostProps {
  category?: string;
  title?: string;
  date?: string;
  imageUrl?: string;
}
function BlogDetailSection({
  category = "Logistics",
  title = "The Future of Global Shipping in 2024",
  date = "March 15, 2024",
  imageUrl = seaFreightImg,
}: BlogPostProps) {
  return (
    <section className="py-12 md:py-16 lg:py-36 bg-[#e7eef1] -mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        {/* Category */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-8 lg:mb-10">
          {title}
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
            {date}
          </span>
        </div>

        {/* Featured Image */}
        <div className="mb-6 md:mb-8">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            The logistics industry is undergoing a remarkable transformation in
            2024, driven by technological advancements, changing consumer
            expectations, and global economic shifts. As we navigate through
            this dynamic landscape, several key trends are shaping the future of
            global shipping.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mt-8 md:mt-10 mb-3 md:mb-4">
            The Rise of Digitalization
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Digital transformation continues to revolutionize the shipping
            industry. From blockchain-based tracking systems to AI-powered route
            optimization, technology is making shipping more efficient,
            transparent, and cost-effective than ever before.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-6 md:mt-8 mb-2 md:mb-3">
            Key Technologies Driving Change
          </h3>
          <ul className="space-y-2 md:space-y-3 text-base sm:text-lg md:text-xl text-gray-600 list-disc pl-5 md:pl-6">
            <li>
              <strong className="text-gray-700">
                Artificial Intelligence:
              </strong>{" "}
              Predictive analytics for demand forecasting and route optimization
            </li>
            <li>
              <strong className="text-gray-700">IoT Sensors:</strong> Real-time
              tracking and monitoring of cargo conditions
            </li>
            <li>
              <strong className="text-gray-700">Blockchain:</strong> Enhanced
              security and transparency in supply chain documentation
            </li>
            <li>
              <strong className="text-gray-700">Automation:</strong> Automated
              warehouses and port operations
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mt-8 md:mt-10 mb-3 md:mb-4">
            Sustainability and Green Shipping
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Environmental concerns are at the forefront of industry discussions.
            Shipping companies are investing heavily in sustainable practices,
            including alternative fuels, energy-efficient vessels, and carbon
            offset programs.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-6 md:mt-8 mb-2 md:mb-3">
            Green Initiatives in 2024
          </h3>
          <ul className="space-y-2 md:space-y-3 text-base sm:text-lg md:text-xl text-gray-600 list-disc pl-5 md:pl-6">
            <li>Adoption of LNG and alternative fuels</li>
            <li>Investment in energy-efficient fleet modernization</li>
            <li>Implementation of carbon tracking and reduction strategies</li>
            <li>Development of eco-friendly packaging solutions</li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mt-8 md:mt-10 mb-3 md:mb-4">
            Resilience in Supply Chains
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Recent global disruptions have highlighted the importance of
            resilient supply chains. Companies are diversifying their supplier
            base, increasing inventory buffers, and investing in risk management
            strategies.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-6 md:mt-8 mb-2 md:mb-3">
            Strategies for Building Resilience
          </h3>
          <ul className="space-y-2 md:space-y-3 text-base sm:text-lg md:text-xl text-gray-600 list-disc pl-5 md:pl-6">
            <li>Supplier diversification and multi-sourcing</li>
            <li>Regionalization of supply chains</li>
            <li>Investment in digital supply chain visibility</li>
            <li>Development of contingency plans</li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mt-8 md:mt-10 mb-3 md:mb-4">
            Conclusion
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            The future of global shipping is bright, with innovation and
            sustainability at its core. As the industry continues to evolve,
            businesses that embrace these changes will be better positioned to
            thrive in the competitive landscape of 2024 and beyond.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Stay tuned for more insights and updates on the logistics industry.
            Subscribe to our newsletter to receive the latest news and trends
            directly in your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailSection;

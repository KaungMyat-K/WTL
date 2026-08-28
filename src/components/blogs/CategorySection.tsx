import { useState } from "react";

export type Category =
  | "All"
  | "Logistics"
  | "Sea Freight"
  | "Air Freight"
  | "Road Freight"
  | "Rail Freight"
  | "Warehousing"
  | "Supply Chain"
  | "Technology"
  | "Sustainability"
  | "Industry News"
  | "Tips & Guides";

const CATEGORIES: Category[] = [
  "All",
  "Logistics",
  "Sea Freight",
  "Air Freight",
  "Road Freight",
  "Rail Freight",
  "Warehousing",
  "Supply Chain",
  "Technology",
  "Sustainability",
  "Industry News",
  "Tips & Guides",
];

interface CategoryFilterProps {
  onSelectCategory?: (category: Category) => void;
  defaultCategory?: Category;
}

function CategorySection({
  onSelectCategory,
  defaultCategory = "All",
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] =
    useState<Category>(defaultCategory);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };
  return (
    <section className="bg-[#e7eef1] py-4 sm:py-5 md:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-secondary text-white shadow-md shadow-[#fcb074]"
                    : "bg-gray-100 text-gray-700 hover:bg-secondary hover:text-white hover:scale-105"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;

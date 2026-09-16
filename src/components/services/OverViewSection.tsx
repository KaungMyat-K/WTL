export interface OverViewProps {
  title?: string;
  content?: string;
}

function OverViewSection({ title, content }: OverViewProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {title}
        </h2>

        <p className="text-gray-600 max-w-3xl text-sm sm:text-base md:text-lg">
          {content}
        </p>
      </div>
    </section>
  );
}

export default OverViewSection;

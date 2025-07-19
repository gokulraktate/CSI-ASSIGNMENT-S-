import { topCategories } from "../constants";

const TopCategories = () => {
  return (
    <section className="w-full bg-gray-50 py-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 px-4 max-w-screen-xl mx-auto">
        Top Categories
      </h2>

      {/* Scrollable Strip */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="min-w-full flex justify-center">
          <div className="flex gap-4 px-4">
            {topCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center justify-center flex-shrink-0 w-24 h-24 
                           bg-blue-50 rounded-lg shadow-sm
                           hover:shadow-blue-400/40 hover:shadow-lg hover:scale-110
                           transition-all duration-300 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10 object-contain mb-1"
                  loading="lazy"
                />
                <p className="text-xs font-semibold text-gray-800 text-center">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

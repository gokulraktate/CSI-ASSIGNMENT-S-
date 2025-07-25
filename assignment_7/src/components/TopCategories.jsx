import { topCategories } from "../constants";

const TopCategories = () => {
  return (
    <section className="w-full py-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-50 px-4 max-w-screen-xl mx-auto">
        Top Categories
      </h2>

      {/* Scrollable Strip */}
      <div className="w-full overflow-x-auto no-scrollbar px-4">
        <div className="max-w-screen-xl mx-auto flex gap-4 justify-start sm:justify-center whitespace-nowrap">
          {topCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center flex-shrink-0 w-24 h-24
                         bg-blue-50 rounded-2xl shadow-sm
                         hover:shadow-blue-400/40 hover:shadow-xl hover:scale-110
                         transition-transform duration-500 ease-in-out cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-10 h-10 object-contain mb-1 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <p className="text-xs font-semibold text-gray-800 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

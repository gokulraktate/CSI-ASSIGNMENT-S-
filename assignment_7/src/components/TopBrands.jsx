import { topBrands } from "../constants";

const TopBrands = () => {
  return (
    <section className="w-full py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-50 px-4 max-w-screen-xl mx-auto">
        Top Brands
      </h2>

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="min-w-full flex justify-center">
          <div className="flex gap-6 px-4">
            {topBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;

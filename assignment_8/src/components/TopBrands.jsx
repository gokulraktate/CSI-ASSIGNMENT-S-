import { topBrands } from "../constants";

const TopBrands = () => {
  return (
    <section className="w-full py-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 px-4 max-w-screen-xl mx-auto">
        Top Brands
      </h2>

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="min-w-full flex justify-center">
          <div className="flex gap-6 px-4">
            {topBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-16 h-16 object-contain transition duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-110"
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

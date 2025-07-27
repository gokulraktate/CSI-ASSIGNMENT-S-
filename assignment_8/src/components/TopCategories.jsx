import { topCategories } from "../constants";

const TopCategories = () => {
  return (
    <section className="w-full py-10 bg-white relative overflow-hidden">
      {/* Background Glowing Gradient */}
      <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-[120%] h-[320px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 blur-3xl opacity-30 pointer-events-none z-0"></div>

      {/* Fading Overlay at Top to Smooth Partition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Top Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {topCategories.map((category) => (
            <div
              key={category.id}
              className="relative w-full aspect-square bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center items-center p-4"
            >
              {/* Glowing Blur Behind Icon */}
              <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 blur-xl opacity-10"></div>

              {/* Icon and Text */}
              <div className="relative z-10 flex flex-col justify-center items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-gray-800 text-center">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

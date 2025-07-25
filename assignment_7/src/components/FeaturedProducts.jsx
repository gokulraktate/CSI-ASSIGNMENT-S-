const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "./src/assets/Images/ihone15pro.png",
    price: "₹1,29,900",
    rating: 4.8,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    image: "./src/assets/Images/mackbookairm2.png",
    price: "₹1,14,900",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    image: "./src/assets/Images/galaxy-s24.webp",
    price: "₹89,999",
    rating: 4.5,
  },
  {
    id: 4,
    name: "OnePlus Buds Pro 2",
    image: "./src/assets/Images/oneplus-buds.png",
    price: "₹9,999",
    rating: 4.3,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          🔥 Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {product.price}
              </p>
              <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
              <button className="mt-3 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

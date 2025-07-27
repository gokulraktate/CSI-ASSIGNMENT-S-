// 🟢 Correctly import all images
import iphone15pro from "../assets/Images/ihone15pro.png";
import mackbook from "../assets/Images/mackbookairm2.png";
import galaxyS24 from "../assets/Images/galaxy-s24.webp";
import oneplusBuds from "../assets/Images/oneplus-buds.png";

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: iphone15pro,
    price: "₹1,29,900",
    rating: 4.8,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    image: mackbook,
    price: "₹1,14,900",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    image: galaxyS24,
    price: "₹89,999",
    rating: 4.5,
  },
  {
    id: 4,
    name: "OnePlus Buds Pro 2",
    image: oneplusBuds,
    price: "₹9,999",
    rating: 4.3,
  },
];

const FeaturedProducts = () => {
  return (
    <section className=" bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.price}</p>
              <p className="text-yellow-500 text-sm mt-1">⭐ {product.rating}</p>
              <button className="mt-4 w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
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

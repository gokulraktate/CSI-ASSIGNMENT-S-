const DealsBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 text-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Mega Deals of the Week!
          </h2>
          <p className="text-lg">
            Save up to <span className="font-semibold">50%</span> on top brands.
            Hurry, limited time only!
          </p>
        </div>

        {/* Right CTA Button */}
        <a
          href="/products"
          className="mt-4 md:mt-0 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default DealsBanner;

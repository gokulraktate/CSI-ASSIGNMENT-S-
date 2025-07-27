// src/components/Newsletter.jsx
const Newsletter = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Join Our Newsletter
        </h2>
        <p className="mb-6 text-gray-600">
          Get the latest updates, exclusive offers, and tech insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

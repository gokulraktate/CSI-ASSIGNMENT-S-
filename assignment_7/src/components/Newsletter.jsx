// src/components/Newsletter.jsx
const Newsletter = () => {
  return (
    <section className="w-full py-12 bg-indigo-600 text-white">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6 text-gray-200">
          Stay updated with the latest tech deals and new arrivals.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1 text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-black text-lg mb-3">TechStore</h3>
          <p className="text-sm">Your go-to tech shopping hub.</p>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/products" className="hover:text-black hover:underline">Products</a></li>
            <li><a href="/about" className="hover:text-black hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:text-black hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Customer Service</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/faq" className="hover:text-black hover:underline">FAQ</a></li>
            <li><a href="/returns" className="hover:text-black hover:underline">Returns</a></li>
            <li><a href="/support" className="hover:text-black hover:underline">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2 text-xl text-gray-600">
            <a href="#" className="hover:text-black">🌐</a>
            <a href="#" className="hover:text-black">📘</a>
            <a href="#" className="hover:text-black">🐦</a>
            <a href="#" className="hover:text-black">📸</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// src/components/BenefitsSection.jsx
const benefits = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "On all orders above ₹999",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Secure Payment",
    desc: "100% secure payment",
    icon: "🔒",
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "We're here to help",
    icon: "📞",
  },
  {
    id: 4,
    title: "Genuine Products",
    desc: "Only original brands",
    icon: "✅",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

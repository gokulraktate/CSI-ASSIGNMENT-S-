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
    <section className="w-full py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="text-4xl mb-3 bg-white w-12 h-12 mx-auto flex items-center justify-center rounded-full shadow">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

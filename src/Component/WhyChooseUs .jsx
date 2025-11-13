const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Listings",
      description: "All properties are manually verified to ensure authenticity and accuracy.",
      icon: "🏠",
    },
    {
      title: "Smart Search Filters",
      description: "Easily find properties by location, price, category, and more.",
      icon: "🔍",
    },
    {
      title: "Secure User System",
      description: "Your data is protected with secure authentication and privacy protocols.",
      icon: "🔐",
    },
    {
      title: "Responsive Support",
      description: "Our support team is available 24/7 to assist you with any queries.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-blue-600">HomeNest</span>?
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We make your property journey easier, safer, and smarter. Here's what sets us apart:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

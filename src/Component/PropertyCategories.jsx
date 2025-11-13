const PropertyCategories = () => {
  const categories = [
    {
      name: "Rent",
      description: "Affordable rental homes and apartments in prime locations.",
      icon: "🏘️",
    },
    {
      name: "Sale",
      description: "Buy your dream property with verified listings and secure deals.",
      icon: "🏡",
    },
    {
      name: "Commercial",
      description: "Find office spaces, shops, and commercial buildings for your business.",
      icon: "🏢",
    },
    {
      name: "Land",
      description: "Explore plots and lands for investment or development.",
      icon: "🌄",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Explore Property Categories
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you're buying, renting, or investing — we have something for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;

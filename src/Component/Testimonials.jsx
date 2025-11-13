const Testimonials = () => {
  const reviews = [
    {
      name: "Farhana Rahman",
      role: "Property Owner",
      comment: "HomeNest helped me rent out my apartment within days. The platform is easy and reliable!",
      image: "https://i.ibb.co/0jqHpnp/default-avatar.png",
    },
    {
      name: "Tanvir Ahmed",
      role: "Buyer",
      comment: "I found my dream home through HomeNest. The filters and search options are super helpful.",
      image: "https://i.ibb.co/0jqHpnp/default-avatar.png",
    },
    {
      name: "Nusrat Jahan",
      role: "Renter",
      comment: "The listings are verified and the support team is very responsive. Highly recommended!",
      image: "https://i.ibb.co/0jqHpnp/default-avatar.png",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Hear from real users who found success with HomeNest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 shadow-md rounded-lg p-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{review.role}</p>
              <p className="text-gray-700 text-sm italic">“{review.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

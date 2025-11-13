import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const AddProperties = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    propertyName: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
    postedDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
    };

    try {
      const res = await axios.post("http://localhost:3000/estates", propertyData);

      if (res.data.insertedId) {
        toast.success("Property added successfully!");
        setFormData({
          propertyName: "",
          description: "",
          category: "",
          price: "",
          location: "",
          image: "",
          postedDate: "",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add property.");
    }
  };

  return (
    <section className="py-6 px-3 md:px-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">📝 Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="propertyName"
            placeholder="🏠 Property Name"
            value={formData.propertyName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="🖊️ Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">📂 Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder="💰 Price (৳)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            placeholder="📍 Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="image"
            placeholder="🖼️ Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="postedDate"
            value={formData.postedDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Property
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProperties;


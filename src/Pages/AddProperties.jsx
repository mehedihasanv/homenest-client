// AddProperty.jsx
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

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

    // Optional: Add user info if using auth
    const propertyData = {
      ...formData,
     userEmail: user?.email,
userName: user?.displayName || "Anonymous",
         // Replace with actual logged-in user
    };

    try {
      const res = await axios.post("http://localhost:3000/estates", propertyData);

      if (res.data.insertedId) {
        alert("Property added successfully!");
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
      alert("Failed to add property.");
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="propertyName"
            placeholder="Property Name"
            value={formData.propertyName}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price (৳)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="date"
            name="postedDate"
            value={formData.postedDate}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Property
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProperties;

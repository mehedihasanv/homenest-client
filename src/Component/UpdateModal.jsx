import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateModal = ({ property, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    ...property,
    _id: property._id,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://homenest-server-eight.vercel.app/estates/${property._id}`,
        formData
      );
      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        Swal.fire("Updated!", "Your property has been updated.", "success");
        onUpdated(formData);
        onClose();
        navigate(`/estates-details/${property._id}`);
      } else {
        Swal.fire("No Changes", "No fields were modified.", "info");
      }
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error", "Failed to update property.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          ✏️ Update Property
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            required
            placeholder="🏠 Property Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="🖊️ Description"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
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
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="💰 Price (৳)"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="📍 Location"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="🖼️ Image URL"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full border border-gray-200 px-4 py-2 rounded-lg bg-gray-100 text-gray-600"
          />
          <input
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border border-gray-200 px-4 py-2 rounded-lg bg-gray-100 text-gray-600"
          />
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;

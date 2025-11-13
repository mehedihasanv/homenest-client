import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateModal = ({ property, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({ ...property });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/estates/${property._id}`, formData);
      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        Swal.fire("Updated!", "Your property has been updated.", "success");
        onUpdated(formData);
        onClose();
      } else {
        Swal.fire("No Changes", "No fields were modified.", "info");
      }
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error", "Failed to update property.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Update Property</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
          <input name="propertyName" value={formData.propertyName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <select name="category" value={formData.category} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="location" value={formData.location} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="image" value={formData.image} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="userName" value={formData.userName} readOnly className="w-full border px-3 py-2 rounded bg-gray-100" />
          <input name="userEmail" value={formData.userEmail} readOnly className="w-full border px-3 py-2 rounded bg-gray-100" />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const EstatesDetails = () => {
  const estates = useLoaderData();
  const { user } = useContext(AuthContext);

  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  // Load existing reviews
  useEffect(() => {
    fetch(
      `https://homenest-server-eight.vercel.app/reviews?propertyId=${estates._id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [estates._id]);

  // Submit new review
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      propertyId: estates._id,
      propertyName: estates.propertyName,
      location: estates.location,
      stars,
      comment,
      userEmail: user.email,
      userName: user.displayName,
      date: new Date().toISOString(),
    };

    fetch("https://homenest-server-eight.vercel.app/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then(() => {
        setReviews((prev) => [...prev, reviewData]);
        setStars(0);
        setComment("");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{estates.propertyName}</h1>
      <img
        src={estates.image}
        alt=""
        className="w-full h-64 object-cover rounded"
      />

      <p className="text-sm text-gray-500 mt-2">Category: {estates.category}</p>
      <p className="text-sm text-gray-500">Location: {estates.location}</p>
      <p className="text-sm text-gray-500">Posted by: {estates.userName}</p>
      <p className="text-sm text-gray-500">
        Posted on: {new Date(estates.postedDate).toLocaleDateString()}
      </p>

      <p className="text-lg font-semibold text-blue-600 mt-2">
        ${estates.price}
      </p>
      <p className="mt-4">{estates.description}</p>

      {/* ⭐ Rating & Review Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-bold mb-4">Ratings & Reviews</h3>

        {user && (
          <form onSubmit={handleSubmit} className="space-y-3 mb-6">
            <label className="block font-semibold">Your Rating:</label>
            <select
              value={stars}
              onChange={(e) => setStars(Number(e.target.value))}
              required
              className="border px-3 py-2 rounded"
            >
              <option value="">Select stars</option>
              {[1, 2, 3, 4, 5].map((s) => (
                <option key={s} value={s}>
                  {s} ⭐
                </option>
              ))}
            </select>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
              required
              className="w-full border px-3 py-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EstatesDetails;

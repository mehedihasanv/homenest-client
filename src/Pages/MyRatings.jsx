import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const MyRatings = () => {
  const { user, loading } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://homenest-server-eight.vercel.app/my-reviews?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRatings(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch ratings:", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (loading || isLoading) {
    return (
      <p className="text-center mt-10 text-gray-600 animate-pulse">
        ⏳ Loading your ratings...
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        🌟 My Ratings & Reviews
      </h2>
      {ratings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven't rated any properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ratings.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={r.propertyImage}
                alt={r.propertyName}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {r.propertyName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">📍 {r.location}</p>
                <p className="text-sm text-gray-500">👤 {r.userName}</p>
                <p className="text-sm text-gray-500">
                  📅 {new Date(r.date).toLocaleDateString()}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-bold text-yellow-600">Rating:</span>
                  <span className="text-lg">{r.stars} ⭐</span>
                </div>
                <p className="mt-3 text-gray-700 italic">“{r.comment}”</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyRatings;

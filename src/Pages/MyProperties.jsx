

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import UpdateModal from "../Component/UpdateModal";

// const MyProperties = () => {
//   const { user, loading } = useContext(AuthContext);
//   const [properties, setProperties] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

// // inside MyProperties component
// const [selectedProperty, setSelectedProperty] = useState(null);

// const handleUpdateClick = (property) => {
//   setSelectedProperty(property);
// };

// const handleModalClose = () => {
//   setSelectedProperty(null);
// };

// const handlePropertyUpdated = (updated) => {
//   setProperties((prev) =>
//     prev.map((item) => (item._id === updated._id ? updated : item))
//   );
// };


//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:3000/estates?email=${user.email}`)

//         .then((res) => res.json())
//         .then((data) => {
//           setProperties(data);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           console.error("Failed to fetch properties:", err);
//           setIsLoading(false);
//         });
//     }
//   }, [user]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//        fetch(`http://localhost:3000/estates/${id}`, {
//   method: "DELETE",
// })

//           .then((res) => res.json())
//           .then(() => {
//             Swal.fire("Deleted!", "Your property has been deleted.", "success");
//             setProperties(properties.filter((item) => item._id !== id));
//           });
//       }
//     });
//   };

//   if (loading || isLoading) {
//     return <p className="text-center mt-10">Loading your properties...</p>;
//   }

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">My Properties</h2>
//       {properties.length === 0 ? (
//         <p className="text-center text-gray-500">No properties found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {properties.map((property) => (
//             <div key={property._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//               <img src={property.image} alt={property.propertyName} className="h-48 w-full object-cover rounded" />
//               <h3 className="text-lg font-semibold mt-2">{property.propertyName}</h3>
//               <p className="text-sm text-gray-600">Category: {property.category}</p>
//               <p className="text-sm text-gray-600">Location: {property.location}</p>
//               <p className="text-sm text-gray-600">Posted: {new Date(property.postedDate).toLocaleDateString()}</p>
//               <p className="text-blue-600 font-bold mt-1">${property.price}</p>

//               <div className="flex gap-2 mt-4">
//                 <button
//                   onClick={() => navigate(`/property/${property._id}`)}
//                   className="btn btn-sm bg-blue-500 text-white"
//                 >
//                   View Details
//                 </button>
//                 {/* <button
//                   onClick={() => navigate(`/update-property/${property._id}`)}
//                   className="btn btn-sm bg-yellow-500 text-white"
//                 >
//                   Update
//                 </button> */}
//                 <button
//   onClick={() => handleUpdateClick(property)}
//   className="btn btn-sm bg-yellow-500 text-white"
// >
//   Update
// </button>

//                 <button
//                   onClick={() => handleDelete(property._id)}
//                   className="btn btn-sm bg-red-500 text-white"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       )}
//       {selectedProperty && (
//   <UpdateModal
//     property={selectedProperty}
//     onClose={handleModalClose}
//     onUpdated={handlePropertyUpdated}
//   />
// )}

//     </section>
//   );
// };

// export default MyProperties;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateModal from "../Component/UpdateModal";

const MyProperties = () => {
  const { user, loading } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/estates?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch properties:", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/estates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your property has been deleted.", "success");
            setProperties(properties.filter((item) => item._id !== id));
          });
      }
    });
  };

  const handleUpdateClick = (property) => {
    setSelectedProperty(property);
  };

  const handleModalClose = () => {
    setSelectedProperty(null);
  };

  const handlePropertyUpdated = (updated) => {
    setProperties((prev) =>
      prev.map((item) => (item._id === updated._id ? updated : item))
    );
  };

  if (loading || isLoading) {
    return <p className="text-center mt-10">Loading your properties...</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">My Properties</h2>
      {properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img src={property.image} alt={property.propertyName} className="h-48 w-full object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{property.propertyName}</h3>
              <p className="text-sm text-gray-600">Category: {property.category}</p>
              <p className="text-sm text-gray-600">Location: {property.location}</p>
              <p className="text-sm text-gray-600">Posted: {new Date(property.postedDate).toLocaleDateString()}</p>
              <p className="text-blue-600 font-bold mt-1">${property.price}</p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => navigate(`/property/${property._id}`)}
                  className="btn btn-sm bg-blue-500 text-white"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleUpdateClick(property)}
                  className="btn btn-sm bg-yellow-500 text-white"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="btn btn-sm bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProperty && (
        <UpdateModal
          property={selectedProperty}
          onClose={handleModalClose}
          onUpdated={handlePropertyUpdated}
        />
      )}
    </section>
  );
};

export default MyProperties;

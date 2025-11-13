
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Estate from '../Component/Estate';

const AllProperties = () => {
  const data = useLoaderData();
  const estates = data;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEstates = estates.filter((estate) =>
    estate.propertyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-16 px-4">
      <h1 className="font-bold text-center text-3xl sm:text-4xl mb-6 mt-5">All Properties</h1>


      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by property name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    
      {filteredEstates.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEstates.map((estate) => (
            <Estate key={estate._id} estate={estate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProperties;

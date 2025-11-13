import { Link } from 'react-router';

const Estate = ({ estate }) => {
  const {
    propertyName,
    category,
    description,
    location,
    price,
    image,
    _id,
    userName,
  } = estate;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={image}
        alt={propertyName}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{propertyName}</h3>
          <span className="text-sm text-gray-500">📍 {location}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <p className="font-medium">💰 Price: {price}</p>
          <p className="font-medium">🏷️ {category}</p>
        </div>
        <p className="text-sm text-gray-500">👤 Posted by: {userName}</p>
        <p className="text-gray-700 italic">“{description}”</p>
        <Link to={`/estates-details/${_id}`}>
          <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            🔍 See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Estate;

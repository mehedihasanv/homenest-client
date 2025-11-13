// import { Link } from 'react-router';

// const Estate = ({estate}) => {
//     const{propertyName,category,description,location,price,image,_id,userName}=estate
//     return (
//         <div className="bg-white p-5 mx-auto rounded-sm shadow-md hover:scale-105 transition ease-in-out space-y-2">
//                 <img className="rounded-lg aspect-4/3" src={image} alt={propertyName} />
//                <div className="flex justify-between">
//                  <p className="font-medium"> {propertyName}</p>
//                 <p className="text-[10px]">{location}</p>
//                </div>
//                 <div className="flex justify-between">
//                     <p className="font-medium">Price:{price}</p>
//                 <p className="font-medium">{category}</p>
//                 </div>
//                   <p className="text-sm text-gray-500">Posted by: {userName}</p>
//                 <p className='font-medium'>{description}</p>
//                  <Link to={`/estates-details/${_id}`}>
//                 <button className="btn w-full bg-sky-50 hover:bg-fuchsia-300 hover:text-white">View Details </button>
//                 </Link>
//             </div>
//     );
// };

// export default Estate;

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
            🔍 View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Estate;

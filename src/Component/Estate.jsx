import React from 'react';
import { Link } from 'react-router';

const Estate = ({estate}) => {
    const{propertyName,category,description,location,price,image,_id,userName}=estate
    return (
        <div className="bg-white p-5 mx-auto rounded-sm shadow-md hover:scale-105 transition ease-in-out space-y-2">
                <img className="rounded-lg aspect-4/3" src={image} alt={propertyName} />
               <div className="flex justify-between">
                 <p className="font-medium"> {propertyName}</p>
                <p className="text-[10px]">{location}</p>
               </div>
                <div className="flex justify-between">
                    <p className="font-medium">Price:{price}</p>
                <p className="font-medium">{category}</p>
                </div>
                  <p className="text-sm text-gray-500">Posted by: {userName}</p>
                <p className='font-medium'>{description}</p>
                 <Link to={`/estates-details/${_id}`}>
                <button className="btn w-full bg-sky-50 hover:bg-fuchsia-300 hover:text-white">View Details </button>
                </Link>
            </div>
    );
};

export default Estate;
import React from 'react';
import { useLoaderData } from 'react-router';
import Estate from '../Component/Estate';

const AllProperties = () => {
    const data = useLoaderData()
    const estates = data
    console.log(estates);
    
    return (
        <div className="mb-16">
                 <h1 className="font-bold text-center text-3xl sm:text-4xl">All Properties</h1>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                   {estates.map((estate) => (
                     <Estate key={estate._id} estate={estate} />
                   ))}
                 </div>
               </div>
    );
};

export default AllProperties;
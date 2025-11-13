import React from 'react';

const Error = () => {
    return (
        <>
        <title>404 not found</title>
        <div className='text-center bg-orange-50 min-h-screen py-40'>
            <img className='mx-auto' src="/public/assets/icons8-toy-64.png" alt="" />
            <h1 className='text-5xl font-bold'>404 page not found!</h1>
            <p className='text-[#627382] mt-5'>The page you are looking for isn't available</p>
        </div>
        </>
    );
};

export default Error;
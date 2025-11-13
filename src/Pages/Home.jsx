import React from 'react';

import Estate from '../Component/Estate';
import WhyChooseUs from '../Component/WhyChooseUs ';
import Testimonials from '../Component/Testimonials';
import PropertyCategories from '../Component/PropertyCategories';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data= useLoaderData();
    const estates = data
    console.log(estates);
    
    return (
        <div>
             <div className="carousel w-full my-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img
             src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
             
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
            />
            <div className="absolute left-2 right-2 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
            />
            <div className="absolute left-2 right-2 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
            />
            <div className="absolute left-2 right-2 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

         <div className="mb-16">
          <h1 className="font-bold text-center text-3xl sm:text-4xl">Featured Real Estate</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {estates.map((estate) => (
              <Estate key={estate._id} estate={estate} />
            ))}
          </div>
        </div>

         <div>
            <PropertyCategories></PropertyCategories>
            

        </div>
        <WhyChooseUs></WhyChooseUs>

        <div>
            
            <Testimonials></Testimonials>

        </div>
        
            
        </div>
       
    );
};

export default Home;
'use client';

import React from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  // Features Data
  const testimonialData = [
    {
      name: "Anubhav Jain",
      description: "simple interface hai application hai koi bhe aasani se use kr skta hai",
    },
    {
      name: "Shruti Sharma",
      description: "transaction ke history koi bhe kbhi bhe dekh skta hai",
    },
    {
      name: "Anushka Agarwal",
      description: "finance se judi hue sare batien yha milti hai",
    }
  ];

  return (
    <section id='testimonials' className="min-h-screen bg-gray-900 px-8 py-15 flex flex-col">
      {/* Heading */}
      <h1 className='text-center text-amber-600 font-bold text-5xl sm:text-5xl md:text-5xl lg:text-6xl'>
        Testimonial
      </h1>
      <span className="w-65 sm:w-70 md:w-80 lg:w-90 h-1 bg-white mx-auto mt-2 block"></span>

      {/* Testimonials */}
      <div className='flex-1 flex items-center justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto py-10">

          {
            testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center border-1 hover:border-pink-400 flex flex-col items-center p-8 sm:p-8 md:p-10 lg:p-15 xl:p-18 2xl:-22'>
                {/* User Icon */}
                <User className="h-14 w-14 text-amber-400 mb-4" />

                {/* Description */}
                <p className='text-white text-lg italic mb-4'>
                  &quot;{testimonial.description}&quot;
                </p>

                {/* Name */}
                <h2 className='text-amber-400 font-bold text-2xl'>
                  - {testimonial.name}
                </h2>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <main id='home' className="min-h-screen bg-black flex items-center justify-center px-8 py-15">
      <header className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl py-10 text-center lg:text-left">

        {/* Left Side: Text */}
        <div className="flex flex-col space-y-6 text-left md:w-1/2 items-center lg:items-start">
          <h1 className="text-5xl font-bold text-amber-400 leading-tight md:justify-center">
            Simplifying Finance, <br /> Empowering You
          </h1>
          <p className="text-2xl text-pink-500 font-bold">
            A powerful tool to make your finance journey easier.
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="px-6 py-3 border border-pink-500 text-pink-500 rounded-xl hover:bg-pink-500 hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-10 md:w-1/2 flex ustify-center lg:justify-end">
          <Image
            src="/assets/homepageheroimg.jpg"
            width={250}
            height={250}
            alt="Finzei Dashboard"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </header>
    </main>
  );
};

export default Hero;

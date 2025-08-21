'use client';

import Image from 'next/image';
import React from 'react';

const About = () => {
  const aboutBulletPoints = [
    {
      bulletpoint: "We provide a simple and easy-to-use interface",
    },
    {
      bulletpoint: "We provide the best customer service",
    },
    {
      bulletpoint: "We have a large database of customers",
    },
  ];

  return (
    <main id='about' className="min-h-screen bg-black flex flex-col px-8 py-15">

      {/* Section Heading */}
      <h1 className="text-center text-pink-600 font-bold text-5xl sm:text-6xl">
        About
      </h1>
      <span className="w-60 h-1 bg-white mx-auto mt-3 block rounded"></span>

      {/* About Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto py-10 text-center lg:text-left gap-10">

        {/* Left Side: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/aboutfinance.jpg"
            width={350}
            height={350}
            alt="Finzei Dashboard"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: Text & Bullet Points */}
        <div className="lg:w-1/2 flex flex-col space-y-6 items-center lg:items-start">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-400 leading-tight">
            What makes Finzei different?
          </h2>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-3 text-white text-lg sm:text-xl">
            {aboutBulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3"></span>
                {point.bulletpoint}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </main>
  );
};

export default About;

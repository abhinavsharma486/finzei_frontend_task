'use client';

import React from 'react';
import { Wallet, PieChart, Shield } from 'lucide-react';


const Features = () => {

  // Features Data
  const featuresData = [
    {
      icon: Wallet,
      title: "Easy Expense Tracking",
    },
    {
      icon: PieChart,
      title: "Transaction History",
    },
    {
      icon: Shield,
      title: "Secure & Private",
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 px-8 py-4 flex flex-col">
      {/* Heading */}
      <h1 className='text-center text-amber-600 font-bold text-6xl'>
        Features
      </h1>
      <span className="w-60 h-1 bg-white mx-auto mt-2 block"></span>

      {/* Features */}
      <div className='flex-1 flex items-center justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">

          {
            featuresData.map((feature, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-2xl p-15 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg hover:border-1 hover:border-pink-600'
              >
                <feature.icon className='h-15 w-15 text-amber-400 mb-4' />
                <h2 className='text-2xl font-bold text-white mb-2'>
                  {feature.title}
                </h2>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Features;
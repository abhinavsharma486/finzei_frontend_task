'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-6 px-8'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left : Brand */}
        <div className="text-lg font-bold text-amber-500">
          Finzei
        </div>

        {/* Center : Links */}
        <ul className='flex gap-6 text-sm'>
          <li> <Link href="#home" className='hover:text-pink-400 transition-colors'>Home</Link></li>
          <li> <Link href="#features" className='hover:text-pink-400 transition-colors'>Features</Link></li>
          <li> <Link href="#about" className='hover:text-pink-400 transition-colors'>About</Link></li>
          <li> <Link href="#testimonials" className='hover:text-pink-400 transition-colors'>Testimonials</Link></li>
        </ul>

        {/* Right : Copyright */}
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Finzei. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
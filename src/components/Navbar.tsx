'use client';

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  // Links 
  const links = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonial" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-sm z-50'>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left : Logo */}
        <Link href="#home" className='text-2xl font-bold text-amber-400 hover:text-pink-400'>
          Finzei
        </Link>

        {/* Desktop Right : Links */}
        <ul className='hidden md:flex space-x-6 text-white font-medium'>
          {
            links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='hover:text-pink-400 transition'>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-white'
        >
          {
            open ? <X size={28} /> : <Menu size={28} />
          }
        </button>

        {/* Mobile Links */}
        {
          open && (
            <div className='md:hidden bg-white/80 backdrop-blur-md shadow-md'>
              <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-pink-400 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
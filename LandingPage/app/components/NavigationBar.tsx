"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NavLink = ({ children, href = '#', onClick }: { children: React.ReactNode, href?: string, onClick?: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="px-3 py-2 text-[16px] text-white transition-all duration-200 hover:opacity-80 font-normal"
  >
    {children}
  </Link>
);

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0F0F0F66]/50 bg-opacity-0 border-b border-white/[0.08]">
      <div className="relative max-w-[1920px] mx-auto flex justify-between items-center px-8 py-4 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4">
        {/* Logo */}
        <Image
          src="/gradius_logo.svg"
          alt="Gradius Logo"
          width={140}
          height={42}
          className="object-contain w-auto h-[32px] lg:h-[42px]"
          priority
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center text-white">
        <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How it works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>

        {/* Mobile Menu Button and Buttons Container */}
        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <button className="px-4 py-1.5 rounded-[8px] border border-[#A436F1] text-white text-[15px] hover:bg-[#A436F1] transition-all duration-300">
              Login
            </button>
            <button className="px-4 py-1.5 rounded-[8px] border border-[#A436F1] bg-[#A436F1] text-white text-[15px] hover:bg-[#8929d1] transition-all duration-300">
              Sign up for free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 z-[101]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed left-0 right-0 top-[0px] h-[calc(100vh-72px)] bg-[#14021C] lg:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col p-6 gap-6">
            <div className="flex flex-col gap-1">
              <NavLink onClick={toggleMenu}>Home</NavLink>
              <NavLink onClick={toggleMenu}>Features</NavLink>
              <NavLink onClick={toggleMenu}>How it works</NavLink>
              <NavLink onClick={toggleMenu}>Pricing</NavLink>
              <NavLink onClick={toggleMenu}>FAQ</NavLink>
            </div>
            
            <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
              <button className="w-full px-4 py-3 rounded-[8px] border border-[#A436F1] text-white text-[15px] hover:bg-[#A436F1] transition-all duration-300">
                Login
              </button>
              <button className="w-full px-4 py-3 rounded-[8px] bg-[#A436F1] text-white text-[15px] hover:bg-[#8929d1] transition-all duration-300">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
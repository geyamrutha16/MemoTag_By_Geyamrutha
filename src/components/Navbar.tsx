
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-bold text-xl md:text-2xl gradient-text">MemoTag</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-sm font-medium text-gray-700 hover:text-memotag-purple transition-colors">The Problem</a>
            <a href="#solution" className="text-sm font-medium text-gray-700 hover:text-memotag-purple transition-colors">Our Solution</a>
            <a href="#traction" className="text-sm font-medium text-gray-700 hover:text-memotag-purple transition-colors">Traction</a>
            <Button asChild variant="default" size="sm" className="bg-memotag-purple hover:bg-memotag-purple/90">
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-memotag-purple"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#problem" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-memotag-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Problem
            </a>
            <a 
              href="#solution" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-memotag-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Solution
            </a>
            <a 
              href="#traction" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-memotag-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Traction
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 rounded-md text-base font-medium text-center text-white bg-memotag-purple hover:bg-memotag-purple/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

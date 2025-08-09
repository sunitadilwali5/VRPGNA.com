import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-maroon">
                VRPGNA.com
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                Virtual Rishi Parampara Gurukulam of North America
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-maroon hover:text-saffron transition-colors font-medium">Courses</a>
            <a href="#how-it-works" className="text-maroon hover:text-saffron transition-colors font-medium">How It Works</a>
            <a href="#testimonials" className="text-maroon hover:text-saffron transition-colors font-medium">Testimonials</a>
            <a href="#about" className="text-maroon hover:text-saffron transition-colors font-medium">About Us</a>
            <a href="#contact" className="text-maroon hover:text-saffron transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-maroon hover:text-saffron transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-saffron hover:bg-saffron/90 text-white px-6 py-2 rounded-full transition-colors font-medium">
              Start Learning
            </button>
          </div>

          <button 
            className="md:hidden text-maroon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream">
            <nav className="flex flex-col space-y-4">
              <a href="#courses" className="text-maroon hover:text-saffron transition-colors">Courses</a>
              <a href="#how-it-works" className="text-maroon hover:text-saffron transition-colors">How It Works</a>
              <a href="#testimonials" className="text-maroon hover:text-saffron transition-colors">Testimonials</a>
              <a href="#about" className="text-maroon hover:text-saffron transition-colors">About Us</a>
              <a href="#contact" className="text-maroon hover:text-saffron transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-maroon hover:text-saffron transition-colors text-left">Sign In</button>
                <button className="bg-saffron hover:bg-saffron/90 text-white px-6 py-2 rounded-full transition-colors text-left">
                  Start Learning
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
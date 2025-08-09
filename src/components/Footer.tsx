import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Youtube, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-playfair font-bold">VRPGNA.com</span>
            </div>
            <p className="text-gold font-medium mb-6 text-lg">
              Bringing the Gurukul to Your Home
            </p>
            <p className="text-white/80 leading-relaxed">
              Experience authentic Vedic education through traditional teaching methods 
              enhanced with modern technology for global accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-playfair font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-white/80 hover:text-gold transition-colors">Courses</a></li>
              <li><a href="#about" className="text-white/80 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="#whatsapp" 
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Join Our WhatsApp Community</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-playfair font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/80">info@vrpgna.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-white/80">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Live Support</p>
                  <p className="text-white/80">Available 9 AM - 9 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-playfair font-bold mb-6">Stay Connected</h3>
            
            <div className="mb-6">
              <p className="text-white/80 mb-4">
                Receive Vedic wisdom and course updates weekly
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-gold"
                />
                <button className="bg-saffron hover:bg-saffron/90 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#youtube" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#instagram" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#facebook" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 VRPGNA.com. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <div className="flex items-center space-x-4 text-sm text-white/60">
            <span>🕉️ Om Shanti Shanti Shanti 🕉️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
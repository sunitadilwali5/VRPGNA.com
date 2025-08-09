import React from 'react';
import { Play, ArrowRight, Users, Globe, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-cream to-white"></div>
      
      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full border-2 border-saffron animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full border border-maroon animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/30 animate-spin" style={{ animationDuration: '60s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-maroon leading-tight mb-6">
              Ancient Wisdom,
              <span className="block text-saffron">Anywhere You Are</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Learn Sanskrit, scriptures, yoga, and Vedic philosophy from revered Acharyas — 
              <span className="text-saffron font-semibold"> live, interactive, and online</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Start Your Learning Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Try a Free Intro Class</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-saffron" />
                <span>2,000+ Global Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-saffron" />
                <span>Live from India</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-saffron/20">
              <div className="aspect-video bg-gradient-to-br from-saffron/20 to-maroon/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-maroon font-semibold">Watch Our Live Classes</p>
                  <p className="text-gray-600 text-sm">Experience authentic Vedic learning</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">Live Sanskrit class in progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-saffron to-gold rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-maroon">Acharya Ramesh Ji</p>
                    <p className="text-xs text-gray-600">Sanskrit & Vedic Philosophy</p>
                  </div>
                  <span className="text-xs bg-saffron/10 text-saffron px-2 py-1 rounded-full">Online</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <BookOpen className="w-6 h-6 text-saffron" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <Globe className="w-6 h-6 text-maroon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
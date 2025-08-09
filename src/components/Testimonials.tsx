import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Mehta",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Even though I live in Canada, I feel as if I'm sitting in the Gurukul hall. The teachers' warmth and the daily chanting sessions have brought so much peace to my life."
    },
    {
      name: "David Thompson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Learning Sanskrit online seemed impossible until I joined this Gurukul. The structured approach and patient teaching have made complex concepts accessible to me as a complete beginner."
    },
    {
      name: "Ananya Sharma",
      location: "London, UK",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The online satsangs and festival celebrations connect me to my roots while living abroad. It's like having a spiritual family across the globe."
    },
    {
      name: "Miguel Rodriguez",
      location: "Madrid, Spain",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "As a yoga instructor, this Gurukul has deepened my understanding of the philosophical foundations. The Acharyas' wisdom transcends all cultural boundaries."
    },
    {
      name: "Sarah Johnson",
      location: "Sydney, Australia",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The flexibility to access recorded classes while participating in live sessions fits perfectly with my busy schedule. Ancient wisdom with modern convenience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-maroon text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Students Speak
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how students from around the world are transforming their lives 
            through authentic Vedic education from the comfort of their homes.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl mx-auto px-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
                <Quote className="w-12 h-12 text-gold mx-auto mb-8" />
                
                <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-playfair font-bold text-lg text-gold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex items-center space-x-2 text-white/80">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-saffron/20 to-gold/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-playfair font-bold mb-4">Join Our Global Community</h3>
            <p className="text-lg mb-6">Students from 50+ countries are already on their spiritual journey</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">2,000+</div>
                <div className="text-white/80">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">50+</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">95%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
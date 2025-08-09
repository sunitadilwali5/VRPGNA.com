import React from 'react';
import { UserPlus, Video, Cloud, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Enroll Online",
      description: "Sign up for your desired course and get your welcome kit digitally."
    },
    {
      icon: Video,
      title: "Join Live Classes",
      description: "Attend interactive sessions with Acharyas and classmates worldwide."
    },
    {
      icon: Cloud,
      title: "Access Recordings",
      description: "Revisit lessons anytime through our secure learning portal."
    },
    {
      icon: Users,
      title: "Community Connect",
      description: "Participate in online satsangs, group chanting, and cultural festivals."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon mb-6">
            Your Gurukul Journey — From Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the traditional Gurukul learning system through modern technology, 
            connecting you directly with authentic Vedic wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center group">
                <div className="bg-gradient-to-br from-saffron/10 to-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-maroon text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-playfair font-bold text-maroon mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-saffron">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-saffron to-gold"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Begin Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
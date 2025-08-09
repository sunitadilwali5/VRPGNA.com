import React from 'react';
import { Video, Globe, Clock, BookOpen, Calendar, UserCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Live, Interactive Classes",
      description: "Directly learn from experienced Acharyas in real-time sessions with Q&A."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Students from all continents share the spiritual learning journey together."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Join live sessions or watch recordings at your own pace and schedule."
    },
    {
      icon: BookOpen,
      title: "Complete Vedic Curriculum",
      description: "Sanskrit, shlokas, yoga, philosophy, rituals, and traditional practices."
    },
    {
      icon: Calendar,
      title: "Cultural Events Online",
      description: "Virtual festival celebrations, chanting sessions, and spiritual gatherings."
    },
    {
      icon: UserCheck,
      title: "Personal Mentor Support",
      description: "Individual guidance and mentorship tailored to your spiritual path."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon mb-6">
            What Makes Our Online Gurukul Special
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience authentic Vedic education with the convenience of modern technology, 
            maintaining the sacred teacher-student relationship across distances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-saffron/10 hover:border-saffron/30 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-saffron to-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-maroon mb-4 group-hover:text-saffron transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-saffron/10 to-gold/10 rounded-3xl p-12">
          <h3 className="text-2xl font-playfair font-bold text-maroon mb-4">
            Ready to Begin Your Spiritual Journey?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of students worldwide who are deepening their connection to ancient wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Explore Courses
            </button>
            <button className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
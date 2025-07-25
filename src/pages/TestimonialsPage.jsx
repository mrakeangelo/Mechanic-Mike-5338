import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser, FiCalendar } = FiIcons;

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Kailua, HI",
      service: "Oil Change & Brake Service",
      rating: 5,
      date: "2 weeks ago",
      text: "Mike is absolutely fantastic! He came to my house for an oil change and noticed my brakes were making noise. Instead of just telling me I needed expensive work, he showed me exactly what was wrong and gave me options. Saved me hundreds compared to the dealership quote. Honest, professional, and reliable - exactly what you want in a mechanic!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Chen",
      location: "Honolulu, HI",
      service: "Engine Diagnostics",
      rating: 5,
      date: "1 month ago",
      text: "My Toyota was having weird issues and the check engine light kept coming on. Mike diagnosed the problem quickly and explained everything in terms I could understand. He fixed it right the first time at a fraction of what the dealer wanted. Best mechanic on the island, hands down!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Lisa Rodriguez",
      location: "Pearl City, HI",
      service: "Mobile Vehicle Inspection",
      rating: 5,
      date: "3 weeks ago",
      text: "The mobile service was incredible! Mike came to my office during lunch and did a complete inspection of my car. He found a few minor issues and took care of them on the spot. The convenience factor alone is worth it, but the quality of work and fair pricing make Mike my go-to mechanic.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Thompson",
      location: "Aiea, HI",
      service: "Brake Service & Battery",
      rating: 5,
      date: "1 week ago",
      text: "Mike replaced my brake pads and battery same day. What impressed me most was his honesty - he could have sold me rotors too, but said mine were fine for now. That kind of integrity is rare. Fast, professional, and trustworthy. I'll definitely be back!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jennifer Lee",
      location: "Kaneohe, HI",
      service: "Pre-Purchase Inspection",
      rating: 5,
      date: "2 months ago",
      text: "Mike did a pre-purchase inspection on a used car I was considering. His thorough report saved me from making a huge mistake! He found issues the seller hadn't disclosed and gave me the confidence to walk away. Worth every penny for the peace of mind.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Robert Kim",
      location: "Mililani, HI",
      service: "Complete Maintenance Package",
      rating: 5,
      date: "3 weeks ago",
      text: "I've been taking my cars to Mike for over a year now. He's worked on my Toyota Camry and my wife's Honda. Always fair pricing, excellent work, and great communication. He explains what needs to be done and why, never tries to upsell. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amanda Wilson",
      location: "Kapolei, HI",
      service: "Emergency Service",
      rating: 5,
      date: "1 month ago",
      text: "My car broke down on a Sunday and I was stranded. Mike responded to my emergency call and had me back on the road within an hour. He didn't charge extra for the weekend service either. Amazing customer service and reliability when you need it most!",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Park",
      location: "Wahiawa, HI",
      service: "Suspension Work",
      rating: 5,
      date: "2 weeks ago",
      text: "Mike diagnosed and fixed my suspension issues for half what the dealership quoted. The ride quality is like new again. He's knowledgeable, professional, and stands behind his work. Found my new mechanic for life!",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9', label: 'Average Rating' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '8+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real Honolulu drivers who trust Mike with their automotive needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Honest reviews from satisfied customers across Oahu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-3">
                  <p className="text-sm text-primary-600 font-medium">
                    Service: {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Choose Mike
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common themes from our customer reviews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Honest Pricing',
                description: 'No hidden fees or unnecessary upsells',
                percentage: '98%'
              },
              {
                title: 'Quality Work',
                description: 'Professional results that last',
                percentage: '100%'
              },
              {
                title: 'Great Communication',
                description: 'Clear explanations and updates',
                percentage: '97%'
              },
              {
                title: 'Convenient Service',
                description: 'Mobile service and flexible scheduling',
                percentage: '95%'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {feature.percentage}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Had a Great Experience?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Share your experience and help other drivers find trusted automotive care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:mike@mikestestsandchecks.com?subject=Customer Review"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiStar} className="h-5 w-5" />
                <span>Leave a Review</span>
              </a>
              <a
                href="tel:+1-808-555-0123"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Call Mike
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
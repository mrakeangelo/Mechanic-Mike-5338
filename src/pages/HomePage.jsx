import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiList, FiStar, FiTool, FiShield, FiClock, FiDollarSign, FiDownload, FiAward, FiCheckCircle } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiTool,
      title: 'Toyota Factory Trained',
      description: 'Professional expertise with years of dealership experience'
    },
    {
      icon: FiShield,
      title: 'Trusted & Honest',
      description: 'Transparent pricing with no hidden fees or surprises'
    },
    {
      icon: FiClock,
      title: 'Convenient Service',
      description: 'Mobile service available or drop-off at your convenience'
    },
    {
      icon: FiDollarSign,
      title: 'Fair Pricing',
      description: 'Dealership-level care without the dealership price'
    }
  ];

  const quickServices = [
    { name: 'Oil Change', price: 'Starting at $45', time: '30 min' },
    { name: 'Brake Service', price: 'Starting at $89', time: '45 min' },
    { name: 'Battery Check', price: 'Starting at $25', time: '15 min' },
    { name: 'Engine Diagnostics', price: 'Starting at $65', time: '30 min' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Kailua, HI",
      text: "Mike saved me hundreds compared to the dealership. Professional, honest, and reliable!",
      rating: 5
    },
    {
      name: "David Chen", 
      location: "Honolulu, HI",
      text: "Best mechanic on the island. Fixed my Toyota perfectly and explained everything clearly.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      location: "Pearl City, HI", 
      text: "Mobile service was incredible. Mike came to my office and had me back on the road in no time.",
      rating: 5
    }
  ];

  const credentials = [
    { icon: FiTool, title: "Toyota Trained Technician", subtitle: "Factory Certified" },
    { icon: FiAward, title: "ASE Certified", subtitle: "Professional Standards" },
    { icon: FiShield, title: "Insured & Experienced", subtitle: "Serving Honolulu, HI" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Mike Andrei
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  Trusted Toyota Mechanic in Honolulu
                </p>
                <div className="inline-block">
                  <span className="bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg">
                    Mike's Tests & Checks
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Dealership-Level Quality,
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-tight">
                  Delivered with Local Trust.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/book"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center shadow-lg"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Mike Andrei - Professional Mechanic"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-300 italic">
                    "Your trusted mechanic for honest, professional service"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="bg-primary-100 p-2 rounded-full">
                  <SafeIcon icon={credential.icon} className="h-5 w-5 text-primary-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-sm">{credential.title}</p>
                  <p className="text-xs text-gray-600">{credential.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mike's Tests & Checks?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional auto mechanic services throughout Oahu with the experience and integrity you can trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-gray-600">
              Quick, professional service when you need it most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{service.price}</p>
                <p className="text-sm text-gray-500">{service.time}</p>
                <Link
                  to="/book"
                  className="mt-4 block w-full bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet - Free Maintenance Checklist */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Free Gift: Car Maintenance Checklist
              </h2>
              <p className="text-xl text-primary-100">
                Mike's trusted monthly & yearly checklist to keep your car running like new – now yours for free.
              </p>
              <ul className="space-y-2 text-primary-100">
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-white" />
                  <span>Monthly maintenance reminders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-white" />
                  <span>Seasonal car care tips</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-white" />
                  <span>Warning signs to watch for</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiDownload} className="h-5 w-5" />
                <span>Download Now</span>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 text-center text-gray-900">
                  <SafeIcon icon={FiDownload} className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mike's Vehicle Checklist</h3>
                  <p className="text-sm text-gray-600 mb-4">1-Page PDF Guide</p>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-700">
                      "Keep your car running smoothly with this professional maintenance schedule"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from real Honolulu drivers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>Read All Testimonials</span>
              <SafeIcon icon={FiList} className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Google Reviews
            </h2>
            
            {/* Google Reviews Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-4xl font-bold text-gray-900">4.9</div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Based on 47 reviews</p>
                </div>
              </div>
              
              {/* Google Reviews iframe placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">Google Reviews Widget</p>
                <p className="text-sm text-gray-500">Customer reviews will display here</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <SafeIcon icon={FiStar} className="h-5 w-5" />
              <span>Leave a Review on Google</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Your Car Serviced?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of working with a trusted professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/book"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+1-808-555-0123"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg"
              >
                Call (808) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiTool, FiHeart, FiCalendar } = FiIcons;

const AboutPage = () => {
  const achievements = [
    {
      icon: FiAward,
      title: 'Toyota Certified',
      description: 'Factory-trained technician with official Toyota certification'
    },
    {
      icon: FiTool,
      title: '8+ Years Experience',
      description: 'Extensive experience in automotive repair and maintenance'
    },
    {
      icon: FiHeart,
      title: 'Customer Focused',
      description: 'Committed to honest, transparent service for every client'
    }
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
              About Mike Andrei
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted Toyota mechanic bringing dealership-quality service to Honolulu drivers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Meet Mike
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 8 years of experience as a Toyota factory-trained mechanic, Mike Andrei has built a reputation for honest, professional automotive service in Honolulu. Currently working for Toyota, Mike has seen firsthand the quality standards that drivers expect – and deserve.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding that dealership prices can be overwhelming, Mike started <strong>Mike's Tests & Checks</strong> to provide the same level of expertise and care at fair, transparent prices. Whether it's a routine oil change or complex engine diagnostics, Mike approaches every job with the same attention to detail and commitment to quality.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Now offering independent services throughout Oahu, Mike is passionate about keeping your car running smoothly while building long-term relationships with drivers who value honesty and expertise.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mike's Promise</h3>
                <p className="text-gray-700 italic">
                  "I treat every car like it's my own. No surprises, no hidden fees, just honest work at a fair price. Your trust is everything to me."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mike Andrei working on a car"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Mike at work - precision and care in every service
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">8+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">500+</p>
                      <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">100%</p>
                      <p className="text-sm text-gray-600">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Trust Mike?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional credentials and genuine commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={achievement.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional auto service"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Values
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Honesty First</h3>
                  <p className="text-gray-600">No unnecessary repairs, no hidden fees. Just honest assessments and fair pricing.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Quality Work</h3>
                  <p className="text-gray-600">Every job is done right the first time, with attention to detail and professional standards.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Customer Care</h3>
                  <p className="text-gray-600">Your satisfaction and peace of mind are our top priorities in every interaction.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Mike with their automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/book"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                <span>Book Your Service</span>
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
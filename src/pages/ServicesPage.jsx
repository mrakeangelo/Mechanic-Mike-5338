import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTool, FiActivity, FiShield, FiTruck, FiCalendar, FiCheck } = FiIcons;

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Routine Maintenance',
      icon: FiTool,
      description: 'Keep your car running smoothly with regular maintenance',
      services: [
        {
          name: 'Oil Change',
          description: 'Full synthetic or conventional oil change with filter replacement',
          price: 'Starting at $45',
          time: '30 minutes'
        },
        {
          name: 'Battery Replacement',
          description: 'Battery testing and replacement with warranty',
          price: 'Starting at $89',
          time: '20 minutes'
        },
        {
          name: 'Tire Rotation',
          description: 'Tire rotation and pressure check for even wear',
          price: 'Starting at $25',
          time: '25 minutes'
        },
        {
          name: 'Fluid Checks',
          description: 'Complete fluid level inspection and top-off',
          price: 'Starting at $15',
          time: '15 minutes'
        }
      ]
    },
    {
      title: 'Diagnostics & Repairs',
      icon: FiActivity,
      description: 'Professional diagnosis and repair of automotive issues',
      services: [
        {
          name: 'Brake Service',
          description: 'Brake pad replacement, rotor resurfacing, and system inspection',
          price: 'Starting at $89',
          time: '45 minutes'
        },
        {
          name: 'Engine Diagnostics',
          description: 'Computer diagnostic scan and problem identification',
          price: 'Starting at $65',
          time: '30 minutes'
        },
        {
          name: 'Suspension Work',
          description: 'Strut and shock replacement, alignment checks',
          price: 'Starting at $125',
          time: '60 minutes'
        },
        {
          name: 'Check Engine Light',
          description: 'Diagnostic scan and repair of engine-related issues',
          price: 'Starting at $75',
          time: '45 minutes'
        }
      ]
    },
    {
      title: 'Mobile & Specialty Services',
      icon: FiTruck,
      description: 'Convenient services at your location',
      services: [
        {
          name: 'Mobile Vehicle Inspection',
          description: 'Complete vehicle inspection at your home or office',
          price: 'Starting at $65',
          time: '45 minutes'
        },
        {
          name: 'Pre-Purchase Inspection',
          description: 'Thorough inspection before buying a used car',
          price: 'Starting at $95',
          time: '60 minutes'
        },
        {
          name: 'Emergency Service',
          description: 'Urgent repairs and roadside assistance',
          price: 'Starting at $85',
          time: 'Varies'
        },
        {
          name: 'Maintenance Packages',
          description: 'Bundled services for complete vehicle care',
          price: 'Starting at $125',
          time: '90 minutes'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: FiShield,
      title: 'Quality Guarantee',
      description: 'All work backed by our satisfaction guarantee'
    },
    {
      icon: FiTruck,
      title: 'Mobile Service',
      description: 'We come to you for added convenience'
    },
    {
      icon: FiCheck,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges'
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
              Professional Auto Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automotive care from routine maintenance to complex repairs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={category.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-primary-600 font-bold">{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">⏱️ {service.time}</span>
                      <Link
                        to="/book"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional expertise with customer-focused service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mike's Tests & Checks provides mobile service throughout Oahu, bringing professional automotive care directly to your location.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Primary Areas:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Honolulu</li>
                    <li>• Kailua</li>
                    <li>• Pearl City</li>
                    <li>• Aiea</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Extended Areas:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Kaneohe</li>
                    <li>• Mililani</li>
                    <li>• Kapolei</li>
                    <li>• Wahiawa</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Mobile Service:</strong> Available for most services with a small travel fee. 
                  Drop-off service also available at our convenient location.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mobile automotive service"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
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
              Ready to Schedule Your Service?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Book your appointment today and experience professional automotive care at fair prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/book"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                <span>Book Service</span>
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
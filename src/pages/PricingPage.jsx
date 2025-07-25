import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiGift, FiUsers, FiCalendar, FiCheck } = FiIcons;

const PricingPage = () => {
  const pricingCategories = [
    {
      title: 'Routine Maintenance',
      services: [
        { name: 'Oil Change (Conventional)', price: '$45', description: 'Up to 5 quarts + filter' },
        { name: 'Oil Change (Full Synthetic)', price: '$65', description: 'Up to 5 quarts + filter' },
        { name: 'Tire Rotation', price: '$25', description: 'All four tires + pressure check' },
        { name: 'Battery Replacement', price: '$89', description: 'Standard battery + installation' },
        { name: 'Air Filter Replacement', price: '$35', description: 'Engine air filter + inspection' },
        { name: 'Fluid Top-Off Service', price: '$15', description: 'All fluid levels checked' }
      ]
    },
    {
      title: 'Diagnostics & Repairs',
      services: [
        { name: 'Engine Diagnostic Scan', price: '$65', description: 'Computer scan + report' },
        { name: 'Check Engine Light Diagnosis', price: '$75', description: 'Full diagnostic + explanation' },
        { name: 'Brake Pad Replacement', price: '$89', description: 'Front or rear pads + inspection' },
        { name: 'Brake Service (Complete)', price: '$165', description: 'Pads + rotors + fluid' },
        { name: 'Suspension Inspection', price: '$45', description: 'Complete suspension check' },
        { name: 'Cooling System Service', price: '$95', description: 'Flush + refill + inspection' }
      ]
    },
    {
      title: 'Mobile & Specialty Services',
      services: [
        { name: 'Mobile Vehicle Inspection', price: '$65', description: 'Complete inspection at your location' },
        { name: 'Pre-Purchase Inspection', price: '$95', description: 'Thorough used car inspection' },
        { name: 'Emergency Service Call', price: '$85', description: 'Urgent repairs + travel fee' },
        { name: 'Mobile Service Fee', price: '$15', description: 'Added to any mobile service' },
        { name: 'After-Hours Service', price: '+$25', description: 'Evening/weekend appointments' },
        { name: 'Detailed Vehicle Report', price: '$25', description: 'Written inspection report' }
      ]
    }
  ];

  const serviceBundles = [
    {
      name: 'Basic Maintenance Package',
      price: '$79',
      originalPrice: '$95',
      savings: '$16',
      includes: ['Oil Change', 'Tire Rotation', 'Fluid Check', 'Visual Inspection'],
      popular: false
    },
    {
      name: 'Complete Care Package',
      price: '$145',
      originalPrice: '$175',
      savings: '$30',
      includes: ['Oil Change', 'Tire Rotation', 'Battery Test', 'Brake Inspection', 'Diagnostic Scan'],
      popular: true
    },
    {
      name: 'Premium Service Package',
      price: '$225',
      originalPrice: '$275',
      savings: '$50',
      includes: ['Oil Change', 'Tire Rotation', 'Battery Test', 'Brake Service', 'Diagnostic Scan', 'Detailed Report'],
      popular: false
    }
  ];

  const promotions = [
    {
      icon: FiGift,
      title: 'New Customer Special',
      description: '10% off your first service',
      code: 'WELCOME10',
      terms: 'Valid for first-time customers only'
    },
    {
      icon: FiUsers,
      title: 'Referral Reward',
      description: 'You and your friend both save $10',
      code: 'REFER10',
      terms: 'Applied when referred customer books service'
    },
    {
      icon: FiDollarSign,
      title: 'Bundle Discount',
      description: 'Save up to $50 on service packages',
      code: 'BUNDLE',
      terms: 'Automatic savings on qualifying packages'
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fair, honest pricing with no hidden fees or surprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Bundles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Save money with our bundled service packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceBundles.map((bundle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white border-2 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  bundle.popular ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                {bundle.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{bundle.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary-600">{bundle.price}</span>
                    <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                  </div>
                  <p className="text-green-600 font-medium">Save {bundle.savings}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    bundle.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book This Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose only the services you need
            </p>
          </motion.div>

          {pricingCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 divide-y divide-gray-200">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-primary-600">{service.price}</span>
                        <Link
                          to="/book"
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Promotions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Save even more with our special offers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border border-primary-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-600 p-2 rounded-full">
                    <SafeIcon icon={promo.icon} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{promo.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{promo.description}</p>
                <div className="bg-white p-3 rounded-lg mb-3">
                  <span className="text-sm font-mono text-primary-600 font-semibold">
                    Code: {promo.code}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{promo.terms}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Booking Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Easy Payment & Booking
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure Online Payment</h3>
                    <p className="text-gray-600">Pay securely with credit card or PayPal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Scheduling</h3>
                    <p className="text-gray-600">Choose your preferred date and time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Hidden Fees</h3>
                    <p className="text-gray-600">Transparent pricing with no surprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">100% satisfaction or your money back</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded">
                    <SafeIcon icon={FiDollarSign} className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700">Credit & Debit Cards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded">
                    <SafeIcon icon={FiDollarSign} className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700">PayPal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded">
                    <SafeIcon icon={FiDollarSign} className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700">Cash (On-Site)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded">
                    <SafeIcon icon={FiDollarSign} className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700">Venmo/Zelle</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Deposit Policy:</strong> Some services may require a deposit to secure your appointment. 
                  Full payment is due upon completion of service.
                </p>
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get professional automotive care at transparent, fair prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/book"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                <span>Book & Pay Online</span>
              </Link>
              <a
                href="tel:+1-808-555-0123"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Call for Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
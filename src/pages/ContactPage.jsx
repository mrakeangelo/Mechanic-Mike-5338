import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageSquare } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Message sent! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      info: '(808) 555-0123',
      action: 'tel:+1-808-555-0123',
      description: 'Call for immediate assistance'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'mike@mikestestsandchecks.com',
      action: 'mailto:mike@mikestestsandchecks.com',
      description: 'Send us a detailed message'
    },
    {
      icon: FiMapPin,
      title: 'Service Area',
      info: 'Honolulu, Hawaii',
      action: null,
      description: 'Serving all of Oahu'
    },
    {
      icon: FiClock,
      title: 'Hours',
      info: 'Mon-Sat: 8AM-6PM',
      action: null,
      description: 'Emergency service available 24/7'
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to schedule your service or have questions? I'm here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reach Out to Mike
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {info.info}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{info.info}</p>
                )}
                <p className="text-sm text-gray-600 mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="(808) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="service-inquiry">Service Inquiry</option>
                    <option value="booking-question">Booking Question</option>
                    <option value="pricing-question">Pricing Question</option>
                    <option value="emergency-service">Emergency Service</option>
                    <option value="general-question">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell me about your vehicle and what service you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Area</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59896.59011875818!2d-157.8420315!3d21.3098611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b7c5b7d7d%3A0x4b9b9b9b9b9b9b9b!2sHonolulu%2C%20HI!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mike's Tests & Checks Service Area"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Serving all of Oahu with mobile service available to your location
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiMessageSquare} className="h-6 w-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Phone calls</span>
                    <span className="text-primary-600 font-medium">Usually within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Email messages</span>
                    <span className="text-primary-600 font-medium">Within 4-6 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Emergency service</span>
                    <span className="text-primary-600 font-medium">Within 1 hour</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Primary Areas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Honolulu</li>
                      <li>• Kailua</li>
                      <li>• Pearl City</li>
                      <li>• Aiea</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Extended Areas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kaneohe</li>
                      <li>• Mililani</li>
                      <li>• Kapolei</li>
                      <li>• Wahiawa</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Mobile service available to most locations on Oahu. 
                    Contact for availability in your area.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Emergency Service?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Car trouble doesn't wait for business hours. I'm available 24/7 for emergency automotive service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+1-808-555-0123"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="h-5 w-5" />
                <span>Call Now: (808) 555-0123</span>
              </a>
              <a
                href="mailto:mike@mikestestsandchecks.com?subject=Emergency Service Request"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Email for Emergency
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp, FiHelpCircle } = FiIcons;

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What types of cars do you service?",
          answer: "While I specialize in Toyota vehicles due to my factory training, I service all makes and models including Honda, Nissan, Ford, Chevrolet, and more. My Toyota expertise gives me deep knowledge of reliable automotive systems that translates across all brands."
        },
        {
          question: "Do you offer weekend appointments?",
          answer: "Yes! I offer flexible scheduling including weekends and evenings to accommodate your busy schedule. Weekend appointments may include a small convenience fee, but I believe in making automotive care accessible when you need it most."
        },
        {
          question: "How far do you travel for mobile service?",
          answer: "I provide mobile service throughout Oahu, including Honolulu, Kailua, Pearl City, Aiea, Kaneohe, Mililani, Kapolei, and Wahiawa. There's a small travel fee for mobile service, but the convenience is worth it for most customers."
        },
        {
          question: "What's your experience and background?",
          answer: "I'm a Toyota factory-trained technician with over 8 years of experience. I currently work for Toyota and started Mike's Tests & Checks to provide the same level of expertise at fair prices. I'm passionate about honest, quality automotive care."
        }
      ]
    },
    {
      title: "Services & Pricing",
      faqs: [
        {
          question: "Do you provide written estimates?",
          answer: "Absolutely! I provide detailed written estimates for all work, explaining what needs to be done and why. No surprises, no hidden fees - just transparent pricing so you can make informed decisions about your vehicle."
        },
        {
          question: "Can you diagnose check engine lights?",
          answer: "Yes, I have professional diagnostic equipment to scan and interpret check engine lights and other diagnostic trouble codes. I'll explain what the codes mean and provide options for repair with clear pricing."
        },
        {
          question: "Do you offer emergency or urgent services?",
          answer: "Yes, I offer emergency services for urgent situations like breakdowns or safety issues. Emergency service includes a priority response fee, but I'll do everything possible to get you back on the road safely and quickly."
        },
        {
          question: "What's included in your maintenance packages?",
          answer: "My maintenance packages include combinations of oil changes, tire rotations, fluid checks, battery testing, brake inspections, and diagnostic scans. Packages are designed to save you money while keeping your car in excellent condition."
        }
      ]
    },
    {
      title: "Booking & Payment",
      faqs: [
        {
          question: "How do I book an appointment?",
          answer: "You can book online through my website, call me directly at (808) 555-0123, or send an email. I'll confirm your appointment and provide all the details you need, including location and service specifics."
        },
        {
          question: "Do you accept credit cards or just cash?",
          answer: "I accept multiple payment methods including credit cards, debit cards, PayPal, cash, Venmo, and Zelle. You can pay online when booking or in person after service completion."
        },
        {
          question: "Do you require a deposit?",
          answer: "For most routine services, no deposit is required. For larger repairs or parts orders, I may request a deposit to secure your appointment and cover parts costs. This will be discussed upfront."
        },
        {
          question: "What's your cancellation policy?",
          answer: "I understand plans change! Please give me at least 24 hours notice for cancellations or rescheduling. This helps me offer your slot to other customers who may need urgent service."
        }
      ]
    },
    {
      title: "Service Details",
      faqs: [
        {
          question: "How long do most services take?",
          answer: "Most routine services take 30-60 minutes. Oil changes typically take 30 minutes, brake service 45-60 minutes, and diagnostic scans 30-45 minutes. I'll give you an accurate time estimate when you book."
        },
        {
          question: "Do you guarantee your work?",
          answer: "Yes! I stand behind all my work with a satisfaction guarantee. If you're not completely satisfied with the service, I'll make it right. Parts come with manufacturer warranties, and I warranty my labor."
        },
        {
          question: "Can I drop off my car or do you only do mobile service?",
          answer: "I offer both! You can drop off your car at a convenient location, or I can come to you with mobile service. Drop-off is great for longer repairs, while mobile service is perfect for routine maintenance."
        },
        {
          question: "What if you find additional problems during service?",
          answer: "I'll always contact you before doing any additional work. I'll explain what I found, why it's important, and give you options with clear pricing. You're in control of what gets done to your vehicle."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our automotive services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-primary-100 p-2 rounded-full">
                  <SafeIcon icon={FiHelpCircle} className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <SafeIcon 
                          icon={isOpen ? FiChevronUp : FiChevronDown} 
                          className="h-5 w-5 text-gray-500 flex-shrink-0" 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see your question answered here? I'm always happy to help! 
              Reach out and I'll get back to you quickly with the information you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-808-555-0123"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Call (808) 555-0123</span>
              </a>
              <a
                href="mailto:mike@mikestestsandchecks.com"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Service Hours & Availability
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">By Appointment</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Emergency Service</span>
                  <span className="text-gray-600">24/7 Available</span>
                </div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Weekend and after-hours appointments available with advance notice. 
                  Emergency services available 24/7 for urgent situations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Response Times
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Calls</p>
                    <p className="text-sm text-gray-600">Usually within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Inquiries</p>
                    <p className="text-sm text-gray-600">Within 4-6 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Emergency Service</p>
                    <p className="text-sm text-gray-600">Within 1 hour</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Appointment Booking</p>
                    <p className="text-sm text-gray-600">Same day or next day</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional brake service",
      title: "Brake Service",
      description: "Professional brake pad replacement and rotor resurfacing"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Mobile automotive service",
      title: "Mobile Service",
      description: "Convenient mobile service at your location"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Engine diagnostics",
      title: "Engine Diagnostics",
      description: "Advanced diagnostic equipment for accurate problem identification"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Oil change service",
      title: "Oil Change",
      description: "Quick and professional oil change service"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1609221362331-b7e10b8c5fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Battery replacement",
      title: "Battery Service",
      description: "Battery testing and replacement with warranty"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Tire service",
      title: "Tire Service",
      description: "Tire rotation, balancing, and replacement"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1632823471565-1ecdf4c2b1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Suspension repair",
      title: "Suspension Work",
      description: "Strut and shock replacement for smooth ride"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional tools",
      title: "Professional Equipment",
      description: "State-of-the-art tools for quality service"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Vehicle inspection",
      title: "Vehicle Inspection",
      description: "Thorough inspection for safety and performance"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1615906657182-c6e8e0d4d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Clean workspace",
      title: "Clean Workspace",
      description: "Organized and professional work environment"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1609221362331-b7e10b8c5fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Quality parts",
      title: "Quality Parts",
      description: "Only the best parts for your vehicle"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Customer satisfaction",
      title: "Customer Care",
      description: "Dedicated to customer satisfaction and quality service"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
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
              Work Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See our professional automotive services in action
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Automotive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, see the quality and professionalism that sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <SafeIcon icon={FiX} className="h-6 w-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <SafeIcon icon={FiChevronLeft} className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <SafeIcon icon={FiChevronRight} className="h-6 w-6 text-white" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {currentIndex + 1} of {galleryItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality You Can See
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every job is approached with the same level of professionalism and attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Standards",
                description: "Every service meets Toyota factory standards for quality and precision"
              },
              {
                title: "Clean Workspace",
                description: "Organized, professional environment that reflects our commitment to excellence"
              },
              {
                title: "Quality Parts",
                description: "Only genuine or OEM-equivalent parts used for lasting reliability"
              },
              {
                title: "Detailed Documentation",
                description: "Complete service records and detailed explanations of all work performed"
              },
              {
                title: "Before & After",
                description: "Visual documentation of issues found and repairs completed"
              },
              {
                title: "Customer Education",
                description: "We explain what we find and why it matters for your vehicle's health"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
              Ready to Experience This Level of Service?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Book your appointment today and see why customers trust Mike with their automotive needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/book"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Book Service
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
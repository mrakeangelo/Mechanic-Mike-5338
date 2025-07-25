import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import BookingModal from '../components/BookingModal';
import 'react-calendar/dist/Calendar.css';

const { FiCalendar, FiClock, FiMapPin, FiCreditCard, FiUser, FiPhone, FiMail } = FiIcons;

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [serviceType, setServiceType] = useState('mobile');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    notes: ''
  });

  const services = [
    { id: 'oil-change', name: 'Oil Change', price: 45, time: '30 min' },
    { id: 'brake-service', name: 'Brake Service', price: 89, time: '45 min' },
    { id: 'battery-replacement', name: 'Battery Replacement', price: 89, time: '20 min' },
    { id: 'engine-diagnostics', name: 'Engine Diagnostics', price: 65, time: '30 min' },
    { id: 'tire-rotation', name: 'Tire Rotation', price: 25, time: '25 min' },
    { id: 'fluid-check', name: 'Fluid Check', price: 15, time: '15 min' },
    { id: 'pre-purchase', name: 'Pre-Purchase Inspection', price: 95, time: '60 min' },
    { id: 'mobile-inspection', name: 'Mobile Vehicle Inspection', price: 65, time: '45 min' },
    { id: 'basic-package', name: 'Basic Maintenance Package', price: 79, time: '60 min' },
    { id: 'complete-package', name: 'Complete Care Package', price: 145, time: '90 min' }
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show booking confirmation modal
    setShowModal(true);
    
    // Log booking data for integration
    console.log('Booking submitted:', {
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      type: serviceType,
      customer: formData
    });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const mobileServiceFee = serviceType === 'mobile' ? 15 : 0;
  const totalPrice = selectedServiceData ? selectedServiceData.price + mobileServiceFee : 0;

  const bookingData = selectedDate && selectedTime && selectedServiceData ? {
    date: selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: selectedTime,
    service: selectedServiceData.name
  } : null;

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
              Book Your Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule your appointment and pay securely online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="space-y-8">
              {/* Service Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service</h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedService === service.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={selectedService === service.id}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="text-primary-600"
                        />
                        <div>
                          <span className="font-medium text-gray-900">{service.name}</span>
                          <span className="text-sm text-gray-500 ml-2">({service.time})</span>
                        </div>
                      </div>
                      <span className="font-bold text-primary-600">${service.price}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Service Type */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Type</h2>
                <div className="space-y-3">
                  <label className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                    serviceType === 'mobile' ? 'border-primary-600 bg-primary-50' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="serviceType"
                        value="mobile"
                        checked={serviceType === 'mobile'}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="text-primary-600"
                      />
                      <div>
                        <span className="font-medium text-gray-900">Mobile Service</span>
                        <p className="text-sm text-gray-500">I come to your location</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary-600">+$15</span>
                  </label>
                  <label className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                    serviceType === 'dropoff' ? 'border-primary-600 bg-primary-50' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="serviceType"
                        value="dropoff"
                        checked={serviceType === 'dropoff'}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="text-primary-600"
                      />
                      <div>
                        <span className="font-medium text-gray-900">Drop-off Service</span>
                        <p className="text-sm text-gray-500">Bring your car to me</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-600">No fee</span>
                  </label>
                </div>
              </motion.div>

              {/* Customer Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Vehicle Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      required
                      min="1990"
                      max="2024"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Toyota"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Camry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Any specific issues or requests?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-base"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Calendar & Summary */}
            <div className="space-y-8">
              {/* Date Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date</h2>
                <div className="calendar-container">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()}
                    className="w-full border-none bg-transparent"
                    tileClassName="hover:bg-primary-100 rounded-lg transition-colors"
                    navigationLabel={({ date }) => 
                      <span className="text-lg font-semibold text-gray-900">
                        {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                    }
                  />
                </div>
              </motion.div>

              {/* Time Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Time</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-sm font-medium rounded-lg transition-colors ${
                        selectedTime === time
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-white border border-gray-300 hover:border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Booking Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-primary-50 p-8 rounded-lg border border-primary-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                <div className="space-y-4">
                  {selectedServiceData && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{selectedServiceData.name}</span>
                      <span className="font-bold text-primary-600">${selectedServiceData.price}</span>
                    </div>
                  )}
                  {serviceType === 'mobile' && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Mobile Service Fee</span>
                      <span className="font-bold text-primary-600">$15</span>
                    </div>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-xl font-bold text-primary-600">${totalPrice}</span>
                    </div>
                  </div>
                  
                  {selectedDate && selectedTime && (
                    <div className="mt-4 p-4 bg-white rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <SafeIcon icon={FiClock} className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{selectedTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          {serviceType === 'mobile' ? 'Mobile Service' : 'Drop-off Service'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button
                  type="submit"
                  disabled={!selectedService || !selectedDate || !selectedTime || !formData.firstName || !formData.email}
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <SafeIcon icon={FiCreditCard} className="h-5 w-5" />
                  <span>Book & Pay Securely</span>
                </button>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Secure payment processing with Stripe
                </p>
              </motion.div>
            </div>
          </form>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <SafeIcon icon={FiCreditCard} className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">Secure Payment Processing</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <SafeIcon icon={FiCalendar} className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">Flexible Scheduling</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <SafeIcon icon={FiUser} className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">Professional Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Confirmation Modal */}
      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bookingData={bookingData}
      />

      <style jsx>{`
        .calendar-container .react-calendar {
          width: 100%;
          background: transparent;
          border: none;
          font-family: inherit;
        }
        
        .calendar-container .react-calendar__tile {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          margin: 2px;
          padding: 10px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .calendar-container .react-calendar__tile:hover {
          background-color: #fef2f2;
          border-color: #dc2626;
        }
        
        .calendar-container .react-calendar__tile--active {
          background-color: #dc2626 !important;
          color: white !important;
          border-color: #dc2626;
        }
        
        .calendar-container .react-calendar__navigation {
          margin-bottom: 1rem;
        }
        
        .calendar-container .react-calendar__navigation button {
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          padding: 8px 12px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          transition: all 0.2s;
        }
        
        .calendar-container .react-calendar__navigation button:hover {
          background-color: #f9fafb;
          border-color: #dc2626;
        }
        
        .calendar-container .react-calendar__month-view__weekdays {
          font-weight: 600;
          font-size: 12px;
          color: #6b7280;
        }
        
        .calendar-container .react-calendar__month-view__weekdays__weekday {
          padding: 8px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;
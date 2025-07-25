import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiCalendar, FiClock } = FiIcons;

const BookingModal = ({ isOpen, onClose, bookingData }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCheck} className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600">
                Your appointment has been successfully scheduled
              </p>
            </div>

            {/* Booking Details */}
            {bookingData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Appointment Details</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {bookingData.date} at {bookingData.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {bookingData.service}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              <p className="text-sm text-gray-600 text-center">
                A confirmation email has been sent to your inbox with all the details.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Got it, thanks!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
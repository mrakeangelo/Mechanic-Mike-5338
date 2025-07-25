import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTool, FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <SafeIcon icon={FiTool} className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Mike's Tests & Checks</h3>
                <p className="text-sm text-gray-400">Trusted Toyota Mechanic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional auto mechanic services in Honolulu, Hawaii. 
              Dealership-level care at fair prices.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <SafeIcon icon={FiFacebook} className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <SafeIcon icon={FiInstagram} className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Mike</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Oil Changes</li>
              <li>Brake Service</li>
              <li>Engine Diagnostics</li>
              <li>Battery Replacement</li>
              <li>Mobile Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="h-4 w-4 text-primary-600" />
                <a href="tel:+1-808-555-0123" className="text-gray-400 hover:text-white transition-colors">
                  (808) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-primary-600" />
                <a href="mailto:mike@mikestestsandchecks.com" className="text-gray-400 hover:text-white transition-colors">
                  mike@mikestestsandchecks.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="h-4 w-4 text-primary-600" />
                <span className="text-gray-400">Honolulu, Hawaii</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="h-4 w-4 text-primary-600" />
                <span className="text-gray-400">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Trusted Care in Honolulu · Est. 2025
          </p>
          <p className="text-gray-400 text-sm">
            © {currentYear} Mike's Tests & Checks · Built with ❤️ by <span className="text-primary-600 font-medium">Mrake Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
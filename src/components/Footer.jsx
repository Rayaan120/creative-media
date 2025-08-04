import React from 'react';
import { Link } from 'react-router-dom';
import { Play, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
           <Link to="/" className="flex items-center space-x-3">
            <img
             src="/Images/logo.png"
             alt="Media Factory Logo"
             className="h-14 md:h-20 object-contain"
           />
           
           </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for creative production services. We bring your vision to life with cutting-edge technology and artistic excellence.
            </p>
           <div className="flex space-x-4">
  <a href="https://www.facebook.com/mediafactary/" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
  </a>
  <a href="https://www.instagram.com/mediafactoryevents/" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
  </a>
  <a href="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
    <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
  </a>
  <a href="https://ae.linkedin.com/company/media-factory-events" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">About Us</Link>
              <Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Services</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Portfolio</Link>
              <Link to="/careers" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Careers</Link>
              <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-400 text-sm">Event Production</span>
              <span className="text-gray-400 text-sm">Film Making</span>
              <span className="text-gray-400 text-sm">Digital Marketing</span>
              <span className="text-gray-400 text-sm">Branding & Design</span>
              <span className="text-gray-400 text-sm">Advertising</span>
              <span className="text-gray-400 text-sm">Entertainment</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Kuwait Street,<br />
                  Al Shraifi, Mezanine floor, M 07 - Dubai
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+971 4 3333793</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">shamediafactory@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Media Factory. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
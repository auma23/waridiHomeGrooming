

import { Link } from 'react-router-dom';
import { useState } from 'react';

import TruckIcon from '../assets/image13.png';
import BroomIcon from '../assets/image4.png';
import HomeIcon from '../assets/image14.png';

const HowItWorks = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <section className="how-it-works bg-gray-100 py-20" id="collection">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/contact" className="card relative rounded-lg overflow-hidden flex flex-col items-center transition duration-300 hover:bg-gray-50" onClick={handleLinkClick}>
            <img src={TruckIcon} alt="Book Icon" className="w-20 h-20 mt-4 mb-2" />
            <div className="card-content p-6 text-center text-gray-600">
              <h3 className="text-xl font-semibold mb-2 text-orange">Booking</h3>
              <p className="text-lg mb-4">Refresh your space with our professional cleaning and interior decor services—book now to transform your home</p>
            </div>
          </Link>
          <Link to="/price-list" className="card relative rounded-lg overflow-hidden flex flex-col items-center transition duration-300 hover:bg-gray-50" onClick={handleLinkClick}>
            <img src={BroomIcon} alt="Cleaning Icon" className="w-20 h-20  mt-4 mb-2" />
            <div className="card-content p-6 text-center text-gray-600">
              <h3 className="text-xl font-semibold mb-2 text-orange">Cleaning</h3>
              <p className="text-lg mb-4">Transform your home into a haven of cleanliness and style. Contact us now to experience the difference</p>
            </div>
          </Link>
          <Link to="/packages" className="card relative rounded-lg overflow-hidden flex flex-col items-center transition duration-300 hover:bg-gray-50" onClick={handleLinkClick}>
            <img src={HomeIcon} alt="Interior Decor & Finishing Icon" className="w-20 h-20 mt-4 mb-2" />
            <div className="card-content p-6 text-center text-gray-600">
              <h3 className="text-xl font-semibold mb-2 text-orange">Interior Decor & Finishing</h3>
              <p className="text-lg mb-4">Elevate your space with expert interior decoration and finishing touches. Contact us today to bring your vision to life</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

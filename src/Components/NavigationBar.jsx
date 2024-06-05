import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="flex justify-between items-center h-16 px-4 z-10 top-0 sticky bg-grey">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Waridi HomeGrooming" className="w-40" />
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-900 hover:text-gray-400 text-sm py-2 px-2 font-medium" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm" onClick={handleLinkClick}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-900 hover:text-gray-400 px-2 font-medium flex items-center text-sm" onClick={handleLinkClick}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-gray-900 hover:text-gray-400 px-2 text-sm flex font-medium" onClick={handleLinkClick}>
                INTERIOR PACKAGES
              </Link>
            </li>
            
            <li>
              <Link to="/price-list" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm" onClick={handleLinkClick}>
                CLEANING PACKAGES
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm" onClick={handleLinkClick}>
                CONTACT
              </Link>
            </li>
            
          </ul>
          {/* <div className="flex flex-col justify-end items-end space-y-1">
            <p className="text-gray-900 text-sm font-medium">info@waridihomegrooming.com</p>
            <p className="text-gray-900 text-sm font-medium">+254 707 863 773</p>
          </div> */}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center md:hidden">
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="h-6 w-6 text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Responsive Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-3/4 h-auto border-gray-200 z-20 text-left transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'bg-grey transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-start pl-4 pt-4 space-y-4">
          <li>
            <Link to="/" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium flex items-center text-sm">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/packages" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 text-sm flex font-medium">
              INTERIOR PACKAGES
            </Link>
          </li>
          
          <li>
            <Link to="/price-list" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              CLEANING PACKAGES
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              CONTACT
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;



import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the 'times' icon

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-grey flex justify-between items-center h-16 px-4 z-10 top-0 w-full fixed mt-8">
      <div className="flex w-2/3 items-center justify-between">
        <img src="./src/assets/logo.png" alt="PALACINA INTERIORS" className="w-40" />
        <ul className="hidden md:flex space-x-4">  
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 text-sm py-2 px-2 font-medium">
              HOME
            </a>
          </li>
          {/* Add your other menu items */}
          <li className="group relative">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-400 py-2 px-2 text-sm flex font-medium text-ellipsis overflow-hidden whitespace-nowrap"
            >
              OUR COLLECTION <svg className="h-4 w-4 ml-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L7.071 7.071L10 4.071L7.071 1L4 4L7.071 7.071Z" fill="currentColor"></path></svg>
            </a>
            <ul className="absolute hidden group-hover:block top-full left-0 bg-grey w-48">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Space Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Color Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Furniture & Accessory Selection
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              ABOUT
            </a>
          </li>
          
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              PRICES
            </a>
          </li>
          {/* <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              SHOP
            </a>
          </li> */}
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              TEAM
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
              CONTACT
            </a>
          </li>
          <li className="group relative">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium flex items-center text-sm"
            >
              SERVICES <svg className="h-4 w-4 ml-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L7.071 7.071L10 4.071L7.071 1L4 4L7.071 7.071Z" fill="currentColor"></path></svg>
            </a>
            <ul className="absolute hidden group-hover:block top-full left-0 bg-grey w-48">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Interior Finishing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Landscaping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Cleaning and Laundry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  Interior Design & Decor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
                >
                  B&B mantainance
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="flex items-center md:hidden">
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars} 
            className="h-6 w-6 text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Email and Contact Information */}
      <div className="hidden md:flex md:flex-col md:justify-end md:items-end md:space-y-2 md:space-x-4 absolute top-0 right-0 bg-grey mr-20">
        <p className="text-gray-900 text-sm font-medium">info@waridihomegrooming.com</p>
        <p className="text-gray-900 text-sm font-medium">+254 733 139 202</p>
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 bg-grey w-full border-t-2 border-gray-200 z-20 text-left">
          <ul className="flex flex-col items-center">
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      HOME
    </a>
  </li>
  <li className="group relative">
    <a
      href="#"
      className="text-gray-900 hover:text-gray-400 py-2 px-2 text-sm flex font-medium text-ellipsis overflow-hidden whitespace-nowrap"
    >
      OUR COLLECTION <svg className="h-4 w-4 ml-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L7.071 7.071L10 4.071L7.071 1L4 4L7.071 7.071Z" fill="currentColor"></path></svg>
    </a>
    <ul className="absolute hidden group-hover:block top-full left-0 bg-grey w-48">
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 2
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 3
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      ABOUT
    </a>
  </li>
  
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      BLOG
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      PRICES
    </a>
  </li>
  {/* <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      SHOP
    </a>
  </li> */}
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      TEAM
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium text-sm">
      CONTACT US
    </a>
  </li>
  <li className="group relative">
    <a
      href="#"
      className="text-gray-900 hover:text-gray-400 py-2 px-2 font-medium flex items-center text-sm"
    >
      SERVICES<svg className="h-4 w-4 ml-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L7.071 7.071L10 4.071L7.071 1L4 4L7.071 7.071Z" fill="currentColor"></path></svg>
    </a>
    <ul className="absolute hidden group-hover:block top-full left-0 bg-grey w-48">
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 2
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 hover:text-gray-400 py-2 px-4 block"
        >
          Submenu Item 3
        </a>
      </li>
    </ul>
  </li>
</ul>

        </div>
      )}
       <section className={`mt-16 ${isMenuOpen ? 'pt-40' : ''}`}>
        {/* Content of the section */}
      </section>
    </nav>
  );
}

export default NavigationBar;


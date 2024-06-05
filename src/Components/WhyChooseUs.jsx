

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCogs,
  faDollarSign,
  faLeaf,
  faPeopleCarry,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function WhyChooseUs() {
  const priceListItems = [
    {
      title: 'Proven Excellence',
      description: 'Our commitment to excellence ensures top-quality laundry care for you.',
      icon: faCheckCircle,
    },
    {
      title: 'Operational Excellence',
      description: 'We use state-of-the-art equipment and processes for efficient service.',
      icon: faCogs,
    },
    {
      title: 'Competitive Pricing',
      description: 'Our rates are competitive, offering you great value for your money.',
      icon: faDollarSign,
    },
    {
      title: 'Eco-Friendly Services',
      description: 'We prioritize eco-friendly practices to minimize our environmental impact.',
      icon: faLeaf,
    },
    {
      title: 'Personalized Service',
      description: 'We tailor our services to meet your unique needs and preferences.',
      icon: faPeopleCarry,
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'We guarantee your satisfaction, ensuring you are happy with our services.',
      icon: faSmile,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % priceListItems.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? priceListItems.length - 1 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % priceListItems.length);
  // };

  const currentItem = priceListItems[currentIndex];

  const itemVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: '-100vw', transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md px-8 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-orange">Why Choose Us</h2>
      <div className="relative flex items-center justify-center">
        {/* <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange p-2 rounded-full shadow-md"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-gray text-xl font-semibold" />
        </button> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col items-center space-y-4 p-4 border rounded-lg hover:shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FontAwesomeIcon icon={currentItem.icon} className="text-orange text-4xl" />
            <h3 className="text-lg font-semibold text-center text-orange">{currentItem.title}</h3>
            <p className="text-gray-700 text-base text-center">{currentItem.description}</p>
          </motion.div>
        </AnimatePresence>
        {/* <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange p-2 rounded-full shadow-md"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-gray text-2xl font-bold" />
        </button> */}
      </div>
    </div>
  );
}

export default WhyChooseUs;


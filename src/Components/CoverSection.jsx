

// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const coverSections = [
//   {
//     title: 'Waridi Home Grooming Services:',
//     subtitle: 'Transforming Your Space into a Haven',
//     buttonText: 'Order Now',
//     image: './src/assets/image1.jpg',
//   },
//   {
//     title: 'Our Services',
//     services: [
//       'Interior Design & Decor',
//       'Cleaning Services',
//       'Residential Cleaning',
//       'Mama Fua Services & Laundry',
//       'Commercial Property Cleaning',
//       'Common Area Maintenance',
//       'Airbnb Cleaning & Maintenance',
//       'Sofa Cleaning',
//       'Landscaping',
//     ],
//     image: './src/assets/image2.jpg',
//   },
//   {
//     title: 'Additional Services',
//     services: [
//       'Space Planning',
//       'Color Consultation',
//       'Furniture Selection & Placement',
//       'Accessory Selection',
//     ],
//     image: './src/assets/image8.jpg',
//   },
// ];

// const CoverSection = () => {
//   const [currentSection, setCurrentSection] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSection((prevSection) => (prevSection + 1) % coverSections.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const sectionVariants = {
//     initial: { opacity: 0, scale: 0.8, x: -200 },
//     animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
//     exit: { opacity: 0, scale: 0.8, x: 200, transition: { duration: 1 } },
//   };

//   return (
//     <section className="cover-section bg-grey flex flex-col items-start justify-center h-screen relative mt-10 overflow-hidden">
//       <AnimatePresence>
//         {coverSections.map((section, index) => (
//           currentSection === index && (
//             <motion.div
//               key={index}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               variants={sectionVariants}
//               className="absolute top-0 left-0 w-full h-full"
//             >
//               <img
//                 src={section.image}
//                 alt="Cover Image"
//                 className="w-full h-screen object-cover z-0"
//                 style={{ maxHeight: '550px' }}
//               />
//               <div className="absolute top-0 left-0 p-8 mt-20">
//                 <div className="bg-blue bg-opacity-10 p-8 rounded-md text-left">
//                   <h1 className="text-4xl font-bold text-orange">{section.title}</h1>
//                   {section.subtitle && <p className="text-xl mt-4 text-orange">{section.subtitle}</p>}
//                   {section.services && (
//                     <ul className="text-xl mt-4 text-orange">
//                       {section.services.map((service, serviceIndex) => (
//                         <li key={serviceIndex}>{service}</li>
//                       ))}
//                     </ul>
//                   )}
//                   {section.buttonText && (
//                     <button className="bg-orange hover:bg-transparent hover:text-orange text-grey font-bold py-2 px-4 rounded mt-8 flex items-center transition duration-300 ease-in-out">
//                       {section.buttonText}
//                       <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )
//         ))}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default CoverSection;


import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const coverSections = [
  {
    title: 'Waridi Home Grooming Services:',
    subtitle: 'Transforming Your Space into a Haven',
    buttonText: 'Book Now',
    image: './src/assets/image1.jpg',
  },
  {
    title: 'Our Services',
    services: [
      'Interior Design & Decor',
      'Cleaning Services',
      'Residential Cleaning',
      'Mama Fua Services & Laundry',
      'Commercial Property Cleaning',
      'Common Area Maintenance',
      'Airbnb Cleaning & Maintenance',
      'Sofa Cleaning',
      'Landscaping',
    ],
    image: './src/assets/image2.jpg',
  },
  {
    title: 'Additional Services',
    services: [
      'Space Planning',
      'Color Consultation',
      'Furniture Selection & Placement',
      'Accessory Selection',
    ],
    image: './src/assets/image8.jpg',
  },
];

const CoverSection = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % coverSections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionVariants = {
    initial: { opacity: 0, scale: 0.8, x: -200 },
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.8, x: 200, transition: { duration: 1 } },
  };

  return (
    <section className="cover-section bg-grey flex flex-col items-start justify-center h-screen relative mt-10 overflow-hidden">
      <AnimatePresence>
        {coverSections.map((section, index) => (
          currentSection === index && (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sectionVariants}
              className="absolute top-0 left-0 w-full h-full"
            >
              <img
                src={section.image}
                alt="Cover Image"
                className="w-full h-screen object-cover z-0"
                style={{ maxHeight: '550px' }}
              />
              <div className="absolute top-0 left-0 p-8 mt-20">
                <div className="bg-blue bg-opacity-10 p-8 rounded-md text-left">
                  <h1 className="text-4xl font-bold text-orange">{section.title}</h1>
                  {section.subtitle && <p className="text-xl mt-4 text-orange">{section.subtitle}</p>}
                  {section.services && (
                    <ul className="text-xl mt-4 text-orange">
                      {section.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  )}
                  {section.buttonText && (
                    <Link to="/contact" className="text-orange font-bold py-2 px-4 rounded mt-8 flex items-center transition duration-300 ease-in-out" onClick={scrollToTop}>
                      {section.buttonText}
                      <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </section>
  );
};

export default CoverSection;

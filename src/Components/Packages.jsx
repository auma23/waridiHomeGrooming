


// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// const packages = [
//   {
//     title: 'Alizeti',
//     price: 'Ksh. 55,000',
//     description: 'Ideal for 1-bedroom/studio Apartment',
//     features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures: stylish lighting options to enhance ambience.'],
//     color: 'bg-blue',
//   },
//   {
//     title: 'Zafarani',
//     price: 'Ksh.85,000 - 100,000',
//     description: 'Ideal for 2-bedroom House',
//     features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs: Soften and define spaces with carefully selected rugs.'],
//     color: 'bg-green',
//   },
//   {
//     title: 'Waridi',
//     price: 'Ksh.150,000 - 170,000',
//     description: 'Ideal for 3-bedroom House',
//     features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs'],
//     color: 'bg-orange',
//   },
//   {
//     title: 'Dahlia',
//     price: 'Ksh.250,000',
//     description: 'Ideal for 2-bedroom Apartment',
//     features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs', 'Window Treatments', 'Accent Mirrors: Reflect light and add visual interest to rooms'],
//     color: 'bg-pink-600',
//   },
//   {
//     title: 'Zuhura',
//     price: 'Ksh.300,000',
//     description: 'Ideal for 5-bedroom Apartment',
//     features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs', 'Window Treatments', 'Accent Mirrors', 'Curtains'],
//     color: 'bg-purple-600',
//   },
// ];

// const PackageCard = ({ title, price, description, features, color }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.1 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       className="w-full md:w-1/3 p-4"
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="bg-white overflow-hidden shadow-md h-full flex flex-col bg-gradient-to-b from-grey to-white">
//         <motion.div 
//           className={`px-6 py-4 ml-8 `}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//         >
//           <motion.div 
//             className={`font-bold text-xl mb-2 text-white ${color}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//           >
//             {title}
//           </motion.div>
//           <motion.p 
//             className="text-orange text-base text-left font-semibold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//           >
//             {price}
//           </motion.p>
//           <motion.p 
//             className="text-green text-sm mt-2 text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
//           >
//             {description}
//           </motion.p>
//         </motion.div>
//         <div className="px-6 py-4 flex-grow ml-8">
//           <ul>
//             {features.map((feature, index) => (
//               <motion.li
//                 key={index}
//                 className="flex items-center text-gray-700 text-sm mb-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M3.75 9.167a.417.417 0 1 1 0-.834h12.5a.417.417 0 1 1 0 .834h-12.5zM3.75 13.334a.417.417 0 1 1 0-.834h12.5a.417.417 0 1 1 0 .834h-12.5zM3.75 5a.417.417 0 1 1 0-.833h7.5a.417.417 0 1 1 0 .833h-7.5z"
//                   />
//                 </svg>
//                 {feature}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Packages = () => (
//   <div>
//     <h1 className="text-3xl font-bold text-center text-green m-8">Interior Decor And Finishing Packages</h1>
//     <div className="flex flex-wrap -mx-4">
//       {packages.map((pkg, index) => (
//         <PackageCard key={index} {...pkg} />
//       ))}
//     </div>
//   </div>
// );

// export default Packages;

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const packages = [
  {
    title: 'Alizeti',
    price: 'Ksh. 55,000',
    description: 'Ideal for 1-bedroom/studio Apartment',
    features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures: stylish lighting options to enhance ambience.'],
    color: 'bg-blue',
  },
  {
    title: 'Zafarani',
    price: 'Ksh.85,000 - 100,000',
    description: 'Ideal for 2-bedroom House',
    features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs: Soften and define spaces with carefully selected rugs.'],
    color: 'bg-green',
  },
  {
    title: 'Waridi',
    price: 'Ksh.150,000 - 170,000',
    description: 'Ideal for 3-bedroom House',
    features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs'],
    color: 'bg-orange',
  },
  {
    title: 'Dahlia',
    price: 'Ksh.250,000',
    description: 'Ideal for 2-bedroom Apartment',
    features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs', 'Window Treatments', 'Accent Mirrors: Reflect light and add visual interest to rooms'],
    color: 'bg-pink-600',
  },
  {
    title: 'Zuhura',
    price: 'Ksh.300,000',
    description: 'Ideal for 5-bedroom Apartment',
    features: ['Furniture Arrangement', 'Exquisite Decor Pieces', 'Wallpaper', 'Lighting Fixtures', 'Area Rugs', 'Window Treatments', 'Accent Mirrors', 'Curtains'],
    color: 'bg-purple-600',
  },
];

const PackageCard = ({ title, price, description, features, color }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      className="w-full md:w-1/3 p-4"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-white overflow-hidden shadow-md h-full flex flex-col bg-gradient-to-b from-grey to-white">
        <motion.div
          className={`px-6 py-4 ml-8`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <motion.div
            className={`font-bold text-xl mb-2 text-white ${color}`}
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {title}
          </motion.div>
          <motion.p
            className="text-orange text-base text-left font-semibold"
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {price}
          </motion.p>
          <motion.p
            className="text-green text-sm mt-2 text-left"
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            {description}
          </motion.p>
        </motion.div>
        <div className="px-6 py-4 flex-grow ml-8">
          <ul>
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700 text-sm mb-2"
                initial="hidden"
                animate={controls}
                variants={listItemVariants}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 9.167a.417.417 0 1 1 0-.834h12.5a.417.417 0 1 1 0 .834h-12.5zM3.75 13.334a.417.417 0 1 1 0-.834h12.5a.417.417 0 1 1 0 .834h-12.5zM3.75 5a.417.417 0 1 1 0-.833h7.5a.417.417 0 1 1 0 .833h-7.5z"
                  />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Packages = () => (
  <div>
    <h1 className="text-3xl font-bold text-center text-green m-8">Interior Decor And Finishing Packages</h1>
    <div className="flex flex-wrap -mx-4">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  </div>
);

export default Packages;

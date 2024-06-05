import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image6 from '../assets/image6.png';
import Image8 from '../assets/image8.png';
import Image7 from '../assets/image7.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image9 from '../assets/image9.png';




const priceListItems = [
  {
    title: '1-Bedroom Apartment Maintenance',
    description: 'Laundry',
    description1: 'Ironing & Folding',
    description2: 'General House Cleaning',
    description3: 'Shoes Cleaning',
    description4: 'Utensils & surfaces cleaning',
    price: 'Kshs. 3500',
    imageUrl: Image6,
  },
  {
    title: '2-Bedroom Apartment Maintenance',
    description: 'Laundry',
    description1: 'Ironing & Folding',
    description2: 'General House Cleaning',
    description3: 'Shoes Cleaning',
    description4: 'Utensils & surfaces cleaning',
    price: 'Kshs. 4500',
    imageUrl: Image8,
  },
  {
    title: '3-Bedroom Apartment Maintenance',
    description: 'Laundry',
    description1: 'Ironing & Folding',
    description2: 'General House Cleaning',
    description3: 'Shoes Cleaning',
    description4: 'Utensils & surfaces cleaning',
    price: 'Kshs. 5500',
    imageUrl: Image7,
  },
  {
    title: '4-Bedroom Apartment Maintenance',
    description: 'Laundry',
    description1: 'Ironing & Folding',
    description2: 'General House Cleaning',
    description3: 'Shoes Cleaning',
    description4: 'Utensils & surfaces cleaning',
    price: 'Kshs. 6500',
    imageUrl: Image4,
  },
  {
    title: 'Stand Alone House Cleaning',
    description: '1 Bedroom @Ksh 1500',
    description1: '2 Bedroom @Ksh 2000',
    description2: '3 Bedroom @Ksh 2500',
    description3: 'For 4 bedroom and above call for quotation',
    imageUrl: Image9,
  },
  {
    title: 'Apartment Cleaning',
    description: 'Studio @Ksh. 1500',
    description1: '1 Bedroom @Ksh. 2000',
    description2: '2 Bedroom @Ksh. 2500',
    description3: '3 Bedroom @Ksh. 3500',
    description4: 'For 4 bedroom and above call for quotation',
    imageUrl: Image5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function PriceList() {
  return (
    <div className="bg-[#fff] rounded-lg shadow-md px-4 py-8" id="price">
      <h2 className="text-3xl font-bold text-center mb-4 text-green">Mama Safi Packages</h2>
      <h3 className="text-l font-semibold text-center mb-4 text-green">Every Space needs Waridi home grooming services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {priceListItems.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const ServiceCard = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-between p-4 border rounded-lg hover:shadow-lg bg-gradient-to-b from-grey to-transparent"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {item.imageUrl && (
            <motion.img
              className="h-12 w-12 object-cover rounded-lg"
              src={item.imageUrl}
              alt={item.title}
              variants={textVariants}
            />
          )}
          <motion.h3
            className="text-xl text-left font-bold text-yellow"
            variants={textVariants}
          >
            {item.title}
          </motion.h3>
        </div>
        <motion.span
          className="text-yellow text-base font-bold text-right"
          variants={textVariants}
        >
          {item.price}
        </motion.span>
      </div>
      <div className="flex flex-col space-y-2 text-left ml-20">
        <motion.p className="text-gray-500 text-base" variants={textVariants}>
          {item.description}
        </motion.p>
        <motion.p className="text-gray-500 text-base" variants={textVariants}>
          {item.description1}
        </motion.p>
        <motion.p className="text-gray-500 text-base" variants={textVariants}>
          {item.description2}
        </motion.p>
        <motion.p className="text-gray-500 text-base" variants={textVariants}>
          {item.description3}
        </motion.p>
        <motion.p className="text-gray-500 text-base" variants={textVariants}>
          {item.description4}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PriceList;

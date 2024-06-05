
  
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image16 from '../assets/image16.avif';
import Image24 from '../assets/image24.jpg';
import Image19 from '../assets/image19.avif';
import Image26 from '../assets/image26.jpg';
import Image6 from '../assets/image6.jpg';
import Image22 from '../assets/image22.jpg';




const services = [
  {
    image: Image16,
    title: 'Laundry',
  },
  {
    image: Image24,
    title: 'Interior finishing',
  },
  {
    image: Image26,
    title: 'AirBnB maintenance',
  },
  {
    image: Image19,
    title: 'Cleaning',
  },
  {
    image: Image22,
    title: 'Interior Design & Decor',
  },
  {
    image: Image6,
    title: 'Landscaping',
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

const Services = () => {
  return (
    <section className="services bg-gray-100 py-20" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjusts how much of the component needs to be visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      className="card relative rounded-lg overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={imageVariants}
    >
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        variants={imageVariants}
      />
      <motion.div
        className="card-content absolute bottom-0 left-0 right-0 p-6 text-grey bg-gradient-to-b from-transparent to-green"
        variants={textVariants}
      >
        <h3 className="text-4xl font-bold mb-0">{service.title}</h3>
      </motion.div>
    </motion.div>
  );
};

export default Services;

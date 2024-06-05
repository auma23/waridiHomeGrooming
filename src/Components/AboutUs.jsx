
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutImage from '../assets/image3.jpg';

function AboutUs() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10" id="about" ref={ref}>
      <div className="text-center p-6 text-3xl font-bold text-green">
        About Us
      </div>
      <motion.div
        className="flex flex-col md:flex-row md:h-screen"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <img className="h-full w-full object-cover md:w-1/2" src={AboutImage} alt="Waridi Home grooming services" />
        <div className="flex flex-col p-6 md:pl-12 md:w-1/2 white-space-nowrap text-left">
          <h2 className="text-2xl font-bold mb-2 text-green">Waridi Home Grooming Services</h2>
          <p className="text-orange text-xl">Your Space, Transformed</p>
          <p className="text-gray-700 text-xl mt-4">
            Waridi Home Grooming Services is a Kenyan-based company dedicated to transforming your space into a haven of comfort and beauty. We offer a comprehensive range of services designed to meet all your interior design, decor, and cleaning needs for both residential and commercial.
          </p>
          <p className="text-orange text-xl mt-3">A Haven by Design</p>
          <p className="text-gray-700 text-xl mt-4">
            Our journey with you begins with a conception of your dream space. Whether you are starting from scratch or revamping an existing space, our experienced interior design team will collaborate with you to understand your vision, lifestyle, and budget. We offer initial consultations to delve into your desires, followed by detailed design plans that translate your dreams into reality.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;

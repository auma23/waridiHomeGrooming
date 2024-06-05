
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import LeisureImage from '../assets/image30.jpg';

const Leisure = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <div>
      <motion.section 
        className="relative h-80 flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: `url(${LeisureImage})`}}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-orange">Come Home Happy</h2>
          <p className="text-lg text-orange">We will clean for you</p>
        </div>
      </motion.section>
      <section className="py-12 bg-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-orange mb-4">About Waridi</h2>
          <p className="text-md text-gray-600 mb-8">Waridi Grooming Services: Where cleanliness meets creativity. We offer meticulous cleaning and bespoke interior decor services, curated to enhance your living space. With our attention to detail and commitment to excellence, we transform houses into homes, reflecting your personality and preferences in every corner.</p>
          <Link to="/about-us">
            <button className="bg-grey text-orange px-6 py-3 rounded-lg shadow-md hover:bg-green-600" onClick={handleButtonClick}>Learn More</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leisure;


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Brian from '../assets/brian.jpeg';
import Sylvia from '../assets/sylvia.jpg';


const teamMembers = [
  {
    name: 'Brian Basweti',
    title: 'CEO',
    image: Brian,
    description: 'A visionary leader known for his strategic ability to drive transformative growth within the company.',
  },
  {
    name: 'Sylvia Kaberia',
    title: 'COO',
    image: Sylvia,
    description: 'Excels in operational efficiency and is renowned for her skill in streamlining processes',
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

function TeamMember() { 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-grey rounded-lg shadow-md px-4 py-8 overflow-hidden flex flex-col items-center justify-center" id='team'>
      <h2 className="text-3xl font-semibold text-center mb-4 text-orange">Founders</h2> 
      <AnimatePresence mode="wait">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {teamMembers.map(member => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
              }}
              className="flex flex-col items-center p-4 sm:w-full md:w-1/2 lg:w-1/3"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
                variants={imageVariants}
              />
              <motion.h3
                className="text-xl font-bold text-center mb-2 text-orange"
                variants={textVariants}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-gray-700 text-base text-center mb-4"
                variants={textVariants}
              >
                {member.title}
              </motion.p>
              <motion.p
                className="text-gray-500 text-base text-center"
                variants={textVariants}
              >
                {member.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default TeamMember;

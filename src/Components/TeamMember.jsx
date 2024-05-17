import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Brian Basweti',
    title: 'CEO',
    image: './src/assets/brian.jpeg',
    description: 'A visionary leader known for his strategic ability to drive transformative growth within the company.',
  },
  {
    name: 'Sylvia Kaberia',
    title: 'COO',
    image: './src/assets/image3.jpg',
    description: 'Excels in operational efficiency and is renowned for her skill in streamlining processes',
  },
  // {
  //   name: 'Michael Lee',
  //   title: 'Designer',
  //   image: './src/assets/image1.jpg',
  //   description: 'Nulla vitae elit libero, a pharetra augue.',
  // },
];

function TeamMember() { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const animationRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  useEffect(() => {
    const animation = animationRef.current;
    if (animation) {
      animation.start({
        x: cardRef.current.offsetWidth * -1, 
        transition: { duration: 5, ease: 'linear', repeat: Infinity },
      });
    }
  }, [animationRef.current]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-grey rounded-lg shadow-md px-4 py-8 overflow-hidden flex flex-col items-center" 
      id='team'
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-green">Founders</h2> 
      <div className="relative">
        <img
          src={teamMembers[currentIndex].image}
          alt={teamMembers[currentIndex].name}
          className="w-24 h-24 object-cover rounded-full mb-4" 
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-2 text-orange">
        {teamMembers[currentIndex].name}
      </h3>
      <p className="text-gray-700 text-base text-center mb-4">
        {teamMembers[currentIndex].title}
      </p>
      <p className="text-gray-500 text-base text-center">
        {teamMembers[currentIndex].description}
      </p>
      <button
        className=" bg-orange hover:bg-opacity-50 text-grey font-bold py-2 px-4 rounded-lg shadow-md mt-10" 
        onClick={handleNext}
        style={{ transition: 'all 0.3s', color: 'white' }} 
      >
        Next 
      </button>
    </motion.div>
  );
}

export default TeamMember;

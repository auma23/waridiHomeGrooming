
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const CoverSection = () => {
//   return (
//     <section className="cover-section bg-gray-100 flex flex-col items-start justify-center h-screen relative mt-10">
//       <img
//         src="./src/assets/image1.jpg"
//         alt="Cover Image"
//         className="w-full h-screen object-cover z-0"
//         style={{ maxHeight: '550px' }} 
//       />
//       <div className="absolute top-0 left-0 p-8 mt-20">
//         <div className="bg-yellow bg-opacity-50 p-8 rounded-md">
//           <h1 className="text-4xl font-bold text-green">Our Services</h1>
//           <p className="text-xl mt-4 text-orange">We provide a variety of services to meet your needs.</p>
//           <button className="bg-gradient-to-b from-orange to-green hover:bg-blue text-grey font-bold py-2 px-4 rounded mt-8 flex items-center">
//             Order Now
//             <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoverSection;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CoverSection = () => {
  return (
    <section className="cover-section bg-grey flex flex-col items-start justify-center h-screen relative mt-10">
      <img
        src="./src/assets/image1.jpg"
        alt="Cover Image"
        className="w-full h-screen object-cover z-0"
        style={{ maxHeight: '550px' }}
      />
      <div className="absolute top-0 left-0 p-8 mt-20">
        <div className="bg-yellow bg-opacity-20 p-8 rounded-md text-left">
          <h1 className="text-4xl font-bold text-green">Waridi Home Grooming Services:</h1>
          <p className="text-xl mt-4 text-green"> Transforming Your Space into a Haven</p>
          <button className="bg-green hover:bg-transparent hover:text-green text-grey font-bold py-2 px-4 rounded mt-8 flex items-center transition duration-300 ease-in-out"> {/* No inline styles */}
            Order Now
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;

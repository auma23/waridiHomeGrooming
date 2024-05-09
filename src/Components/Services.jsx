
// const Services = () => {
//   const services = [
//     {
//       image: './src/assets/image4.jpg',
//       title: 'Laundry',
//     },
//     {
//       image: './src/assets/image2.jpg',
//       title: 'Delivery',
//     },
//     {
//       image: './src/assets/image1.jpg',
//       title: 'Wash & Fold',
//     },
//     {
//       image: './src/assets/image4.jpg',  // Replace with your image path
//       title: 'Service 4',
//     },
//     {
//       image: './src/assets/image2.jpg',  // Replace with your image path
//       title: 'Service 5',
//     },
//     {
//       image: './src/assets/image3.jpg',  // Replace with your image path
//       title: 'Service 6',
//     },
//   ];

//   return (
//     <section className="services bg-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-green">Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div key={service.title} className="card relative rounded-lg overflow-hidden">
//               <img src={service.image} alt={service.title} className="w-full h-full object-cover absolute top-0 left-0" />
//               <div className="card-content p-6 flex items-flex-end text-white bg-gradient-to-b from-gray-900 to-transparent">
//                 <h3 className="text-4xl font-bold mb-0">{service.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

const Services = () => {
    const services = [
      {
        image: './src/assets/image4.jpg',
        title: 'Laundry',
      },
      {
        image: './src/assets/image2.jpg',
        title: 'Delivery',
      },
      {
        image: './src/assets/image1.jpg',
        title: 'Wash & Fold',
      },
      {
        image: './src/assets/image4.jpg',  // Replace with your image path
        title: 'Service 4',
      },
      {
        image: './src/assets/image2.jpg',  // Replace with your image path
        title: 'Service 5',
      },
      {
        image: './src/assets/image3.jpg',  // Replace with your image path
        title: 'Service 6',
      },
    ];
  
    return (
      <section className="services bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card relative rounded-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="card-content absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-b from-green to-transparent">
                  <h3 className="text-4xl font-bold mb-0">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  
  



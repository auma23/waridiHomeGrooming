const HowItWorks = () => {
    return (
      <section className="how-it-works bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card relative rounded-lg overflow-hidden">
              <img src="./src/assets/image4.jpg" alt="Icon 1" className="w-full h-full object-cover" />
              <div className="card-content absolute bottom-0 left-0 right-0 p-6 text-grey bg-gradient-to-b from-orange to-transparent">
                <h3 className="text-xl font-bold mb-2">We Collect/You Drop Off</h3>
                <p className="text-lg mb-4">Schedule a pickup or drop off your laundry at a convenient location.</p>
              </div>
            </div>
            <div className="card relative rounded-lg overflow-hidden">
              <img src="./src/assets/image2.jpg" alt="Icon 2" className="w-full h-full object-cover" />
              <div className="card-content absolute bottom-0 left-0 right-0 p-6 text-grey bg-gradient-to-b from-orange to-transparent">
                <h3 className="text-xl font-bold mb-2">We Clean</h3>
                <p className="text-lg mb-4">Our professional team cleans your clothes with care using eco-friendly products.</p>
              </div>
            </div>
            <div className="card relative rounded-lg overflow-hidden">
              <img src="./src/assets/image3.jpg" alt="Icon 3" className="w-full h-full object-cover" />
              <div className="card-content absolute bottom-0 left-0 right-0 p-6 text-grey bg-gradient-to-b from-orange to-transparent">
                <h3 className="text-xl font-bold mb-2">We Deliver/You Pick Up</h3>
                <p className="text-lg mb-4">Get your clean laundry delivered back to you or pick it up at your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  

const HowItWorks = () => {
  return (
    <section className="how-it-works bg-gray-100 py-20" id="collection">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card relative rounded-lg overflow-hidden">
            <img src="./src/assets/image14.jpg" alt="Icon 1" className="w-full h-auto object-cover" />
            <div className="card-content p-6 text-center text-grey bg-gradient-to-b from-orange to-blue">
              <h3 className="text-xl font-bold mb-2">We Collect/You Drop Off</h3>
              <p className="text-lg mb-4">Schedule a pickup or drop off your laundry at a convenient location.</p>
            </div>
          </div>
          <div className="card relative rounded-lg overflow-hidden">
            <img src="./src/assets/image12.avif" alt="Icon 2" className="w-full h-auto object-cover" />
            <div className="card-content p-6 text-center text-grey bg-gradient-to-b from-orange to-blue">
              <h3 className="text-xl font-bold mb-2">We Clean</h3>
              <p className="text-lg mb-4">Our professional team cleans your House, Clothes and Other Items with care.</p>
            </div>
          </div>
          <div className="card relative rounded-lg overflow-hidden">
            <img src="./src/assets/image23.jpg" alt="Icon 3" className="w-full h-auto object-cover" />
            <div className="card-content p-6 text-center text-grey bg-gradient-to-b from-orange to-blue">
              <h3 className="text-xl font-bold mb-2">We Decorate/We finish up</h3>
              <p className="text-lg mb-4">Transform your home with our premium interior finishing and decor services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

  

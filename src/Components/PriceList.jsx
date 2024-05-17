function PriceList() {
    const priceListItems = [
      {
        title: 'LAUNDRY',
        description: 'Per wash up to 7.5kg',
        price: 'Kshs. 1000',
        imageUrl: './src/assets/image6.png',
      },
      {
        title: 'INTERIOR DECOR',
        description: 'Decoration/organisation',
        price: 'Ksh. 1000',
        imageUrl: './src/assets/image9.png',
      },
      {
        title: 'INTERIOR FINISHING',
        description: 'Finish up and decorate',
        price: 'Ksh. 1000',
        imageUrl: './src/assets/image10.png',
      },
      {
        title: 'CLEANING',
        description: 'Wash & arrange',
        price: 'Ksh. 1000',
        imageUrl: './src/assets/image5.png',
      },
      {
        title: 'LAND SCAPING',
        description: 'Landscaping Ideas for Outdoor Space',
        price: 'Ksh. 1000',
        imageUrl: './src/assets/image7.png',
      },
      {
        title: 'B&B MANTAINANCE',
        description: '& Treated with care',
        price: 'Ksh. 1000',
        imageUrl: './src/assets/image8.png',
      },
    ];
  
    return (
      <div className="bg-[#fff] rounded-lg shadow-md px-4 py-8" id="price">
        <h2 className="text-3xl font-bold text-center mb-4 text-green">Price List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {priceListItems.map((item) => (
            <div key={item.title} className="flex flex-col justify-between p-4 border rounded-lg hover:shadow-lg bg-gradient-to-b from-grey to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {item.imageUrl && (
                    <img
                      className="h-12 w-12 object-cover rounded-lg"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  )}
                  <h3 className="text-xl font-bold text-yellow">{item.title}</h3>
                </div>
                <span className="text-gray-500 text-base">{item.price}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PriceList;
  
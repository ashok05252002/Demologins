import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ParkingManagement = ({ navigateTo }) => {
  const products = [
    {
      id: 1,
      title: 'Pro Parking',
      description: 'Advanced web application for managing parking facilities.',
      url: 'https://pro-parking.vercel.app/'
    }
  ];

  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigateTo('dashboard')}
          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Categories</span>
        </button>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Parking Management
          </h1>
          <p className="text-gray-600">
            Efficient parking solutions for your organization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 md:col-span-2 max-w-lg mx-auto w-full"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src="https://www.iproat.com/wp-content/uploads/2025/01/cropped-iProAT-Solutions-Black-180x60.png" 
                  alt="iProAT Solutions" 
                  className="h-10"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {product.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 text-center">
                {product.description}
              </p>
              
              <button
                onClick={() => handleOpenLink(product.url)}
                className="w-full bg-red-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Open</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingManagement;

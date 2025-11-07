import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Receipt, Dumbbell, Building2, Pill, Users, School } from 'lucide-react';

const MainDashboard = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'parking',
      name: 'Parking Management',
      icon: Car,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'expense',
      name: 'Expense Management',
      icon: Receipt,
      color: 'bg-gradient-to-br from-gray-50 to-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      id: 'gym',
      name: 'Gym Management',
      icon: Dumbbell,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'tenant',
      name: 'Tenant Management',
      icon: Building2,
      color: 'bg-gradient-to-br from-gray-50 to-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy Management',
      icon: Pill,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'propeople',
      name: 'Propeople',
      icon: Users,
      color: 'bg-gradient-to-br from-gray-50 to-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      id: 'proschool',
      name: 'Pro School',
      icon: School,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="https://www.iproat.com/wp-content/uploads/2025/01/cropped-iProAT-Solutions-Black-180x60.png" 
              alt="iProAT Solutions" 
              className="h-12 md:h-14"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            iProAT Product Suite
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Select a category to explore our solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/${category.id}`)}
                className={`${category.color} rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${category.iconColor} bg-white rounded-xl p-3 shadow-sm`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    {category.name}
                  </h2>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;

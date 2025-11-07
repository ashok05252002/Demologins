import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import MainDashboard from './components/MainDashboard';
import ExpenseManagement from './components/ExpenseManagement';
import ParkingManagement from './components/ParkingManagement';
import GymManagement from './components/GymManagement';
import TenantManagement from './components/TenantManagement';
import PharmacyManagement from './components/PharmacyManagement';
import Propeople from './components/Propeople';
import ProSchool from './components/ProSchool';
import Footer from './components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  const [page, setPage] = useState('login');

  const handleLogin = () => {
    setPage('dashboard');
  };

  const navigateTo = (targetPage) => {
    setPage(targetPage);
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <AnimatedPage key="login"><Login onLoginSuccess={handleLogin} /></AnimatedPage>;
      case 'dashboard':
        return <AnimatedPage key="dashboard"><MainDashboard navigateTo={navigateTo} /></AnimatedPage>;
      case 'expense':
        return <AnimatedPage key="expense"><ExpenseManagement navigateTo={navigateTo} /></AnimatedPage>;
      case 'parking':
        return <AnimatedPage key="parking"><ParkingManagement navigateTo={navigateTo} /></AnimatedPage>;
      case 'gym':
        return <AnimatedPage key="gym"><GymManagement navigateTo={navigateTo} /></AnimatedPage>;
      case 'tenant':
        return <AnimatedPage key="tenant"><TenantManagement navigateTo={navigateTo} /></AnimatedPage>;
      case 'pharmacy':
        return <AnimatedPage key="pharmacy"><PharmacyManagement navigateTo={navigateTo} /></AnimatedPage>;
      case 'propeople':
        return <AnimatedPage key="propeople"><Propeople navigateTo={navigateTo} /></AnimatedPage>;
      case 'proschool':
        return <AnimatedPage key="proschool"><ProSchool navigateTo={navigateTo} /></AnimatedPage>;
      default:
        return <AnimatedPage key="login-default"><Login onLoginSuccess={handleLogin} /></AnimatedPage>;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
      {page !== 'login' && <Footer />}
    </div>
  );
}

export default App;

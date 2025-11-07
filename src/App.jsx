import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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

const AnimatedRoute = ({ children }) => (
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const ProtectedWrapper = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/login" 
          element={
            <AnimatedRoute>
              <Login onLogin={handleLogin} />
            </AnimatedRoute>
          } 
        />
        
        <Route element={<ProtectedWrapper />}>
          <Route path="/" element={<AnimatedRoute><MainDashboard /></AnimatedRoute>} />
          <Route path="/expense" element={<AnimatedRoute><ExpenseManagement /></AnimatedRoute>} />
          <Route path="/parking" element={<AnimatedRoute><ParkingManagement /></AnimatedRoute>} />
          <Route path="/gym" element={<AnimatedRoute><GymManagement /></AnimatedRoute>} />
          <Route path="/tenant" element={<AnimatedRoute><TenantManagement /></AnimatedRoute>} />
          <Route path="/pharmacy" element={<AnimatedRoute><PharmacyManagement /></AnimatedRoute>} />
          <Route path="/propeople" element={<AnimatedRoute><Propeople /></AnimatedRoute>} />
          <Route path="/proschool" element={<AnimatedRoute><ProSchool /></AnimatedRoute>} />
        </Route>

        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

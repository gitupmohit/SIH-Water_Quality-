import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageTeam from './components/ManageTeam';
import Contacts from './components/Contacts';
import Invoices from './components/PaymentPage';
import Profile from './components/Profile';
import Donation from './components/Donation';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light and dark modes
import PaymentPage from './components/PaymentPage';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  // Effect to add/remove 'dark' class from the root div
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`flex min-h-screen ${darkMode ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar />
        <div className="w-12"></div>

        {/* Main Content Layout */}
        <div className="flex-1 pl-6 bg-gray-100 dark:bg-gray-800 text-white">
          {/* Theme Toggle Icon positioned above the content */}
          <div className="fixed top-4 right-4 z-50">  
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? (
                <FaSun size={24} color="#FACC15" />
              ) : (
                <FaMoon size={24} color="#3498db" />
              )}
            </button>
          </div>

          {/* Routes and Page Content */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-team" element={<ManageTeam />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/donation" element={<Donation/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

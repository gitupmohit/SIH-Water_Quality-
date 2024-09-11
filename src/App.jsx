// App.js
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageTeam from './components/ManageTeam';
import Contacts from './components/Contacts';
import Invoices from './components/Invoices';
import Profile from './components/Profile';
import Calendar from './components/Calendar';

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
      <div className={`flex ${darkMode ? 'dark' : ''}`}>
        {/* Sidebar */}
        <div >
        <Sidebar />
        </div>
      <div className='w-12'>kj</div>
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 text-white">
          {/* Toggle Button for Dark Mode */}
          <div className="flex justify-end">  
            <button
              className="mb-4 p-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-team" element={<ManageTeam />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


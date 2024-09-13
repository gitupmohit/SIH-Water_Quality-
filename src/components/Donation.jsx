import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the payment page
    navigate('/payment', { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Header Section */}
      <header className="p-6 shadow-md bg-gray-200 dark:bg-gray-800">
        <h1 className="text-4xl font-bold">Donation Portal</h1>
      </header>

      {/* Main Section */}
      <main className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Donation Form */}
        <motion.div
          className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg" htmlFor="amount">Donation Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500"
                placeholder="50"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Donate Now
            </button>
          </form>
        </motion.div>

        {/* Donation History / Featured Campaigns */}
        <motion.div
          className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Recent Donations</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <p className="text-lg font-semibold">Alice donated $100</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">1 hour ago</p>
            </li>
            <li className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <p className="text-lg font-semibold">Bob donated $50</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">3 hours ago</p>
            </li>
            <li className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <p className="text-lg font-semibold">Charlie donated $25</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">5 hours ago</p>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Featured Campaigns</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <h3 className="text-lg font-semibold">Clean Water Initiative</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Goal: $10,000</p>
            </li>
            <li className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <h3 className="text-lg font-semibold">Education for All</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Goal: $20,000</p>
            </li>
          </ul>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-200 dark:bg-gray-800">
        <p className="text-sm text-gray-900 dark:text-gray-400">&copy; 2024 Donation Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Donation;

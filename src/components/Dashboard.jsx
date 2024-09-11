import React, { useState } from 'react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    { id: '01e4d5aa', name: 'johndoe', amount: 43.95 },
    { id: '0315d5aa', name: 'jackdoew', amount: 138.46 },
    { id: '02e4d5bb', name: 'abercrohny', amount: 249.0 },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-6">Dashboard</h1>

      {/* Search Bar */}
      <div className="mt-8 mb-8">
        <input
          type="text"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
          placeholder="Search for a transaction..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400">Emails Sent</p>
          <p className="text-3xl font-bold text-black dark:text-white">12,361</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400">Sales Obtained</p>
          <p className="text-3xl font-bold text-black dark:text-white">431,225</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400">New Clients</p>
          <p className="text-3xl font-bold text-black dark:text-white">32,441</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400">Traffic Received</p>
          <p className="text-3xl font-bold text-black dark:text-white">1,325,134</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Revenue Generated</h2>
        <p className="text-3xl text-black dark:text-white">$59,342.32</p>
        <div className="mt-6 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300"
              >
                <p className="text-black dark:text-white">
                  {transaction.id} - {transaction.name}
                </p>
                <p className="text-green-500 dark:text-green-300">${transaction.amount.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-black dark:text-white">No transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

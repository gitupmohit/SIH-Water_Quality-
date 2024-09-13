import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(annotationPlugin);


ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDataset, setActiveDataset] = useState('Revenue');

  const transactions = [
    { id: '01e4d5aa', name: 'johndoe', amount: 43.95 },
    { id: '0315d5aa', name: 'jackdoew', amount: 138.46 },
    { id: '02e4d5bb', name: 'abercrohny', amount: 249.0 },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  // Bar Chart Data
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [40000, 45000, 50000, 55000, 60000],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses', // New dataset
        data: [15000, 20000, 18000, 22000, 24000],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.5, // Adjust this value for your desired width/height ratio
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

   // Function to handle dataset selection
  const handleDatasetChange = (e) => {
    setActiveDataset(e.target.value); // Set the active dataset to the selected value
  };

  // Filter the active dataset for the bar chart
  const filteredBarData = {
    ...barData,
    datasets: barData.datasets.filter((dataset) => dataset.label === activeDataset),
  };
  
  

  // Pie Chart Data
  const pieData = {
    labels: ['Ph Scale', 'Sales Obtained', 'New Clients', 'Traffic Received'],
    datasets: [
      {
        data: [10, 20, 23, 74],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right',  // Position the labels on the right
        align: 'center',    // Align the labels vertically in the center
        labels: {
          boxWidth: 20,    // Box size for the legend
          padding: 20,     // Padding between legend items
          usePointStyle: true,  // Use point styles for better visual representation
        },
      },
    },
    maintainAspectRatio: false,  // Allow the chart to resize properly
  };

  // Line Chart Data
  // Line Chart Data
// Line Chart Data
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Users Active',
      data: [3000, 4000, 3500, 4500, 5000],
      fill: false,
      backgroundColor: 'rgba(3, 138, 255, 0.5)',
      borderColor: 'rgba(3, 138, 255, 0.5)',
    },
  ],
};

// Generate dashed line annotations for each data point
const annotations = lineData.datasets[0].data.map((value, index) => ({
  type: 'line',
  yMin: value,
  yMax: value,
  borderColor: 'white',
  borderWidth: 2,
  borderDash: [5, 5], // Dashed line
  label: {
    enabled: false,
    content: `Value ${value}`,
    position: 'end',
    backgroundColor: 'rgba(3, 138, 255, 0.5)',
    color: 'white',
    font: {
      size: 12,
    },
  },
}));

// Line Chart Options with Annotations for Each Data Point
const lineOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Disable vertical grid lines
      },
    },
    y: {
      grid: {
        display: false, // Disable general horizontal grid lines
      },
      ticks: {
        beginAtZero: true, // Start Y-axis at 0
        color: 'white', // Set the color of the Y-axis ticks
        stepSize: 500, // Set the interval between ticks (optional)
      },
    },
  },
  plugins: {
    annotation: {
      annotations: annotations, // Add the generated annotations
    },
  },
};



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6  dark:bg-black min-h-screen"
    >
      <h1 className="text-4xl font-bold text-black dark:text-white mb-6">WaterSafety</h1>

      {/* Search Bar */}
      <div className="relative mt-8 mb-8">
        <motion.input
          type="text"
          className={`w-full p-3 pl-12 rounded-lg border text-black border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 ${searchTerm ? 'opacity-100' : 'opacity-75'}`}
          placeholder="Search for a water bodies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          animate={{ opacity: searchTerm ? 1 : 0.75 }}
          transition={{ duration: 0.3 }}
        />
        <span className="absolute inset-y-0 left-0 ml-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m5 5v-5m-5 5h-5m5 5a10 10 0 110 20 10 10 0 010-20z" />
          </svg>
        </span>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
      >
        {[{ title: 'Ph Scale', value: '12,361' }, { title: 'Sales Obtained', value: '431,225' }, { title: 'New Clients', value: '32,441' }, { title: 'Traffic Received', value: '1,325,134' }].map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300 hover:scale-105 transform-gpu"
          >
            <p className="text-gray-500 dark:text-gray-400">{item.title}</p>
            <p className="text-3xl font-bold text-black dark:text-white">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart Section */} 
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contamination Levels</h2>
        <p className="text-3xl text-black dark:text-white">78%</p>
        {!isLoaded && (
          <div className="mt-6 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-8 w-8 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        )}

        {isLoaded && (
          <div className="mb-4">
            <label htmlFor="datasetSelect" className="block text-black dark:text-white mb-2">Select Dataset:</label>
            <select
              id="datasetSelect"
              value={activeDataset}
              onChange={handleDatasetChange}
              className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            >
              <option value="Revenue">Revenue</option>
              <option value="Expenses">Expenses</option>
            </select>
          </div>
        )}

        {isLoaded && (
          <div className="mt-6 h-64 bg-gray-200 dark:bg-black rounded-lg">
            {isLoaded && (
            <div className="w-full md:w-1/2 lg:w-1/3 h-64 bg-gray-200 dark:bg-black rounded-lg">
              <Bar data={filteredBarData} options={barOptions} />
            </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Pie and Line Chart Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900  p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Statistics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-200 dark:bg-black rounded-lg">
            {isLoaded && <Pie data={pieData} options={pieOptions} />}
          </div>
          <div className="h-64 bg-gray-200 dark:bg-black rounded-lg">
            {isLoaded && <Line data={lineData} options={lineOptions} />}
          </div>

        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <p className="text-black dark:text-white">
                  {transaction.id} - {transaction.name}
                </p>
                <p className="text-green-500 dark:text-green-300">${transaction.amount.toFixed(2)}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-black dark:text-white">No transactions found.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;

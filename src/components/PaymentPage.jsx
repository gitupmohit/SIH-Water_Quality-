import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">Payment Page</h1>
        {formData ? (
          <div>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Donation Amount: ${formData.amount}</p>
            {/* Integrate payment gateway here */}
          </div>
        ) : (
          <p>No donation information available</p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;

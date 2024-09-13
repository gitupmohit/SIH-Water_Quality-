import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTachometerAlt, FaUsers, FaEnvelope, FaFileInvoice, FaUser, FaCalendarAlt, FaHandHoldingHeart } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar initially closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-full fixed bg-gray-900 text-white z-10 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-6 flex items-center justify-between">
        <h1 className={`text-2xl font-bold transition-all duration-300 ${!isOpen && 'hidden'}`}>Yamuna</h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars className="text-xl" />
        </button>
      </div>

      <nav className="mt-10">
        <NavLink
          to="/"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaTachometerAlt />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/manage-team"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaUsers />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>ABCAAAASSSSS</span>
        </NavLink>
        <NavLink
          to="/contacts"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaEnvelope />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Contacts</span>
        </NavLink>
        <NavLink
          to="/invoices"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaFileInvoice />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Motu Big</span>
        </NavLink>
        <NavLink
          to="/profile"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaUser />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Profile</span>
        </NavLink>
        <NavLink
          to="/calendar"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaCalendarAlt />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Help</span>
        </NavLink>
        <NavLink
          to="/donation"
          className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaHandHoldingHeart />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Donation Portal</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

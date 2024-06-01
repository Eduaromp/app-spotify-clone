import React from 'react';
import { FaHome, FaSearch, FaBook } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 hidden md:block h-full p-6">
      <ul>
        <li className="mb-6">
          <a href="/" className="flex items-center space-x-2 hover:text-green-500">
            <FaHome size="1.5em" />
            <span>Home</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/search" className="flex items-center space-x-2 hover:text-green-500">
            <FaSearch size="1.5em" />
            <span>Search</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/library" className="flex items-center space-x-2 hover:text-green-500">
            <FaBook size="1.5em" />
            <span>Your Library</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

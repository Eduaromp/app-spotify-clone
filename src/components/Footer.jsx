import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 fixed bottom-0 w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4">
        <FaBackward size="1.5em" className="hover:text-green-500 cursor-pointer" />
        <FaPlay size="1.5em" className="hover:text-green-500 cursor-pointer" />
        <FaForward size="1.5em" className="hover:text-green-500 cursor-pointer" />
      </div>
      <div className="text-center">Song Info</div>
      <div className="flex items-center space-x-4">
        <FaVolumeUp size="1.5em" />
        <input type="range" className="w-24" />
      </div>
    </footer>
  );
};

export default Footer;

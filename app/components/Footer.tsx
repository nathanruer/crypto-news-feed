'use client';

import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          Made with <FaHeart className="text-violet-500 inline-block" />
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-white cursor-pointer hover:text-white/80
          hover:scale-110 transition duration-300 ease-in-out">
            <FaTwitter className="w-6 h-6 fill-current" />
          </a>
          <a className="text-white cursor-pointer hover:text-white/80 
          hover:scale-110 transition duration-300 ease-in-out">
            <FaGithub className="w-6 h-6 fill-current" />
          </a>
          <div className="text-white">
            Version 1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
'use client';

import { useTheme } from "next-themes";
import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const isLightTheme = theme === "light";

  return (
    <div className="p-10">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FiSun
            className={`w-6 h-6
            ${isLightTheme ? 'text-black' : 'text-gray-400 hover:text-white cursor-pointer'}`}
            onClick={() => setTheme("light")}
          />
          <span>/</span>
          <FiMoon
            className={`w-6 h-6
            ${isLightTheme ? 'text-gray-400 hover:text-black cursor-pointer' : 'text-white'}`}
            onClick={() => setTheme("dark")}
          />
        </div>
        <div className="text-lg font-bold">
          Made with <FaHeart className="text-violet-500 inline-block" />
        </div>
        <div className="flex items-center space-x-4">
          <a
            className="text-black dark:text-white cursor-pointer hover:opacity-80
            hover:scale-110 transition"
          >
            <FaTwitter className="w-6 h-6 fill-current" />
          </a>
          <a
            className="text-black dark:text-white cursor-pointer hover:opacity-80
            hover:scale-110 transition"
          >
            <FaGithub className="w-6 h-6 fill-current" />
          </a>
          <div>
            Version 1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

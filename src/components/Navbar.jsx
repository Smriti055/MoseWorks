import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../assets/icon.png"; // Adjust the path if needed



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow-md border-t-4 border-l-4 border-r-4 border-gray-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-poppins font-bold text-gray-800 dark:text-white">
            MOSEWORKS
          </div>

          <div className="text-xl font-bold text-gray-800 dark:text-white">
            <img
              src={icon}
              alt="Brand Icon"
              className="w-10 h-10"
            />
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-white focus:outline-none"
            whileHover={{ scale: 1.2 }}
          >
            {darkMode ? "🌙" : "☀️"}
          </motion.button>

          {/* Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none"
            whileHover={{ scale: 1.2 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Collapsible Menu */}
        {isMenuOpen && (
          <motion.ul
            className="pb-4 flex flex-col items-center space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {["Home", "Features", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                className="text-gray-800 font-bold text-xl dark:text-white hover:text-gray-600 py-2 cursor-pointer"
              >
                <Link to={item === "Contact" ? "/contact" : "/"}>{item}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

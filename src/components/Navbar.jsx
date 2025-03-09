import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../assets/icon.png"; // Ensure the path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setDarkMode(theme === "dark");

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow-md border-t-4 border-l-4 border-r-4 border-gray-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          MOSEWORKS
        </h1>

        {/* Brand Icon */}
        <img src={icon} alt="Brand Icon" className="w-10 h-10" />

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-white focus:outline-none"
          whileHover={{ scale: 1.2 }}
        >
          {darkMode ? "🌙" : "☀️"}
        </motion.button>

        {/* Menu Toggle */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 dark:text-white focus:outline-none"
          whileHover={{ scale: 1.2 }}
        >
          ☰
        </motion.button>
      </div>

      {/* Menu Items */}
      <motion.div
        className={`overflow-hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col items-center space-y-2 pb-4">
          {["Home", "Features", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="text-gray-800 font-bold text-xl dark:text-white hover:text-gray-600 py-2 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

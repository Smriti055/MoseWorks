import React from "react";
import icon from "../assets/icon.png"; 


import { motion } from "framer-motion";

const Hero = () => {
  const handleClick = () => {
    alert("Thank you for visiting!");
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 px-8 py-15 mt-1 border-r-4 border-l-2 border-gray-500">
      <div className="container mx-auto px-4 w-full">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Heading */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Shaping the Digital Horizon with Superior Creativity and Precision
            </h1>
          </motion.div>

          {/* Column 2: Moseworks with Half-Circle Background */}
          <motion.div
            className="flex items-end justify-end w-full md:w-1/2 ml-0 md:ml-56 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Half-circle background */}
            <div
              className="relative flex flex-col items-end space-y-2 p-6 bg-gray-100 dark:bg-gray-800"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderTopRightRadius: "170px",
                borderBottomRightRadius: "50px",
              }}
            >
              <motion.div
                className="flex items-center justify-end pr-6 ml-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-xl text-gray-800 dark:text-white mr-3">
                  Mouseworks is a 360 digital production house
                </span>
              </motion.div>

              {/* Half-Circle Button */}
              <motion.button
                onClick={handleClick}
                className="bg-black mr-10 dark:bg-gray-700 text-white w-16 h-16 flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Second Row: 4 Columns */}
        <motion.div
 <motion.div
  className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 border-t-4 border-b-4 border-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Column 1 */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-8xl mt-14 font-bold text-black dark:text-white">
              573
            </span>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://icon-library.com/images/asterisk-icon/asterisk-icon-27.jpg"
              className="w-10 h-10"
              alt="Asterisk Icon"
            />
            <p className="text-gray-600 dark:text-gray-300 mt-4 font-semibold text-2xl">
              Number of clients we have handled so far
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center overflow-hidden h-64"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://th.bing.com/th/id/OIP.SwDeLvja9xrbogDCSwqbHQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
              alt="Sample Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Column 4 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg text-center flex flex-col items-start font-semibold text-xl mt-10"
            whileHover={{ scale: 1.05 }}
          >
            <p>Services:</p>
            <p>Strategic design partner</p>
            <p>Digital Production House</p>
            <p>Content Production</p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 border-b-4 border-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Top Half: Image */}
          <motion.div className="flex-1 overflow-hidden border-t-4 border-gray-500">
            <img
              src="https://reloading.com.br/wp-content/uploads/2020/03/ps2-background.jpg"
              alt="PS2 Background"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Bottom Half: Text */}
          <motion.div
            className="flex-1 border-t-4 border-gray-500 flex items-center justify-center p-6 bg-white dark:bg-gray-900 transition-colors duration-300 gap-5"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-800 dark:text-white text-xl font-bold">
              We are a studio with a rich blend of backgrounds, dedicating to
              supporting companies and organizations in all things creative,
              artistic, and technological. Our passion for our craft drives us
              to embrace innovation through our process.
            </p>
            <img
              src={icon}
              className=" w-10 h-10 sm:w-16 sm:h-16"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

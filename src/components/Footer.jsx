import { Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-10 px-6 md:px-12 transition duration-300 mt-4">
      {/* Newsletter Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h2 className="text-2xl font-bold flex-1">
          Join our newsletter to keep up to date with us!
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-96">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

      {/* Footer Links */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 p-6 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <User className="text-green-500 w-6 h-6" />
            <h3 className="text-lg font-semibold">Maxwell</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            We grow your business with a personal AI manager.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-gray-800 dark:text-white font-semibold">Platform</h4>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-green-500 transition">Plans & Pricing</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Personal AI Manager</a></li>
            <li><a href="#" className="hover:text-green-500 transition">AI Business Writer</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-gray-800 dark:text-white font-semibold">Company</h4>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-green-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-green-500 transition">News</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-gray-800 dark:text-white font-semibold">Resources</h4>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-green-500 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Papers</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Press Conferences</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

      {/* Bottom Footer */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 mt-6">
        <p>© 2025 Maxwell Inc.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition duration-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition duration-200">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

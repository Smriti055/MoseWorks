import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    setErrors({});
    setSuccessMessage("");

    let validationErrors = {};

    if (!name) validationErrors.name = "Name is required!";
    if (!email) validationErrors.email = "Email is required!";
    else if (!validateEmail(email)) validationErrors.email = "Invalid email format!";
    if (!message) validationErrors.message = "Message cannot be empty!";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-10 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
        Contact Us
      </h2>

      {successMessage && (
        <p className="text-green-500 text-center mt-2">{successMessage}</p>
      )}

      <div className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className={`w-full p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
            errors.name ? "border-red-500 shake" : "border-gray-300"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          className={`w-full p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
            errors.email ? "border-red-500 shake" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          placeholder="Your Message"
          className={`w-full p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
            errors.message ? "border-red-500 shake" : "border-gray-300"
          }`}
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      <style>
        {`
          .shake {
            animation: shake 0.3s ease-in-out;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;

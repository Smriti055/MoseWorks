import React from 'react'

function Section() {
    return (
        <div className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Heading & Social Links */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 md:mt-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-gray-400">We're a</span> creative agency{" "}
                  <span className="text-gray-400">that breaks</span> design{" "}
                  <span className="text-gray-400">purpose</span>
                </h1>
    
                {/* Social Media Icons */}
                <div className="flex flex-wrap justify-start items-center gap-3 mt-10">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                      alt="WhatsApp"
                      className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                    />
                  </a>
    
                  {/* Mail Icon */}
                  <a href="mailto:your-email@example.com">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                      alt="Mail"
                      className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                    />
                  </a>
    
                  {/* YouTube Icon */}
                  <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                      alt="YouTube"
                      className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                    />
                  </a>
    
                  {/* Watch Showreel Button */}
                  <button className="flex items-center bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Showreel
                  </button>
                </div>
              </div>
    
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="https://thumbs.dreamstime.com/b/globe-icon-black-background-graphic-web-design-modern-simple-vector-sign-internet-concept-trendy-symbol-website-138339793.jpg"
                  alt="Globe Icon"
                  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full"
                />
              </div>
    
              {/* Paragraph */}
              <div className="w-full md:w-1/3 mt-10 md:mt-0">
                <p className="text-lg text-gray-300">
                  A full-service agency designing digital products and experiences
                  for companies and startups around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Section
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer_1 = () => {
  return (
    <div
      className="relative z-10 bg-white shadow-md"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/i?id=beb07244dd0700ee6da027a7bb9aeb3e0d2d364a-8413095-images-thumbs&n=13')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Footer Container */}
      <div className="flex flex-col items-start p-12 gap-12 max-w-6xl max-w-full bg-white bg-opacity-90">
        {/* Top Section */}
        <div className="flex w-full items-center gap-8">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-52 h-auto object-cover"
          />
          <div className="flex-grow flex items-center justify-end gap-4">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="px-4 py-2 text-gray-600 w-72 focus:outline-none"
              />
              <button className="bg-orange-500 px-4 text-white text-lg font-medium hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Columns Section */}
        <div className="flex flex-wrap justify-between gap-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800">Corporate Info</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              About Us
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Astro-Branding
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Astro-Management
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Astro-Staffing
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Vastu & Vibrations
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Blogs
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6 ml-56">
            <h3 className="text-lg font-semibold text-gray-800">Join Us</h3>
            {/* Follow Us Section */}
            <div className="py-8">
              <div className="max-w-screen-lg mx-auto text-center">
                <div className="flex justify-center space-x-6 text-gray-700">
                  <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                  <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
                  <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
                  <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center w-full">
          <p className="text-sm text-gray-600">
            Corpastro © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer_1;
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            className="relative z-100 shadow-md"
            style={{
                backgroundImage: `url('src/assets/home/maxresdefault (10).jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay with blur effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50  backdrop-blur-sm"></div>

            {/* Footer Container */}
            <div className="relative z-20 flex flex-col items-start p-8 gap-8 max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-4">
                    {/* <img
                        src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
                        alt="CorpAstro Logo"
                        className="w-40 h-auto object-cover"
                    /> */}
                    <div className="flex-grow flex items-center justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email to get the latest news..."
                                className="px-4 py-2 text-white bg-transparent w-64 focus:outline-none placeholder:text-gray-300"
                            />
                            <button className="bg-orange-500 px-4 text-white text-lg font-medium hover:bg-orange-600">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200"></div>

                {/* Columns Section */}
                <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Corporate Info</h3>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Terms & Conditions
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Contact Us
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            About Us
                        </a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Information</h3>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Incarnation
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Teaching
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Scripture
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Temples
                        </a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            About Us
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Blogs
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white">
                            Contact Us
                        </a>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-white">Join Us</h3>
                        {/* Follow Us Section */}
                        <div className="flex justify-center sm:justify-start space-x-4 text-gray-300">
                            <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                            <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
                            <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
                            <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px -mb-4 bg-gray-200"></div>

                {/* Bottom Section */}
                <div className="flex justify-center items-center w-full py-4">
                    <p className="text-sm -mb-6 text-gray-300">
                        Dattatreay © 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
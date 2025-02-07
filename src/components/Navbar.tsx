import  { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-2xl font-bold text-gray-800">
                            YourLogo
                        </a>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <a
                            href="#about"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#incarnations"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Incarnations
                        </a>
                        <a
                            href="#teachings"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Teachings
                        </a>
                        <a
                            href="#scripture"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Scripture
                        </a>
                        <a
                            href="#temples"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Temples
                        </a>
                        <a
                            href="#resources"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Resources
                        </a>
                        <a
                            href="#modern"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Modern
                        </a>
                        <a
                            href="#community"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Community
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#about"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#incarnations"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Incarnations
                        </a>
                        <a
                            href="#teachings"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Teachings
                        </a>
                        <a
                            href="#scripture"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Scripture
                        </a>
                        <a
                            href="#temples"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Temples
                        </a>
                        <a
                            href="#resources"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Resources
                        </a>
                        <a
                            href="#modern"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Modern
                        </a>
                        <a
                            href="#community"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Community
                        </a>
                        <a
                            href="#contact"
                            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
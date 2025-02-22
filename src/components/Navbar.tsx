



// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-white shadow-md w-full fixed top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="text-2xl font-bold text-gray-800">
//                             YourLogo
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isMenuOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex md:items-center md:space-x-8">
//                         <Link to="/" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             About
//                         </Link>
//                         <Link to="/incarnations" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Incarnations
//                         </Link>
//                         <Link to="/teachings" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Teachings
//                         </Link>
//                         <Link to="/scripture" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Scripture
//                         </Link>
//                         <Link to="/temples" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Temples
//                         </Link>
//                         {/* <Link to="/resources" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Resources
//                         </Link> */}
//                         <Link to="/modern" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Modern
//                         </Link>
//                         {/* <Link to="/community" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Community
//                         </Link> */}
//                         <Link to="/contact" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link to="/" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Home
//                         </Link>
//                         <Link to="/about" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             About
//                         </Link>
//                         <Link to="/incarnations" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Incarnations
//                         </Link>
//                         <Link to="/teachings" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Teachings
//                         </Link>
//                         <Link to="/scripture" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Scripture
//                         </Link>
//                         <Link to="/temples" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Temples
//                         </Link>
//                         <Link to="/resources" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Resources
//                         </Link>
//                         <Link to="/modern" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Modern
//                         </Link>
//                         <Link to="/community" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Community
//                         </Link>
//                         <Link to="/contact" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md w-full fixed top-0 z-50 ">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="text-2xl font-bold">
//                             <span className="text-yellow-500">Om</span> Devotee
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isMenuOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex md:items-center md:space-x-8">
//                         <Link to="/" className="hover:text-gray-300 text-sm font-medium">
//                             Home
//                         </Link>
//                         <Link to="/about" className="hover:text-gray-300 text-sm font-medium">
//                             About
//                         </Link>
//                         <Link to="/incarnations" className="hover:text-gray-300 text-sm font-medium">
//                             Incarnations
//                         </Link>
//                         <Link to="/teachings" className="hover:text-gray-300 text-sm font-medium">
//                             Teachings
//                         </Link>
//                         <Link to="/scripture" className="hover:text-gray-300 text-sm font-medium">
//                             Scripture
//                         </Link>
//                         <Link to="/temples" className="hover:text-gray-300 text-sm font-medium">
//                             Temples
//                         </Link>
//                         <Link to="/modern" className="hover:text-gray-300 text-sm font-medium">
//                             Modern
//                         </Link>
//                         <Link to="/contact" className="hover:text-gray-300 text-sm font-medium">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link to="/" className="block hover:text-gray-300 text-sm font-medium">
//                             Home
//                         </Link>
//                         <Link to="/about" className="block hover:text-gray-300 text-sm font-medium">
//                             About
//                         </Link>
//                         <Link to="/incarnations" className="block hover:text-gray-300 text-sm font-medium">
//                             Incarnations
//                         </Link>
//                         <Link to="/teachings" className="block hover:text-gray-300 text-sm font-medium">
//                             Teachings
//                         </Link>
//                         <Link to="/scripture" className="block hover:text-gray-300 text-sm font-medium">
//                             Scripture
//                         </Link>
//                         <Link to="/temples" className="block hover:text-gray-300 text-sm font-medium">
//                             Temples
//                         </Link>
//                         <Link to="/modern" className="block hover:text-gray-300 text-sm font-medium">
//                             Modern
//                         </Link>
//                         <Link to="/contact" className="block hover:text-gray-300 text-sm font-medium">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md w-full fixed top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="text-2xl font-bold">
//                             <span className="text-yellow-500">Om</span> Devotee
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isMenuOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex md:items-center md:space-x-8">
//                         <Link to="/" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Home</span>
//                         </Link>
//                         <Link to="/about" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">About</span>
//                         </Link>
//                         <Link to="/incarnations" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Incarnations</span>
//                         </Link>
//                         <Link to="/teachings" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Teachings</span>
//                         </Link>
//                         <Link to="/scripture" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Scripture</span>
//                         </Link>
//                         <Link to="/temples" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Temples</span>
//                         </Link>
//                         <Link to="/modern" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Modern</span>
//                         </Link>
//                         <Link to="/contact" className="group hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             <span className="group-hover:bg-indigo-600 px-2 py-1 rounded-md">Contact</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link to="/" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Home
//                         </Link>
//                         <Link to="/about" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             About
//                         </Link>
//                         <Link to="/incarnations" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Incarnations
//                         </Link>
//                         <Link to="/teachings" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Teachings
//                         </Link>
//                         <Link to="/scripture" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Scripture
//                         </Link>
//                         <Link to="/temples" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Temples
//                         </Link>
//                         <Link to="/modern" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Modern
//                         </Link>
//                         <Link to="/contact" className="block hover:text-yellow-300 transition-colors duration-300 text-sm font-medium">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;




// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md w-full fixed top-0 z-50 opacity-80">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="text-2xl font-bold">
//                             <span className="text-white">Dattatray</span> Devotee
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isMenuOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex md:items-center md:space-x-8">
//                         <Link
//                             to="/"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Home
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             About
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/incarnations"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Incarnations
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/teachings"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Teachings
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/scripture"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Scripture
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/temples"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Temples
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/modern"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Modern
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Contact
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link
//                             to="/"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             About
//                         </Link>
//                         <Link
//                             to="/incarnations"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Incarnations
//                         </Link>
//                         <Link
//                             to="/teachings"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Teachings
//                         </Link>
//                         <Link
//                             to="/scripture"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Scripture
//                         </Link>
//                         <Link
//                             to="/temples"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Temples
//                         </Link>
//                         <Link
//                             to="/modern"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Modern
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

// from - [#FFFF00] to - [#FFA500]


// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-gradient-to-r  from-[#3B49DF] to-[#FFA500] text-white shadow-md w-full fixed top-0 z-50 ">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="text-2xl font-bold">
//                             <span className="text-white">Dattatray</span> Devotee
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isMenuOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex md:items-center md:space-x-8">
//                         <Link
//                             to="/"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Home
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             About
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/incarnations"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Incarnations
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/teachings"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Teachings
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/scripture"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Scripture
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/temples"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Temples
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/modern"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Modern
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="relative hover:text-yellow-500 text-sm font-medium transition-all duration-300 group"
//                         >
//                             Contact
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link
//                             to="/"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             About
//                         </Link>
//                         <Link
//                             to="/incarnations"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Incarnations
//                         </Link>
//                         <Link
//                             to="/teachings"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Teachings
//                         </Link>
//                         <Link
//                             to="/scripture"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Scripture
//                         </Link>
//                         <Link
//                             to="/temples"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Temples
//                         </Link>
//                         <Link
//                             to="/modern"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Modern
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
//                         >
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;




import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-[#3B49DF] to-[#FFA500] text-white shadow-md w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold">
                            <span className="text-white">Dattatray</span> Devotee
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
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
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/incarnations", label: "Incarnations" },
                            { to: "/teachings", label: "Teachings" },
                            { to: "/scripture", label: "Scripture" },
                            { to: "/temples", label: "Temples" },
                            { to: "/modern", label: "Modern" },
                            { to: "/contact", label: "Contact" },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="relative group text-sm font-medium transition-all duration-300 hover:text-yellow-500"
                            >
                                {item.label}
                                {/* Devotee-Inspired Hover Effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                                {/* Subtle Glow Effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="absolute inset-0 bg-white/10 blur-sm"></span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/incarnations", label: "Incarnations" },
                            { to: "/teachings", label: "Teachings" },
                            { to: "/scripture", label: "Scripture" },
                            { to: "/temples", label: "Temples" },
                            { to: "/modern", label: "Modern" },
                            { to: "/contact", label: "Contact" },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="block hover:text-yellow-500 text-sm font-medium transition-all duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
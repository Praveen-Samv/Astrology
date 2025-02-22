
// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Footer from "./Footer";
// import JoinDattaFamily from "../homescreens/JoinDattaFamily";



// // Custom marker icon URL

// const Contact: React.FC = () => {

//     return ( 
//         <div className="w-full bg-white overflow-hidden">
//             {/* Breadcrumb */}
//             <div
//                 className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center  mb-12"
//                 style={{
//                     backgroundImage: `url('https://avatars.mds.yandex.net/get-mpic/3913686/img_id896587762305902504.jpeg/orig')`,
//                 }}
//             >
//                 <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
//                     Contact Us
//                 </h1>


//             </div>

//             {/* Contact Form Section */}
//             <div className="max-w-screen-lg mx-auto p-6 md:p-8 ">
//                 <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
//                     <h2 className="text-orange-600 text-xl font-medium mb-4 text-center md:text-left">Have A Question?</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Phone Number"
//                             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Subject"
//                             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                     </div>
//                     <textarea
//                         placeholder="Message"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
//                         rows={5}
//                     ></textarea>
//                     <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
//                         SUBMIT
//                     </button>
//                 </div>
//             </div>

//             {/* Contact Information Section */}
//             <div className="max-w-screen-lg mx-auto p-6 md:p-8 text-gray-700">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex items-center gap-4">
//                         <FaPhoneAlt className="text-orange-600 text-xl" />
//                         <div>
//                             <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
//                             <p className="text-lg">+91 9441482439</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <FaEnvelope className="text-orange-600 text-xl" />
//                         <div>
//                             <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
//                             <p className="text-lg">dharam@gmail.com</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4 col-span-1 md:col-span-2">
//                         <FaMapMarkerAlt className="text-orange-600 text-xl" />
//                         <div>
//                             <h3 className="text-orange-600 text-xl font-medium">Address</h3>
//                             <p className="text-lg">
//                                 Door No: 18-8-282/B/1 Near New D.S.C Water Tank Rakshapuram Colony,
//                                 Kanchanbagh, Hyderabad - 500058, Telangana, India.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//                 <div>
//                     <JoinDattaFamily />
//                 </div>
           
//             {/* Footer Section */}
//             <div >
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Contact;





import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
import JoinDattaFamily from "../homescreens/JoinDattaFamily";

const Contact: React.FC = () => {
    return (
        <div className="w-full bg-yellow-50 overflow-hidden">
            {/* Breadcrumb */}
            <div
                className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center mb-12"
                style={{
                    backgroundImage: `url('/src/assets/about/orig.webp')`,
                }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
                    Contact Us
                </h1>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-screen-lg mx-auto p-6 md:p-8">
                <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
                    <h2 className="text-orange-600 text-xl font-medium mb-4 text-center md:text-left">
                        Have A Question?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
                        rows={5}
                    ></textarea>
                    <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
                        SUBMIT
                    </button>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="max-w-screen-lg mx-auto p-6 md:p-8 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-orange-600 text-xl" />
                        <div>
                            <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
                            <p className="text-lg">+91 9441482439</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-orange-600 text-xl" />
                        <div>
                            <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
                            <p className="text-lg">dharam@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 col-span-1 md:col-span-2">
                        <FaMapMarkerAlt className="text-orange-600 text-xl" />
                        <div>
                            <h3 className="text-orange-600 text-xl font-medium">Address</h3>
                            <p className="text-lg">
                                Door No: 18-8-282/B/1 Near New D.S.C Water Tank Rakshapuram Colony,
                                Kanchanbagh, Hyderabad - 500058, Telangana, India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <JoinDattaFamily />
            </div>

            {/* Footer Section */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
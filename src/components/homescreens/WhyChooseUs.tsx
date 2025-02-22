





// const WhyChooseUs = () => {
//     const cards = [
//         {
//             title: "Explore Sacred Texts",
//             description: "Explore sacred texts like Guru Charitra and Charitaamrutam.",
//         },
//         {
//             title: "Join a Devoted Community",
//             description: "Connect with Datta devotees worldwide and deepen your faith.",
//         },
//         {
//             title: "Guidance on Spiritual Path",
//             description: "Receive wisdom to navigate your spiritual journey with clarity.",
//         },
//     ];

//     return (
//         <section className="w-full flex justify-center">
//             <div className="w-full max-w-7xl mx-4 lg:mx-8 px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//                 {/* Left Side - Text and Cards */}
//                 <div className="w-full md:w-1/2 text-center md:text-left">
//                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
//                         Why Choose Us
//                     </h2>
//                     <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8">
//                         This platform is designed to preserve and spread the timeless teachings
//                         of Lord Dattatreya. Here, you will find resources to guide your
//                         spiritual journey and help you connect with a global community of
//                         Datta devotees.
//                     </p>

//                     {/* Cards Section */}
//                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                         {cards.map((card, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-4 sm:p-6 shadow-md rounded-lg border border-gray-200 w-full sm:w-1/3"
//                             >
//                                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
//                                     {card.title}
//                                 </h3>
//                                 <p className="text-gray-600 mt-2 text-sm sm:text-base">
//                                     {card.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Side - Image */}
//                 <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
//                     <img
//                         src="https://i.ytimg.com/vi/p74eROQGwOI/maxresdefault.jpg"
//                         alt="Spiritual Image"
//                         className="w-full sm:w-[450px] h-[250px] sm:h-[350px] rounded-lg shadow-lg object-cover"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;








import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <section className="w-full -mt-12  py-12 md:py-16">
            <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left Side: Text Content and Cards */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl xl:text-4xl font-bold text-gray-800 leading-tight">
                        Why Choose Us
                    </h1>

                    {/* Text Content */}
                    <p className="text-gray-600 text-lg md:text-xl lg:text-base xl:text-lg">
                        This platform is designed to preserve and spread the timeless teachings of
                        Lord Dattatreya. Here, you will find resources to guide your spiritual
                        journey and help you connect with a global community of Datta devotees.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Card 1: Explore Sacred Texts */}
                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                                Explore Sacred Texts
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Explore sacred texts like Guru Charitra and Charitaamrutam.
                            </p>
                        </div>

                        {/* Card 2: Connect with Devotees */}
                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                                Connect with Devotees
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Join a global community of Datta devotees and share your spiritual
                                experiences.
                            </p>
                        </div>

                        {/* Card 3: Spiritual Guidance */}
                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                                Spiritual Guidance
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Access resources and guidance to deepen your spiritual practice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 lg:mt-16">
                    <div className="aspect-[16/9] rounded-xl shadow-lg overflow-hidden">
                        <img
                            src="src/assets/about/maxresdefault.jpg"
                            alt="Why Choose Us"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;






// import React from "react";

// const teachings = [
//     {
//         title: "Detachment from Materialism",
//         description: "Attachments bind the soul. True freedom lies in simplicity and renunciation.",
//         lesson: "Let go of material desires to experience inner peace.",
        // image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
//     },
//     {
//         title: "Self-Realization",
//         description: "The divine is within you. Your journey is not outward but inward.",
//         lesson: "Seek the truth within to uncover your spiritual potential.",
        // image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp;rs=AOn4CLAPX9lzi0UfydCujBJclumGp7EBwA"
//     },
//     {
//         title: "Unity of Creation",
//         description: "All life is interconnected, and compassion bridges the gaps.",
//         lesson: "Recognize divinity in every being and practice kindness.",
        // image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
//     },
//     {
//         title: "Guru Bhakti (Faith in the Guru)",
//         description: "A Guru is the guiding force who leads you to the ultimate truth.",
//         lesson: "Surrender to the Guru’s wisdom to achieve liberation.",
        // image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
//     }
// ];

// const Teachings: React.FC = () => {
//     return (
//         <section className="w-full flex justify-center py-16 md:py-20">
//             <div className="w-full max-w-[calc(100%-300px)] lg:mx-[150px] mx-6 px-6">
//                 {/* Title Section */}
//                 <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//                     Teachings and Philosophy of Lord Dattatreya
//                 </h1>

//                 {/* Teachings List */}
//                 <div className="flex flex-col space-y-16">
//                     {teachings.map((teaching, index) => (
//                         <div
//                             key={index}
//                             className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
//                                 }`}
//                         >
//                             {/* Image Section */}
//                             <div className="md:w-1/3 flex justify-center">
//                                 <img
//                                     src={teaching.image}
//                                     alt={teaching.title}
//                                     className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
//                                 />
//                             </div>

//                             {/* Text Section */}
//                             <div className="md:w-2/3 space-y-6">
//                                 <h2 className="text-2xl font-semibold text-gray-800">{teaching.title}</h2>
//                                 <p className="text-gray-700 leading-relaxed">{teaching.description}</p>
//                                 <p className="text-gray-700 font-semibold">Lesson: {teaching.lesson}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Learning from 24 Gurus */}
//                 <div className="mt-20">
//                     <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
//                         Learning from 24 Gurus: Nature as the Teacher
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {[
//                             { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness." },
//                             { guru: "Sun", lesson: "Illuminates selfless service and the act of giving." },
//                             { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment." },
//                             { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution." },
//                             { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly." },
//                             { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing." }
//                         ].map((item, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//                                 <h3 className="text-lg font-semibold text-gray-800">{item.guru}</h3>
//                                 <p className="text-gray-600 mt-2">{item.lesson}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Modern Relevance */}
//                 <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mt-20">
//                     <div className="md:w-1/2 space-y-6">
//                         <h2 className="text-2xl font-semibold text-gray-800">Philosophy for Modern Life</h2>
//                         <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
//                             <li><strong>For Peace of Mind:</strong> Meditate daily and practice detachment from negativity.</li>
//                             <li><strong>For Harmony:</strong> Foster compassion and understanding in relationships.</li>
//                             <li><strong>For Self-Discipline:</strong> Balance action with introspection through spiritual practices.</li>
//                         </ul>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center">
//                         <img
                            // src="https://i.ytimg.com/vi/fxjPcqz8o8U/maxresdefault.jpg"
//                             alt="Modern Life Balance"
//                             className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Closing Message */}
//                 <div className="text-center mt-20">
//                     <h3 className="text-xl font-bold text-gray-800">
//                         "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
//                     </h3>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Teachings;



// import React from "react";

// const teachings = [
//     {
//         title: "Detachment from Materialism",
//         description: "Attachments bind the soul. True freedom lies in simplicity and renunciation.",
//         lesson: "Let go of material desires to experience inner peace.",
//         image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
//     },
//     {
//         title: "Self-Realization",
//         description: "The divine is within you. Your journey is not outward but inward.",
//         lesson: "Seek the truth within to uncover your spiritual potential.",
//         image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp;rs=AOn4CLAPX9lzi0UfydCujBJclumGp7EBwA"
//     },
//     {
//         title: "Unity of Creation",
//         description: "All life is interconnected, and compassion bridges the gaps.",
//         lesson: "Recognize divinity in every being and practice kindness.",
//         image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
//     },
//     {
//         title: "Guru Bhakti (Faith in the Guru)",
//         description: "A Guru is the guiding force who leads you to the ultimate truth.",
//         lesson: "Surrender to the Guru’s wisdom to achieve liberation.",
//         image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
//     }
// ];

// const Teachings: React.FC = () => {
//     return (
//         <section className="w-full flex justify-center py-20 md:py-24">
//             <div className="w-full max-w-[calc(100%-300px)] lg:mx-[150px] mx-6 px-6">
//                 {/* Title Section */}
//                 <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
//                     Teachings and Philosophy of Lord Dattatreya
//                 </h1>

//                 {/* Teachings List */}
//                 <div className="flex flex-col space-y-20">
//                     {teachings.map((teaching, index) => (
//                         <div
//                             key={index}
//                             className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
//                                 }`}
//                         >
//                             {/* Image Section */}
//                             <div className="md:w-1/2 flex justify-center">
//                                 <img
//                                     src={teaching.image}
//                                     alt={teaching.title}
//                                     className="rounded-lg shadow-lg w-full md:w-[80%] lg:w-[500px] xl:w-[550px] h-auto"
//                                 />
//                             </div>

//                             {/* Text Section */}
//                             <div className="md:w-1/2 space-y-8">
//                                 <h2 className="text-2xl font-semibold text-gray-800">{teaching.title}</h2>
//                                 <p className="text-gray-700 leading-relaxed">{teaching.description}</p>
//                                 <p className="text-gray-700 font-semibold">Lesson: {teaching.lesson}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Learning from 24 Gurus */}
//                 <div className="mt-24">
//                     <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
//                         Learning from 24 Gurus: Nature as the Teacher
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {[
//                             { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness." },
//                             { guru: "Sun", lesson: "Illuminates selfless service and the act of giving." },
//                             { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment." },
//                             { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution." },
//                             { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly." },
//                             { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing." }
//                         ].map((item, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//                                 <h3 className="text-lg font-semibold text-gray-800">{item.guru}</h3>
//                                 <p className="text-gray-600 mt-2">{item.lesson}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Modern Relevance */}
//                 <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 mt-24">
//                     <div className="md:w-1/2 space-y-8">
//                         <h2 className="text-2xl font-semibold text-gray-800">Philosophy for Modern Life</h2>
//                         <ul className="list-disc list-inside text-gray-700 mt-4 space-y-3">
//                             <li><strong>For Peace of Mind:</strong> Meditate daily and practice detachment from negativity.</li>
//                             <li><strong>For Harmony:</strong> Foster compassion and understanding in relationships.</li>
//                             <li><strong>For Self-Discipline:</strong> Balance action with introspection through spiritual practices.</li>
//                         </ul>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center">
//                         <img
//                             src="https://i.ytimg.com/vi/fxjPcqz8o8U/maxresdefault.jpg"
//                             alt="Modern Life Balance"
//                             className="rounded-lg shadow-lg w-full md:w-[80%] lg:w-[500px] xl:w-[550px] h-auto"
//                         />
//                     </div>
//                 </div>

//                 {/* Closing Message */}
//                 <div className="text-center mt-24">
//                     <h3 className="text-xl font-bold text-gray-800">
//                         "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
//                     </h3>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Teachings;




// import React from "react";

// const teachings = [
//     {
//         title: "Detachment from Materialism",
//         description: "Attachments bind the soul. True freedom lies in simplicity and renunciation.",
//         lesson: "Let go of material desires to experience inner peace.",
//         image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
//     },
//     {
//         title: "Self-Realization",
//         description: "The divine is within you. Your journey is not outward but inward.",
//         lesson: "Seek the truth within to uncover your spiritual potential.",
//         image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp;rs=AOn4CLAPX9lzi0UfydCujBJclumGp7EBwA"
//     },
//     {
//         title: "Unity of Creation",
//         description: "All life is interconnected, and compassion bridges the gaps.",
//         lesson: "Recognize divinity in every being and practice kindness.",
//         image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
//     },
//     {
//         title: "Guru Bhakti (Faith in the Guru)",
//         description: "A Guru is the guiding force who leads you to the ultimate truth.",
//         lesson: "Surrender to the Guru’s wisdom to achieve liberation.",
//         image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
//     }
// ];

// const Teachings: React.FC = () => {
//     return (
//         <section className="w-full bg-gray-50 py-20">
//             <div className="mx-[100px]">
//                 {/* Title Section */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         Teachings and Philosophy of Lord Dattatreya
//                     </h1>
//                     <p className="text-gray-600 text-lg">
//                         Discover the timeless wisdom of Lord Dattatreya and apply it to modern life.
//                     </p>
//                 </div>

//                 {/* Split-Screen Teachings */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
//                     {teachings.map((teaching, index) => (
//                         <div
//                             key={index}
//                             className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden`}
//                         >
//                             <div className="w-full md:w-1/2">
//                                 <img
//                                     src={teaching.image}
//                                     alt={teaching.title}
//                                     className="w-full h-64 object-cover"
//                                 />
//                             </div>
//                             <div className="w-full md:w-1/2 p-6">
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                                     {teaching.title}
//                                 </h2>
//                                 <p className="text-gray-600 mb-4">{teaching.description}</p>
//                                 <p className="text-gray-700 font-semibold">
//                                     Lesson: {teaching.lesson}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Learning from 24 Gurus - Timeline Layout */}
//                 <div className="mb-24">
//                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                         Learning from 24 Gurus: Nature as the Teacher
//                     </h2>
//                     <div className="relative">
//                         <div className="absolute left-1/2 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
//                         {[
//                             { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness." },
//                             { guru: "Sun", lesson: "Illuminates selfless service and the act of giving." },
//                             { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment." },
//                             { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution." },
//                             { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly." },
//                             { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing." }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-8`}
//                             >
//                                 <div className="w-1/2 p-4">
//                                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                                         <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.guru}</h3>
//                                         <p className="text-gray-600">{item.lesson}</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-1/2"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Modern Relevance Section - Card Layout */}
//                 <div className="mb-24">
//                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                         Philosophy for Modern Life
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 title: "For Peace of Mind",
//                                 description: "Meditate daily and practice detachment from negativity.",
//                                 icon: "🧘‍♂️"
//                             },
//                             {
//                                 title: "For Harmony",
//                                 description: "Foster compassion and understanding in relationships.",
//                                 icon: "🤝"
//                             },
//                             {
//                                 title: "For Self-Discipline",
//                                 description: "Balance action with introspection through spiritual practices.",
//                                 icon: "📿"
//                             }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
//                             >
//                                 <div className="text-4xl mb-4">{item.icon}</div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
//                                 <p className="text-gray-600">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Closing Message */}
//                 <div className="text-center bg-white rounded-xl shadow-lg py-12 px-8">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                         "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
//                     </h3>
//                     <p className="text-gray-600">
//                         Embrace the teachings of Lord Dattatreya to lead a balanced and fulfilling life.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Teachings;




// import React from "react";
// import Footer from "./Footer";

// const teachings = [
//     {
//         title: "Detachment from Materialism",
//         description: "Attachments bind the soul. True freedom lies in simplicity and renunciation.",
//         lesson: "Let go of material desires to experience inner peace.",
//         image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
//     },
//     {
//         title: "Self-Realization",
//         description: "The divine is within you. Your journey is not outward but inward.",
//         lesson: "Seek the truth within to uncover your spiritual potential.",
//         image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp"
//     },
//     {
//         title: "Unity of Creation",
//         description: "All life is interconnected, and compassion bridges the gaps.",
//         lesson: "Recognize divinity in every being and practice kindness.",
//         image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
//     },
//     {
//         title: "Guru Bhakti (Faith in the Guru)",
//         description: "A Guru is the guiding force who leads you to the ultimate truth.",
//         lesson: "Surrender to the Guru’s wisdom to achieve liberation.",
//         image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
//     }
// ];

// const Teachings: React.FC = () => {
//     return (

//         <>

//             <div
//                 className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center  mb-12"
//                 style={{
//                     backgroundImage: `url('https://cdn.culture.ru/images/2084b314-f62d-5a31-a7f9-24a09c6cc412')`,
//                 }}
//             >
//                 <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
//                     Teachings and Philosophy of Lord Dattatreya
//                 </h1>
//                 {/* <p className="text-gray-600 text-lg">
//                     Discover the timeless wisdom of Lord Dattatreya and apply it to modern life.
//                 </p> */}
//             </div>
//             <div className="w-full bg-gradient-to-br -mt-12 from-[#FFFF00] via-[#FFA500] to-[#FFFFFF] py-20">
//             <div className="mx-[100px]">
               

//                 {/* Split-Screen Teachings */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
//                     {teachings.map((teaching, index) => (
//                         <div
//                             key={index}
//                             className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden`}
//                         >
//                             <div className="w-full md:w-1/2">
//                                 <img
//                                     src={teaching.image}
//                                     alt={teaching.title}
//                                     className="w-full h-64 object-cover"
//                                 />
//                             </div>
//                             <div className="w-full md:w-1/2 p-6">
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                                     {teaching.title}
//                                 </h2>
//                                 <p className="text-gray-600 mb-4">{teaching.description}</p>
//                                 <p className="text-gray-700 font-semibold">
//                                     Lesson: {teaching.lesson}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Learning from 24 Gurus - Timeline Layout */}
//                 {/* <div className="mb-24">
//                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                         Learning from 24 Gurus: Nature as the Teacher
//                     </h2>
//                     <div className="relative">
//                         <div className="absolute left-1/2 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
//                         {[
//                             { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness." },
//                             { guru: "Sun", lesson: "Illuminates selfless service and the act of giving." },
//                             { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment." },
//                             { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution." },
//                             { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly." },
//                             { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing." }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-8`}
//                             >
//                                 <div className="w-1/2 p-4">
//                                     <div className="bg-white p-2 rounded-lg shadow-lg">
//                                         <h3 className="text-xl font-semibold text-gray-800 ">{item.guru}</h3>
//                                         <p className="text-gray-600">{item.lesson}</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-1/2"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div> */}

//                     <div className="mb-24">
//                         <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                             Learning from 24 Gurus: Nature as the Teacher
//                         </h2>
//                         <div className="relative">
//                             {/* Vertical Line */}
//                             <div className="absolute left-1/2 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

//                             {[
//                                 { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness.", symbol: "🌍" },
//                                 { guru: "Sun", lesson: "Illuminates selfless service and the act of giving.", symbol: "☀️" },
//                                 { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment.", symbol: "💨" },
//                                 { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution.", symbol: "🕷️" },
//                                 { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly.", symbol: "💧" },
//                                 { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing.", symbol: "🔥" }
//                             ].map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex justify-center items-center mb-8"
//                                 >
//                                     {/* Card */}
//                                     <div className={`w-5/12 p-4 ${index % 2 === 0 ? "order-1" : "order-3"}`}>
//                                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                                             <h3 className="text-xl font-semibold text-gray-800">{item.guru}</h3>
//                                             <p className="text-gray-600">{item.lesson}</p>
//                                         </div>
//                                     </div>

//                                     {/* Circle with Symbol */}
//                                     <div className="w-2/12 flex justify-center relative order-2">
//                                         <div className="w-16 h-20 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
//                                             <span className="text-3xl">{item.symbol}</span>
//                                         </div>
//                                     </div>

//                                     {/* Empty Space (for alignment) */}
//                                     <div className={`w-5/12 ${index % 2 === 0 ? "order-3" : "order-1"}`}></div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

                    

//                 {/* Modern Relevance Section - Card Layout */}
//                 <div className="mb-24">
//                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                         Philosophy for Modern Life
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 title: "For Peace of Mind",
//                                 description: "Meditate daily and practice detachment from negativity.",
//                                 icon: "🧘‍♂️"
//                             },
//                             {
//                                 title: "For Harmony",
//                                 description: "Foster compassion and understanding in relationships.",
//                                 icon: "🤝"
//                             },
//                             {
//                                 title: "For Self-Discipline",
//                                 description: "Balance action with introspection through spiritual practices.",
//                                 icon: "📿"
//                             }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
//                             >
//                                 <div className="text-4xl mb-4">{item.icon}</div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
//                                 <p className="text-gray-600">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

               
               
//                 {/* Closing Message */}
//                 <div className="text-center mt-20">
//                     <h3 className="text-xl italic text-indigo-900">
//                         "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
//                     </h3>
//                 </div>
//             </div>
//         </div>

//         {/* footer   */}
//         <div>
//             <Footer />
//         </div>
//         </>
//     );
// };

// export default Teachings;






import React from "react";
import Footer from "./Footer";
import Gurus from "../others/Gurus";

const teachings = [
    {
        title: "Detachment from Materialism",
        description: "Attachments bind the soul. True freedom lies in simplicity and renunciation.",
        lesson: "Let go of material desires to experience inner peace.",
        image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
    },
    {
        title: "Self-Realization",
        description: "The divine is within you. Your journey is not outward but inward.",
        lesson: "Seek the truth within to uncover your spiritual potential.",
        image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp"
    },
    {
        title: "Unity of Creation",
        description: "All life is interconnected, and compassion bridges the gaps.",
        lesson: "Recognize divinity in every being and practice kindness.",
        image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
    },
    {
        title: "Guru Bhakti (Faith in the Guru)",
        description: "A Guru is the guiding force who leads you to the ultimate truth.",
        lesson: "Surrender to the Guru’s wisdom to achieve liberation.",
        image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
    }
];

const Teachings: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center  mb-12"
                style={{
                    backgroundImage: `url('https://image.winudf.com/v2/image/Y29tLlBlcmZlY3R1c0x3cC5Vbml2ZXJzZTIwX3NjcmVlbnNob3RzXzJfN2EyNjYyMmU/screen-2.jpg?fakeurl=1&type=.jpg')`,
                }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
                    Teachings and Philosophy of Lord Dattatreya
                </h1>
            </div>

            {/* Main Content */}
            <div className="w-full bg-gradient-to-br -mt-12 bg-yellow-50 to-[#FFFFFF] py-6">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                   
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Lord Dattatreya, the eternal Guru, teaches profound truths that transcend time. His philosophy
                        is a perfect blend of universal wisdom, practical spirituality, and inner transformation.
                    </p>
                   
                </div>
                <div className="mx-4 md:mx-[100px]">
                    {/* Split-Screen Teachings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {teachings.map((teaching, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden`}
                            >
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={teaching.image}
                                        alt={teaching.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 p-6">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                                        {teaching.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">{teaching.description}</p>
                                    <p className="text-gray-700 font-semibold">
                                        Lesson: {teaching.lesson}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Learning from 24 Gurus - Timeline Layout */}
                   <Gurus />

                    {/* Modern Relevance Section - Card Layout */}
                    <div className="mb-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
                            Philosophy for Modern Life
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "For Peace of Mind",
                                    description: "Meditate daily and practice detachment from negativity.",
                                    icon: "🧘‍♂️"
                                },
                                {
                                    title: "For Harmony",
                                    description: "Foster compassion and understanding in relationships.",
                                    icon: "🤝"
                                },
                                {
                                    title: "For Self-Discipline",
                                    description: "Balance action with introspection through spiritual practices.",
                                    icon: "📿"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Message */}
                    <div className="text-center mt-20">
                        <h3 className="text-lg md:text-xl italic text-indigo-900">
                            "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
                        </h3>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Teachings;
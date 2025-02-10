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



import React from "react";

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
        image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp;rs=AOn4CLAPX9lzi0UfydCujBJclumGp7EBwA"
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
        <section className="w-full flex justify-center py-20 md:py-24">
            <div className="w-full max-w-[calc(100%-300px)] lg:mx-[150px] mx-6 px-6">
                {/* Title Section */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
                    Teachings and Philosophy of Lord Dattatreya
                </h1>

                {/* Teachings List */}
                <div className="flex flex-col space-y-20">
                    {teachings.map((teaching, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src={teaching.image}
                                    alt={teaching.title}
                                    className="rounded-lg shadow-lg w-full md:w-[80%] lg:w-[500px] xl:w-[550px] h-auto"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="md:w-1/2 space-y-8">
                                <h2 className="text-2xl font-semibold text-gray-800">{teaching.title}</h2>
                                <p className="text-gray-700 leading-relaxed">{teaching.description}</p>
                                <p className="text-gray-700 font-semibold">Lesson: {teaching.lesson}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning from 24 Gurus */}
                <div className="mt-24">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
                        Learning from 24 Gurus: Nature as the Teacher
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness." },
                            { guru: "Sun", lesson: "Illuminates selfless service and the act of giving." },
                            { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment." },
                            { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution." },
                            { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly." },
                            { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-lg font-semibold text-gray-800">{item.guru}</h3>
                                <p className="text-gray-600 mt-2">{item.lesson}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modern Relevance */}
                <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 mt-24">
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Philosophy for Modern Life</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-3">
                            <li><strong>For Peace of Mind:</strong> Meditate daily and practice detachment from negativity.</li>
                            <li><strong>For Harmony:</strong> Foster compassion and understanding in relationships.</li>
                            <li><strong>For Self-Discipline:</strong> Balance action with introspection through spiritual practices.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://i.ytimg.com/vi/fxjPcqz8o8U/maxresdefault.jpg"
                            alt="Modern Life Balance"
                            className="rounded-lg shadow-lg w-full md:w-[80%] lg:w-[500px] xl:w-[550px] h-auto"
                        />
                    </div>
                </div>

                {/* Closing Message */}
                <div className="text-center mt-24">
                    <h3 className="text-xl font-bold text-gray-800">
                        "The world is your teacher; every moment is a lesson. Seek wisdom in simplicity and find peace in the eternal truth."
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Teachings;




// import React from 'react';

// const Teachings: React.FC = () => {
//     return (
//         <div className="bg-gray-50 text-gray-800 font-sans">
//             {/* Hero Section */}
//             <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/dattatreya-bg.jpg')" }}>
//                 <h1 className="text-5xl font-bold text-black  text-center">Teachings and Philosophy of Lord Dattatreya</h1>
//             </section>

//             {/* Core Teachings Section */}
//             <section className="container mx-auto px-4 py-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Core Teachings: Path to Liberation</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* Detachment */}
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">1. Detachment from Materialism</h3>
//                         <p className="text-gray-700">Attachments bind the soul. True freedom lies in simplicity and renunciation.</p>
//                         <p className="mt-4 text-gray-600">Lesson: Let go of material desires to experience inner peace.</p>
//                     </div>

//                     {/* Self-Realization */}
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">2. Self-Realization</h3>
//                         <p className="text-gray-700">The divine is within you. Your journey is not outward but inward.</p>
//                         <p className="mt-4 text-gray-600">Lesson: Seek the truth within to uncover your spiritual potential.</p>
//                     </div>

//                     {/* Unity of Creation */}
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">3. Unity of Creation</h3>
//                         <p className="text-gray-700">All life is interconnected, and compassion bridges the gaps.</p>
//                         <p className="mt-4 text-gray-600">Lesson: Recognize divinity in every being and practice kindness.</p>
//                     </div>

//                     {/* Guru Bhakti */}
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">4. Guru Bhakti (Faith in the Guru)</h3>
//                         <p className="text-gray-700">A Guru is the guiding force who leads you to the ultimate truth.</p>
//                         <p className="mt-4 text-gray-600">Lesson: Surrender to the Guru’s wisdom to achieve liberation.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* 24 Gurus Section */}
//             <section className="bg-gray-100 py-12">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-8">Learning from 24 Gurus: Nature as the Teacher</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {/* Earth */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Earth</h3>
//                             <p className="text-gray-700">Teaches patience, tolerance, and forgiveness.</p>
//                         </div>

//                         {/* Sun */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Sun</h3>
//                             <p className="text-gray-700">Illuminates selfless service and the act of giving without expectations.</p>
//                         </div>

//                         {/* Air */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Air</h3>
//                             <p className="text-gray-700">Symbolizes purity, detachment, and movement without attachment.</p>
//                         </div>

//                         {/* Spider */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Spider</h3>
//                             <p className="text-gray-700">Reflects the cycle of creation, preservation, and dissolution.</p>
//                         </div>

//                         {/* Water */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Water</h3>
//                             <p className="text-gray-700">Teaches humility and adaptability by flowing selflessly.</p>
//                         </div>

//                         {/* Fire */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Fire</h3>
//                             <p className="text-gray-700">Burns impurities, symbolizing self-discipline and inner cleansing.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Philosophy for Modern Life Section */}
//             <section className="container mx-auto px-4 py-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Philosophy for Modern Life</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">For Peace of Mind</h3>
//                         <p className="text-gray-700">Meditate daily and practice detachment from negativity.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-xl font-semibold mb-4">For Harmony</h3>
//                         <p className="text-gray-700">Foster compassion and understanding in relationships.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Spiritual Practices Section */}
//             <section className="bg-gray-100 py-12">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-8">Spiritual Practices Inspired by Lord Dattatreya</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Meditation</h3>
//                             <p className="text-gray-700">Quiet the mind to connect with the divine within.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Chants and Mantras</h3>
//                             <p className="text-gray-700">Recite sacred hymns to purify the mind and soul.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Sacred Texts</h3>
//                             <p className="text-gray-700">Read "Guru Charitra" and other texts for deeper understanding.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4">Karma Yoga</h3>
//                             <p className="text-gray-700">Serve selflessly, without attachment to results.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer className="bg-gray-800 text-white py-8">
//                 <div className="container mx-auto px-4 text-center">
//                     <p>© 2023 Teachings of Lord Dattatreya. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Teachings;




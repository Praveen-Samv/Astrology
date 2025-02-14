





// import React from "react";

// const teachings = [
//     {
//         title: "Embracing Detachment in a Material World",
//         challenge: "In today’s consumer-driven society, attachment to material possessions often leads to stress and dissatisfaction.",
//         teaching: "Lord Datta emphasizes detachment from material desires, urging us to focus on what truly matters—spiritual growth, relationships, and inner peace.",
//         applications: [
//             "Practice gratitude for what you have instead of yearning for more.",
//             "Dedicate time daily to reflect on non-material sources of happiness, such as family, nature, and self-growth."
//         ],
//         image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
//     },
//     {
//         title: "The Power of Self-Realization",
//         challenge: "Many struggle with identity and purpose, lost in the noise of societal expectations.",
//         teaching: "Lord Dattatreya teaches that self-realization is the key to a fulfilling life. Recognizing the divine within empowers us to make purposeful decisions.",
//         applications: [
//             "Meditate daily to connect with your inner self and clarify your life’s purpose.",
//             "Align your actions with your core values and higher goals."
//         ],
//         image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp;rs=AOn4CLAPX9lzi0UfydCujBJclumGp7EBwA"
//     },
//     {
//         title: "Oneness and Unity in Diversity",
//         challenge: "Modern societies face divisions based on race, religion, and culture, leading to conflict and disharmony.",
//         teaching: "Lord Datta’s philosophy of oneness teaches us to see the divine in all beings, fostering compassion, inclusivity, and respect.",
//         applications: [
//             "Practice empathy by listening to others’ perspectives without judgment.",
//             "Participate in community-building activities that bridge gaps between diverse groups."
//         ],
//         image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
//     },
//     {
//         title: "Balancing Action and Rest (The Gunas)",
//         challenge: "The pressures of modern life often lead to burnout, with people struggling to balance work, rest, and personal growth.",
//         teaching: "Lord Dattatreya’s philosophy of balancing the three gunas—Sattva (goodness), Rajas (activity), and Tamas (rest)—encourages a harmonious lifestyle.",
//         applications: [
//             "Incorporate periods of rest and self-care amidst your busy schedule.",
//             "Focus on cultivating Sattva through mindfulness, healthy eating, and meaningful interactions."
//         ],
//         image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
//     },
//     {
//         title: "Faith and Patience in a Fast-Paced World",
//         challenge: "Instant gratification often undermines patience and resilience in modern life.",
//         teaching: "Lord Datta teaches that faith in divine timing and patience in adversity lead to long-term success and peace.",
//         applications: [
//             "Trust the process and avoid rushing important decisions.",
//             "Practice mindfulness to cultivate patience in challenging situations."
//         ],
//         image: "https://i.ytimg.com/vi/p74eROQGwOI/maxresdefault.jpg"
//     },
//     {
//         title: "Selfless Service (Karma Yoga)",
//         challenge: "Modern life often revolves around self-centered goals, leading to a sense of emptiness and lack of fulfillment.",
//         teaching: "Lord Datta emphasizes Karma Yoga, or selfless action, as a path to inner peace and purpose.",
//         applications: [
//             "Volunteer for social causes or community service.",
//             "Help others without expecting anything in return, viewing service as an offering to the divine."
//         ],
//         image: "https://i.ytimg.com/vi/fxjPcqz8o8U/maxresdefault.jpg"
//     },
//     {
//         title: "Harnessing the Lessons from Nature (24 Gurus)",
//         challenge: "Disconnect from nature and its lessons is common in urbanized lifestyles.",
//         teaching: "Lord Dattatreya learned profound lessons from 24 natural elements, teaching us to observe and emulate nature’s wisdom.",
//         applications: [
//             "Earth: Be patient and forgiving like the Earth.",
//             "Sun: Embrace selfless service, shining your light for others.",
//             "Spider: Understand life’s cyclical nature—create, preserve, and let go when needed."
//         ],
//         image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg"
//     },
//     {
//         title: "Strengthening Faith Through Devotion",
//         challenge: "In an era of distractions, spiritual practices are often neglected, leading to a lack of connection with the divine.",
//         teaching: "Lord Datta teaches that devotion strengthens faith and brings clarity, even amidst chaos.",
//         applications: [
//             "Set aside time daily for prayer, chanting, or reading sacred texts like Guru Charitra.",
//             "Attend community prayers or spiritual gatherings to deepen your connection with others and the divine."
//         ],
//         image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg"
//     }
// ];

// const ModernTeaching: React.FC = () => {
//     return (
//         <div className="w-full bg-gray-50 py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Title Section */}
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         Teachings of Lord Dattatreya for Modern Times
//                     </h1>
//                     <p className="text-lg text-gray-600">
//                         Timeless wisdom to guide you in achieving balance, purpose, and inner peace.
//                     </p>
//                 </div>

//                 {/* Teachings Section */}
//                 <div className="space-y-12">
//                     {teachings.map((teaching, index) => (
//                         <div
//                             key={index}
//                             className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                                 } items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden`}
//                         >
//                             {/* Image Section */}
//                             <div className="w-full md:w-1/2">
//                                 <img
//                                     src={teaching.image}
//                                     alt={teaching.title}
//                                     className="w-full h-64 md:h-96 object-cover"
//                                 />
//                             </div>

//                             {/* Text Section */}
//                             <div className="w-full md:w-1/2 p-6 space-y-4">
//                                 <h2 className="text-2xl font-bold text-gray-800">{teaching.title}</h2>
//                                 <p className="text-gray-600 font-medium">Challenge: {teaching.challenge}</p>
//                                 <p className="text-gray-700">{teaching.teaching}</p>
//                                 <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                                     {teaching.applications.map((point, i) => (
//                                         <li key={i}>{point}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Key Takeaways Section */}
//                 <div className="mt-16 text-center">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Takeaways for Modern Living</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[
//                             "Inner Peace: Detachment and mindfulness help overcome stress.",
//                             "Purposeful Living: Align actions with spiritual values and higher goals.",
//                             "Community Harmony: Foster unity and inclusivity by seeing the divine in all beings.",
//                             "Resilience: Trust in divine timing and cultivate patience for long-term success."
//                         ].map((point, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                                 <p className="text-gray-700">{point}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Inspirational Quote Section */}
//                 <div className="mt-16 text-center bg-white rounded-xl shadow-lg py-12 px-8">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Quote to Inspire</h2>
//                     <blockquote className="italic text-gray-600 text-xl">
//                         "In the stillness of the mind lies the wisdom of the universe. Embrace simplicity, serve selflessly, and trust the divine."
//                     </blockquote>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModernTeaching;




import React from "react";
import Footer from "./Footer";

const teachings = [
    {
        title: "Embracing Detachment in a Material World",
        challenge: "In today’s consumer-driven society, attachment to material possessions often leads to stress and dissatisfaction.",
        teaching: "Lord Datta emphasizes detachment from material desires, urging us to focus on what truly matters—spiritual growth, relationships, and inner peace.",
        applications: [
            "Practice gratitude for what you have instead of yearning for more.",
            "Dedicate time daily to reflect on non-material sources of happiness, such as family, nature, and self-growth."
        ],
        image: "https://i.ytimg.com/vi/nnQM-QSCwSg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPig1MA8=&rs=AOn4CLCZgfcRcUtz1M_Cj9V9oO_vgKV00Q"
    },
    {
        title: "The Power of Self-Realization",
        challenge: "Many struggle with identity and purpose, lost in the noise of societal expectations.",
        teaching: "Lord Dattatreya teaches that self-realization is the key to a fulfilling life. Recognizing the divine within empowers us to make purposeful decisions.",
        applications: [
            "Meditate daily to connect with your inner self and clarify your life’s purpose.",
            "Align your actions with your core values and higher goals."
        ],
        image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgZSgwMA8=&amp"
    },
    {
        title: "Oneness and Unity in Diversity",
        challenge: "Modern societies face divisions based on race, religion, and culture, leading to conflict and disharmony.",
        teaching: "Lord Datta’s philosophy of oneness teaches us to see the divine in all beings, fostering compassion, inclusivity, and respect.",
        applications: [
            "Practice empathy by listening to others’ perspectives without judgment.",
            "Participate in community-building activities that bridge gaps between diverse groups."
        ],
        image: "https://sun9-32.userapi.com/impg/EIj_jm0P0S0HFp5ZBxySG61v3_0138yDmEmKKw/eM-d394s0e0.jpg?size=781x654&quality=96&sign=9f3b2ac0036d12e16b262a277b03b746&c_uniq_tag=bgzlvJuOYnBoDKsqJQ5yPm0wBKSFatLjG-9HQFdDVEo&type=album"
    },
    {
        title: "Balancing Action and Rest (The Gunas)",
        challenge: "The pressures of modern life often lead to burnout, with people struggling to balance work, rest, and personal growth.",
        teaching: "Lord Dattatreya’s philosophy of balancing the three gunas—Sattva (goodness), Rajas (activity), and Tamas (rest)—encourages a harmonious lifestyle.",
        applications: [
            "Incorporate periods of rest and self-care amidst your busy schedule.",
            "Focus on cultivating Sattva through mindfulness, healthy eating, and meaningful interactions."
        ],
        image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSgrMA8=&rs=AOn4CLBqTi4G0DTwpS4n9HtZCIUch9aM-g"
    },
    {
        title: "Faith and Patience in a Fast-Paced World",
        challenge: "Instant gratification often undermines patience and resilience in modern life.",
        teaching: "Lord Datta teaches that faith in divine timing and patience in adversity lead to long-term success and peace.",
        applications: [
            "Trust the process and avoid rushing important decisions.",
            "Practice mindfulness to cultivate patience in challenging situations."
        ],
        image: "https://i.ytimg.com/vi/p74eROQGwOI/maxresdefault.jpg"
    },
    {
        title: "Selfless Service (Karma Yoga)",
        challenge: "Modern life often revolves around self-centered goals, leading to a sense of emptiness and lack of fulfillment.",
        teaching: "Lord Datta emphasizes Karma Yoga, or selfless action, as a path to inner peace and purpose.",
        applications: [
            "Volunteer for social causes or community service.",
            "Help others without expecting anything in return, viewing service as an offering to the divine."
        ],
        image: "https://i.ytimg.com/vi/fxjPcqz8o8U/maxresdefault.jpg"
    },
    {
        title: "Harnessing the Lessons from Nature (24 Gurus)",
        challenge: "Disconnect from nature and its lessons is common in urbanized lifestyles.",
        teaching: "Lord Dattatreya learned profound lessons from 24 natural elements, teaching us to observe and emulate nature’s wisdom.",
        applications: [
            "Earth: Be patient and forgiving like the Earth.",
            "Sun: Embrace selfless service, shining your light for others.",
            "Spider: Understand life’s cyclical nature—create, preserve, and let go when needed."
        ],
        image: "https://i.ytimg.com/vi/aeqSsItjmeM/maxresdefault.jpg"
    },
    {
        title: "Strengthening Faith Through Devotion",
        challenge: "In an era of distractions, spiritual practices are often neglected, leading to a lack of connection with the divine.",
        teaching: "Lord Datta teaches that devotion strengthens faith and brings clarity, even amidst chaos.",
        applications: [
            "Set aside time daily for prayer, chanting, or reading sacred texts like Guru Charitra.",
            "Attend community prayers or spiritual gatherings to deepen your connection with others and the divine."
        ],
        image: "https://i.ytimg.com/vi/v2S-tUJ95n4/maxresdefault.jpg"
    }
];

const ModernTeaching: React.FC = () => {
    return (

        <>
            <div
                className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center  mb-12"
                style={{
                    backgroundImage: `url('https://avatars.mds.yandex.net/get-mpic/3913686/img_id896587762305902504.jpeg/orig')`,
                }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
                    Teachings of Lord Dattatreya for Modern Times
                </h1> 
               
                
            </div>
            <div className="bg-gradient-to-br -mt-12 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-16">
                {/* Title Section */}
                <div >
                   
                    <p className="text-lg text-left text-gray-600 mb-8">
                            The teachings of Lord Dattatreya transcend time and are as relevant today as they were
                            centuries ago. His philosophy provides practical guidance to navigate the complexities of
                            modern life, offering solutions for inner peace, purpose, and harmony in a fast-paced and
                            ever-changing world.
                    </p>
                </div>

                {/* Teachings Section */}
                <div className="space-y-12">
                    {teachings.map((teaching, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={teaching.image}
                                    alt={teaching.title}
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 p-6 space-y-4">
                                <h2 className="text-2xl font-bold text-gray-800">{teaching.title}</h2>
                                <p className="text-gray-600 font-medium">Challenge: {teaching.challenge}</p>
                                <p className="text-gray-700">{teaching.teaching}</p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    {teaching.applications.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Takeaways Section
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Takeaways for Modern Living</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Inner Peace: Detachment and mindfulness help overcome stress.",
                            "Purposeful Living: Align actions with spiritual values and higher goals.",
                            "Community Harmony: Foster unity and inclusivity by seeing the divine in all beings.",
                            "Resilience: Trust in divine timing and cultivate patience for long-term success."
                        ].map((point, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                </div> */}


                    {/* Key Takeaways Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Takeaways for Modern Living</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    text: "Inner Peace: Detachment and mindfulness help overcome stress.",
                                    image: "https://i.ytimg.com/vi/CknCw-iyFoA/maxresdefault.jpg",
                                },
                                {
                                    text: "Purposeful Living: Align actions with spiritual values and higher goals.",
                                    image: "https://avatars.mds.yandex.net/i?id=8779d5f8e458e18da94e4a0ed4c38ffa398d325a-8487335-images-thumbs&n=13",
                                },
                                {
                                    text: "Community Harmony: Foster unity and inclusivity by seeing the divine in all beings.",
                                    image: "https://cdn.culture.ru/images/36ad95cc-6896-5d5d-9f72-efbfb887fbe8",
                                },
                                {
                                    text: "Resilience: Trust in divine timing and cultivate patience for long-term success.",
                                    image: "https://avatars.mds.yandex.net/i?id=d3bb6ac355adbe44849956a3e9f052fa6ad54c16-9053088-images-thumbs&n=13",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.text}
                                        className="w-full h-32 object-cover rounded-md mb-4"
                                    />
                                    <p className="text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                {/* Inspirational Quote Section */}
                <div className="mt-16 text-center    py-12 px-8">
                    <blockquote className="text-xl italic text-indigo-900">
                        "In the stillness of the mind lies the wisdom of the universe. Embrace simplicity, serve selflessly, and trust the divine."
                    </blockquote>
                </div>
            </div>
        </div>

        {/* footer  */}
        <div>
            <Footer />
        </div>
        </>
    );
};

export default ModernTeaching;
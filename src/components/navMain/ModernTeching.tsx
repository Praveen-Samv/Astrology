import React from "react";

const teachings = [
    {
        title: "Embracing Detachment in a Material World",
        challenge: "In today’s consumer-driven society, attachment to material possessions often leads to stress and dissatisfaction.",
        teaching: "Lord Datta emphasizes detachment from material desires, urging us to focus on what truly matters—spiritual growth, relationships, and inner peace.",
        applications: [
            "Practice gratitude for what you have instead of yearning for more.",
            "Dedicate time daily to reflect on non-material sources of happiness, such as family, nature, and self-growth."
        ]
    },
    {
        title: "The Power of Self-Realization",
        challenge: "Many struggle with identity and purpose, lost in the noise of societal expectations.",
        teaching: "Lord Dattatreya teaches that self-realization is the key to a fulfilling life. Recognizing the divine within empowers us to make purposeful decisions.",
        applications: [
            "Meditate daily to connect with your inner self and clarify your life’s purpose.",
            "Align your actions with your core values and higher goals."
        ]
    },
    {
        title: "Oneness and Unity in Diversity",
        challenge: "Modern societies face divisions based on race, religion, and culture, leading to conflict and disharmony.",
        teaching: "Lord Datta’s philosophy of oneness teaches us to see the divine in all beings, fostering compassion, inclusivity, and respect.",
        applications: [
            "Practice empathy by listening to others’ perspectives without judgment.",
            "Participate in community-building activities that bridge gaps between diverse groups."
        ]
    },
    {
        title: "Balancing Action and Rest (The Gunas)",
        challenge: "The pressures of modern life often lead to burnout, with people struggling to balance work, rest, and personal growth.",
        teaching: "Lord Dattatreya’s philosophy of balancing the three gunas—Sattva (goodness), Rajas (activity), and Tamas (rest)—encourages a harmonious lifestyle.",
        applications: [
            "Incorporate periods of rest and self-care amidst your busy schedule.",
            "Focus on cultivating Sattva through mindfulness, healthy eating, and meaningful interactions."
        ]
    },
    {
        title: "Faith and Patience in a Fast-Paced World",
        challenge: "Instant gratification often undermines patience and resilience in modern life.",
        teaching: "Lord Datta teaches that faith in divine timing and patience in adversity lead to long-term success and peace.",
        applications: [
            "Trust the process and avoid rushing important decisions.",
            "Practice mindfulness to cultivate patience in challenging situations."
        ]
    },
    {
        title: "Selfless Service (Karma Yoga)",
        challenge: "Modern life often revolves around self-centered goals, leading to a sense of emptiness and lack of fulfillment.",
        teaching: "Lord Datta emphasizes Karma Yoga, or selfless action, as a path to inner peace and purpose.",
        applications: [
            "Volunteer for social causes or community service.",
            "Help others without expecting anything in return, viewing service as an offering to the divine."
        ]
    },
    {
        title: "Harnessing the Lessons from Nature (24 Gurus)",
        challenge: "Disconnect from nature and its lessons is common in urbanized lifestyles.",
        teaching: "Lord Dattatreya learned profound lessons from 24 natural elements, teaching us to observe and emulate nature’s wisdom.",
        applications: [
            "Earth: Be patient and forgiving like the Earth.",
            "Sun: Embrace selfless service, shining your light for others.",
            "Spider: Understand life’s cyclical nature—create, preserve, and let go when needed."
        ]
    },
    {
        title: "Strengthening Faith Through Devotion",
        challenge: "In an era of distractions, spiritual practices are often neglected, leading to a lack of connection with the divine.",
        teaching: "Lord Datta teaches that devotion strengthens faith and brings clarity, even amidst chaos.",
        applications: [
            "Set aside time daily for prayer, chanting, or reading sacred texts like Guru Charitra.",
            "Attend community prayers or spiritual gatherings to deepen your connection with others and the divine."
        ]
    }
];

const ModernTeaching: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-10 mt-12">
            <h1 className="text-3xl font-bold text-center mb-6">Teachings of Lord Dattatreya for Modern Times</h1>
            <p className="text-center text-gray-700 mb-8">
                Discover timeless wisdom that provides practical guidance for a balanced and meaningful life.
            </p>
            <div className="space-y-8">
                {teachings.map((teaching, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">{teaching.title}</h2>
                        <p className="text-gray-600 mt-2 font-medium">Challenge: {teaching.challenge}</p>
                        <p className="text-gray-700 mt-2">Teaching: {teaching.teaching}</p>
                        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                            {teaching.applications.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways for Modern Living</h2>
                <ul className="list-disc text-left inline-block text-gray-700">
                    <li>Inner Peace: Detachment and mindfulness help overcome stress.</li>
                    <li>Purposeful Living: Align actions with spiritual values and higher goals.</li>
                    <li>Community Harmony: Foster unity and inclusivity by seeing the divine in all beings.</li>
                    <li>Resilience: Trust in divine timing and cultivate patience for long-term success.</li>
                </ul>
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Quote to Inspire</h2>
                <blockquote className="italic text-gray-600">"In the stillness of the mind lies the wisdom of the universe. Embrace simplicity, serve selflessly, and trust the divine."</blockquote>
            </div>
        </div>
    );
};

export default ModernTeaching;







// import React from 'react';

// const ModernTeaching: React.FC = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen p-8">
//             {/* Header Section */}
//             <header className="text-center mb-12">
//                 <h1 className="text-4xl font-bold text-purple-900">Teachings of Lord Dattatreya for Modern Times</h1>
//                 <p className="mt-4 text-gray-700">
//                     The teachings of Lord Dattatreya transcend time and are as relevant today as they were centuries ago. His philosophy provides practical guidance to navigate the complexities of modern life.
//                 </p>
//             </header>

//             {/* Embracing Detachment Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">1. Embracing Detachment in a Material World</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> In today’s consumer-driven society, attachment to material possessions often leads to stress and dissatisfaction.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Datta emphasizes detachment from material desires, urging us to focus on what truly matters—spiritual growth, relationships, and inner peace.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Practice gratitude for what you have instead of yearning for more.</li>
//                             <li>Dedicate time daily to reflect on non-material sources of happiness, such as family, nature, and self-growth.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Detachment"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Self-Realization Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">2. The Power of Self-Realization</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> Many struggle with identity and purpose, lost in the noise of societal expectations.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Dattatreya teaches that self-realization is the key to a fulfilling life. Recognizing the divine within empowers us to make purposeful decisions.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Meditate daily to connect with your inner self and clarify your life’s purpose.</li>
//                             <li>Align your actions with your core values and higher goals.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Self-Realization"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Oneness and Unity Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">3. Oneness and Unity in Diversity</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> Modern societies face divisions based on race, religion, and culture, leading to conflict and disharmony.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Datta’s philosophy of oneness teaches us to see the divine in all beings, fostering compassion, inclusivity, and respect.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Practice empathy by listening to others’ perspectives without judgment.</li>
//                             <li>Participate in community-building activities that bridge gaps between diverse groups.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Oneness"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Balancing Action and Rest Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">4. Balancing Action and Rest (The Gunas)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> The pressures of modern life often lead to burnout, with people struggling to balance work, rest, and personal growth.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Dattatreya’s philosophy of balancing the three gunas—Sattva (goodness), Rajas (activity), and Tamas (rest)—encourages a harmonious lifestyle.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Incorporate periods of rest and self-care amidst your busy schedule.</li>
//                             <li>Focus on cultivating Sattva through mindfulness, healthy eating, and meaningful interactions.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Balancing Gunas"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Faith and Patience Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">5. Faith and Patience in a Fast-Paced World</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> Instant gratification often undermines patience and resilience in modern life.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Datta teaches that faith in divine timing and patience in adversity lead to long-term success and peace.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Trust the process and avoid rushing important decisions.</li>
//                             <li>Practice mindfulness to cultivate patience in challenging situations.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Faith and Patience"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Selfless Service Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">6. Selfless Service (Karma Yoga)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> Modern life often revolves around self-centered goals, leading to a sense of emptiness and lack of fulfillment.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Datta emphasizes Karma Yoga, or selfless action, as a path to inner peace and purpose.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Volunteer for social causes or community service.</li>
//                             <li>Help others without expecting anything in return, viewing service as an offering to the divine.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Selfless Service"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Lessons from Nature Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">7. Harnessing the Lessons from Nature (24 Gurus)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> Disconnect from nature and its lessons is common in urbanized lifestyles.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Dattatreya learned profound lessons from 24 natural elements, teaching us to observe and emulate nature’s wisdom.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>Earth:</strong> Be patient and forgiving like the Earth.</li>
//                             <li><strong>Sun:</strong> Embrace selfless service, shining your light for others.</li>
//                             <li><strong>Spider:</strong> Understand life’s cyclical nature—create, preserve, and let go when needed.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Lessons from Nature"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Strengthening Faith Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">8. Strengthening Faith Through Devotion</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Challenge:</strong> In an era of distractions, spiritual practices are often neglected, leading to a lack of connection with the divine.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Teaching:</strong> Lord Datta teaches that devotion strengthens faith and brings clarity, even amidst chaos.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li>Set aside time daily for prayer, chanting, or reading sacred texts like Guru Charitra.</li>
//                             <li>Attend community prayers or spiritual gatherings to deepen your connection with others and the divine.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://via.placeholder.com/400x300"
//                             alt="Strengthening Faith"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Key Takeaways Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">Key Takeaways for Modern Living</h2>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li><strong>Inner Peace:</strong> Detachment and mindfulness help overcome stress.</li>
//                     <li><strong>Purposeful Living:</strong> Align actions with spiritual values and higher goals.</li>
//                     <li><strong>Community Harmony:</strong> Foster unity and inclusivity by seeing the divine in all beings.</li>
//                     <li><strong>Resilience:</strong> Trust in divine timing and cultivate patience for long-term success.</li>
//                 </ul>
//             </section>

//             {/* Interactive Features Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">Interactive Features for the Website</h2>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li><strong>Practical Tips Section:</strong> Step-by-step guides on incorporating Lord Datta’s teachings into daily life.</li>
//                     <li><strong>Video Tutorials:</strong> Short videos on meditation, mantra chanting, and Karma Yoga practices.</li>
//                     <li><strong>Community Forum:</strong> A space for devotees to share how these teachings have transformed their lives.</li>
//                 </ul>
//             </section>

//             {/* Inspirational Quote Section */}
//             <section className="text-center">
//                 <blockquote className="text-2xl italic text-purple-900">
//                     "In the stillness of the mind lies the wisdom of the universe. Embrace simplicity, serve selflessly, and trust the divine."
//                 </blockquote>
//             </section>
//         </div>
//     );
// };

// export default ModernTeaching;
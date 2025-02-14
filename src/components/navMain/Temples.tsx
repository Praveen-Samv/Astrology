// import React from 'react';

// const DattatreyaTemples: React.FC = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen p-8 mt-12">
//             {/* Header Section */}
//             <header className="text-center mb-12">
//                 <h1 className="text-4xl font-bold text-purple-900">Temples and Holy Sites of Lord Dattatreya</h1>
//                 <p className="mt-4 text-gray-700">
//                     These sacred places hold profound significance as they resonate with the divine energy of Lord Datta and his incarnations.
//                 </p>
//             </header>

//             {/* Ganagapur Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">1. Ganagapur: The Abode of Lord Narasimha Saraswati</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Location:</strong> Karnataka, India.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Significance:</strong> Ganagapur is one of the most revered holy sites associated with Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>The Audumbar Tree:</strong> A sacred tree believed to fulfill the wishes of devotees.</li>
//                             <li><strong>Ashta Teertha:</strong> Eight sacred water spots around Ganagapur, where bathing is said to cleanse sins.</li>
//                             <li><strong>Datta Mandir:</strong> The main temple where devotees experience Lord Datta’s divine presence.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
                            // src="https://i.ytimg.com/vi/x3hMuAF7tqg/maxresdefault.jpg"
//                             alt="Ganagapur Temple"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Akkalkot Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">2. Akkalkot: The Shrine of Swami Samarth</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Location:</strong> Maharashtra, India.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Significance:</strong> Akkalkot is closely associated with Swami Samarth, the third incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>The Vatavruksha:</strong> A sacred banyan tree under which Swami Samarth meditated and blessed devotees.</li>
//                             <li><strong>Samadhi Shrine:</strong> The final resting place of Swami Samarth, a center of divine energy.</li>
//                             <li><strong>Daily Rituals:</strong> Including Arati, performed to honor Swami’s teachings and miracles.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
                            // src="https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/01/A9159-15-Places-to-Visit-in-Mount-Abu-for-Travelling-Architect-Image-33-1024x492.jpg"
//                             alt="Akkalkot Temple"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Pithapuram Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">3. Pithapuram: Birthplace of Sripada Srivallabha</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Location:</strong> Andhra Pradesh, India.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Significance:</strong> Pithapuram is celebrated as the birthplace of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>The Birthplace Shrine:</strong> A temple dedicated to Sripada, commemorating his divine incarnation.</li>
//                             <li><strong>The Padukas (Sacred Footprints):</strong> Representing his eternal presence.</li>
//                             <li><strong>Festivals:</strong> Like Datta Jayanti are celebrated with great devotion.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
                            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg/1600px-Rear_View_of_Keshava_Temple_at_Somanathapura.jpg"
//                             alt="Pithapuram Temple"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Shirdi Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">4. Shirdi: The Land of Sai Baba</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Location:</strong> Maharashtra, India.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Significance:</strong> Shirdi is the sacred abode of Sai Baba, an incarnation of Lord Dattatreya who united people across religions with his teachings of love and selflessness.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>The Samadhi Mandir:</strong> The resting place of Sai Baba.</li>
//                             <li><strong>Dwarkamai:</strong> A mosque where Sai Baba lived and performed miracles.</li>
//                             <li><strong>The Chavadi:</strong> A site where Sai Baba held congregational prayers.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
                            // src="https://i.ytimg.com/vi/W9UTqdHxp_0/maxresdefault.jpg"
//                             alt="Shirdi Temple"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Shegaon Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">5. Shegaon: The Divine Presence of Gajanan Maharaj</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Location:</strong> Maharashtra, India.
//                         </p>
//                         <p className="text-gray-700 mb-4">
//                             <strong>Significance:</strong> Shegaon is associated with Gajanan Maharaj, regarded as an incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>Samadhi Shrine:</strong> A center of devotion and meditation.</li>
//                             <li><strong>Anand Sagar:</strong> A spiritual park developed for devotees.</li>
//                             <li><strong>Daily Prayers and Bhajans:</strong> Attract devotees seeking peace and blessings.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
                            // src="https://i.ytimg.com/vi/iyTtXoPUBO8/maxresdefault.jpg"
//                             alt="Shegaon Temple"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Other Notable Temples Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">6. Other Notable Temples and Sites</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div>
//                         <ul className="list-disc list-inside text-gray-700">
//                             <li><strong>Maniknagar (Karnataka):</strong> Associated with Manik Prabhu, an incarnation of Lord Datta known for his teachings of unity and harmony.</li>
//                             <li><strong>Shri Kshetra Audumbar (Maharashtra):</strong> Dedicated to Lord Datta, situated near a sacred Audumbar tree believed to fulfill wishes.</li>
//                             <li><strong>Shri Kshetra Narsobawadi (Maharashtra):</strong> A sacred site where Lord Narasimha Saraswati spent his later years.</li>
//                             <li><strong>Shri Kshetra Gangapur (Madhya Pradesh):</strong> Known for its tranquil environment and association with Lord Datta’s miracles.</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/An_entrance_into_the_Hoysaleshwara_temple_in_Halebidu.jpg/1200px-An_entrance_into_the_Hoysaleshwara_temple_in_Halebidu.jpg"
//                             alt="Other Temples"
//                             className="rounded-lg shadow-lg w-full h-64 object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Why Visit Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">Why Visit These Holy Sites?</h2>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li><strong>Spiritual Awakening:</strong> Experience the divine energy and profound peace at these sacred locations.</li>
//                     <li><strong>Rituals and Practices:</strong> Participate in ancient rituals like Paduka Puja, Arati, and sacred baths at holy rivers.</li>
//                     <li><strong>Strengthen Faith:</strong> Witness the spiritual power and grace of Lord Dattatreya’s incarnations.</li>
//                 </ul>
//             </section>

//             {/* Interactive Map Section */}
//             <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-semibold text-purple-800 mb-4">Interactive Map for Pilgrimage Planning</h2>
//                 <p className="text-gray-700 mb-4">
//                     To assist devotees, the website can feature an interactive map with:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li>Location details and travel guides for each site.</li>
//                     <li>Information on festivals, rituals, and temple timings.</li>
//                     <li>Nearby accommodations and facilities.</li>
//                 </ul>
//             </section>

//             {/* Inspirational Quote Section */}
//             <section className="text-center">
//                 <blockquote className="text-2xl italic text-purple-900">
//                     "Every step taken toward a sacred site is a step closer to the divine."
//                 </blockquote>
//             </section>
//         </div>
//     );
// };

// export default DattatreyaTemples;





// import React from "react";

// const temples = [
//     {
//         name: "Ganagapur: The Abode of Lord Narasimha Saraswati",
//         location: "Karnataka, India",
//         image: "https://i.ytimg.com/vi/x3hMuAF7tqg/maxresdefault.jpg",
//         significance: "Ganagapur is one of the most revered holy sites associated with Lord Narasimha Saraswati. It is home to the Sangam, the confluence of rivers Bhima and Amaraja, where devotees perform rituals and offer prayers.",
//         highlights: [
//             "The Audumbar Tree: A sacred tree believed to fulfill the wishes of devotees.",
//             "Ashta Teertha: Eight sacred water spots around Ganagapur, where bathing is said to cleanse sins.",
//             "Datta Mandir: The main temple where devotees experience Lord Datta’s divine presence."
//         ],
//         keyHighlights: "Ganagapur is known for its sacred water spots and the presence of Lord Datta’s divine energy."
//     },
//     {
//         name: "Akkalkot: The Shrine of Swami Samarth",
//         location: "Maharashtra, India",
//         image : "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/01/A9159-15-Places-to-Visit-in-Mount-Abu-for-Travelling-Architect-Image-33-1024x492.jpg"
// ,
//         significance: "Akkalkot is closely associated with Swami Samarth, the third incarnation of Lord Dattatreya. It is a popular pilgrimage site where devotees experience spiritual peace and witness miracles.",
//         highlights: [
//             "The Vatavruksha: A sacred banyan tree under which Swami Samarth meditated and blessed devotees.",
//             "Samadhi Shrine: The final resting place of Swami Samarth, a center of divine energy.",
//             "Daily rituals, including Arati, are performed to honor Swami’s teachings and miracles."
//         ],
//         keyHighlights: "Akkalkot is revered for Swami Samarth’s divine presence and teachings."
//     },
//     {
//         name: "Pithapuram: Birthplace of Sripada Srivallabha",
//         location: "Andhra Pradesh, India",
//         image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg/1600px-Rear_View_of_Keshava_Temple_at_Somanathapura.jpg"
// ,
//         significance: "Pithapuram is celebrated as the birthplace of Sripada Srivallabha, the first incarnation of Lord Dattatreya. The Sripada Srivallabha Mahasamsthanam temple is a spiritual haven for devotees seeking his blessings.",
//         highlights: [
//             "The Birthplace Shrine: A temple dedicated to Sripada, commemorating his divine incarnation.",
//             "The Padukas (Sacred Footprints): Representing his eternal presence.",
//             "Festivals like Datta Jayanti are celebrated with great devotion."
//         ],
//         keyHighlights: "Pithapuram is a sacred site of Lord Dattatreya’s first incarnation."
//     },
//     {
//         name: "Shirdi: The Land of Sai Baba",
//         location: "Maharashtra, India",
//         image:  "https://i.ytimg.com/vi/W9UTqdHxp_0/maxresdefault.jpg"
// ,
//         significance: "Shirdi is the sacred abode of Sai Baba, an incarnation of Lord Dattatreya who united people across religions with his teachings of love and selflessness.",
//         highlights: [
//             "The Samadhi Mandir: The resting place of Sai Baba.",
//             "Dwarkamai: A mosque where Sai Baba lived and performed miracles.",
//             "The Chavadi: A site where Sai Baba held congregational prayers."
//         ],
//         keyHighlights: "Shirdi is a major pilgrimage site where devotees seek Sai Baba’s blessings."
//     },
//     {
//         name: "Shegaon: The Divine Presence of Gajanan Maharaj",
//         location: "Maharashtra, India",
//         image :"https://i.ytimg.com/vi/iyTtXoPUBO8/maxresdefault.jpg"
// ,
//         significance: "Shegaon is associated with Gajanan Maharaj, regarded as an incarnation of Lord Dattatreya. The Gajanan Maharaj Temple is known for its serene environment and spiritual vibrations.",
//         highlights: [
//             "Samadhi Shrine: A center of devotion and meditation.",
//             "Anand Sagar: A spiritual park developed for devotees.",
//             "Daily prayers and bhajans attract devotees seeking peace and blessings."
//         ],
//         keyHighlights: "Shegaon is a center of peace and devotion, drawing thousands of devotees."
//     }
// ];

// const Temples: React.FC = () => {
//     return (
//         <div className="container mx-auto px-4 py-10 mt-12">
//             <h1 className="text-3xl font-bold text-center mb-6">Temples and Holy Sites of Lord Dattatreya</h1>
//             <p className="text-center text-gray-700 mb-8">
//                 These sacred places hold profound significance as they resonate with the divine energy of Lord Datta and his incarnations.
//             </p>
//             <blockquote className="text-center italic text-gray-600 mb-8">"Every step taken toward a sacred site is a step closer to the divine."</blockquote>
//             <div className="space-y-8">
//                 {temples.map((temple, index) => (
//                     <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//                         <img src={temple.image} alt={temple.name} className="w-full md:w-1/3 h-64 object-cover rounded-md" />
//                         <div className="md:ml-6 mt-4 md:mt-0">
//                             <h2 className="text-2xl font-semibold">{temple.name}</h2>
//                             <p className="text-gray-600">{temple.location}</p>
//                             <p className="text-gray-700 mt-2 font-medium">Significance: {temple.significance}</p>
//                             <p className="italic text-gray-700 mt-2">{temple.keyHighlights}</p>
//                             <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
//                                 {temple.highlights.map((point, i) => (
//                                     <li key={i}>{point}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-10 text-center">
//                 <h2 className="text-2xl font-bold mb-4">Why Visit These Holy Sites?</h2>
//                 <ul className="list-disc text-left inline-block text-gray-700">
//                     <li>Spiritual Awakening: Experience the divine energy and profound peace at these sacred locations.</li>
//                     <li>Rituals and Practices: Participate in ancient rituals like Paduka Puja, Arati, and sacred baths at holy rivers.</li>
//                     <li>Strengthen Faith: Witness the spiritual power and grace of Lord Dattatreya’s incarnations.</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Temples;



// import React from "react";

// const temples = [
//     {
//         name: "Ganagapur: The Abode of Lord Narasimha Saraswati",
//         location: "Karnataka, India",
//         image: "https://i.ytimg.com/vi/x3hMuAF7tqg/maxresdefault.jpg",
//         significance: "Ganagapur is one of the most revered holy sites associated with Lord Narasimha Saraswati...",
//         highlights: [
//             "The Audumbar Tree: A sacred tree believed to fulfill the wishes of devotees.",
//             "Ashta Teertha: Eight sacred water spots around Ganagapur, where bathing is said to cleanse sins.",
//             "Datta Mandir: The main temple where devotees experience Lord Datta’s divine presence."
//         ],
//         keyHighlights: "Ganagapur is known for its sacred water spots and the presence of Lord Datta’s divine energy.",
//         link: "https://en.wikipedia.org/wiki/Ganagapura"
//     },
//     {
//         name: "Akkalkot: The Shrine of Swami Samarth",
//         location: "Maharashtra, India",
//         image: "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/01/A9159-15-Places-to-Visit-in-Mount-Abu-for-Travelling-Architect-Image-33-1024x492.jpg",
//         significance: "Akkalkot is closely associated with Swami Samarth, the third incarnation of Lord Dattatreya...",
//         highlights: [
//             "The Vatavruksha: A sacred banyan tree under which Swami Samarth meditated and blessed devotees.",
//             "Samadhi Shrine: The final resting place of Swami Samarth, a center of divine energy.",
//             "Daily rituals, including Arati, are performed to honor Swami’s teachings and miracles."
//         ],
//         keyHighlights: "Akkalkot is revered for Swami Samarth’s divine presence and teachings.",
//         link: "https://en.wikipedia.org/wiki/Akkalkot"
//     },
//     {
//         name: "Pithapuram: Birthplace of Sripada Srivallabha",
//         location: "Andhra Pradesh, India",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg/1600px-Rear_View_of_Keshava_Temple_at_Somanathapura.jpg",
//         significance: "Pithapuram is celebrated as the birthplace of Sripada Srivallabha, the first incarnation of Lord Dattatreya...",
//         highlights: [
//             "The Birthplace Shrine: A temple dedicated to Sripada, commemorating his divine incarnation.",
//             "The Padukas (Sacred Footprints): Representing his eternal presence.",
//             "Festivals like Datta Jayanti are celebrated with great devotion."
//         ],
//         keyHighlights: "Pithapuram is a sacred site of Lord Dattatreya’s first incarnation.",
//         link: "https://en.wikipedia.org/wiki/Pithapuram"
//     },
//     {
//         name: "Shirdi: The Land of Sai Baba",
//         location: "Maharashtra, India",
//         image: "https://i.ytimg.com/vi/W9UTqdHxp_0/maxresdefault.jpg",
//         significance: "Shirdi is the sacred abode of Sai Baba, an incarnation of Lord Dattatreya...",
//         highlights: [
//             "The Samadhi Mandir: The resting place of Sai Baba.",
//             "Dwarkamai: A mosque where Sai Baba lived and performed miracles.",
//             "The Chavadi: A site where Sai Baba held congregational prayers."
//         ],
//         keyHighlights: "Shirdi is a major pilgrimage site where devotees seek Sai Baba’s blessings.",
//         link: "https://en.wikipedia.org/wiki/Shirdi"
//     },
//     {
//         name: "Shegaon: The Divine Presence of Gajanan Maharaj",
//         location: "Maharashtra, India",
//         image: "https://i.ytimg.com/vi/iyTtXoPUBO8/maxresdefault.jpg",
//         significance: "Shegaon is associated with Gajanan Maharaj, regarded as an incarnation of Lord Dattatreya...",
//         highlights: [
//             "Samadhi Shrine: A center of devotion and meditation.",
//             "Anand Sagar: A spiritual park developed for devotees.",
//             "Daily prayers and bhajans attract devotees seeking peace and blessings."
//         ],
//         keyHighlights: "Shegaon is a center of peace and devotion, drawing thousands of devotees.",
//         link: "https://en.wikipedia.org/wiki/Shegaon"
//     }
// ];

// const Temples: React.FC = () => {
//     return (
//         <div className="container mx-auto px-4 py-10 mt-12">
//             <h1 className="text-3xl font-bold text-center mb-6">Temples and Holy Sites of Lord Dattatreya</h1>
//             <p className="text-center text-gray-700 mb-8">
//                 These sacred places hold profound significance as they resonate with the divine energy of Lord Datta and his incarnations.
//             </p>
//             <blockquote className="text-center italic text-gray-600 mb-8">"Every step taken toward a sacred site is a step closer to the divine."</blockquote>
//             <div className="space-y-8">
//                 {temples.map((temple, index) => (
//                     <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//                         <img src={temple.image} alt={temple.name} className="w-full md:w-1/3 h-64 object-cover rounded-md" />
//                         <div className="md:ml-6 mt-4 md:mt-0">
//                             <h2 className="text-2xl font-semibold">{temple.name}</h2>
//                             <p className="text-gray-600">{temple.location}</p>
//                             <p className="text-gray-700 mt-2 font-medium">Significance: {temple.significance}</p>
//                             <p className="italic text-gray-700 mt-2">{temple.keyHighlights}</p>
//                             <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
//                                 {temple.highlights.map((point, i) => (
//                                     <li key={i}>{point}</li>
//                                 ))}
//                             </ul>
//                             <a
//                                 href={temple.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                             >
//                                 Know More
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Temples;









import React from "react";
import Footer from "./Footer";

const temples = [
    {
        name: "Ganagapur: The Abode of Lord Narasimha Saraswati",
        location: "Karnataka, India",
        image: "https://i.ytimg.com/vi/x3hMuAF7tqg/maxresdefault.jpg",
        significance: "Ganagapur is one of the most revered holy sites associated with Lord Narasimha Saraswati. It is home to the Sangam, the confluence of rivers Bhima and Amaraja, where devotees perform rituals and offer prayers.",
        highlights: [
            "The Audumbar Tree: A sacred tree believed to fulfill the wishes of devotees.",
            "Ashta Teertha: Eight sacred water spots around Ganagapur, where bathing is said to cleanse sins.",
            "Datta Mandir: The main temple where devotees experience Lord Datta’s divine presence."
        ],
        keyHighlights: "Ganagapur is known for its sacred water spots and the presence of Lord Datta’s divine energy.",
        moreInfoUrl: "https://famoustemplesofindia.com/ganagapur-dattatreya-temple-karnataka/#google_vignette"
    },
    {
        name: "Akkalkot: The Shrine of Swami Samarth",
        location: "Maharashtra, India",
        image: "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/01/A9159-15-Places-to-Visit-in-Mount-Abu-for-Travelling-Architect-Image-33-1024x492.jpg",
        significance: "Akkalkot is closely associated with Swami Samarth, the third incarnation of Lord Dattatreya. It is a popular pilgrimage site where devotees experience spiritual peace and witness miracles.",
        highlights: [
            "The Vatavruksha: A sacred banyan tree under which Swami Samarth meditated and blessed devotees.",
            "Samadhi Shrine: The final resting place of Swami Samarth, a center of divine energy.",
            "Daily rituals, including Arati, are performed to honor Swami’s teachings and miracles."
        ],
        keyHighlights: "Akkalkot is revered for Swami Samarth’s divine presence and teachings.",
        moreInfoUrl: "https://swamiannacchatra.org/"
    },
    {
        name: "Pithapuram: Birthplace of Sripada Srivallabha",
        location: "Andhra Pradesh, India",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg/1600px-Rear_View_of_Keshava_Temple_at_Somanathapura.jpg",
        significance: "Pithapuram is celebrated as the birthplace of Sripada Srivallabha, the first incarnation of Lord Dattatreya. The Sripada Srivallabha Mahasamsthanam temple is a spiritual haven for devotees seeking his blessings.",
        highlights: [
            "The Birthplace Shrine: A temple dedicated to Sripada, commemorating his divine incarnation.",
            "The Padukas (Sacred Footprints): Representing his eternal presence.",
            "Festivals like Datta Jayanti are celebrated with great devotion."
        ],
        keyHighlights: "Pithapuram is a sacred site of Lord Dattatreya’s first incarnation.",
        moreInfoUrl: "https://www.sripadasrivallabha.org/index.php?page=home"
    },
    {
        name: "Shirdi: The Land of Sai Baba",
        location: "Maharashtra, India",
        image: "https://i.ytimg.com/vi/W9UTqdHxp_0/maxresdefault.jpg",
        significance: "Shirdi is the sacred abode of Sai Baba, an incarnation of Lord Dattatreya who united people across religions with his teachings of love and selflessness.",
        highlights: [
            "The Samadhi Mandir: The resting place of Sai Baba.",
            "Dwarkamai: A mosque where Sai Baba lived and performed miracles.",
            "The Chavadi: A site where Sai Baba held congregational prayers."
        ],
        keyHighlights: "Shirdi is a major pilgrimage site where devotees seek Sai Baba’s blessings.",
        moreInfoUrl: "https://saivasavi.com/about-shirdi/"
    },
    {
        name: "Shegaon: The Divine Presence of Gajanan Maharaj",
        location: "Maharashtra, India",
        image: "https://i.ytimg.com/vi/iyTtXoPUBO8/maxresdefault.jpg",
        significance: "Shegaon is associated with Gajanan Maharaj, regarded as an incarnation of Lord Dattatreya. The Gajanan Maharaj Temple is known for its serene environment and spiritual vibrations.",
        highlights: [
            "Samadhi Shrine: A center of devotion and meditation.",
            "Anand Sagar: A spiritual park developed for devotees.",
            "Daily prayers and bhajans attract devotees seeking peace and blessings."
        ],
        keyHighlights: "Shegaon is a center of peace and devotion, drawing thousands of devotees.",
        moreInfoUrl: "https://zpbuldhana.maharashtra.gov.in/places-centres/shri-sant-gajanan-maharaj-temple-shegaon/"
    }
];


// const Temples: React.FC = () => {
//     return (
//         <>
//             <div
//                 className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center mb-12"
//                 style={{
//                     backgroundImage: `url('https://repository-images.githubusercontent.com/257767091/ddd9f900-d40b-11ea-843b-d0e87ac035c6')`,
//                 }}
//             >
//                 <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
//                     Temples and Holy Sites of Lord Dattatreya
//                 </h1>
//             </div>

//             <div className="bg-gradient-to-br -mt-12 bg-yellow-50 to-[#FFFFFF] min-h-screen">
//                 <div className="container mx-auto px-4 py-10 mt-12">
//                     <p className="text-center text-gray-700 mb-8">
//                         The temples and holy sites dedicated to Lord Dattatreya are sanctuaries of peace, devotion,
//                         and spiritual awakening. These sacred places hold profound significance as they resonate with
//                         the divine energy of Lord Datta and his incarnations. Pilgrims from across the world visit these
//                         sites to seek blessings, meditate, and immerse themselves in the Guru’s grace.
//                     </p>

//                     <div className="space-y-8">
//                         {temples.map((temple, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//                                 <img
//                                     src={temple.image}
//                                     alt={temple.name}
//                                     className="w-full md:w-1/3 h-64 object-cover rounded-md"
//                                 />
//                                 <div className="md:ml-6 mt-4 md:mt-0">
//                                     <h2 className="text-2xl font-semibold">{temple.name}</h2>
//                                     <p className="text-gray-600">{temple.location}</p>
//                                     <p className="text-gray-700 mt-2 font-medium">Significance: {temple.significance}</p>
//                                     <p className="italic text-gray-700 mt-2">{temple.keyHighlights}</p>
//                                     <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
//                                         {temple.highlights.map((point, i) => (
//                                             <li key={i}>{point}</li>
//                                         ))}
//                                     </ul>

//                                     {/* "Know More" Button moved to the right of the card */}
//                                     <a
//                                         href={temple.moreInfoUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-500 hover:text-blue-700 hover:underline mt-4 ml-auto inline-block transition duration-300 ease-in-out"
//                                     >
//                                         Know More
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-10 text-center">
//                         <h2 className="text-2xl font-bold mb-4">Why Visit These Holy Sites?</h2>
//                         <ul className="list-disc text-left inline-block text-gray-700">
//                             <li>Spiritual Awakening: Experience the divine energy and profound peace at these sacred locations.</li>
//                             <li>Rituals and Practices: Participate in ancient rituals like Paduka Puja, Arati, and sacred baths at holy rivers.</li>
//                             <li>Strengthen Faith: Witness the spiritual power and grace of Lord Dattatreya’s incarnations.</li>
//                         </ul>
//                     </div>

//                     {/* Inspirational Quote Section */}
//                     <div className="mt-16 text-center py-12 px-8">
//                         <blockquote className="text-xl italic text-indigo-900">
//                             "Every step taken toward a sacred site is a step closer to the divine."
//                         </blockquote>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div>
//                 <Footer />
//             </div>
//         </>
//     );
// };

const Temples: React.FC = () => {
    return (
        <>
            <div
                className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center mb-12"
                style={{
                    backgroundImage: `url('https://repository-images.githubusercontent.com/257767091/ddd9f900-d40b-11ea-843b-d0e87ac035c6')`,
                }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
                    Temples and Holy Sites of Lord Dattatreya
                </h1>
            </div>

            <div className="bg-gradient-to-br -mt-12 bg-yellow-50 to-[#FFFFFF] min-h-screen">
                <div className="container mx-auto px-4 py-10 mt-12">
                    <p className="text-center text-gray-700 mb-8">
                        The temples and holy sites dedicated to Lord Dattatreya are sanctuaries of peace, devotion,
                        and spiritual awakening. These sacred places hold profound significance as they resonate with
                        the divine energy of Lord Datta and his incarnations. Pilgrims from across the world visit these
                        sites to seek blessings, meditate, and immerse themselves in the Guru’s grace.
                    </p>

                    <div className="space-y-8">
                        {temples.map((temple, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                                <img
                                    src={temple.image}
                                    alt={temple.name}
                                    className="w-full md:w-1/3 h-64 object-cover rounded-md"
                                />
                                <div className="md:ml-6 mt-4 md:mt-0">
                                    <h2 className="text-2xl font-semibold">{temple.name}</h2>
                                    <p className="text-gray-600">{temple.location}</p>
                                    <p className="text-gray-700 mt-2 font-medium">Significance: {temple.significance}</p>
                                    <p className="italic text-gray-700 mt-2">{temple.keyHighlights}</p>
                                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                                        {temple.highlights.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    {/* "Know More" Button moved to the right of the card */}
                                    <a
                                        href={temple.moreInfoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700 hover:underline mt-4 ml-auto inline-block transition duration-300 ease-in-out"
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <h2 className="text-2xl font-bold mb-4">Why Visit These Holy Sites?</h2>
                        <ul className="list-disc text-left inline-block text-gray-700">
                            <li>Spiritual Awakening: Experience the divine energy and profound peace at these sacred locations.</li>
                            <li>Rituals and Practices: Participate in ancient rituals like Paduka Puja, Arati, and sacred baths at holy rivers.</li>
                            <li>Strengthen Faith: Witness the spiritual power and grace of Lord Dattatreya’s incarnations.</li>
                        </ul>
                    </div>

                    {/* Inspirational Quote Section */}
                    <div className="mt-16 text-center py-12 px-8">
                        <blockquote className="text-xl italic text-indigo-900">
                            "Every step taken toward a sacred site is a step closer to the divine."
                        </blockquote>
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

export default Temples;




// import React from "react";

// const temples = [
//     {
//         name: "Ganagapur: The Abode of Lord Narasimha Saraswati",
//         location: "Karnataka, India",
//         image: "https://i.ytimg.com/vi/x3hMuAF7tqg/maxresdefault.jpg",
//         significance: "Ganagapur is one of the most revered holy sites associated with Lord Narasimha Saraswati. It is home to the Sangam, the confluence of rivers Bhima and Amaraja, where devotees perform rituals and offer prayers.",
//         highlights: [
//             "The Audumbar Tree: A sacred tree believed to fulfill the wishes of devotees.",
//             "Ashta Teertha: Eight sacred water spots around Ganagapur, where bathing is said to cleanse sins.",
//             "Datta Mandir: The main temple where devotees experience Lord Datta’s divine presence.",
//             "Architectural Marvel: The temple's intricate carvings and ancient architecture reflect the rich cultural heritage of the region.",
//             "Spiritual Retreat: Many devotees stay for days, immersing themselves in meditation and chanting."
//         ],
//         keyHighlights: "Ganagapur is known for its sacred water spots and the presence of Lord Datta’s divine energy."
//     },
//     {
//         name: "Akkalkot: The Shrine of Swami Samarth",
//         location: "Maharashtra, India",
//         image: "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/01/A9159-15-Places-to-Visit-in-Mount-Abu-for-Travelling-Architect-Image-33-1024x492.jpg",
//         significance: "Akkalkot is closely associated with Swami Samarth, the third incarnation of Lord Dattatreya. It is a popular pilgrimage site where devotees experience spiritual peace and witness miracles.",
//         highlights: [
//             "The Vatavruksha: A sacred banyan tree under which Swami Samarth meditated and blessed devotees.",
//             "Samadhi Shrine: The final resting place of Swami Samarth, a center of divine energy.",
//             "Daily rituals, including Arati, are performed to honor Swami’s teachings and miracles.",
//             "Miraculous Stories: Many devotees share experiences of Swami Samarth’s divine interventions in their lives.",
//             "Cultural Festivals: The temple hosts grand celebrations during Swami’s birth anniversary, attracting thousands."
//         ],
//         keyHighlights: "Akkalkot is revered for Swami Samarth’s divine presence and teachings."
//     },
//     {
//         name: "Pithapuram: Birthplace of Sripada Srivallabha",
//         location: "Andhra Pradesh, India",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rear_View_of_Keshava_Temple_at_Somanathapura.jpg/1600px-Rear_View_of_Keshava_Temple_at_Somanathapura.jpg",
//         significance: "Pithapuram is celebrated as the birthplace of Sripada Srivallabha, the first incarnation of Lord Dattatreya. The Sripada Srivallabha Mahasamsthanam temple is a spiritual haven for devotees seeking his blessings.",
//         highlights: [
//             "The Birthplace Shrine: A temple dedicated to Sripada, commemorating his divine incarnation.",
//             "The Padukas (Sacred Footprints): Representing his eternal presence.",
//             "Festivals like Datta Jayanti are celebrated with great devotion.",
//             "Ancient Scriptures: The temple houses rare manuscripts and texts related to Lord Dattatreya.",
//             "Healing Powers: Devotees believe that the temple’s sacred soil has healing properties."
//         ],
//         keyHighlights: "Pithapuram is a sacred site of Lord Dattatreya’s first incarnation."
//     },
//     {
//         name: "Shirdi: The Land of Sai Baba",
//         location: "Maharashtra, India",
//         image: "https://i.ytimg.com/vi/W9UTqdHxp_0/maxresdefault.jpg",
//         significance: "Shirdi is the sacred abode of Sai Baba, an incarnation of Lord Dattatreya who united people across religions with his teachings of love and selflessness.",
//         highlights: [
//             "The Samadhi Mandir: The resting place of Sai Baba.",
//             "Dwarkamai: A mosque where Sai Baba lived and performed miracles.",
//             "The Chavadi: A site where Sai Baba held congregational prayers.",
//             "Universal Teachings: Sai Baba’s messages of unity and compassion resonate with people of all faiths.",
//             "Daily Prasad: Devotees receive blessed food (prasad) as a symbol of Sai Baba’s grace."
//         ],
//         keyHighlights: "Shirdi is a major pilgrimage site where devotees seek Sai Baba’s blessings."
//     },
//     {
//         name: "Shegaon: The Divine Presence of Gajanan Maharaj",
//         location: "Maharashtra, India",
//         image: "https://i.ytimg.com/vi/iyTtXoPUBO8/maxresdefault.jpg",
//         significance: "Shegaon is associated with Gajanan Maharaj, regarded as an incarnation of Lord Dattatreya. The Gajanan Maharaj Temple is known for its serene environment and spiritual vibrations.",
//         highlights: [
//             "Samadhi Shrine: A center of devotion and meditation.",
//             "Anand Sagar: A spiritual park developed for devotees.",
//             "Daily prayers and bhajans attract devotees seeking peace and blessings.",
//             "Eco-Friendly Practices: The temple promotes environmental sustainability through tree plantations and clean energy.",
//             "Community Service: The temple runs charitable initiatives, including free meals and medical camps."
//         ],
//         keyHighlights: "Shegaon is a center of peace and devotion, drawing thousands of devotees."
//     }
// ];

// const Temples: React.FC = () => {
//     return (
//         <div className="container mx-auto px-4 py-10 mt-12">
//             <h1 className="text-3xl font-bold text-center mb-6">Temples and Holy Sites of Lord Dattatreya</h1>
//             <p className="text-center text-gray-700 mb-8">
//                 These sacred places hold profound significance as they resonate with the divine energy of Lord Datta and his incarnations.
//             </p>
//             <blockquote className="text-center italic text-gray-600 mb-8">"Every step taken toward a sacred site is a step closer to the divine."</blockquote>
//             <div className="space-y-8">
//                 {temples.map((temple, index) => (
//                     <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//                         <img src={temple.image} alt={temple.name} className="w-full md:w-1/3 h-64 object-cover rounded-md" />
//                         <div className="md:ml-6 mt-4 md:mt-0">
//                             <h2 className="text-2xl font-semibold">{temple.name}</h2>
//                             <p className="text-gray-600">{temple.location}</p>
//                             <p className="text-gray-700 mt-2 font-medium">Significance: {temple.significance}</p>
//                             <p className="italic text-gray-700 mt-2">{temple.keyHighlights}</p>
//                             <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
//                                 {temple.highlights.map((point, i) => (
//                                     <li key={i}>{point}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-10 text-center">
//                 <h2 className="text-2xl font-bold mb-4">Why Visit These Holy Sites?</h2>
//                 <ul className="list-disc text-left inline-block text-gray-700">
//                     <li>Spiritual Awakening: Experience the divine energy and profound peace at these sacred locations.</li>
//                     <li>Rituals and Practices: Participate in ancient rituals like Paduka Puja, Arati, and sacred baths at holy rivers.</li>
//                     <li>Strengthen Faith: Witness the spiritual power and grace of Lord Dattatreya’s incarnations.</li>
//                     <li>Cultural Immersion: Explore the rich history, architecture, and traditions of these sacred sites.</li>
//                     <li>Community and Service: Engage in charitable activities and connect with like-minded devotees.</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Temples;
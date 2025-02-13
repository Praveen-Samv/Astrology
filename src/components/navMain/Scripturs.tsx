// import React from 'react';

// const Scripturs: React.FC = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen p-6 mt-12">
//             {/* Header Section */}
//             <header className="text-center mb-8">
//                 <h1 className="text-4xl font-bold text-purple-800">Scriptures of Dattatreya</h1>
//                 <p className="text-gray-600 mt-2">Sacred Texts, Stories, and Teachings</p>
//             </header>

//             {/* Core Sacred Texts Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Core Sacred Texts</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Guru Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Guru Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Chronicles the life and teachings of Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Importance of Guru Bhakti (devotion to the Guru).</li>
//                             <li>Stories of miracles that emphasize the power of faith.</li>
//                             <li>Practical guidance on living a righteous and spiritual life.</li>
//                         </ul>
//                     </div>

//                     {/* Sripada Srivallabha Charitaamrutam */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Sripada Srivallabha Charitaamrutam</h3>
//                         <p className="text-gray-700 mb-4">
//                             Narrates the life and miracles of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Healing the sick and uplifting the downtrodden.</li>
//                             <li>Encourages detachment, selfless service, and unwavering devotion.</li>
//                         </ul>
//                     </div>

//                     {/* Swami Samarth Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Swami Samarth Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Captures the teachings, miracles, and practical wisdom of Swami Samarth of Akkalkot.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Simplicity in devotion.</li>
//                             <li>Practical solutions to worldly and spiritual challenges.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Miracles and Divine Stories Section */}
//             {/* Miracles and Divine Stories Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Miracles and Divine Stories</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Revival of a Dead Child */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Revival of a Dead Child</h3>
//                         <p className="text-gray-700 mb-4">
//                             A grieving mother approached Lord Narasimha Saraswati after her only child passed away. Moved by her devotion, the Lord restored the child to life, reinforcing faith among his followers.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Faith in the Guru can bring hope even in the face of the impossible.</p>
//                     </div>

//                     {/* Healing a Blind Devotee */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Healing a Blind Devotee</h3>
//                         <p className="text-gray-700 mb-4">
//                             A blind man regained his eyesight after fervent prayers to Sripada Srivallabha.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Sincere prayers can invoke divine blessings.</p>
//                     </div>

//                     {/* The Leelas of Sripada Srivallabha */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Leelas of Sripada Srivallabha</h3>
//                         <p className="text-gray-700 mb-4">
//                             Sripada Srivallabha performed numerous miracles, proving the power of divine grace.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>He miraculously healed a blind man.</li>
//                             <li>Blessed a barren woman with children after years of despair.</li>
//                         </ul>
//                         <p className="text-gray-600 italic mt-4">Lesson: Devotion and surrender to Lord Datta open the doors to miracles.</p>
//                     </div>

//                     {/* Swami Samarth’s Teachings Through Miracles */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Swami Samarth’s Teachings Through Miracles</h3>
//                         <p className="text-gray-700 mb-4">
//                             Swami Samarth guided devotees through miraculous interventions.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Guided a struggling farmer to prosperity by teaching him to trust in divine timing.</li>
//                             <li>Resolved conflicts within families through his compassionate counsel.</li>
//                         </ul>
//                         <p className="text-gray-600 italic mt-4">Lesson: Divine intervention leads to inner peace and harmony.</p>
//                     </div>

//                     {/* The Washerman Becomes a King */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Washerman Becomes a King</h3>
//                         <p className="text-gray-700 mb-4">
//                             A poor washerman, devoted to Lord Dattatreya, was blessed to rule a kingdom as a reward for his unwavering faith and service.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Devotion and humility attract divine grace.</p>
//                     </div>

//                     {/* The Leper Brahmin Cured */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Leper Brahmin Cured</h3>
//                         <p className="text-gray-700 mb-4">
//                             A devout Brahmin suffering from leprosy was cured by Lord Narasimha Saraswati after performing the Saptaha Parayana (seven-day reading) of Guru Charitra.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Reading sacred texts with devotion brings both spiritual and physical healing.</p>
//                     </div>

//                     {/* Barren Woman Blessed with Children */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Barren Woman Blessed with Children</h3>
//                         <p className="text-gray-700 mb-4">
//                             A woman, unable to conceive for years, was blessed by Sripada Srivallabha and soon gave birth to healthy children.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Trust in divine timing and grace.</p>
//                     </div>

//                     {/* Protection from Thieves */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Protection from Thieves</h3>
//                         <p className="text-gray-700 mb-4">
//                             A devotee traveling with wealth was protected from a group of thieves by Lord Narasimha Saraswati’s intervention. The thieves experienced a divine vision and returned the stolen goods.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: The Guru protects those who surrender to him.</p>
//                     </div>

//                     {/* Turning Scarcity into Abundance */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Turning Scarcity into Abundance</h3>
//                         <p className="text-gray-700 mb-4">
//                             Swami Samarth blessed a poor farmer during a famine, and his land began to yield abundant crops, even in adverse conditions.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Trusting the divine brings solutions to life’s challenges.</p>
//                     </div>

//                     {/* Liberation of a Brahma Rakshasa */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Liberation of a Brahma Rakshasa</h3>
//                         <p className="text-gray-700 mb-4">
//                             A Brahma Rakshasa (a cursed spirit) was freed from his suffering after the chanting of sacred mantras by Lord Narasimha Saraswati.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Divine guidance can liberate souls from karmic cycles.</p>
//                     </div>

//                     {/* Restoring the Devotee’s Speech */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Restoring the Devotee’s Speech</h3>
//                         <p className="text-gray-700 mb-4">
//                             A mute boy, brought to Swami Samarth, began to speak after the saint blessed him. This miracle uplifted the boy’s family and strengthened the faith of devotees.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Miracles manifest through unwavering faith and divine blessings.</p>
//                     </div>

//                     {/* Miraculous Food Multiplication */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Miraculous Food Multiplication</h3>
//                         <p className="text-gray-700 mb-4">
//                             During a gathering of devotees, a small quantity of food prepared by a devotee was blessed by Lord Narasimha Saraswati and miraculously multiplied to feed hundreds.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: The Lord ensures that no devotee goes hungry in his presence.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Daily Practices Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Daily Practices</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Parayana</h3>
//                         <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Leela Reflection</h3>
//                         <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Chanting Mantras</h3>
//                         <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Modern Relevance Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Modern Relevance</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Stress Relief</h3>
//                         <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Ethical Living</h3>
//                         <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Community Bonding</h3>
//                         <p className="text-gray-700">Sacred readings bring devotees together.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Quote Section */}
//             <section className="text-center bg-purple-800 text-white p-8 rounded-lg">
//                 <blockquote className="text-xl italic">
//                     "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
//                 </blockquote>
//                 <p className="mt-4">- Guru Charitra</p>
//             </section>
//         </div>
//     );
// };

// export default Scripturs;



// import React from 'react';

// const Scripturs: React.FC = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen p-6 mt-12">
//             {/* Header Section */}
//             <header className="text-center mb-8">
//                 <h1 className="text-4xl font-bold text-purple-800">Scriptures of Dattatreya</h1>
//                 <p className="text-gray-600 mt-2">Sacred Texts, Stories, and Teachings</p>
//             </header>

//             {/* Core Sacred Texts Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Core Sacred Texts</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Guru Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Guru Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Chronicles the life and teachings of Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Importance of Guru Bhakti (devotion to the Guru).</li>
//                             <li>Stories of miracles that emphasize the power of faith.</li>
//                             <li>Practical guidance on living a righteous and spiritual life.</li>
//                         </ul>
//                     </div>

//                     {/* Sripada Srivallabha Charitaamrutam */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Sripada Srivallabha Charitaamrutam</h3>
//                         <p className="text-gray-700 mb-4">
//                             Narrates the life and miracles of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Healing the sick and uplifting the downtrodden.</li>
//                             <li>Encourages detachment, selfless service, and unwavering devotion.</li>
//                         </ul>
//                     </div>

//                     {/* Swami Samarth Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Swami Samarth Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Captures the teachings, miracles, and practical wisdom of Swami Samarth of Akkalkot.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Simplicity in devotion.</li>
//                             <li>Practical solutions to worldly and spiritual challenges.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Miracles and Divine Stories Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Miracles and Divine Stories</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Revival of a Dead Child */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Revival of a Dead Child</h3>
//                         <p className="text-gray-700 mb-4">
//                             A grieving mother approached Lord Narasimha Saraswati after her only child passed away. Moved by her devotion, the Lord restored the child to life, reinforcing faith among his followers.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Faith in the Guru can bring hope even in the face of the impossible.</p>
//                         <a href="/revival-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Healing a Blind Devotee */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Healing a Blind Devotee</h3>
//                         <p className="text-gray-700 mb-4">
//                             A blind man regained his eyesight after fervent prayers to Sripada Srivallabha.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Sincere prayers can invoke divine blessings.</p>
//                         <a href="/healing-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* The Leelas of Sripada Srivallabha */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Leelas of Sripada Srivallabha</h3>
//                         <p className="text-gray-700 mb-4">
//                             Sripada Srivallabha performed numerous miracles, proving the power of divine grace.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>He miraculously healed a blind man.</li>
//                             <li>Blessed a barren woman with children after years of despair.</li>
//                         </ul>
//                         <p className="text-gray-600 italic mt-4">Lesson: Devotion and surrender to Lord Datta open the doors to miracles.</p>
//                         <a href="/leelas-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Swami Samarth’s Teachings Through Miracles */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Swami Samarth’s Teachings Through Miracles</h3>
//                         <p className="text-gray-700 mb-4">
//                             Swami Samarth guided devotees through miraculous interventions.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Guided a struggling farmer to prosperity by teaching him to trust in divine timing.</li>
//                             <li>Resolved conflicts within families through his compassionate counsel.</li>
//                         </ul>
//                         <p className="text-gray-600 italic mt-4">Lesson: Divine intervention leads to inner peace and harmony.</p>
//                         <a href="/teachings-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* The Washerman Becomes a King */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Washerman Becomes a King</h3>
//                         <p className="text-gray-700 mb-4">
//                             A poor washerman, devoted to Lord Dattatreya, was blessed to rule a kingdom as a reward for his unwavering faith and service.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Devotion and humility attract divine grace.</p>
//                         <a href="/washerman-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* The Leper Brahmin Cured */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">The Leper Brahmin Cured</h3>
//                         <p className="text-gray-700 mb-4">
//                             A devout Brahmin suffering from leprosy was cured by Lord Narasimha Saraswati after performing the Saptaha Parayana (seven-day reading) of Guru Charitra.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Reading sacred texts with devotion brings both spiritual and physical healing.</p>
//                         <a href="/leper-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Barren Woman Blessed with Children */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Barren Woman Blessed with Children</h3>
//                         <p className="text-gray-700 mb-4">
//                             A woman, unable to conceive for years, was blessed by Sripada Srivallabha and soon gave birth to healthy children.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Trust in divine timing and grace.</p>
//                         <a href="/barren-woman-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Protection from Thieves */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Protection from Thieves</h3>
//                         <p className="text-gray-700 mb-4">
//                             A devotee traveling with wealth was protected from a group of thieves by Lord Narasimha Saraswati’s intervention. The thieves experienced a divine vision and returned the stolen goods.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: The Guru protects those who surrender to him.</p>
//                         <a href="/protection-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Turning Scarcity into Abundance */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Turning Scarcity into Abundance</h3>
//                         <p className="text-gray-700 mb-4">
//                             Swami Samarth blessed a poor farmer during a famine, and his land began to yield abundant crops, even in adverse conditions.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Trusting the divine brings solutions to life’s challenges.</p>
//                         <a href="/abundance-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Liberation of a Brahma Rakshasa */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Liberation of a Brahma Rakshasa</h3>
//                         <p className="text-gray-700 mb-4">
//                             A Brahma Rakshasa (a cursed spirit) was freed from his suffering after the chanting of sacred mantras by Lord Narasimha Saraswati.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Divine guidance can liberate souls from karmic cycles.</p>
//                         <a href="/liberation-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Restoring the Devotee’s Speech */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Restoring the Devotee’s Speech</h3>
//                         <p className="text-gray-700 mb-4">
//                             A mute boy, brought to Swami Samarth, began to speak after the saint blessed him. This miracle uplifted the boy’s family and strengthened the faith of devotees.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: Miracles manifest through unwavering faith and divine blessings.</p>
//                         <a href="/speech-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>

//                     {/* Miraculous Food Multiplication */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Miraculous Food Multiplication</h3>
//                         <p className="text-gray-700 mb-4">
//                             During a gathering of devotees, a small quantity of food prepared by a devotee was blessed by Lord Narasimha Saraswati and miraculously multiplied to feed hundreds.
//                         </p>
//                         <p className="text-gray-600 italic">Lesson: The Lord ensures that no devotee goes hungry in his presence.</p>
//                         <a href="/food-story" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read More</a>
//                     </div>
//                 </div>
//             </section>

//             {/* Daily Practices Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Daily Practices</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Parayana</h3>
//                         <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Leela Reflection</h3>
//                         <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Chanting Mantras</h3>
//                         <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Modern Relevance Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold text-purple-700 mb-6">Modern Relevance</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Stress Relief</h3>
//                         <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Ethical Living</h3>
//                         <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-purple-600 mb-4">Community Bonding</h3>
//                         <p className="text-gray-700">Sacred readings bring devotees together.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Quote Section */}
//             <section className="text-center bg-purple-800 text-white p-8 rounded-lg">
//                 <blockquote className="text-xl italic">
//                     "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
//                 </blockquote>
//                 <p className="mt-4">- Guru Charitra</p>
//             </section>
//         </div>
//     );
// };

// export default Scripturs;



// import React from 'react';
// import MiracleSection from '../others/MiracleSection';

// const Scripturs: React.FC = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen p-6 mt-12">
//             {/* Header Section */}
//             <header className="text-center mb-8">
//                 <h1 className="text-4xl font-bold mb-2">Scriptures of Dattatreya</h1>
//                 <p className="text-gray-600">Sacred Texts, Stories, and Teachings</p>
//             </header>

//             {/* Core Sacred Texts Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6">Core Sacred Texts</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Guru Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Guru Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Chronicles the life and teachings of Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Importance of Guru Bhakti (devotion to the Guru).</li>
//                             <li>Stories of miracles that emphasize the power of faith.</li>
//                             <li>Practical guidance on living a righteous and spiritual life.</li>
//                         </ul>
//                     </div>

//                     {/* Sripada Srivallabha Charitaamrutam */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Sripada Srivallabha Charitaamrutam</h3>
//                         <p className="text-gray-700 mb-4">
//                             Narrates the life and miracles of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Healing the sick and uplifting the downtrodden.</li>
//                             <li>Encourages detachment, selfless service, and unwavering devotion.</li>
//                         </ul>
//                     </div>

//                     {/* Swami Samarth Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Swami Samarth Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Captures the teachings, miracles, and practical wisdom of Swami Samarth of Akkalkot.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Simplicity in devotion.</li>
//                             <li>Practical solutions to worldly and spiritual challenges.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Miracles and Divine Stories Section */}
            
//             <MiracleSection />

//             {/* Daily Practices Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6">Daily Practices</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Parayana</h3>
//                         <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Leela Reflection</h3>
//                         <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Chanting Mantras</h3>
//                         <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Modern Relevance Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6">Modern Relevance</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Stress Relief</h3>
//                         <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Ethical Living</h3>
//                         <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4">Community Bonding</h3>
//                         <p className="text-gray-700">Sacred readings bring devotees together.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Quote Section */}
//             <section className="text-center bg-gray-200 p-8 rounded-lg">
//                 <blockquote className="text-xl italic">
//                     "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
//                 </blockquote>
//                 <p className="mt-4">- Guru Charitra</p>
//             </section>
//         </div>
//     );
// };

// export default Scripturs;



// import React from 'react';
// import MiracleSection from '../others/MiracleSection';
// import Footer from './Footer';

// const Scripturs: React.FC = () => {
//     return (
//         <>
//             <div
//                 className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center  mb-12"
//                 style={{
//                     backgroundImage: `url('https://i.pinimg.com/originals/2e/5d/90/2e5d90afa454a6da4d84c7fb7ec32595.jpg')`,
//                 }}
//             >
//                 <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
//                     Scriptures of Dattatreya
//                 </h1>
//             </div>
//             <div className="bg-gradient-to-br  from-[#FFFF00] via-[#FFA500] to-[#FFFFFF] min-h-screen p-6 -mt-12">
//             {/* Header Section */}
//             {/* <header className="text-center mb-8">
//                 <h1 className="text-4xl font-bold mb-2 text-indigo-900">Scriptures of Dattatreya</h1>
//                 <p className="text-gray-600">Sacred Texts, Stories, and Teachings</p>
//             </header> */}

//             {/* Core Sacred Texts Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Core Sacred Texts</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Guru Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Guru Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Chronicles the life and teachings of Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Importance of Guru Bhakti (devotion to the Guru).</li>
//                             <li>Stories of miracles that emphasize the power of faith.</li>
//                             <li>Practical guidance on living a righteous and spiritual life.</li>
//                         </ul>
//                     </div>

//                     {/* Sripada Srivallabha Charitaamrutam */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Sripada Srivallabha Charitaamrutam</h3>
//                         <p className="text-gray-700 mb-4">
//                             Narrates the life and miracles of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Healing the sick and uplifting the downtrodden.</li>
//                             <li>Encourages detachment, selfless service, and unwavering devotion.</li>
//                         </ul>
//                     </div>

//                     {/* Swami Samarth Charitra */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Swami Samarth Charitra</h3>
//                         <p className="text-gray-700 mb-4">
//                             Captures the teachings, miracles, and practical wisdom of Swami Samarth of Akkalkot.
//                         </p>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Simplicity in devotion.</li>
//                             <li>Practical solutions to worldly and spiritual challenges.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Miracles and Divine Stories Section */}
//             <MiracleSection />
            

//             {/* Daily Practices Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Daily Practices</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Parayana</h3>
//                         <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Leela Reflection</h3>
//                         <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Chanting Mantras</h3>
//                         <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Modern Relevance Section */}
//             <section className="mb-12">
//                 <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Modern Relevance</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Stress Relief</h3>
//                         <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Ethical Living</h3>
//                         <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold mb-4 text-indigo-900">Community Bonding</h3>
//                         <p className="text-gray-700">Sacred readings bring devotees together.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Quote Section */}
//             <section className="text-center  p-8 rounded-lg">
//                 <blockquote className="text-xl italic text-indigo-900">
//                     "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
//                 </blockquote>
//                 <p className="mt-4 text-gray-600">- Guru Charitra</p>
//             </section>
//         </div>

//         {/* footer */}
//         <div>
//             <Footer />
//         </div>
//         </>
//     );
// };

// export default Scripturs;





import React from 'react';
import MiracleSection from '../others/MiracleSection';
import Footer from './Footer';

const Scripturs: React.FC = () => {
    return (
        <>
            {/* Header Section with Background Image */}
            <div
                className="w-full h-28 mt-16 flex items-center justify-center bg-cover bg-center mb-12"
                style={{
                    backgroundImage: `url('https://i.pinimg.com/originals/2e/5d/90/2e5d90afa454a6da4d84c7fb7ec32595.jpg')`,
                }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-opacity-50 p-4 rounded-lg">
                    Scriptures of Dattatreya
                </h1>
            </div>

            {/* Main Content with Gradient Background */}
            <div className="bg-gradient-to-br from-[#FFFF00] via-[#FFA500] to-[#FFFFFF] min-h-screen p-6 -mt-12">
                {/* Core Sacred Texts Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Core Sacred Texts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Guru Charitra */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Guru Charitra</h3>
                            <p className="text-gray-700 mb-4">
                                Chronicles the life and teachings of Lord Narasimha Saraswati, the second incarnation of Lord Dattatreya.
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Importance of Guru Bhakti (devotion to the Guru).</li>
                                <li>Stories of miracles that emphasize the power of faith.</li>
                                <li>Practical guidance on living a righteous and spiritual life.</li>
                            </ul>
                        </div>

                        {/* Sripada Srivallabha Charitaamrutam */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Sripada Srivallabha Charitaamrutam</h3>
                            <p className="text-gray-700 mb-4">
                                Narrates the life and miracles of Sripada Srivallabha, the first incarnation of Lord Dattatreya.
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Healing the sick and uplifting the downtrodden.</li>
                                <li>Encourages detachment, selfless service, and unwavering devotion.</li>
                            </ul>
                        </div>

                        {/* Swami Samarth Charitra */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Swami Samarth Charitra</h3>
                            <p className="text-gray-700 mb-4">
                                Captures the teachings, miracles, and practical wisdom of Swami Samarth of Akkalkot.
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Simplicity in devotion.</li>
                                <li>Practical solutions to worldly and spiritual challenges.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Miracles and Divine Stories Section */}
                <div className=" p-6 rounded-lg shadow-lg mb-12">
                    <MiracleSection />
                </div>

                {/* Daily Practices Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Daily Practices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Parayana</h3>
                            <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Leela Reflection</h3>
                            <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Chanting Mantras</h3>
                            <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
                        </div>
                    </div>
                </section>

                {/* Modern Relevance Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-indigo-900">Modern Relevance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Stress Relief</h3>
                            <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Ethical Living</h3>
                            <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Community Bonding</h3>
                            <p className="text-gray-700">Sacred readings bring devotees together.</p>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="text-center p-8 rounded-lg">
                    <blockquote className="text-xl italic text-indigo-900">
                        "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
                    </blockquote>
                    <p className="mt-4 text-gray-600">- Guru Charitra</p>
                </section>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Scripturs;
import React from 'react';

const Scripturs: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6 mt-12">
            {/* Header Section */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-purple-800">Scriptures of Dattatreya</h1>
                <p className="text-gray-600 mt-2">Sacred Texts, Stories, and Teachings</p>
            </header>

            {/* Core Sacred Texts Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-purple-700 mb-6">Core Sacred Texts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Guru Charitra */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Guru Charitra</h3>
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
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Sripada Srivallabha Charitaamrutam</h3>
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
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Swami Samarth Charitra</h3>
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
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-purple-700 mb-6">Miracles and Divine Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Revival of a Dead Child */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Revival of a Dead Child</h3>
                        <p className="text-gray-700 mb-4">
                            Lord Narasimha Saraswati restored life to a grieving mother’s child, demonstrating his boundless compassion.
                        </p>
                        <p className="text-gray-600 italic">Lesson: Faith in the Guru brings hope even in the darkest moments.</p>
                    </div>

                    {/* Healing a Blind Devotee */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Healing a Blind Devotee</h3>
                        <p className="text-gray-700 mb-4">
                            A blind man regained his eyesight after fervent prayers to Sripada Srivallabha.
                        </p>
                        <p className="text-gray-600 italic">Lesson: Sincere prayers can invoke divine blessings.</p>
                    </div>
                </div>
            </section>

            {/* Daily Practices Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-purple-700 mb-6">Daily Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Parayana</h3>
                        <p className="text-gray-700">Dedicate time to reading sacred texts daily or weekly.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Leela Reflection</h3>
                        <p className="text-gray-700">Meditate on divine stories to internalize their lessons.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Chanting Mantras</h3>
                        <p className="text-gray-700">Recite verses or chants to purify the mind and soul.</p>
                    </div>
                </div>
            </section>

            {/* Modern Relevance Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-purple-700 mb-6">Modern Relevance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Stress Relief</h3>
                        <p className="text-gray-700">Divine stories provide peace and mental clarity.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Ethical Living</h3>
                        <p className="text-gray-700">Inspires virtues like kindness, patience, and humility.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Community Bonding</h3>
                        <p className="text-gray-700">Sacred readings bring devotees together.</p>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="text-center bg-purple-800 text-white p-8 rounded-lg">
                <blockquote className="text-xl italic">
                    "The Guru is the bridge between the soul and liberation. Have faith, and miracles will follow."
                </blockquote>
                <p className="mt-4">- Guru Charitra</p>
            </section>
        </div>
    );
};

export default Scripturs;
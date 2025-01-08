import React from "react";

const Example: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            {/* Blog Container */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Blog Image */}
                <img
                    src="https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg"
                    alt="Astrology Blog Cover"
                    className="w-full h-64 object-cover"
                />

                {/* Blog Content */}
                <div className="p-6">
                    {/* Blog Title */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        The Mystical World of Astrology
                    </h1>

                    {/* Blog Description */}
                    <p className="text-gray-700 text-lg mb-4">
                        Astrology is an ancient practice that studies the movements and positions of celestial bodies to understand their influence on human lives and natural events. It has been used for centuries to provide guidance, predict future events, and gain deeper insights into personality traits.
                    </p>

                    {/* Blog Sections */}
                    <div className="space-y-4">
                        {/* Section 1: History of Astrology */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                History of Astrology
                            </h2>
                            <p className="text-gray-600">
                                Astrology dates back to ancient civilizations such as the Babylonians, Egyptians, and Greeks. It was used to predict seasonal changes, interpret celestial signs, and guide decision-making for kings and emperors.
                            </p>
                        </div>

                        {/* Section 2: Zodiac Signs */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                Zodiac Signs
                            </h2>
                            <p className="text-gray-600">
                                The zodiac is divided into 12 signs, each associated with specific traits and characteristics. These signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.
                            </p>
                        </div>

                        {/* Section 3: Modern Astrology */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                Modern Astrology
                            </h2>
                            <p className="text-gray-600">
                                Today, astrology is widely used for personal growth, relationship compatibility, and career guidance. Many people turn to horoscopes and astrological readings to gain clarity and direction in their lives.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6">
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            onClick={() => alert("Explore more about astrology!")}
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;
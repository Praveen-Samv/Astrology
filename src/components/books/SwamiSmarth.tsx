// SwamiSmarth.tsx

import Footer from "../navMain/Footer";


const SwamiSmarth = () => {
    return (

        <>
        <div className="min-h-screen bg-gray-50 mt-12">
            {/* Header Section */}
            <header className="relative h-48 bg-gradient-to-r from-orange-100 to-amber-50">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-amber-800 mb-6">
                        Swami Samarth's Teachings Through Miracles
                    </h1>
                    <p className="text-lg md:text-xl text-amber-900 max-w-3xl mx-auto">
                        Divine interventions that impart timeless wisdom and spiritual guidance
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 ">
                {/* Introduction */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-16 prose max-w-none">
                    <p className="text-lg text-gray-700 mb-8">
                        Swami Samarth, the revered incarnation of Lord Dattatreya, imparted profound teachings
                        through his miraculous acts. These miracles were not merely divine interventions but also
                        powerful lessons that continue to inspire faith and devotion in his followers.
                    </p>
                    <img
                            src="src\assets\scriptures\vision.jpg"
                        alt="Swami Samarth"
                        className="w-full h-96 object-cover rounded-lg mb-8"
                    />
                </section>

                {/* Miracle 1 */}
                <section className="mb-20">
                    <div className="md:flex gap-8 items-start">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                    src="src\assets\scriptures\sunshine-in-punjab--haryana-after-3-days-of-rain-2018-09-25.jpg"
                                alt="Farmer receiving blessings"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 prose">
                            <h2 className="text-3xl font-serif text-amber-800 mb-6">
                                Guiding a Struggling Farmer to Prosperity
                            </h2>
                            <div className="bg-amber-50 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold mb-4">The Story</h3>
                                <p className="text-gray-700 mb-4">
                                    A poor farmer from a drought-stricken village approached Swami Samarth...
                                </p>
                                <blockquote className="border-l-4 border-amber-600 pl-4 italic text-gray-600">
                                    "O Swami, I have worked tirelessly, but nothing prospers..."
                                </blockquote>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold mb-4">Swami's Guidance</h3>
                                <p className="text-gray-700">
                                    "Why do you lose hope? Trust in divine timing and continue your efforts with faith..."
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Lesson</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Trust Divine Timing: Patience and faith bring results</li>
                                    <li>Perseverance Pays Off: Hard work with devotion leads to success</li>
                                    <li>Faith in the Guru: Removes obstacles and brings prosperity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Miracle 2 */}
                <section className="mb-20">
                    <div className="md:flex gap-8 items-start flex-row-reverse">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                    src="src\assets\scriptures\i (2).webp"
                                alt="Family reconciliation"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 prose">
                            <h2 className="text-3xl font-serif text-amber-800 mb-6">
                                Resolving Family Conflicts Through Compassion
                            </h2>

                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold mb-4">The Conflict</h3>
                                <p className="text-gray-700">
                                    Two brothers became estranged over a property dispute...
                                </p>
                            </div>

                            <div className="bg-pink-50 p-6 rounded-lg mb-6">
                                <h3 className="text-xl font-semibold mb-4">Swami's Counsel</h3>
                                <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-600">
                                    "Why let material possessions destroy family bonds? Wealth is temporary..."
                                </blockquote>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Lesson</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Forgiveness Heals: Restores harmony</li>
                                    <li>Family is Precious: More valuable than wealth</li>
                                    <li>The Guru Unites: Resolves deep conflicts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="bg-amber-800 text-white p-8 rounded-lg shadow-lg mb-16">
                    <h2 className="text-3xl font-serif mb-8">Lasting Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-lg">
                                Farmers began to trust divine timing, leading to greater faith and patience.
                            </p>
                            <p className="text-lg">
                                Families sought Swami’s counsel to resolve disputes, fostering love and unity.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🕉️</span>
                                </div>
                                <p>Trust in divine timing</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">❤️</span>
                                </div>
                                <p>Power of compassion</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Quote */}
                <section className="text-center py-16">
                    <blockquote className="text-2xl italic text-gray-700 max-w-2xl mx-auto">
                        "Wealth comes and goes, but love and unity endure. Seek harmony, and you shall find peace."
                        <cite className="block mt-4 not-italic font-semibold text-amber-800">
                            - Swami Samarth
                        </cite>
                    </blockquote>
                </section>
            </main>
        </div>

            {/* footer  */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default SwamiSmarth;
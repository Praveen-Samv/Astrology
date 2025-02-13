// MiraculasFood.tsx

import Footer from "../navMain/Footer";

const MiraculasFood = () => {
    return (

        <>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
            {/* Header Section */}
            <header className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 mb-6 mt-8">
                    Miraculous Food Multiplication - The Grace of Lord Narasimha Saraswati
                </h1>
                {/* Blog Image */}
                <img
                    src="https://sun9-13.userapi.com/impg/R9b6GTLEASFECx6NL7WhntNjHD5BxO2GHAGycg/6_r8YCtHjJ0.jpg?size=1280x720&quality=95&sign=c11bd16e25f5be1611f559bd1c24b182&c_uniq_tag=V3lXtHOobi_p0ciPpkEJSNxivavR0PHM1HsLlnIkrEI&type=album" // Replace with your image URL
                    alt="Liberation of a Brahma Rakshasa"
                    className="w-full h-64 object-cover rounded-lg mb-8"
                />
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto space-y-12 text-gray-700 leading-relaxed">
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Divine Abundance Through Faith</h2>
                    <p className="mb-6">
                        This extraordinary miracle from the Guru Charitra demonstrates how Lord Narasimha Saraswati's
                        grace transforms scarcity into abundance, proving that devotion and faith can overcome any limitation.
                    </p>
                </section>

                {/* The Story */}
                <section className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-800">The Miracle of Abundance</h3>
                    <p>
                        During his travels, Lord Narasimha Saraswati arrived at a remote village with his disciples. The villagers,
                        eager to honor the Guru, planned a grand feast. However, they soon realized their food supplies were
                        insufficient for the large gathering of devotees.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-300">
                        <h4 className="font-semibold mb-3">The Villagers' Humble Plea</h4>
                        <p className="italic mb-2">
                            "O Guru, we intended to serve this feast in your honor, but the food we have is not enough for everyone.
                            Please forgive us for our inadequacy."
                        </p>
                        <p>
                            Lord Narasimha Saraswati reassured them with his divine wisdom, urging them to offer what they had
                            with unwavering faith.
                        </p>
                    </div>
                </section>

                {/* The Miracle */}
                <section className="space-y-6">
                    <div className="bg-slate-100 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">The Divine Intervention</h4>
                        <p>
                            As the villagers began serving the food, starting with the sacred offering (naivedyam) to the Guru,
                            an astonishing miracle unfolded. No matter how much food was served, the pots remained full.
                            Hundreds of devotees ate to their satisfaction, and yet, there was still an abundance of food left over.
                        </p>
                        <p className="text-center text-2xl font-bold text-amber-600 my-4">
                            "The Guru’s grace transforms scarcity into plenty."
                        </p>
                    </div>
                </section>

                {/* Teachings Section */}
                <section className="space-y-8">
                    <div className="bg-white shadow-lg p-8 rounded-xl">
                        <h3 className="text-xl font-semibold text-slate-800 mb-6">Eternal Teachings</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2">Key Spiritual Lessons</h4>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Devotion multiplies blessings</li>
                                    <li>Faith in the Guru removes fear of scarcity</li>
                                    <li>Selfless service attracts divine grace</li>
                                </ul>
                            </div>

                            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-700">
                                "The hands that serve with devotion are never empty, for the Guru ensures abundance for those
                                who give selflessly."
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="md:grid md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Lasting Impact</h3>
                        <p>
                            This miracle became a source of inspiration for countless devotees, encouraging them to serve
                            selflessly and trust in the Guru's boundless grace. The story spread far and wide, reinforcing the
                            power of faith and devotion.
                        </p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Key Takeaways</h4>
                        <ul className="space-y-3">
                            <li>• Offer with faith, no matter how small</li>
                            <li>• Serve others selflessly</li>
                            <li>• Trust in the Guru's provision</li>
                            <li>• Divine grace knows no limits</li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer Note */}
            <footer className="max-w-3xl mx-auto mt-16 text-center text-sm text-gray-500">
                <p>
                    May this divine story inspire us to serve with devotion and trust in the Guru's infinite grace.
                    Jai Guru Narasimha Saraswati!
                </p>
            </footer>
        </div>
            {/* footer  */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default MiraculasFood;
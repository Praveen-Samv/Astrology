// TheLeelas.tsx

import Footer from "../navMain/Footer";

const TheLeelas = () => {
    return (

        <>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
            {/* Header Section */}
            <header className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 mb-6 mt-8">
                    The Leelas of Sripada Srivallabha - Divine Grace in Action
                </h1>
                {/* Blog Image */}
                <img
                    src="https://i.ytimg.com/vi/nHO-oknJvO0/maxresdefault.jpg" // Replace with your image URL
                    alt=" The Leelas of Sripada Srivallabha - Divine Grace in Action"
                    className="w-full h-64 object-cover rounded-lg mb-8"
                />
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto space-y-12 text-gray-700 leading-relaxed">
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Divine Compassion and Miracles</h2>
                    <p className="mb-6">
                        The divine plays (Leelas) of Sripada Srivallabha, the first incarnation of Lord Dattatreya, are a testament
                        to his boundless compassion and the transformative power of his grace. These miraculous acts continue to
                        inspire and strengthen the faith of devotees.
                    </p>
                </section>

                {/* Healing a Blind Man */}
                <section className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-800">1. Healing a Blind Man</h3>
                    <p>
                        In the holy town of Pithapuram, a blind man lived a life of darkness and despair. Despite his disability,
                        he had unwavering faith in Sripada Srivallabha and believed that the Lord’s blessings could restore his vision.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-300">
                        <h4 className="font-semibold mb-3">The Blind Man's Devotion</h4>
                        <p className="italic mb-2">
                            "O Lord, I have spent my life in darkness, but I have complete faith in your divine grace. Please bless me
                            with the light of sight."
                        </p>
                        <p>
                            Moved by his devotion, Sripada placed his hand gently on the blind man’s eyes and chanted a sacred mantra.
                            Instantly, the man’s eyes were healed, and he could see the world for the first time.
                        </p>
                    </div>

                    <div className="bg-slate-100 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">The Lesson</h4>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Faith is transformative and can invoke divine intervention.</li>
                            <li>The Guru’s blessings heal not only the body but also uplift the spirit.</li>
                            <li>Trust in the divine can change even the most hopeless situations.</li>
                        </ul>
                    </div>
                </section>

                {/* Blessing a Barren Woman with Children */}
                <section className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-800">2. Blessing a Barren Woman with Children</h3>
                    <p>
                        A woman in a nearby village had suffered the pain of childlessness for many years. Despite societal ridicule,
                        she remained devoted to Sripada Srivallabha and prayed fervently for his blessings.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-300">
                        <h4 className="font-semibold mb-3">The Woman's Plea</h4>
                        <p className="italic mb-2">
                            "O Lord, my life feels incomplete without the joy of motherhood. I have come to you with all my hopes.
                            Please bless me with a child."
                        </p>
                        <p>
                            Sripada, touched by her devotion and sincerity, blessed her with sacred prasadam and assured her that she
                            would soon be blessed with a child.
                        </p>
                    </div>

                    <div className="bg-slate-100 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">The Lesson</h4>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Faith rewards patience, and divine blessings come to those who remain steadfast.</li>
                            <li>The Guru fulfills true desires and provides what is deeply needed.</li>
                            <li>Approach the divine with faith, and miracles will unfold.</li>
                        </ul>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="space-y-8">
                    <div className="bg-white shadow-lg p-8 rounded-xl">
                        <h3 className="text-xl font-semibold text-slate-800 mb-6">Impact of These Leelas</h3>
                        <p>
                            These miracles spread far and wide, strengthening the faith of devotees and inspiring countless people to
                            seek Sripada Srivallabha’s blessings. They became symbols of his compassion, reinforcing the belief that
                            no prayer goes unanswered when offered with sincerity.
                        </p>
                    </div>
                </section>

                {/* Takeaway Section */}
                <section className="md:grid md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                        <ul className="space-y-3">
                            <li>• Faith is the foundation of divine grace.</li>
                            <li>• Surrender to the Guru brings fulfillment.</li>
                            <li>• Divine grace transforms lives and overcomes obstacles.</li>
                        </ul>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Quote from Sripada Srivallabha</h4>
                        <blockquote className="italic text-slate-700">
                            "The Lord’s grace flows to those who trust in him completely. Seek with faith, and you shall receive."
                        </blockquote>
                    </div>
                </section>
            </main>

            {/* Footer Note */}
            <footer className="max-w-3xl mx-auto mt-16 text-center text-sm text-gray-500">
                <p>
                   " May these divine Leelas inspire us to deepen our faith and surrender to the Guru’s grace. Jai Sripada Srivallabha! "
                </p>
            </footer>
        </div>
        {/* footer  */ }
        <div>
            <Footer />
        </div>
        </>
    );
};

export default TheLeelas;
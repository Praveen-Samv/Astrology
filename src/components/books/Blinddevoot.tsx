import React from 'react';
import Footer from '../navMain/Footer';

const Blinddevoot: React.FC = () => {
    return (

        <>
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-12">
            {/* Blog Content */}
            <div className="max-w-3xl mx-auto">
                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Healing a Blind Devotee
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-700 mb-8">
                    From Sripada Srivallabha Charitaamrutam: A Story of Faith, Surrender, and Divine Healing
                </p>

                {/* Blog Image */}
                <img
                    src="https://www.churchofjesuschrist.org/imgs/1e41d0c50e7d80b947fff990944def7d0c99f349/full/1280%2C/0/default" // Replace with your image URL
                    alt="Healing a Blind Devotee"
                    className="w-full h-64 object-cover rounded-lg mb-8"
                />

                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This miracle from the Sripada Srivallabha Charitaamrutam reveals the infinite compassion and healing power of Lord Sripada Srivallabha, the first incarnation of Lord Dattatreya. It emphasizes how unwavering faith and surrender can overcome even the greatest physical and spiritual afflictions.
                    </p>
                </section>

                {/* The Story Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Story</h2>
                    <p className="text-gray-600 leading-relaxed">
                        In the sacred town of Pithapuram, where Lord Sripada Srivallabha resided, lived a poor blind man who had lost his vision at a young age. Despite his disability, he was deeply devoted to the Lord. He would sit near the temple every day, listening to stories of Sripada’s divine grace and miraculous deeds. These stories strengthened his faith and filled his heart with hope.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        One day, the blind man resolved to meet Sripada Srivallabha and seek his blessings. With the help of kind villagers, he was guided to the Lord’s ashram. As he approached Sripada, he fell to the ground in surrender and said,
                    </p>
                    <blockquote className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-4">
                        "O Lord, I am blind and unworthy, but I seek your grace. Please heal me, for I long to see the divine light."
                    </blockquote>
                </section>

                {/* The Devotion of the Blind Man Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Devotion of the Blind Man</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Moved by his devotion, Sripada Srivallabha gently spoke:
                    </p>
                    <blockquote className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-4">
                        "True sight is not of the eyes but of the soul. Yet, your faith and surrender have reached me, and I will restore your vision."
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                        Sripada placed his divine hand on the blind man’s eyes and chanted sacred mantras. As the chants resonated, a miraculous transformation occurred—the blind man felt a surge of light entering his being. Slowly, his vision returned, and for the first time in years, he could see the world around him.
                    </p>
                </section>

                {/* The Divine Vision Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Divine Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The first sight that greeted the man’s restored vision was the radiant form of Sripada Srivallabha, glowing with divine brilliance. Overwhelmed with joy, the man prostrated himself and exclaimed,
                    </p>
                    <blockquote className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-4">
                        "O Lord, you are the embodiment of compassion! I now see the truth and the light, not just with my eyes but with my soul."
                    </blockquote>
                </section>

                {/* The Lesson Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Lesson</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sripada Srivallabha then spoke to those gathered:
                    </p>
                    <blockquote className="italic text-gray-700 border-l-4 border-gray-400 pl-4 my-4">
                        "Blindness of the eyes is but a small affliction compared to the blindness of ignorance. True vision is realizing the divinity within oneself and in all creation. Seek that vision, and you will be free."
                    </blockquote>
                </section>

                {/* Impact Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The news of this miracle spread across the land, drawing countless devotees to Sripada Srivallabha. The blind man became a living example of the Lord’s grace and went on to inspire others with his story of faith and transformation.
                    </p>
                </section>

                {/* Takeaway Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Takeaway for Devotees</h2>
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                        <li><strong>Faith Transcends Disabilities:</strong> The Guru’s grace can heal physical, emotional, and spiritual afflictions.</li>
                        <li><strong>True Vision is Spiritual:</strong> Seeing the divine within and around us is the ultimate realization.</li>
                        <li><strong>Surrender Brings Miracles:</strong> Complete trust in the Guru opens the path to blessings.</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        This story reminds us that the Guru not only heals our worldly ailments but also illuminates the path to spiritual awakening.
                    </p>
                </section>
            </div>
        </div>
         <div>
                        <Footer />
                </div>
        </>
    );
};

export default Blinddevoot;
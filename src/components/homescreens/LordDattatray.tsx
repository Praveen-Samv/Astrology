import React from "react";

const LordDattatray: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center -mt-24 justify-between px-6 md:px-16 py-10  min-h-screen">
            {/* Left Side: Image and Title */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Welcome to Lord Dattatray
                </h1>
                <img
                    src="https://i.ytimg.com/vi/sRdqS5nwUNY/maxresdefault.jpg"
                    alt="Lord Dattatray"
                    className="rounded-lg mt-6 shadow-lg mx-auto md:mx-0 w-full md:w-4/5"
                />
            </div>

            {/* Right Side: Content */}
            <div className="md:w-1/2  -mt-2 text-gray-700 text-lg space-y-6">
                <p>
                    Embark on a sacred journey through the life, teachings, and divine stories of Lord Dattatreya,
                    the embodiment of Brahma, Vishnu, and Maheshwara. This website serves as a spiritual
                    sanctuary for devotees and seekers of truth, offering a gateway to ancient wisdom and modern
                    insights rooted in Datta traditions.
                </p>
                <p>
                    Experience the profound teachings of Sripada Srivallabha, the miracles of Narasimha
                    Saraswati, and the compassionate blessings of Swami Samarth. Here, you will find everything
                    from devotional resources to philosophical insights that guide us toward inner peace and
                    ultimate liberation.
                </p>
            </div>
        </section>
    );
};

export default LordDattatray;

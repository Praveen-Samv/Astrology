import React from "react";

const incarnations = [
    {
        name: "Sripada Srivallabha (1320 AD – 1350 AD)",
        birthplace: "Pithapuram, Andhra Pradesh",
        era: "Early 14th century",
        message: "Detachment from material desires, unwavering devotion, and selfless service to others.",
        legacy: "Pithapuram remains a revered spiritual hub, and his life is immortalized in the 'Sripada Srivallabha Charitaamrutam'.",
        image: "https://i.ytimg.com/vi/rAn2a__7JqI/maxresdefault.jpg"
    },
    {
        name: "Narasimha Saraswati (1378 AD – 1458 AD)",
        birthplace: "Karanja, Maharashtra",
        era: "Late 14th to mid-15th century",
        message: "Faith in the Guru, adherence to Vedic traditions, and disciplined spiritual practices.",
        legacy: "His life and teachings are chronicled in 'Shri Guru Charitra', inspiring millions.",
        image: "https://yt3.googleusercontent.com/ytc/AOPolaRa1q7QMN7V6p-P2s-mrCwlXIcASDhOf7MtSyVrxg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        name: "Swami Samarth (19th Century)",
        birthplace: "Resided in Akkalkot, Maharashtra",
        era: "19th century",
        message: "Live simply, stay detached from materialism, and maintain faith in divine grace.",
        legacy: "Akkalkot has become a major pilgrimage site, where devotees flock to experience his presence and teachings.",
        image: "https://yt3.googleusercontent.com/pvTApAcwpSbvskIeTZZB4zo0ytOdVgO-2VzmpaHj3tp6egw52mrX-9kalkW8NU6fzD3SXUI-BXI=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        name: "Manik Prabhu (1817 AD – 1865 AD)",
        birthplace: "Ladwanti, Maharashtra",
        era: "Early 19th century",
        message: "Equality, universal love, and selfless service to mankind.",
        legacy: "The Manik Prabhu Samsthan continues his mission of harmony and service.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Manik_Prabhu_and_Sai_Baba.jpg"
    },
    {
        name: "Sai Baba of Shirdi (1838 AD – 1918 AD)",
        birthplace: "Unknown; Resided in Shirdi, Maharashtra",
        era: "19th to early 20th century",
        message: "'Sabka Malik Ek' (God is One), serve humanity, and surrender to divine will.",
        legacy: "Shirdi is among the most visited pilgrimage sites in the world.",
        image: "https://i.ytimg.com/vi/R8m7VdNKhto/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gXygTMA8=&rs=AOn4CLDwE1VajItjwlMeXlOQgszjxq6EnA"
    },
    {
        name: "Vasudevananda Saraswati (Tembye Swami) (1854 AD – 1914 AD)",
        birthplace: "Mangaon, Maharashtra",
        era: "Late 19th to early 20th century",
        message: "Faith in the Guru and strict adherence to spiritual discipline.",
        legacy: "His teachings continue to inspire seekers of knowledge and enlightenment.",
        image: "https://yt3.ggpht.com/ytc/AKedOLSflcop2cD1pdj9LjRLD8cOsFHXrin2e349V4Q2mw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        name: "Gajanan Maharaj (Late 19th Century)",
        birthplace: "Shegaon, Maharashtra",
        era: "Late 19th century",
        message: "Be humble, remain detached, and seek spiritual awakening through devotion.",
        legacy: "Shegaon has become a spiritual hub, drawing devotees seeking guidance and blessings.",
        image: "https://yt3.googleusercontent.com/ytc/APkrFKamBFuRFeXt1F2kFTxadQX2FEWYt-HhAl6H9gkI8w=s900-c-k-c0x00ffffff-no-rj"
    }
];

const Incarnations: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-16 md:py-20">
            <div className="w-full max-w-[calc(100%-300px)] lg:mx-[150px] mx-6 px-6">
                {/* Title Section */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Incarnations of Lord Dattatreya
                </h1>

                {/* Incarnation List */}
                <div className="flex flex-col space-y-16">
                    {incarnations.map((incarnation, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/3 flex justify-center">
                                <img
                                    src={incarnation.image}
                                    alt={incarnation.name}
                                    className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="md:w-2/3 space-y-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{incarnation.name}</h2>
                                <p className="text-gray-600"><strong>Birthplace:</strong> {incarnation.birthplace}</p>
                                <p className="text-gray-600"><strong>Era:</strong> {incarnation.era}</p>
                                <p className="text-gray-700 leading-relaxed"><strong>Message:</strong> {incarnation.message}</p>
                                <p className="text-gray-700 leading-relaxed"><strong>Legacy:</strong> {incarnation.legacy}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Message */}
                <div className="text-center mt-20">
                    <h3 className="text-xl font-bold text-gray-800">
                        "Learn about the profound messages and enduring legacies of Lord Dattatreya’s incarnations.
                        Let their teachings inspire your journey."
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Incarnations;

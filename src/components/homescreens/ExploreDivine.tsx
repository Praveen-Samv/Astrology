
// const ExploreDivine = () => {
//     const cards = [
//         {
//             title: "About",
//             description:
//                 "Dive into the origin, mythology, and symbolism of Lord Datta.",
//         },
//         {
//             title: "Incarnations",
//             description:
//                 "Explore the lives of Sripada Srivallabha, Narasimha Saraswati,and more",
//         },
//         {
//             title: "texts",
//             description:
//                 ": Immerse yourself in Guru Charitra, Charitaamrutam, and miraculous Leelas",
//         },
//         {
//             title: "Temples",
//             description:
//                 "Through interactive maps and tours, visit holy sites and temples",
//         },
//     ];

//     return (
//         <div className="max-w-6xl mx-auto px-4 -mt-36 py-12">
//             {/* Title Section */}
//             <h2 className="text-3xl font-bold text-center md:text-left mb-8">Explore the Divine:</h2>

//             {/* Cards Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all"
//                     >
//                         <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//                         <p className="text-gray-600 mb-4">{card.description}</p>
//                         <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                             Know More
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ExploreDivine;





import { useNavigate } from "react-router-dom";

const ExploreDivine = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/navbar");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cards = [
        {
            title: "About",
            description:
                "Dive into the origin, mythology, and symbolism of Lord Datta.",
        },
        {
            title: "Incarnations",
            description:
                "Explore the lives of Sripada Srivallabha, Narasimha Saraswati, and more",
        },
        {
            title: "Texts",
            description:
                "Immerse yourself in Guru Charitra, Charitaamrutam, and miraculous Leelas",
        },
        {
            title: "Temples",
            description:
                "Through interactive maps and tours, visit holy sites and temples",
        },
        // {
        //     title: "Community",
        //     description:
        //         "Join the global Datta community for satsangs, festivals, and seva",
        // },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 -mt-36 py-12 text-center">
            {/* Title Section */}
            <h2 className="text-3xl font-bold mb-8">Explore the Divine:</h2>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                    >
                        <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                        <p className="text-gray-600 mb-4">{card.description}</p>
                        <button
                            onClick={handleClick}
                            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Know More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreDivine;

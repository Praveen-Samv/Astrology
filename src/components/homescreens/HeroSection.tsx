



// import { useEffect, useState } from "react";

// const images = [
//     "https://1.bp.blogspot.com/_WtwHwVoqsYQ/TRSwPJ-BBWI/AAAAAAAAC0M/syKe_EvMoik/s1600/Datta+Jayanti0005.JPG",
//     "https://i.ytimg.com/vi/r3SsNgyuI18/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/rAn2a__7JqI/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/yLfYtt7zpV4/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/p74eROQGwOI/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/JZee-CvvhTI/maxresdefault.jpg",
// ];

// const HeroSection = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div
//             className="flex flex-col md:flex-row items-center justify-between h-screen mt-18 p-2 transition-all duration-1000 relative"
//             style={{
//                 backgroundImage: `url(${images[currentImageIndex]})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 backgroundBlendMode: "overlay",
//             }}
//         >
//             {/* Content Section */}
//             <div className="max-w-lg text-center md:text-left mt-52  text-white ml-24">
//                 <h1 className="text-4xl font-bold">Your Gateway to Spiritual Transformation"</h1>
//                 <p className="mt-4 font-semibold">
//                     Discover the Eternal Wisdom, Grace, and Teachings of Lord Dattatreya – The Universal Guru
//                     of Liberation and Enlightenment
//                 </p>
//                 {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
//                     Learn More
//                 </button> */}
//             </div>
//             {/* Rotating Image Section */}
//             <div className="relative w-64 h-64 mt-44 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-gray-300 md:mr-12">
//                 <img
//                     src={images[currentImageIndex]}
//                     alt="Datta Wisdom Spiritus"
//                     className="w-full h-full object-cover rounded-full transition-all duration-1000"
//                 />
//             </div>
//         </div>
//     );
// };

// export default HeroSection;



import { useEffect, useState } from "react";

const images = [
    "https://1.bp.blogspot.com/_WtwHwVoqsYQ/TRSwPJ-BBWI/AAAAAAAAC0M/syKe_EvMoik/s1600/Datta+Jayanti0005.JPG",
    "https://i.ytimg.com/vi/r3SsNgyuI18/maxresdefault.jpg",
    "https://i.ytimg.com/vi/rAn2a__7JqI/maxresdefault.jpg",
    "https://i.ytimg.com/vi/yLfYtt7zpV4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/p74eROQGwOI/maxresdefault.jpg",
    "https://i.ytimg.com/vi/JZee-CvvhTI/maxresdefault.jpg",
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-full flex justify-center items-center h-screen"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="w-full max-w-[calc(100%-300px)] lg:mx-[150px] mx-6 px-6 flex flex-col md:flex-row items-center mt-52 justify-between">
                {/* Content Section */}
                <div className="max-w-lg text-center md:text-left text-white">
                    <h1 className="text-4xl font-bold">
                        Your Gateway to Spiritual Transformation
                    </h1>
                    <p className="mt-4 font-semibold">
                        Discover the Eternal Wisdom, Grace, and Teachings of Lord Dattatreya –
                        The Universal Guru of Liberation and Enlightenment
                    </p>
                </div>

                {/* Rotating Image Section */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-gray-300">
                    <img
                        src={images[currentImageIndex]}
                        alt="Datta Wisdom Spiritus"
                        className="w-full h-full object-cover rounded-full transition-all duration-1000"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

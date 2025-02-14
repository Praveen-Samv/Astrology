// import React, { useState } from 'react';
// // import './index.css'; // Ensure TailwindCSS is set up

// const Gurus: React.FC = () => {
//     const [selectedGuru, setSelectedGuru] = useState<any>(null);
//     const [popupVisible, setPopupVisible] = useState(false);

//     const gurus = [
//         { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness.", symbol: "🌍" },
//         { guru: "Sun", lesson: "Illuminates selfless service and the act of giving.", symbol: "☀️" },
//         { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment.", symbol: "💨" },
//         { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution.", symbol: "🕷️" },
//         { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly.", symbol: "💧" },
//         { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing.", symbol: "🔥" },
//         { guru: "Moon", lesson: "Teaches cycles of growth and decay, showing the temporary nature of all.", symbol: "🌙" },
//         { guru: "Pigeon", lesson: "Represents attachment and the consequences of excessive desire.", symbol: "🕊️" },
//         { guru: "Python", lesson: "Teaches contentment and simplicity by accepting what comes.", symbol: "🐍" },
//         { guru: "Ocean", lesson: "Demonstrates containment and self-control despite external influences.", symbol: "🌊" },
//         { guru: "Moth", lesson: "Teaches caution against destructive sensual attraction.", symbol: "🦋" },
//         { guru: "Honeybee", lesson: "Teaches non-harm and taking only what is necessary.", symbol: "🐝" },
//         { guru: "Elephant", lesson: "Represents the power of sensual temptation and the need for control.", symbol: "🐘" },
//         { guru: "Honey-gatherer", lesson: "Teaches non-hoarding, only taking what is needed.", symbol: "🍯" },
//         { guru: "Deer", lesson: "Shows how sound and attraction can captivate the mind.", symbol: "🦌" },
//         { guru: "Fish", lesson: "Teaches the dangers of attachment to material things, like taste.", symbol: "🐟" },
//         { guru: "Dancing Girl", lesson: "Represents awakening from worldly attachment and renunciation.", symbol: "💃" },
//         { guru: "Kurara Bird", lesson: "Teaches the futility of excessive greed and possessiveness.", symbol: "🦅" },
//         { guru: "Child", lesson: "Represents innocence, joy, and the freedom of living in the present.", symbol: "👶" },
//         { guru: "Arrow-maker", lesson: "Teaches the power of concentration and focused attention.", symbol: "🏹" },
//         { guru: "Snake", lesson: "Teaches self-reliance and minimal dependency on others.", symbol: "🐍" },
//         { guru: "Spider", lesson: "Represents the ultimate truth of creation and dissolution.", symbol: "🕷️" },
//         { guru: "Wasp", lesson: "Teaches focused meditation, where concentrated thought leads to transformation.", symbol: "🦋" },
//         { guru: "Caterpillar", lesson: "Teaches continuous contemplation and transformation through steady practice.", symbol: "🦗" }
//     ];

//     const handlePopup = (guru: any) => {
//         setSelectedGuru(guru);
//         setPopupVisible(true);
//     };

//     const closePopup = () => {
//         setPopupVisible(false);
//     };

//     // Function to get symbols for each row
//     const splitIntoRows = (array: any[], numRows: number) => {
//         const rows: any[][] = [];
//         const rowLength = Math.ceil(array.length / numRows);

//         for (let i = 0; i < numRows; i++) {
//             rows.push(array.slice(i * rowLength, i * rowLength + rowLength));
//         }

//         return rows;
//     };

//     const rows = splitIntoRows(gurus, 3);

//     return (
//         <div className="mb-24 p-8">
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                 Learning from 24 Gurus: Nature as the Teacher
//             </h2>

//             {/* Horizontal Layout */}
//             <div className="space-y-8">
//                 {rows.map((row, rowIndex) => (
//                     <div key={rowIndex} className="flex justify-center flex-wrap relative items-center">
//                         {row.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative group cursor-pointer flex flex-col justify-center items-center mx-4 mb-8 md:mb-0"
//                                 onClick={() => handlePopup(item)}
//                             >
//                                 {/* Circle with Symbol */}
//                                 <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-md mb-4 transition-transform duration-300 transform group-hover:scale-110">
//                                     <span className="text-3xl md:text-4xl">{item.symbol}</span>
//                                 </div>
//                                 <p className="font-semibold text-center text-gray-700">{item.guru}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>

//             {/* Popup */}
//             {popupVisible && selectedGuru && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transition-transform transform duration-300 scale-100 opacity-100">
//                         <div className="flex justify-between items-center">
//                             <h3 className="text-2xl font-bold">{selectedGuru.guru}</h3>
//                             <button onClick={closePopup} className="text-gray-500 hover:text-gray-700 text-xl">
//                                 &times;
//                             </button>
//                         </div>
//                         <div className="mt-4">
//                             <div className="text-center text-lg font-medium">{selectedGuru.lesson}</div>
//                         </div>
//                         <button
//                             onClick={closePopup}
//                             className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Gurus;




import React, { useState, useEffect } from 'react';
// import ''; // Ensure TailwindCSS is set up

const Gurus: React.FC = () => {
    const [selectedGuru, setSelectedGuru] = useState<any>(null);
    const [popupVisible, setPopupVisible] = useState(false);

    const gurus = [
        { guru: "Earth", lesson: "Teaches patience, tolerance, and forgiveness.", symbol: "🌍" },
        { guru: "Sun", lesson: "Illuminates selfless service and the act of giving.", symbol: "☀️" },
        { guru: "Air", lesson: "Symbolizes purity, detachment, and movement without attachment.", symbol: "💨" },
        { guru: "Spider", lesson: "Reflects the cycle of creation, preservation, and dissolution.", symbol: "🕷️" },
        { guru: "Water", lesson: "Teaches humility and adaptability by flowing selflessly.", symbol: "💧" },
        { guru: "Fire", lesson: "Burns impurities, symbolizing self-discipline and inner cleansing.", symbol: "🔥" },
        { guru: "Moon", lesson: "Teaches cycles of growth and decay, showing the temporary nature of all.", symbol: "🌙" },
        { guru: "Pigeon", lesson: "Represents attachment and the consequences of excessive desire.", symbol: "🕊️" },
        { guru: "Python", lesson: "Teaches contentment and simplicity by accepting what comes.", symbol: "🐍" },
        { guru: "Ocean", lesson: "Demonstrates containment and self-control despite external influences.", symbol: "🌊" },
        { guru: "Moth", lesson: "Teaches caution against destructive sensual attraction.", symbol: "🦋" },
        { guru: "Honeybee", lesson: "Teaches non-harm and taking only what is necessary.", symbol: "🐝" },
        { guru: "Elephant", lesson: "Represents the power of sensual temptation and the need for control.", symbol: "🐘" },
        { guru: "Honey-gatherer", lesson: "Teaches non-hoarding, only taking what is needed.", symbol: "🍯" },
        { guru: "Deer", lesson: "Shows how sound and attraction can captivate the mind.", symbol: "🦌" },
        { guru: "Fish", lesson: "Teaches the dangers of attachment to material things, like taste.", symbol: "🐟" },
        { guru: "Dancing Girl", lesson: "Represents awakening from worldly attachment and renunciation.", symbol: "💃" },
        { guru: "Kurara Bird", lesson: "Teaches the futility of excessive greed and possessiveness.", symbol: "🦅" },
        { guru: "Child", lesson: "Represents innocence, joy, and the freedom of living in the present.", symbol: "👶" },
        { guru: "Arrow-maker", lesson: "Teaches the power of concentration and focused attention.", symbol: "🏹" },
        { guru: "Snake", lesson: "Teaches self-reliance and minimal dependency on others.", symbol: "🐍" },
        { guru: "Spider", lesson: "Represents the ultimate truth of creation and dissolution.", symbol: "🕷️" },
        { guru: "Wasp", lesson: "Teaches focused meditation, where concentrated thought leads to transformation.", symbol: "🦋" },
        { guru: "Caterpillar", lesson: "Teaches continuous contemplation and transformation through steady practice.", symbol: "🦗" }
    ];

    const handlePopup = (guru: any) => {
        setSelectedGuru(guru);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    // Function to get symbols for each row
    const splitIntoRows = (array: any[], numRows: number) => {
        const rows: any[][] = [];
        const rowLength = Math.ceil(array.length / numRows);

        for (let i = 0; i < numRows; i++) {
            rows.push(array.slice(i * rowLength, i * rowLength + rowLength));
        }

        return rows;
    };

    const rows = splitIntoRows(gurus, 3);

    // Handle ESC key to close popup
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };

        if (popupVisible) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [popupVisible]);

    return (
        <div className="mb-24 p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Learning from 24 Gurus: Nature as the Teacher
            </h2>

            {/* Horizontal Layout */}
            <div className="space-y-8">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center flex-wrap relative items-center">
                        {row.map((item, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer flex flex-col justify-center items-center mx-4 mb-8 md:mb-0"
                                onClick={() => handlePopup(item)}
                            >
                                {/* Circle with Symbol */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-md mb-4 transition-transform duration-300 transform group-hover:scale-110">
                                    <span className="text-3xl md:text-4xl">{item.symbol}</span>
                                </div>
                                <p className="font-semibold text-center text-gray-700">{item.guru}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Popup */}
            {popupVisible && selectedGuru && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300 scale-95 opacity-0 animate-popup">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold">{selectedGuru.guru}</h3>
                            <button
                                onClick={closePopup}
                                className="text-gray-500 hover:text-gray-700 text-xl focus:outline-none"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="text-center text-lg font-medium">{selectedGuru.lesson}</div>
                        </div>
                        <button
                            onClick={closePopup}
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gurus;
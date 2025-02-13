





import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

// Define the type for timeline data
type TimelineItem = {
    year: string;
    title: string;
    location: string;
    details: string;
};

// Custom Om symbol component
const OmSymbol: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 40 40" className={`w-6 h-6 ${className}`}>
        <path
            d="M20,5 Q30,15 20,25 Q10,15 20,5 M20,25 L20,35"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
        />
    </svg>
);

// Decorative Mandala component
const Mandala: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`absolute opacity-10 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
    </div>
);

// Timeline Node component
const TimelineNode: React.FC<TimelineItem & { isSelected: boolean; onClick: () => void }> = ({
    year,
    title,
    location,
    details,
    isSelected,
    onClick,
}) => {
    return (
        <div
            className={`relative cursor-pointer transition-all duration-500 ${isSelected ? 'scale-110' : 'hover:scale-105'
                }`}
            onClick={onClick}
        >
            <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
                <div className="relative mb-4">
                    <OmSymbol className={isSelected ? 'text-yellow-400' : 'text-yellow-200'} />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className={`relative w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ${isSelected ? 'shadow-yellow-400/50' : 'shadow-yellow-300/30'}`}>
                    <div className="absolute inset-1 rounded-full bg-gray-900/50"></div>
                    <div className="w-4 h-4 bg-white rounded-full shadow-inner animate-pulse"></div>
                </div>
                <div className="absolute top-24 w-48 text-center">
                    <h3 className={`font-bold text-xl mb-2 ${isSelected ? 'text-yellow-400' : 'text-yellow-300'} transition-colors duration-300`}>
                        {year}
                    </h3>
                    <p className="text-base font-medium text-gray-200 mb-1">{title}</p>
                    <p className="text-sm text-yellow-400/70">{location.split(',')[0]}</p>
                </div>
            </div>
        </div>
    );
};

// Timeline Details component
const TimelineDetails: React.FC<{ selected: TimelineItem }> = ({ selected }) => {
    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 md:p-6 lg:p-8 shadow-2xl max-w-3xl mx-auto mt-48 border border-yellow-400/20 overflow-hidden">
            <Mandala className="top-0 right-0 w-64 h-64 text-yellow-400" />
            <Mandala className="bottom-0 left-0 w-48 h-48 text-yellow-400" />
            <div className="relative">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-yellow-400 mb-2">{selected.title}</h2>
                        <div className="flex items-center text-yellow-200 gap-2">
                            <MapPin className="w-5 h-5" />
                            <span className="text-lg">{selected.location}</span>
                        </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center">
                        <OmSymbol className="text-yellow-400 w-10 h-10" />
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mb-8"></div>
                <div className="relative">
                    <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                        <p>{selected.details}</p>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/5 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/5 rounded-full blur-xl"></div>
                </div>
            </div>
        </div>
    );
};

// Main Timeline component
const Timeline: React.FC = () => {
    const timelineData: TimelineItem[] = [
        {
            year: "1320 AD",
            title: "Sripada Srivallabha",
            location: "Pithapuram, Andhra Pradesh",
            details: "The first incarnation of Lord Dattatreya in Kaliyuga, Sripada Srivallabha performed divine miracles and spread spiritual teachings on detachment and devotion."
        },
        {
            year: "1378 AD",
            title: "Narasimha Saraswati",
            location: "Karanja, Maharashtra",
            details: "The second incarnation revitalized Sanatana Dharma and re-established the importance of Guru-Shishya traditions through teachings and miracles."
        },
        {
            year: "1817 AD",
            title: "Manik Prabhu",
            location: "Ladwanti, Maharashtra",
            details: "Known for his teachings of universal love and harmony, he founded the Manik Prabhu Samsthan to promote spiritual unity."
        },
        {
            year: "1838 AD",
            title: "Sai Baba of Shirdi",
            location: "Shirdi, Maharashtra",
            details: "Sai Baba's teachings of love and unity transcended religious boundaries, inspiring millions with the message, \"Sabka Malik Ek.\""
        },
        {
            year: "1854 AD",
            title: "Vasudevananda Saraswati",
            location: "Mangaon, Maharashtra",
            details: "A scholar and ascetic, he propagated Vedic rituals and Guru Bhakti, leaving a lasting impact on spiritual seekers."
        },
        {
            year: "Late 19th Century",
            title: "Gajanan Maharaj",
            location: "Shegaon, Maharashtra",
            details: "Known for his simplicity and humility, Gajanan Maharaj emphasized spiritual awakening and selfless devotion."
        }
    ];

    const [selected, setSelected] = useState(timelineData[0]);

    return (
        <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                    Divine Incarnations Timeline
                </h1>
                <p className="text-yellow-200/70 text-lg md:text-xl">A Journey Through Sacred Time</p>
            </div>
            <div className="relative">
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-yellow-200/20 via-yellow-400 to-yellow-200/20 top-8"></div>
                <div className="flex flex-col md:flex-row justify-between relative">
                    {timelineData.map((item, index) => (
                        <TimelineNode
                            key={index}
                            {...item}
                            isSelected={selected.year === item.year}
                            onClick={() => setSelected(item)}
                        />
                    ))}
                </div>
                <TimelineDetails selected={selected} />
            </div>
        </div>
    );
};

export default Timeline;
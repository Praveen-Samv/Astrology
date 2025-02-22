// import { Link } from "react-router-dom";

// const MiracleSection = () => {
//     const stories = [
//         {
//             title: "Revival of a Dead Child",
//             image: "https://i.ytimg.com/vi/2OMItqSPBi0/maxresdefault.jpg",
//             description:
//                 "A grieving mother approached Lord Narasimha Saraswati after her only child passed away...",
//             lesson: "Faith in the Guru can bring hope even in the face of the impossible.",
//             link: "/revival-story",
//         },
//         {
//             title: "Healing a Blind Devotee",
//             image: "https://i.ytimg.com/vi/8ZklT5t_vlM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXyhUMA8=&amp;rs=AOn4CLDRgMz0XoFMdQUBWFhRbUiTXXfzHg",
//             description:
//                 "A blind man regained his eyesight after fervent prayers to Sripada Srivallabha.",
//             lesson: "Sincere prayers can invoke divine blessings.",
//             link: "/healing-story",
//         },
//         {
//             title: "The Leelas of Sripada Srivallabha",
//             image: "https://i.ytimg.com/vi/z4zZh9WOTwY/maxresdefault.jpg",
//             description:
//                 "Sripada Srivallabha performed numerous miracles, proving the power of divine grace.",
//             lesson: "Devotion and surrender to Lord Datta open the doors to miracles.",
//             link: "/leelas-story",
//         },
//         {
//             title: "Swami Samarth’s Teachings Through Miracles",
//             image: "https://i.ytimg.com/vi/wvCZE3KIACE/maxresdefault.jpg",
//             description:
//                 "Swami Samarth guided devotees through miraculous interventions...",
//             lesson: "Divine intervention leads to inner peace and harmony.",
//             link: "/teachings-story",
//         },
//         {
//             title: "The Washerman Becomes a King",
//             image: "https://avatars.mds.yandex.net/i?id=8c88e24c6eaf44c514722a7a06d1182f3c26a254-11037629-images-thumbs&n=13",
//             description:
//                 "A poor washerman, devoted to Lord Dattatreya, was blessed to rule a kingdom...",
//             lesson: "Devotion and humility attract divine grace.",
//             link: "/washerman-story",
//         },
//         {
//             title: "The Leper Brahmin Cured",
//             image: "https://avatars.dzeninfra.ru/get-zen_doc/1368767/pub_650447d9cf85cb3a1cd1bab4_65044c15835b27439052ad2a/scale_1200",
//             description:
//                 "A devout Brahmin suffering from leprosy was cured after performing the Saptaha Parayana.",
//             lesson: "Reading sacred texts with devotion brings spiritual and physical healing.",
//             link: "/leper-story",
//         },
//         {
//             title: "Barren Woman Blessed with Children",
//             image: "https://cms-imgp.jw-cdn.org/img/p/1102014730/univ/art/1102014730_univ_lsr_lg.jpg",
//             description:
//                 "A woman, unable to conceive for years, was blessed by Sripada Srivallabha...",
//             lesson: "Trust in divine timing and grace.",
//             link: "/barren-woman-story",
//         },
//         {
//             title: "Protection from Thieves",
//             image: "https://i.ytimg.com/vi/tuH091O6bHs/maxresdefault.jpg",
//             description:
//                 "A devotee traveling with wealth was protected from thieves through divine intervention.",
//             lesson: "The Guru protects those who surrender to him.",
//             link: "/protection-story",
//         },
//         {
//             title: "Turning Scarcity into Abundance",
//             image: "https://4.bp.blogspot.com/_XTjd7jpNEkE/SqqIIG0DCgI/AAAAAAAAAFA/G-uZO9ljXi4/s1600/Datta+Swami.jpg",
//             description:
//                 "Swami Samarth blessed a poor farmer during a famine, and his land began to yield crops.",
//             lesson: "Trusting the divine brings solutions to life’s challenges.",
//             link: "/abundance-story",
//         },
//         {
//             title: "Liberation of a Brahma Rakshasa",
//             image: "https://i.ytimg.com/vi/8ziqSB822W0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTig2MA8=&rs=AOn4CLAjJxj2QeqzWHNJMWPhyHSezJ0tGg",
//             description:
//                 "A Brahma Rakshasa was freed from his suffering after the chanting of sacred mantras.",
//             lesson: "Divine guidance can liberate souls from karmic cycles.",
//             link: "/liberation-story",
//         },
//         {
//             title: "Restoring the Devotee’s Speech",
//             image: "https://avatars.mds.yandex.net/i?id=a7d8aed47565750a9f3d4c2024663fdf64f9e44a-5887740-images-thumbs&n=13",
//             description:
//                 "A mute boy, brought to Swami Samarth, began to speak after being blessed.",
//             lesson: "Miracles manifest through unwavering faith and divine blessings.",
//             link: "/speech-story",
//         },
//         {
//             title: "Miraculous Food Multiplication",
//             image: "https://on5yirmi5.com/wp-content/uploads/2024/11/hafbes.jpg",
//             description:
//                 "A small quantity of food prepared by a devotee was blessed and miraculously multiplied.",
//             lesson: "The Lord ensures that no devotee goes hungry in his presence.",
//             link: "/food-story",
//         },
//     ];

//     return (
//         <section className="mb-12 px-6">
//             <h2 className="text-3xl font-semibold text-center mb-6 text-black">
//                 Miracles and Divine Stories
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {stories.map((story, index) => (
//                     <div
//                         key={index}
//                         className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
//                     >
//                         <img
//                             src={story.image}
//                             alt={story.title}
//                             className="w-full h-48 object-cover"
//                         />
//                         <div className="p-6 bg-white/20 backdrop-blur-lg  rounded-b-lg">
//                             <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
//                             <p className="mb-4">{story.description}</p>
//                             <p className="italic mb-4">{story.lesson}</p>
//                             <Link
//                                 to={story.link}
//                                 className="mt-4 inline-block bg-teal-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition text-black"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default MiracleSection;





import { Link } from 'react-router-dom';

const MiracleSection = () => {
    const stories = [
        {
            title: "Revival of a Dead Child",
            image: "src/assets/scriptures/maxresdefault.jpg",
            description:
                "A grieving mother approached Lord Narasimha Saraswati after her only child passed away...",
            lesson: "Faith in the Guru can bring hope even in the face of the impossible.",
            link: "/revival-story",
        },
        {
            title: "Healing a Blind Devotee",
            image: "src/assets/scriptures/maxresdefault (1).jpg",
            description:
                "A blind man regained his eyesight after fervent prayers to Sripada Srivallabha.",
            lesson: "Sincere prayers can invoke divine blessings.",
            link: "/healing-story",
        },
        {
            title: "The Leelas of Sripada Srivallabha",
            image: "src/assets/scriptures/maxresdefault (2).jpg",
            description:
                "Sripada Srivallabha performed numerous miracles, proving the power of divine grace.",
            lesson: "Devotion and surrender to Lord Datta open the doors to miracles.",
            link: "/leelas-story",
        },
        {
            title: "Swami Samarth’s Teachings Through Miracles",
            image: "src/assets/scriptures/maxresdefault (3).jpg",
            description:
                "Swami Samarth guided devotees through miraculous interventions...",
            lesson: "Divine intervention leads to inner peace and harmony.",
            link: "/teachings-story",
        },
        {
            title: "The Washerman Becomes a King",
            image: "src/assets/scriptures/i.webp",
            description:
                "A poor washerman, devoted to Lord Dattatreya, was blessed to rule a kingdom...",
            lesson: "Devotion and humility attract divine grace.",
            link: "/washerman-story",
        },
        {
            title: "The Leper Brahmin Cured",
            image: "src/assets/scriptures/scale_1200.webp",
            description:
                "A devout Brahmin suffering from leprosy was cured after performing the Saptaha Parayana.",
            lesson: "Reading sacred texts with devotion brings spiritual and physical healing.",
            link: "/leper-story",
        },
        {
            title: "Barren Woman Blessed with Children",
            image: "src/assets/scriptures/1102014730_univ_lsr_lg.jpg",
            description:
                "A woman, unable to conceive for years, was blessed by Sripada Srivallabha...",
            lesson: "Trust in divine timing and grace.",
            link: "/barren-woman-story",
        },
        {
            title: "Protection from Thieves",
            image: "src/assets/scriptures/maxresdefault (4).jpg",
            description:
                "A devotee traveling with wealth was protected from thieves through divine intervention.",
            lesson: "The Guru protects those who surrender to him.",
            link: "/protection-story",
        },
        {
            title: "Turning Scarcity into Abundance",
            image: "src/assets/scriptures/Datta Swami.jpg",
            description:
                "Swami Samarth blessed a poor farmer during a famine, and his land began to yield crops.",
            lesson: "Trusting the divine brings solutions to life’s challenges.",
            link: "/abundance-story",
        },
        {
            title: "Liberation of a Brahma Rakshasa",
            image: "src/assets/scriptures/maxresdefault (5).jpg",
            description:
                "A Brahma Rakshasa was freed from his suffering after the chanting of sacred mantras.",
            lesson: "Divine guidance can liberate souls from karmic cycles.",
            link: "/liberation-story",
        },
        {
            title: "Restoring the Devotee’s Speech",
            image: "src/assets/scriptures/i (1).webp",
            description:
                "A mute boy, brought to Swami Samarth, began to speak after being blessed.",
            lesson: "Miracles manifest through unwavering faith and divine blessings.",
            link: "/speech-story",
        },
        {
            title: "Miraculous Food Multiplication",
            image: "src/assets/scriptures/hafbes.webp",
            description:
                "A small quantity of food prepared by a devotee was blessed and miraculously multiplied.",
            lesson: "The Lord ensures that no devotee goes hungry in his presence.",
            link: "/food-story",
        },
    ];

    return (
        <section className="mb-12 px-6">
            <h2 className="text-3xl font-semibold text-center mb-6 text-black">
                Miracles and Divine Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    >
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                            <p className="mb-4">{story.description}</p>
                            <p className="italic mb-4">{story.lesson}</p>
                            <Link
                                to={story.link}
                                className="mt-4 inline-block bg-teal-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition text-black"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MiracleSection;
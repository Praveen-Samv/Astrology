




import { Link } from "react-router-dom";
import Footer from "../HomePages/Footer";

const FreeServices = () => {
    return (
        <div className="w-full bg-white">
            {/* Breadcrumb */}
            <div
                className="w-full h-52 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Free Services</h1>
                    <div className="flex items-center space-x-2 text-lg mt-2">
                        
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-16">
                {[
                    { title: "Company Name Number Calculator ", img: "b3b02691dfe6e5452c8037623dff37ae.png", link: "/compay-name" },
                    { title: "Brand Name  Number Calculator", img: "013c1d62729c2d0f481cc94e3ea0ff88.png", link: "/brand-name" },
                    { title: "Favourable Colour Combinations", img: "539ecbb8d3ce7db2498cdfd7d5700653.jpg", link: "/favourable-color" },
                    { title: "Company Logo Suggestions", img: "22c272e5b7b252dce03a99ffeba0768a.png", link: "/company-logo" },
                    { title: "Company Tagline Analysis", img: "28aae29f47a19eaed148eb2836c302e1.png", link: "/company-tagline" },
                    


                ].map((card, index) => (
                    <Link
                        to={card.link}
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
                    >
                        <img
                            src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
                            alt={card.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-8 text-white">
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FreeServices;

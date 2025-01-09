

import { Link } from 'react-router-dom'; // Import for navigation


const blogs = [
  {
    date: 'January 01, 2025',
    title: 'Zodiac Sign',
    author: 'Srikant Todalagoppa',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39',
    link: '/blog/Zodiac', // Link to the blog detail page
  },
  {
    date: 'January 5, 2025',
    title: 'Career and Love Horoscopes',
    author: 'Vikram Lohe',
    image: 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13',
    link: '/blog/astrology-chakras-psychic-energy',
  },
  {
    date: 'November 3, 2024',
    title: 'Mercury Retrograde',
    author: 'Vikram Lohe',
    image: 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw',
    link: '/blog/mercury-retro',
  },
  {
    date: 'January 06, 2025',
    title: 'Finacial-Astrology',
    author: 'Vikram Lohe',
    image: 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13',
    link: '/blog/finacial-astrology'
  },
  {
    date: 'January, 07, 2025',
    title: 'Astrological Events and Their Influence on Global Affairs',
    author: 'Vikram Lohe',
    image: 'https://gosta.media/wp-content/themes/gosta/inc/horoskop-en/day/2024/11/29/horoskop-29-11-2024.webp',
    link: '/blog/global-affairs-events.'
  },
  {
    date: 'October 27, 2024',
    title: 'My Journey with Mindfulness, Meditation, & Astrology',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/672309e6778d2a69c3af4efc_img-SIXP7LVudMLvQllB4FYjf-p-2000.jpeg',
    link: '/blog/3 Pillars for Scalable Astrology Platform',
  },
  {
    date: 'October 21, 2024',
    title: '3 Pillars for Scalable Astrology Platform',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/65aa59d511362a31dc5f012b_3%20Pillars%20for%20Scalable%20Astrology%20Platform%201-p-2000.png',
    link: '/blog/3 Pillars for Scalable Astrology Platform',
  },
  
  // Add the rest of the blogs with their respective links...
];

const BlogsMalooha = () => {
  return (
    <div className="bg-white text-black p-10 -z-10">
      <h1 className="text-4xl font-bold mb-8">Explore Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative group bg-transparent rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm opacity-70 transition-all duration-300 group-hover:opacity-90"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className="relative h-full backdrop-blur-md bg-black/30">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-200">{blog.date}</p>
                <h2 className="text-2xl font-semibold mb-2 text-white">{blog.title}</h2>
                <p className="text-gray-200 text-sm mb-4">{blog.author}</p>
                <Link
                  to={blog.link}
                  className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Read Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default BlogsMalooha;

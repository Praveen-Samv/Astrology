

import { Link } from 'react-router-dom'; // Import for navigation


const blogs = [
  {
    date: 'December 12, 2024',
    title: 'Panchang and Prana',
    author: 'Srikant Todalagoppa',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/668b2dc5e1d842300b755d51_img-ZQ5zkSM7H7Gc55NJV2VBX.jpeg',
    link: '/blog/panchang', // Link to the blog detail page
  },
  {
    date: 'December 4, 2024',
    title: 'Astrology, Chakras, Psychic Energy Centres',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/66a6b6c3db4d639b633d2c2c_img-FZ13fFF2TDF5qCcvKMuOX.jpeg',
    link: '/blog/astrology-chakras-psychic-energy',
  },
  {
    date: 'November 3, 2024',
    title: '9 Planets and their Characteristics in Astrology',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/6639a517e461a327c1c1a027_22-p-2000.webp',
    link: '/blog/9-planets-characteristics',
  },
  {
    date: 'October 30, 2024',
    title: 'My Journey with Mindfulness, Meditation, & Astrology',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/66b98a6df9082a5fba97b534_img-zFsGZYKBsdBuy6BmSFytu-p-2000.jpeg',
    link: '/blog/My Journey with Mindfulness'
  },
  {
    date: 'October 28, 2024',
    title: 'November Astrology event.',
    author: 'Vikram Lohe',
    image: 'https://cdn.prod.website-files.com/64d9c06eb20aa28a284c6beb/6722538980c84c50c1151ebf_img-Wwf2gNxvwSHrvdxC5q6uS-p-2000.jpg',
    link: '/blog/November Astrology event.'
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
                  className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300 inline-block"
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

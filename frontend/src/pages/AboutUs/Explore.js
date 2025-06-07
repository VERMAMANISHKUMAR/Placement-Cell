
import React from 'react';

const ExploreTCSiON = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Explore the world of MyJob Portal</h2>
        <p className="text-gray-300 mb-8">
          Read our blogs, case studies and stay updated with the latest news on MyJob Portal
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blogs Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-40 bg-gray-600 rounded mb-4 flex items-center justify-center">
              <img src="https://presidencycollege.ac.in/assets/frontend/images/placement-policy1.webp" alt="Blogs" className="w-full h-full object-cover rounded" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Blogs</h3>
            <p className="text-gray-300 mb-4">
              Keep up with the trending topics about your industry
            </p>
            <a
              href="#"
              className="text-white flex items-center gap-2 hover:text-blue-400"
            >
              Know More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Testimonials Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="h-40 bg-gray-600 rounded mb-4 flex items-center justify-center">
             <img src="https://www.iimb.ac.in/sites/default/files/inline-images/EPGP-3_0.jpg" alt="Testimonials" className="w-full h-full object-cover rounded" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
            <p className="text-gray-300 mb-4">
              Read about the impact we have on our customers
            </p>
            <a
              href="#"
              className="text-white flex items-center gap-2 hover:text-blue-400"
            >
              Know More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTCSiON;

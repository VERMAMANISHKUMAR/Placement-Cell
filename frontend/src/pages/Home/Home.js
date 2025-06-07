import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMapMarkerAlt, faSearch, faMagnifyingGlass, faUsers, faBook, faBell } from "@fortawesome/free-solid-svg-icons";
import img from '../../assets/jobtem.webp';

// Dummy Featured Jobs Data
const featuredJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Analytics Inc.",
    location: "New York, NY",
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "CodeWorks",
    location: "Austin, TX",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Innovate Solutions",
    location: "Chicago, IL",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudSys",
    location: "Seattle, WA",
  },
];

// Features Data for Slider with Images
const features = [
  {
    id: 1,
    title: "Easy Job Search",
    description: "Find jobs quickly with our advanced search filters.",
    icon: faMagnifyingGlass,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Connect with Employers",
    description: "Build relationships with top companies in your industry.",
    icon: faUsers,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Career Resources",
    description: "Access tools and guides to boost your career growth.",
    icon: faBook,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    title: "Personalized Alerts",
    description: "Get job recommendations tailored to your preferences.",
    icon: faBell,
    image: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const HomePage = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSearch = () => {
    if (keywords || location) {
      alert(`Searching for "${keywords}" in "${location}"...`);
      // In a real app, this would redirect to a search results page or filter jobs
    } else {
      alert("Please enter keywords or a location to search.");
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? features.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % features.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans pt-0.5">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-500 to-[#1F2937] text-white">
        <div className="container mx-auto px-4 sm:px-2 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side: Text and Search Bar */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-start">
                Find Your Dream Job at MyJobPortal
              </h2>
              <p className="text-lg md:text-xl mb-8 text-start">
                Explore thousands of opportunities tailored just for you.
              </p>
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-2 max-w-3xl mb-10">
                <input
                  type="text"
                  placeholder="Enter keywords (e.g., Software Engineer)"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full md:w-1/2 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="text"
                  placeholder="Enter location (e.g., New York)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full md:w-1/2 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  onClick={handleSearch}
                  className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 w-full md:w-auto"
                >
                  <FontAwesomeIcon icon={faSearch} /> Search
                </button>
              </div>
            </div>
            {/* Right Side: Image */}
            <div className="md:w-1/2 hidden md:block">
              <img
                src={img}
                alt="People working in a professional setting"
                className="w-full h-auto max-h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Slider Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose MyJobPortal?
          </h3>
          <div className="relative">
            {/* Slider Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="min-w-full flex flex-col md:flex-row items-center p-6"
                  >
                    {/* Image */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    {/* Text Content */}
                    <div className="md:w-1/2 md:pl-6 flex flex-col items-center md:items-start text-center md:text-left">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="text-blue-600 text-4xl mb-4"
                      />
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          </div>
          {/* Dots for Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Featured Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h4>
                <p className="text-gray-600 mb-1">
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                  {job.company}
                </p>
                <p className="text-gray-600 mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {job.location}
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 no-underline text-center ml-20"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            About MyJobPortal
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                MyJobPortal is dedicated to connecting job seekers with their dream careers. Based in Ghaziabad, India, we provide a platform that simplifies the job search process, offering personalized job alerts, career resources, and direct connections with top employers.
              </p>
              <p className="text-gray-600">
                Visit us at our office in Vaishali, Ghaziabad, or explore thousands of opportunities online today!
              </p>
            </div>
            {/* Google Map */}
            <div className="md:w-1/2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.893132754208!2d77.3329747150853!3d28.64565998241134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad9c897c0c5%3A0x2b0d716e3f7e1d7d!2sVaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697648923456!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MyJobPortal Location in Ghaziabad"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
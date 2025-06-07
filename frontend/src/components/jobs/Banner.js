import { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://ps.w.org/wp-job-portal/assets/banner-772x250.png?rev=2662784',
    heading: 'The corporate world needs AI!',
    subheading: 'Master AI from the experts with IIT Kharagpur AI4ICPS Certificate Programme',
    buttonText: 'Register Now',
  },
  {
    image: 'https://easemybusiness.com/wp-content/uploads/2020/07/current-jobs-banner.jpg',
    heading: 'Discover Your Dream Job',
    subheading: 'Explore thousands of opportunities tailored for you',
    buttonText: 'Explore Jobs',
  },
  {
    image: 'https://www.jobportalglobal.com/designFiles/home_bg.jpg',
    heading: 'Start Your Career Today',
    subheading: 'Join the leading platform for job seekers worldwide',
    buttonText: 'Get Started',
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <div
      className="bg-cover bg-center h-[300px] sm:h-[400px] flex items-center justify-center text-center relative before:content-[''] before:absolute before:inset-0 before:bg-black/70 transition-all duration-1000"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="relative z-10 px-4 py-8 sm:py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          {currentSlide.heading || 'Welcome to Our Platform'}
        </h2>
        <p className="text-base sm:text-lg mb-6 text-white">
          {currentSlide.subheading || 'Your journey to success starts here'}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-600 transition text-sm sm:text-base">
          {currentSlide.buttonText || 'Learn More'}
        </button>
      </div>
    </div>
  );
};

export default Banner;
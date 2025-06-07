import React, { useState, useEffect } from 'react';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://static.vecteezy.com/system/resources/thumbnails/038/950/888/small_2x/ai-generated-portrait-of-a-beautiful-young-and-intelligent-looking-indian-asian-woman-student-wearing-a-white-shirt-photo.jpg',
    },
    {
      image: 'https://badshah.io/kickstarting-in-cybersecurity-for-indian-students/cover-image.jpg',
    },
    {
      image: 'https://badshah.io/kickstarting-in-cybersecurity-for-indian-students/cover-image.jpg',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <div className="relative h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
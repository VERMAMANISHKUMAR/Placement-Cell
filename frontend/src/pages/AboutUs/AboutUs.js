import { useEffect, useRef, useState } from 'react';
import Explore from './Explore';
import img from '../AboutUs/jobimg.png';
const ContactUs = () => (
  <section className="py-6 border-y border-gray-300">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
      <div className="mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">For queries, feedback & assistance</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Request a Callback
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v12H3V8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h.01" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-gray-600">info.myjobportal@mjp.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Contact Centre Number</h3>
            <p className="text-gray-600">1800-266-6282</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WeAreGrowing = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const data = [
    { number: 74139, text: 'courses on the platform', icon: '🎓' },
    { number: 500, text: 'corporates on the MyJob Portal job listing platform', icon: '📝' },
    { number: 35456, text: 'communities on the platform', icon: '🏢' },
    { number: 280000000, text: 'candidates assessed', icon: '🎓' },
    { number: 11000000, text: 'learners on the cloud', icon: '👤' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          data.forEach((item, index) => {
            let start = 0;
            const end = item.number;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60 FPS
            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, 16);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">We Are Growing</h2>
        <p className="text-gray-600 mb-8">Our numbers speak for themselves! We’re a step ahead in every segment.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-3xl font-bold text-blue-600">
                {counts[index].toLocaleString('en-IN')}
                {item.number === 500 ? '+' : ''}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurOfferings = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Offerings</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold">MyJob Portal Learning</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold">MyJob Portal Assessment</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.9 2.166A4 4 0 003 15z" />
              </svg>
            </div>
            <h3 className="font-semibold">MyJob Portal Platform</h3>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Learning Programs for learners and organisations</h3>
          <p className="text-gray-600">
            We offer multimodal interactive learning formats as a part of our learning programs to meet the specific needs of learners. Our phygital model blends the strength of physical delivery and hands-on digital delivery methods, such as gamified learning. The programs are comprehensive and cover various dimensions in terms of skills and expertise. You will be able to explore industry-relevant and outcome-oriented learning modules along with a variety of pedagogical elements. You can get first-hand experience through internships offered by the leading industries.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Clients = () => {
  const [activeTab, setActiveTab] = useState('clients');

  const clients = [
    { name: 'EduCorp', image: 'https://picsum.photos/200/100?random=1' },
    { name: 'TechTrend Innovations', image: 'https://picsum.photos/200/100?random=2' },
    { name: 'SkillSet Academy', image: 'https://picsum.photos/200/100?random=3' },
    { name: 'FutureLearn Pvt Ltd', image: 'https://picsum.photos/200/100?random=4' },
    { name: 'GrowEasy Solutions', image: 'https://picsum.photos/200/100?random=5' },
    { name: 'NextGen Education', image: 'https://picsum.photos/200/100?random=6' },
    { name: 'CareerBoost Inc', image: 'https://picsum.photos/200/100?random=7' },
    { name: 'LearnSphere', image: 'https://picsum.photos/200/100?random=8' },
  ];

  const partners = [
    { name: 'CloudSync Technologies', image: 'https://picsum.photos/200/100?random=9' },
    { name: 'SkillBridge Partners', image: 'https://picsum.photos/200/100?random=10' },
    { name: 'InnovateEd Solutions', image: 'https://picsum.photos/200/100?random=11' },
    { name: 'TechAlliance Group', image: 'https://picsum.photos/200/100?random=12' },
    { name: 'EduPartner Network', image: 'https://picsum.photos/200/100?random=13' },
    { name: 'GlobalSkill Hub', image: 'https://picsum.photos/200/100?random=14' },
    { name: 'Pathway Learning', image: 'https://picsum.photos/200/100?random=15' },
    { name: 'SkillSync Corp', image: 'https://picsum.photos/200/100?random=16' },
  ];

  return (
 <section className="py-8">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Clients & Partners</h2>
    <p className="text-gray-600 mb-8">
      Meet our clients and partners who have successfully integrated our Learning, Assessment, and Platform solutions.
    </p>
    <div className="flex justify-center mb-6">
      <button
        className={`px-4 py-2 ${
          activeTab === 'clients'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600'
        }`}
        onClick={() => setActiveTab('clients')}
      >
        Clients
      </button>
      <button
        className={`px-4 py-2 ${
          activeTab === 'partners'
            ? 'border-b-2 border-blue-600 text-blue-600'
            : 'text-gray-600'
        }`}
        onClick={() => setActiveTab('partners')}
      >
        Partners
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {(activeTab === 'clients' ? clients : partners).map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center h-40 "
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-50 h-20 object-contain mb-2" // 👈 Image size set here
          />
          <span className="text-gray-600 text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

const PartnerSection = () => (
  <section className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-4">Partner with MyJob Portal</h2>
        <p className="mb-6">Partner with MyJob Portal and be a part of cloud adoption revolution in India</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Become a partner
        </button>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300">
          MyJob Portal, a unit of Tata Consultancy Services, is focused on empowering people and organisations with tech-led solutions to transform the educational and skill development domains for the new world. We use a uniquely built ‘phygital’ platform that connects the digital and physical worlds.
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="h-64 bg-gray-600 rounded-lg">
          <img
            src={img}
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <div>
    <AboutUs />
    <OurOfferings />
    <WeAreGrowing />
    <Clients />
    <PartnerSection />
    <Explore />
    <ContactUs />
  </div>
);

export default App;
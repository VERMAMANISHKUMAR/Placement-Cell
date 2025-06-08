import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PopupAdd from "../PopupAd/PopupAd"; // Assuming this is your PopupAd component
import MyChatbot from "../../chatbot/MyChatbot"; // path may vary
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleInstitutions = () => setIsInstitutionsOpen(!isInstitutionsOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Hamburger menu for mobile */}
        <div className="flex justify-between items-center w-full sm:hidden">
          <div className="text-white text-xl font-bold">Logo</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row space-x-0 sm:space-x-20 mt-4 sm:mt-0 w-full sm:w-auto`}
        >
          <select className="bg-gray-900 text-white border-none outline-none mb-2 sm:mb-0">
            <option>Learners</option>
            <option>Youth</option>
          </select>
          {/* Institutions Dropdown */}
          <div className="relative mb-2 sm:mb-0">
            <button
              onClick={toggleInstitutions}
              className="text-white text-xl focus:outline-none flex items-center"
              aria-haspopup="true"
              aria-expanded={isInstitutionsOpen}
            >
              Institutions
              <svg
                className="inline w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isInstitutionsOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg z-10">
                <li>
                  <Link
                    to="/school-education"
                    className="block px-4 py-2 hover:bg-gray-700 no-underline"
                    onClick={() => setIsInstitutionsOpen(false)}
                  >
                    School Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skill-education"
                    className="block px-4 py-2 hover:bg-gray-700 no-underline"
                    onClick={() => setIsInstitutionsOpen(false)}
                  >
                    Skill Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/higher-education"
                    className="block px-4 py-2 hover:bg-gray-700 no-underline"
                    onClick={() => setIsInstitutionsOpen(false)}
                  >
                    Higher Education
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Resources Dropdown */}
          <div className="relative mb-2 sm:mb-0">
            <button
              onClick={toggleResources}
              className="text-white text-xl focus:outline-none flex items-center"
              aria-haspopup="true"
              aria-expanded={isResourcesOpen}
            >
              Resources
              <svg
                className="inline w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg z-10">
                <li>
                  <Link
                    to="/blogs"
                    className="block px-4 py-2 hover:bg-gray-700 no-underline"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="block px-4 py-2 hover:bg-gray-700 no-underline"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/jobpost" className="text-white text-xl no-underline mb-2 sm:mb-0">
            JobPost
          </Link>
          <Link to="/aboutus" className="text-white text-xl no-underline mb-2 sm:mb-0">
            About Us
          </Link>
          <Link to="/contactus" className="text-white text-xl no-underline mb-2 sm:mb-0">
            Contact Us
          </Link>
          <Link to="/dashboard" className="text-white hover:text-blue-500 no-underline mb-2 sm:mb-0">
            My Dashboard
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faUniversalAccess}
          size="2x"
          color="#fff"
          className="mt-4 sm:mt-0 relative hidden sm:block"
          aria-label="Accessibility options"
        />
      </div>
    </nav>
  );
};






const FloatingButtons = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target)
      ) {
        setShowChatbot(false);
      }
    };

    if (showChatbot) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showChatbot]);

  return (
    <div className="floating-buttons">
      <div className="relative">
        <div
          className="floating-btn"
          onClick={() => setShowChatbot((prev) => !prev)}
        >
          💬
        </div>

        {showChatbot && (
          <div
            ref={chatbotRef}
            className="mt-10 right-10 z-50 h-100 w-250 "
          >
            <MyChatbot />
          </div>
        )}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <PopupAdd />
      <FloatingButtons />
      <style jsx>{`
        .banner {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1920x400');
          background-size: cover;
          background-position: center;
          height: 30px;
        }
        .floating-buttons {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 50;
        }
        .floating-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }
        .floating-btn:hover {
          transform: scale(1.1);
        }
        /* Dropdown styles */
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .z-10 {
          z-index: 10;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .no-underline {
          text-decoration: none;
        }
        .hover\\:bg-gray-700:hover {
          background-color: #4b5563;
        }
      `}</style>
    </div>
  );
};

export default App;
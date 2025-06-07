import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faSchool,
  faUniversity,
  faChalkboardTeacher,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    title: "Youth",
    icon: "fa-user-graduate",
    programs: [
      "Artificial Intelligence",
      "App Development",
      "Software Development",
      "Data Science",
      "Game Development",
      "Web Development",
      "Cloud Computing",
      "Career Creator",
      "Finance & Accounting",
      "Government Exam Prep",
      "BFSI",
    ],
    assessments: ["Career Counselling Test", "National Qualifier Test"],
  },
  {
    title: "School Education",
    icon: "fa-school",
    programs: ["Mathematics", "Science", "Social Studies", "Language Arts"],
    assessments: ["Olympiad Prep", "Board Exam Readiness"],
  },
  {
    title: "Higher Education",
    icon: "fa-university",
    programs: ["Engineering", "Medical", "Law", "Business Administration"],
    assessments: ["University Entrance Exam", "Scholarship Aptitude Test"],
  },
  {
    title: "Vocational Education",
    icon: "fa-chalkboard-teacher",
    programs: ["Electrician", "Plumbing", "Carpentry", "Beautician", "Mechanic"],
    assessments: ["Skill Proficiency Test", "Job Readiness Test"],
  },
];

const iconMap = {
  "fa-user-graduate": faUserGraduate,
  "fa-school": faSchool,
  "fa-university": faUniversity,
  "fa-chalkboard-teacher": faChalkboardTeacher,
};

const MegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row text-white bg-black min-h-screen">
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-4 text-white bg-[#050505] flex items-center justify-between"
        onClick={toggleSidebar}
      >
        <span className="text-lg font-semibold">Menu</span>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`w-full md:w-[250px] bg-[#050505] transition-all ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              setIsSidebarOpen(false); // Close sidebar on selection
            }}
            className={`flex items-center px-5 py-4 cursor-pointer border-b border-[#222] transition-colors ${
              activeIndex === idx ? "bg-[#0a1f35]" : "hover:bg-[#111]"
            }`}
          >
            <FontAwesomeIcon
              icon={iconMap[cat.icon]}
              className="mr-3 text-lg sm:text-xl"
            />
            <span className="text-base sm:text-lg">{cat.title}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Learning Programs</h3>
            {categories[activeIndex].programs.map((item, idx) => (
              <p key={idx} className="mb-1 text-gray-300 text-sm sm:text-base">
                {item}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Assessment Products</h3>
            {categories[activeIndex].assessments.map((item, idx) => (
              <p key={idx} className="mb-1 text-gray-300 text-sm sm:text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
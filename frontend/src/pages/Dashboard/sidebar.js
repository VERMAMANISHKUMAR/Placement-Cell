import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBox,
  faBriefcase,
  faExchangeAlt,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: faTachometerAlt },
  { name: "My Products", icon: faBox },
  { name: "My Jobs", icon: faBriefcase },
  { name: "Transaction", icon: faExchangeAlt },
  { name: "Account", icon: faUser },
  { name: "Calendar", icon: faCalendarAlt },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-20 bg-gray-800 text-white flex flex-col py-4 px-2">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item, index) => {
          const path = `/${item.name.toLowerCase().replace(" ", "")}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={item.name}
              to={path}
              className={`flex items-center justify-center p-2 rounded-md transition ${
                index === 0 ? "bg-blue-800 hover:bg-blue-700" : "hover:bg-blue-800"
              } ${isActive && index !== 0 ? "text-#2469BC" : ""}`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
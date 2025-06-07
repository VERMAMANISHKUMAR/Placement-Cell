import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { config } from "../../environment/environment";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`https://placement-cell-mern-backend.onrender.com/api/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const publicRoutes = ["/register", "/login", "/"];
    if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
      navigate("/register");
    }
  }, [isAuthenticated, navigate, location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleLogoutModal = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsUserDropdownOpen(false);
    setIsLogoutModalOpen(false);
    navigate("/register");
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-2xl font-bold no-underline">
            <span className="text-white">MyJob</span>
            <span className="text-blue-400">Portal</span>
          </Link>
          <Link to="/sidebar" className="text-white hover:text-blue-400 ml-4 no-underline">
            Explore
          </Link>
          <div className="relative hidden sm:block ml-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-4 rounded-full text-black w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 flex-col md:flex-row items-center z-10 ml-10`}
        >
          <li>
            <Link
              to="/studentslist"
              className="text-white hover:text-blue-400 no-underline my-2 md:my-0"
              onClick={() => setIsMenuOpen(false)}
            >
            Students
            </Link>
          </li>
          <li>
            <Link
              to="/interviews"
              className="text-white hover:text-blue-400 no-underline my-2 md:my-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Interviews
            </Link>
          </li>
          <li>
            <Link
              to="/alljobs"
              className="text-white hover:text-blue-400 no-underline my-2 md:my-0"
              onClick={() => setIsMenuOpen(false)}
            >
              My Jobs
            </Link>
          </li>
          {isAuthenticated && (
            <li className="md:hidden">
              <div className="flex items-center" onClick={toggleUserDropdown}>
                <FaUserCircle className="text-white text-2xl mr-2" />
                <span className="text-white">{user?.name ? `Hi ${user.name}` : "Loading..."}</span>
              </div>
            </li>
          )}
        </ul>

        {/* Desktop User Menu */}
        <div className="hidden md:block relative">
          {isAuthenticated ? (
            <div className="flex items-center cursor-pointer" onClick={toggleUserDropdown}>
              <FaUserCircle className="text-white text-2xl mr-2" />
              <span className="text-white">{user?.name ? `Hi ${user.name}` : "Loading..."}</span>
              {isUserDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-10">
                  <div className="p-4 border-b border-gray-200 flex items-center">
                    <FaUserCircle className="text-4xl text-blue-400 mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">{user?.name || "User"}</h3>
                    </div>
                  </div>
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/wishlist" className="no-underline text-black">
                        My Wishlist
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/transaction-history" className="no-underline text-black">
                        My Transaction History
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/account" className="no-underline text-black">
                        My Account
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/dashboard" className="no-underline text-black">
                        My Dashboard
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/organisations" className="no-underline text-black">
                        My Organisations
                      </Link>
                    </li>
                  </ul>
                  <div className="p-4 border-t border-gray-200">
                    <button
                      onClick={toggleLogoutModal}
                      className="w-full text-center py-2 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register" className="text-white hover:text-blue-400 no-underline">
              Register
            </Link>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Are you sure you want to logout?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              You will be redirected to the register page after logging out.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
              >
                Yes, Logout
              </button>
              <button
                onClick={toggleLogoutModal}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition shadow-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

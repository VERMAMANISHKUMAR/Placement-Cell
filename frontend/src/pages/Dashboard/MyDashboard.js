import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardContent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "https://placement-cell-mern-backend.onrender.com/api/auth/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.name || "Loading..."}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-lg mb-4">Profile Completion</h2>
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-8 border-cyan-500 flex items-center justify-center text-xl font-bold text-black">
              100%
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Keep your profile updated to increase job opportunities.
          </p>
          <Link to="/profile">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-4 py-2 rounded-full">
              Update Profile
            </button>
          </Link>
        </div>

        {/* Achievements Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-lg mb-4">Achievements</h2>
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-8 border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
              0
            </div>
          </div>
          <p className="text-gray-600">No Credits Earned</p>
          <p className="text-gray-600 mt-2">No Certificates</p>
          <p className="text-gray-600 mt-2">No Badges</p>
        </div>

        {/* Learning Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-lg mb-4">Learning Activities</h2>
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-8 border-yellow-500 flex items-center justify-center text-2xl font-bold text-gray-600">
              4
            </div>
          </div>
          <p className="text-gray-600">Subscriptions</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-center items-center gap-2">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="text-gray-600">0 Completed</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-600">4 In Progress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Calendar</h2>
        <p className="text-gray-600">No events present</p>
      </div>
    </div>
  );
};

export default DashboardContent;

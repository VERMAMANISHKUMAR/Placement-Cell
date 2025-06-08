import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "./environment/environment";
import SidebarDash from "./pages/Dashboard/sidebar";
import DashboardContent from "./pages/Dashboard/MyDashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from './pages/Navbar/Navbar';
import AddStudent from './components/students/AddStudent';
import StudentList from './components/students/StudentList';
import InterviewList from './components/interviews/InterviewList';
import AllJobs from './components/jobs/JobsList';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AutoSlider from './components/jobs/AutoSlider';
import Sidebar from './components/jobs/Sidebar';
import Calendar from "./pages/Dashboard/Calendar";
import AccountPage from "./pages/Dashboard/Account";
import Transaction from "./pages/Dashboard/Transactions/Transactions";
import ProfilePage from "./pages/Dashboard/ProfilePage";
// import MyChatbot from './chatbot/MyChatbot'
import JobPost from './components/jobpost/JobPost';
const App = () => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!localStorage.getItem("token");

 useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`${config.API_URL}/api/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/studentslist" element={<StudentList />} />
        <Route path="/interviews" element={<InterviewList />} />
        <Route path="/alljobs" element={<AllJobs />} />
        <Route path="/addslider" element={<AutoSlider />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <SidebarDash />
              <DashboardContent user={user} />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/chatbot" element={<MyChatbot />} /> */}
        <Route path="/jobpost" element={<JobPost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
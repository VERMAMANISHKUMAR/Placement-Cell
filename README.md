# 🎓 Job Portal & Student Management System
# Deploy Link :- https://placement-cell-qr4e.onrender.com/
# Description 
A full-stack web application designed to streamline the **job posting**, **student management**, and **interview scheduling** process. This platform enables recruiters to post jobs, students to register, and admins to manage interview schedules—all while ensuring a secure, mobile-friendly experience.

---

## ✨ Features

### 🔐 Authentication
- **User Registration & Login**: Secure sign-up and login functionality using JWT or Firebase Auth.
- **Protected Routes**: No access to any route/page without logging in.
- **Logout**: One-click logout to safely end the session.

### 📊 Job & Student Management
- **Job Search**: Search available jobs using keywords and filters.
- **Post New Jobs**: Admin or recruiter can add new job postings.
- **Add Student Profiles**: Easily add new student data via a detailed form.
- **Export Student Data**: Download all student data as **CSV** or **Excel** files for reporting.

### 💬 Interview Scheduling
- **Interview Module**: Schedule interviews, assign students to jobs, and track their progress.

### 📡 API Integration
- **Fetch Data from API**: All job and student data dynamically fetched from backend/API.

### 🧑 Personalized Dashboard
- **Show Username in Navbar & Dashboard**: After login, users see their name and personalized dashboard view.

### 📱 Responsive Design
- **Mobile & Desktop Friendly**: Fully responsive UI for seamless use on all screen sizes.

---

## 🛠️ Tech Stack (Example)

> Feel free to customize this based on your stack.

- **Frontend**: React.js, Tailwind CSS / Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / Firebase Firestore
- **Authentication**: JWT / Firebase Auth
- **Export Tools**: `xlsx`, `react-csv`
- **Routing**: React Router v6

---

## 📷 Screenshot

![image](https://github.com/user-attachments/assets/a5843ba1-2308-4a10-af36-1e4717c05cdc)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/job-portal-app.git

# Go to the project directory
cd job-portal-app

# Install dependencies
npm install

# Start the development server
npm start

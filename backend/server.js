const express = require('express'); // Express module ko import kar rahe hain
const dotenv = require('dotenv'); // dotenv module ko import kar rahe hain (Environment variables use karne ke liye)
const bodyParser = require('body-parser'); // body-parser module ko import kar rahe hain (Request body ko parse karne ke liye)
const cors = require('cors'); // CORS module ko import kar rahe hain (Cross-Origin Requests allow karne ke liye)
const connectMongoDB = require('./config/db'); // MongoDB connection function ko import kar rahe hain
const StudentController = require('./controllers/StudentController'); // StudentController ko import kar rahe hain
const interviewRoutes = require('./routes/InterviewRoutes'); // InterviewRoutes ko import kar rahe hain
const authRoutes = require('./routes/authRoutes'); // Authentication Routes ko import kar rahe hain

dotenv.config(); // Environment variables ko load kar rahe hain

const app = express();
const PORT = process.env.PORT || 3808; // Server ke port ko set kar rahe hain

// Middleware
app.use(cors()); // CORS ko enable kar rahe hain
app.use(bodyParser.json()); // JSON request body ko parse karne ke liye middleware use kar rahe hain

// Student Routes
app.post('/api/students', StudentController.addStudentAPI); // Naya student add karne ke liye route
app.get('/api/students', StudentController.getStudentsAPI); // Sabhi students ka data retrieve karne ke liye route
app.delete('/api/students/:id', StudentController.deleteStudentAPI); // Student ko ID ke basis par delete karne ke liye route

// Interview Routes
app.use('/api/interviews', interviewRoutes); // Interview se related sabhi routes include kar rahe hain
app.use("/api/auth", authRoutes); // Authentication se related sabhi routes include kar rahe hain

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Authentication Backend Server!'); // Basic route ka response
});

// Server start kar rahe hain
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Server chalne ka message console me show hoga
  connectMongoDB(); // MongoDB se connect kar rahe hain
});

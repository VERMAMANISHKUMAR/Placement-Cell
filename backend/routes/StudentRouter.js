const express = require('express'); // Express module ko import kar rahe hain
const router = express.Router(); // Router object create kar rahe hain

const { addStudentAPI } = require('../controllers/StudentController'); // StudentController se addStudentAPI function import kar rahe hain

router.post('/add', addStudentAPI); // '/add' route par POST request handle kar rahe hain

module.exports = router; // Router ko export kar rahe hain

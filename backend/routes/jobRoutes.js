const express = require('express'); // Express module ko import kar rahe hain
const router = express.Router(); // Router object create kar rahe hain
const jobController = require('../controllers/jobController'); // jobController ko import kar rahe hain

// Job Listings Page display karne ke liye
router.get('/jobs', jobController.jobPage); // Job data ke saath job listings page render karne ke liye

module.exports = router; // Router ko export kar rahe hain

const express = require('express'); // Express module ko import kar rahe hain
const { addInterviewAPI, getAllInterviews, deleteInterview } = require('../controllers/InterviewController'); // InterviewController se functions import kar rahe hain

const router = express.Router(); // Router object create kar rahe hain

// Naya interview create karne ke liye route
router.post('/', addInterviewAPI);

// Sabhi interviews ko retrieve karne ke liye route
router.get('/', getAllInterviews);

// Interview ko ID ke basis par delete karne ke liye route
router.delete('/:id', deleteInterview);

module.exports = router; // Router ko export kar rahe hain

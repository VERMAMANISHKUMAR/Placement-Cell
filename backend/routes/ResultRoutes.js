const express = require('express'); // Express module ko import kar rahe hain
const router = express.Router(); // Router object create kar rahe hain
const resultController = require('../controllers/ResultController'); // ResultController ko import kar rahe hain

// Result Page display karne ke liye
router.get('/result/:id', resultController.resultPage); // Specific interview ke result page ko render karne ke liye

// Result update karne ke liye
router.post('/result/update', resultController.update); // Students ke result ko update karne ke liye

module.exports = router; // Router ko export kar rahe hain

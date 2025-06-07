const express = require('express'); // Express module ko import kar rahe hain
const router = express.Router(); // Router object create kar rahe hain
const employeeController = require('../controllers/EmployeeController'); // EmployeeController ko import kar rahe hain

// Sign In Routes
router.get('/sign-in', employeeController.SignInPage); // Sign In page ko render karne ke liye
router.post('/sign-in', employeeController.SignIn); // Sign In request handle karne ke liye

// Sign Up Routes
router.get('/sign-up', employeeController.createSessionPage); // Sign Up page ko render karne ke liye
router.post('/sign-up', employeeController.createSession); // Sign Up request handle karne ke liye

// Sign Out Route
router.get('/sign-out', employeeController.SignOut); // Sign Out request handle karne ke liye

module.exports = router; // Router ko export kar rahe hain

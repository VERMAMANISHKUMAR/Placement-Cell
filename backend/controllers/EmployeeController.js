const Employee = require('../models/EmployeeSchema'); // Employee model import
const validator = require('validator'); // Email validation ke liye validator package use kar rahe hain

//  Sign In Page Render Function
module.exports.SignInPage = async function (req, res) {
    return res.render('signIn', {
        title: "SignIn" // Page title pass kar rahe hain
    });
};

//  Sign In Logic Handle Karne Wali Function
module.exports.SignIn = async function (req, res) {
    try {
        req.flash('success', '🎉 Sign In Successfully'); // Success message set kar rahe hain
        return res.redirect('/employee/dashboard'); // Dashboard page par redirect kar rahe hain
    } catch (error) {
        console.error("Error during sign in:", error); // Error log kar rahe hain
        return res.send('<h1>Error in SignIn</h1>'); // Error page show kar rahe hain
    }
};

// Sign Up Page Render Function
module.exports.createSessionPage = async function (req, res) {
    return res.render('signUp', {
        title: "Sign Up",
        firstNameError: "", // Validation ke liye empty error fields initialize kar rahe hain
        lastNameError: "",
        emailError: "",
        passwordError: ""
    });
};

// Sign Up Logic Handle Karne Wali Function
module.exports.createSession = async function (req, res) {
    const { firstname, lastname, email, password } = req.body; // 📥 Request body se data le rahe hain

    try {
        //  First Name Validation
        if (!firstname || !isNaN(firstname)) {
            return res.render('signUp', {
                title: "Sign Up",
                firstNameError: 'First name cannot be blank or a number', // ❌ Error message set kar rahe hain
                lastNameError: "",
                emailError: "",
                passwordError: ""
            });
        }

        //  Last Name Validation
        if (!lastname || !isNaN(lastname)) {
            return res.render('signUp', {
                title: "Sign Up",
                firstNameError: "",
                lastNameError: 'Last name cannot be blank or a number',
                emailError: "",
                passwordError: ""
            });
        }

        // Email Format Validation
        if (!validator.isEmail(email)) {
            return res.render('signUp', {
                title: "Sign Up",
                firstNameError: "",
                lastNameError: "",
                emailError: 'Please enter a valid email address',
                passwordError: ""
            });
        }

        //  Password Length Validation
        if (password.length < 2) {
            return res.render('signUp', {
                title: "Sign Up",
                firstNameError: "",
                lastNameError: "",
                emailError: "",
                passwordError: 'Password must be at least 2 characters long'
            });
        }

        //  Check if Employee Already Exists
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            req.flash('error', 'Employee already exists'); // Employee already registered
            return res.redirect('/');
        }

        // New Employee Create Karna
        const newEmployee = new Employee(req.body);
        await newEmployee.save(); // Database me save kar rahe hain
        req.flash('success', 'Sign Up Successful!'); // Success message set kar rahe hain
        return res.redirect('/');
        
    } catch (error) {
        console.error("Error during sign up:", error); // Error log kar rahe hain
        return res.send('<h1>Error in SignUp</h1>'); // Error message return kar rahe hain
    }
};

// Sign Out Logic
module.exports.SignOut = async function (req, res) {
    req.logout();  //Logout kar rahe hain
    req.flash('success', '🎉 Sign Out Successfully'); // Success message set kar rahe hain
    return res.redirect('/'); //  Homepage par redirect kar rahe hain
};

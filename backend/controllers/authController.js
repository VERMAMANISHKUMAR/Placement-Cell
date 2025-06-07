const bcrypt = require("bcryptjs"); //  Password hashing ke liye bcrypt import kiya
const User = require("../models/User"); //  User model import kiya
const jwt = require("jsonwebtoken"); //  JWT token generate karne ke liye import kiya

//  User Registration Function
exports.register = async (req, res) => {
  try {
    //  Request body se user ka naam, email, aur password le rahe hain
    const { name, email, password } = req.body;

    // Check kar rahe hain ki user pehle se exist karta hai ya nahi
    const existingUser = await User.findOne({ email });
  // Agar user milta hai toh error bhej rahe hain (User already exists)
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" }); 
    }

    // Password ko hash kar rahe hain (10 salt rounds ke saath secure hashing)
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Naya user create kar rahe hain database ke liye
    const newUser = new User({ name, email, password: hashedPassword });

    // User ko database me save kar rahe hain
    await newUser.save();

    // Success response bhej rahe hain
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // Server error handle kar rahe hain
    res.status(500).json({ message: "Server error", error });
  }
};

// User Login Function
exports.login = async (req, res) => {
  try {
    // Request body se email aur password le rahe hain
    const { email, password } = req.body;

    //  Check kar rahe hain ki user exist karta hai ya nahi
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); //  User nahi mila toh error bhej rahe hain
    }

    //  Password compare kar rahe hain (jo user ne diya hai aur jo database me stored hai)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" }); // Password galat hai toh error bhej rahe hain
    }

    // JWT token generate kar rahe hain (1 ghante ke expiration ke saath)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Token aur user details response me bhej rahe hain
    res.json({ token, user });
  } catch (error) {
    // Server error handle kar rahe hain
    res.status(500).json({ message: "Server error", error });
  }
};

// Get User Details Function
exports.getUser = async (req, res) => {
  try {
    //  User ID ke basis par user find kar rahe hain, lekin password exclude kar rahe hain
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" }); //  Agar user nahi milta toh error bhej rahe hain
    }

    // Agar user milta hai toh response me bhej rahe hain
    res.json(user);
  } catch (error) {
    // Server error handle kar rahe hain
    res.status(500).json({ message: "Server error", error });
  }
};

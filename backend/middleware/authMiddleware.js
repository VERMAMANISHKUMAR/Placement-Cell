const jwt = require("jsonwebtoken"); // JSON Web Token (JWT) module ko import kar rahe hain

module.exports = (req, res, next) => {
  const token = req.header("Authorization"); // Request header se token retrieve kar rahe hain

  // Agar token nahi mila to access deny kar denge
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Token me se "Bearer " remove karke usko verify kar rahe hain
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    
    req.user = decoded; // Decoded user information request object me store kar rahe hain
    next(); // Next middleware function ko call kar rahe hain
  } catch (error) {
    res.status(400).json({ message: "Invalid token" }); // Agar token invalid hai to error response bhej rahe hain
  }
};

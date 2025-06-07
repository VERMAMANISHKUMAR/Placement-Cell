//  Mongoose module ko import kar rahe hain (MongoDB se connect hone ke liye)
const mongoose = require('mongoose');

// Async function banaya hai jo MongoDB se connect karega
const connectDB = async () => {
  try {
    //  MongoDB se async connection establish kar rahe hain
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,   // Purane MongoDB connection string ko support karne ke liye
      useUnifiedTopology: true, // Naya connection management enable karne ke liye
    });

    // Agar connection successful ho gaya toh success message print kar rahe hain
    console.log('✅ MongoDB connected');
  } catch (error) {
    //  Agar koi error aaye toh error message print kar rahe hain
    console.error('❌ Error connecting to MongoDB:', error.message);

    // Process ko exit kar rahe hain error code (1) ke saath (failure indicate karne ke liye)
    process.exit(1);
  }
};

// 📤 connectDB function ko export kar rahe hain taaki ise dusri files me use kar sakein
module.exports = connectDB;

import React, { useState } from "react"; // React aur useState hook import kar rahe hain
import { Form, Button, Container, Card, Alert } from "react-bootstrap"; // Bootstrap ke components import kar rahe hain
import { Link, useNavigate } from "react-router-dom"; // Routing ke liye Link aur useNavigate import kar rahe hain
import { config } from "../../environment/environment"; // Config file se API URL import

const Register = () => {
  // State variables define kar rahe hain user input aur messages handle karne ke liye
  const [name, setName] = useState(""); // User ka naam store karne ke liye state
  const [email, setEmail] = useState(""); // User ka email store karne ke liye state
  const [password, setPassword] = useState(""); // User ka password store karne ke liye state
  const [error, setError] = useState(""); // Error messages ke liye state
  const [success, setSuccess] = useState(""); // Success messages ke liye state
  const navigate = useNavigate(); // Page navigation ke liye useNavigate hook use kar rahe hain

  // Form submit hone par execute hone wala function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submission behavior prevent kar rahe hain

    // Agar koi field empty ho to error message show kare
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      // API request bhejne ke liye fetch function use kar rahe hain
      const response = await fetch(`${config.API_URL}/api/auth/register`, {
        method: "POST", // POST request bhej rahe hain
        headers: { "Content-Type": "application/json" }, // Request headers set kar rahe hain
        body: JSON.stringify({ name, email, password }), // User data ko JSON format me bhej rahe hain
      });

      const data = await response.json(); // Response ko JSON format me convert kar rahe hain

      // Agar response error return kare to error message show kare
      if (!response.ok) {
        setError(data.msg || "Registration failed!");
        return;
      }

      // Registration successful hone par success message show kare
      setSuccess("Registration Successful! 🎉 Redirecting to login...");
      setError("");

      // 2 second baad login page par redirect kare
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError("Server error! Please try again later."); // Server error case me error message show kare
    }
  };

  return (
    // Bootstrap ka Container component use karke form center me show kar rahe hain
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: "20px" }}>
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h2 className="text-center mb-4">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>} {/* Agar error ho to Alert show kare */}
        {success && <Alert variant="success">{success}</Alert>} {/* Agar success ho to Alert show kare */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Name field update karne ke liye onChange event
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Email field update karne ke liye onChange event
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Password field update karne ke liye onChange event
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link> {/* Agar account ho to login link show kare */}
        </div>
      </Card>
    </Container>
  );
};

export default Register;

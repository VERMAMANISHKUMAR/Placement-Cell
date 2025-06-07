import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Card, Row, Col, Badge, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShieldAlt,
  faQuestionCircle,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {config} from "../../environment/environment";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found. Please log in.");
        }

        const response = await axios.get(`${config.API_URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Failed to fetch user data. Please try again later.");
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    } else {
      setError("You are not authenticated. Please log in.");
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-4">
        <div className="text-red-500 text-center">{error}</div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        Hi, <span>{user?.name || "User"}</span>
        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
      </h2>

      <Card className="my-3 p-3 shadow-md">
        <Row>
          <Col md={6} className="mb-3 md:mb-0">
            <strong>{user?.email || "N/A"}</strong>{" "}
            {user?.emailVerified && <Badge bg="success">Verified</Badge>}
          </Col>
          <Col md={6}>
            <strong>{user?.phone || "N/A"}</strong>{" "}
            {user?.phoneVerified && <Badge bg="success">Verified</Badge>}
          </Col>
        </Row>
      </Card>

      <Row className="my-4">
        <Col md={4}>
          <Card className="text-center p-3 shadow-md hover:shadow-lg transition-shadow">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-blue-500 text-2xl mb-2"
            />
            <h5 className="font-semibold">Privacy and Terms</h5>
            <p className="text-gray-600">
              You can check Privacy and Terms statement from here.
            </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center p-3 shadow-md hover:shadow-lg transition-shadow">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-green-500 text-2xl mb-2"
            />
            <h5 className="font-semibold">WhatsApp Notifications</h5>
            <p className="text-gray-600">You can update your WhatsApp No. here.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center p-3 shadow-md hover:shadow-lg transition-shadow">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-blue-500 text-2xl mb-2"
            />
            <h5 className="font-semibold">Help?</h5>
            <p className="text-gray-600">We will help you figure it out.</p>
          </Card>
        </Col>
      </Row>

      <Card className="text-center p-5 shadow-md">
        <FontAwesomeIcon
          icon={faLaptop}
          className="text-blue-500 text-2xl mb-2"
        />
        <h4 className="font-bold">MANAGE DEVICES</h4>
        <p className="text-gray-600">No Device Found</p>
      </Card>
    </Container>
  );
};

export default AccountPage;

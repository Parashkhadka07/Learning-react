import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Image from "react-bootstrap/Image";

import "./fun.css";

const Apps = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* this is for  placing image */}
      <div className="image-container mt-5 pt-5">
        <Image src="o.jpeg" fluid className="w-100" />
        <div className="overlay-text d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">
            We warmly welcome you to our side, feel free to use us as you like
          </h1>
        </div>
      </div>

      <Container className="py-5">
        <header className="text-center mb-5">
          <h1>Welcome Sir/Mam</h1>
          <h6>Please fill in the details for booking</h6>
        </header>

        <Form onSubmit={handleSubmit} className="mb-5">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              min="1"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>

        <section>
          <h2 className="text-center mb-4">Available Hotels</h2>
          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <div className="hotel-card">
                <h3>Khadka Hotel</h3>
                <Image src="h2.jpg" fluid />
                <p>Location: Kathmandu, Nepal</p>
                <p>Price: $100 per night</p>
                <Button variant="outline-primary" className="w-100">
                  Book Now
                </Button>
              </div>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <div className="hotel-card">
                <h3>Grand Hotel</h3>
                <Image src="h2.jpg" fluid />
                <p>Location: Kathmandu, Nepal</p>
                <p>Price: $150 per night</p>
                <Button variant="outline-primary" className="w-100">
                  Book Now
                </Button>
              </div>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <div className="hotel-card">
                <h3>Kathmandu Hotel</h3>
                <Image src="h2.jpg" fluid />
                <p>Location: Kathmandu, Nepal</p>
                <p>Price: Rs 1000 per night</p>
                <Button variant="outline-primary" className="w-100">
                  Book Now
                </Button>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </Container>
    </div>
  );
};

export default Apps;

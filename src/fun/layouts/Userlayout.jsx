import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FaHotel, FaGoogle } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Userlayout() {
  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-dark navbar-dark fixed-top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <FaHotel className="me-2" />
              <span>KHADKA</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>

                <Link to="/features" className="nav-link">
                  features
                </Link>

                <Link to="/contact" className="nav-link">
                  contact
                </Link>
                <Link to="/aboutus" className="nav-link">
                  aboutus
                </Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More details</Nav.Link>
                <Nav.Link href="#memes">Something new</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <MDBFooter className="text-center text-white bg-dark">
          <MDBContainer className="p-4">
            <section className="mb-4">
              <MDBBtn outline color="light" floating className="m-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn outline color="light" floating className="m-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn outline color="light" floating className="m-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn outline color="light" floating className="m-1">
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </section>
            <section>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>
                <MDBCol md="5">
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>
                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </section>
            <section>
              <p>
                <FaGoogle />
                123parashkhadka@gmail.com
              </p>
            </section>
          </MDBContainer>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright: Parash Khadka
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Userlayout;

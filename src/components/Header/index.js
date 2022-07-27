import React from "react";
import styles from "./index.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "../Button";
import { FiSearch } from "react-icons/fi";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand className={styles.logo} as={Link} to="/">
              <img src="/img/moivon.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <BiMenuAltRight />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.navLink + " me-auto"}>
                <NavDropdown
                  title="All Events"
                  id="basic-nav-dropdown"
                  className={"nav_dropdown"}
                >
                  <NavDropdown.Item as={Link} to="/all-events">
                    All Events
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Two</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Four</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("about-page")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("contact-page")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  eventKey="disabled"
                  className={styles.disabledLink}
                  disabled
                >
                  Calendar <span className={styles.soon}>SOON</span>
                </Nav.Link>
              </Nav>
              <div className={`d-flex align-items-center gap-4 ${styles.last}`}>
                <div
                  className={
                    styles.customIcon + " d-flex align-items-center gap-3"
                  }
                >
                  <FiSearch />
                  <Dropdown className={styles.dropdownBtn}>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      ENG
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">PUN</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">HI</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Link to="/upload-event" className={styles.uploadButton}>
                  <Button type="primary">Upload event</Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

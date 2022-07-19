import React from "react";
import styles from "./index.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "../Button";
import { FiSearch } from "react-icons/fi";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand className={styles.logo} href="#">
              <img src="/img/moivon.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.navLink + " me-auto"}>
                <NavDropdown
                  title="All Events"
                  id="basic-nav-dropdown"
                  className={"nav_dropdown"}
                >
                  <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Two</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Four</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
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
                <Button type="primary">Upload event</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

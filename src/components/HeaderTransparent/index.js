import React from "react";
import { useQuery } from "@tanstack/react-query";
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
import { toTitleCase } from "../../utils/helpers";
import { fetchAllGenres } from "../../services/GenreService";
import { ALL_QUERIES } from "../../utils/endpoints";
import { SCROLL_INTO_VIEW_OPTIONS } from "../../utils/constants";
import { useTransparentHeader } from "../../hooks/useTransparentHeader";
import NavigationDropdown from "../NavigationDropdown";

function HeaderTransparent() {
  const { onClose } = useTransparentHeader();
  const { data: allGenres, isLoading: allGenresLoading } = useQuery(
    ALL_QUERIES.QUERY_ALL_GENRES(),
    fetchAllGenres
  );

  const allGenresData = allGenres?.data?.data || [];

  return (
    <>
      <header className="app-header">
        <Navbar className="navbar fixed-top" bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand className={styles.logo}>
              <img src="/img/moivon.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <BiMenuAltRight />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.navLink + " me-auto"}>
                <NavigationDropdown
                  title="All Events"
                  id="basic-nav-dropdown"
                  options={[
                    { _id: "all", link: "/all-events", value: "All Events" },
                    ...allGenresData.map((option) => ({
                      _id: option._id,
                      link: `/all-events?genre=${option._id}`,
                      value: option?.genre,
                    })),
                  ]}
                />
                <Nav.Link
                  onClick={() => {
                    onClose("/", () => {
                      setTimeout(() => {
                        document
                          .getElementById("about-page")
                          .scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
                      }, 200);
                    });
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    onClose("/", () => {
                      setTimeout(() => {
                        document
                          .getElementById("contact-page")
                          .scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
                      }, 200);
                    });
                  }}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  eventKey="disabled"
                  className={styles.transparent}
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
                  </Dropdown>
                </div>
                <Link to="/upload-event" className={styles.uploadButton}>
                  <Button type="primary">Upload Event</Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className={styles.spacer} />
    </>
  );
}

export default HeaderTransparent;

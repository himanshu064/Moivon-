import React, { useEffect, useLayoutEffect, useRef } from "react";
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
import { Link, useLocation } from "react-router-dom";
import { ALL_QUERIES } from "../../utils/endpoints";
import { fetchAllGenres } from "../../services/GenreService";
import { toTitleCase } from "../../utils/helpers";
import { SCROLLING_HEADER_PATHS } from "../../utils/constants";

function Header({ transparent = false }) {
  const { data: allGenres, isLoading: allGenresLoading } = useQuery(
    ALL_QUERIES.QUERY_ALL_GENRES(),
    fetchAllGenres
  );
  const headerRef = useRef();
  const spacerRef = useRef();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (SCROLLING_HEADER_PATHS.includes(pathname)) {
      headerRef.current.classList.remove("fixed-top");
      spacerRef.current.style.display = "none";
    } else {
      headerRef.current.classList.add("fixed-top");
      spacerRef.current.style.display = "block";
    }
  }, [pathname]);

  return (
    <>
      <header>
        <Navbar
          className="navbar fixed-top"
          bg="transparent"
          expand="lg"
          ref={headerRef}
        >
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
                  {!allGenresLoading &&
                    allGenres?.data?.data?.map((genre) => (
                      <NavDropdown.Item
                        as={Link}
                        to={`/all-events?genre=${genre._id}`}
                        className="captialize"
                      >
                        {toTitleCase(genre.genre)}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Nav.Link
                  to="/"
                  as={Link}
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("about-page")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  to="/"
                  as={Link}
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("contact-page")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  eventKey="disabled"
                  className={`${transparent ? styles.transparent : styles.disabledLink}`}
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

                    {/* <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">PUN</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">HI</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                    </Dropdown.Menu> */}
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
      <div ref={spacerRef} className={styles.spacer} />
    </>
  );
}

export default Header;

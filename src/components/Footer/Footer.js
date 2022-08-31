import { useQuery } from "@tanstack/react-query";
import styles from "./footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Text from "../Text";
import { Link } from "react-router-dom";
import { ALL_QUERIES } from "../../utils/endpoints";
import { fetchAllGenres } from "../../services/GenreService";
import { toTitleCase } from "../../utils/helpers";
import { SCROLL_INTO_VIEW_OPTIONS } from "../../utils/constants";

const Footer = () => {
  const { data: allGenres, isLoading: allGenresLoading } = useQuery(
    ALL_QUERIES.QUERY_ALL_GENRES(),
    fetchAllGenres
  );

  return (
    <>
      <section className={`${styles.footerSection} section`}>
        <Container>
          <Row className="mb-4">
            <Col sm={8}>
              <Row>
                <Col xs={6} sm={6} md={3}>
                  <div className={styles.logo}>
                    <Link to="/">
                      <img src="/img/moivon.png" alt="logo" />
                    </Link>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={3}>
                  <h3>EVENTS</h3>
                  <ul>
                    <li>
                      <Link to="/all-events">All Events</Link>
                    </li>
                    {!allGenresLoading &&
                      allGenres?.data?.data?.map((genre) => (
                        <li key={genre._id}>
                          <Link to={`/all-events?genre=${genre._id}`}>
                            {toTitleCase(genre.genre)}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </Col>
                <Col xs={6} sm={6} md={3}>
                  <h3>NAVIGATION</h3>
                  <ul>
                    <li>Upcoming events</li>
                    <li>Most popular events</li>
                    <li>Most popular events</li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          setTimeout(() => {
                            document
                              .getElementById("about-page")
                              .scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
                          }, 200);
                        }}
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/"
                        onClick={() => {
                          setTimeout(() => {
                            document
                              .getElementById("contact-page")
                              .scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
                          }, 200);
                        }}
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} sm={6} md={3}>
                  <h3>social media</h3>
                  <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                    <li>Twitter</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <div className={styles.subscribeSection}>
                <h3 className="mb-3">Subscribe for updates</h3>
                <Form>
                  <Form.Group
                    className={`${styles.formGroup} mb-3`}
                    controlId="formGroupEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email to get updates"
                    />
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
          <Row className={styles.copyRight}>
            <Col md={6}>
              <div className="text-center">
                <Text>2022 All rights reserved — Moivon</Text>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <ul className="d-flex gap-3 justify-content-center mb-0 flex-wrap">
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Acceptable Use Policy</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;

import React from "react";
import styles from "./index.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import HomeSlider from "../../components/HomeSlider";
import EventSlider from "../../components/EventSlider";
import { FiArrowUpRight } from "react-icons/fi";
import HomeForm from "../../components/Form";
import { Link } from "react-router-dom";
import { useBackgroundImage } from "../../hooks/useBackgroundImage";
import { useBackgroundVideo } from "../../hooks/useBackgroundVideo";
import RouteTitle from "../../components/RouteTitle/RouteTitle";
import MostPopularAccordion from "../../components/MostPopularAccordion";
import CreavtiveEventPage from "../../components/CreavtiveEventPage";

function Home() {
  useBackgroundImage();
  useBackgroundVideo();

  return (
    <>
      <CreavtiveEventPage />
      <RouteTitle title="Home" />

      {/* <section className={`${styles.heroSection} section`}>
        <Container>
          <Row>
            <Col lg={8}>
              <div className={styles.heroHeading + " mb-5"}>
                <Heading>More of the events you love </Heading>
                <span className={styles.spanHead}>
                  Welcome to Moivon! A connection to creative events, curated
                  for you.
                  <br /> Discover all events and fall in love in each!
                  <br />
                  Lorem ipsum dolorem en rem puto qerqerium si laverawut
                </span>
              </div>
              <div
                className={`${styles.heroIcons} d-flex gap-4 align-items-center flex-wrap`}
              >
                <Button type="primary" to="/all-events" as={Link}>
                  Explore Now
                </Button>
                <span>
                  <img src="/img/video.svg" alt="video" /> Video of our events
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <div className="backgroundImage">
        <section className={`section ${styles.teamSection} `}>
          <Container>
            <Row>
              <Col>
                <div className={`mx-0 ${styles.sliderTeam}`}>
                  <HomeSlider />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={8} className={styles.customWidth60}>
                <div className={styles.countWrapper1}>
                  <Heading mb="5">2500+</Heading>
                  <Text>Annual Creative Events</Text>
                </div>

                <div className={styles.countWrapper2}>
                  <Heading mb="5">200+</Heading>
                  <Text>Venues</Text>
                </div>

                <div
                  className={styles.countWrapper2}
                  style={{ borderRight: "none" }}
                >
                  <Heading mb="5">5</Heading>
                  <Text>Top Locations</Text>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section ${styles.bottomSection}`}>
          <MostPopularAccordion />
        </section>
      </div>

      <section className={`section ${styles.bottomSection}`}>
        <Container>
          <Row>
            <Col md={8}>
              <Heading variant="subHeading">
                Upcoming Events <br /> for you{" "}
              </Heading>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-end align-items-center mb-4">
                <Link to="/all-events">
                  <span>
                    View All <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          {/* ${styles.slider} */}
          <div className={`mx-0 position-relative`}>
            <EventSlider />
          </div>
        </Container>
      </section>
      <section
        className={`section ${styles.connectionSection}`}
        id="about-page"
      >
        <div className={styles.paddingAll}>
          <div className={styles.bgImg}>
            <Container>
              <Row>
                <Col md={7}>
                  <div className={styles.paddingR}>
                    <Heading variant="subHeading">
                      IT BEGINS WITH THE CONNECTION...
                    </Heading>
                    <Text>
                      Moivon is inspired by a need to connect seekers of art,
                      design, and creativity to events happening around us. In a
                      day and age where structureless information overcrowds our
                      attention, it is hard to narrow down a discover trajectory
                      that caters our unique taste. Hence, Moivon is created to
                      filter out the tedious process of relentless searching and
                      planning so you can focus on enjoying the curated
                      experiences.
                    </Text>
                    <Text>
                      Reach us at{" "}
                      <a href="mailto:info@moivon.com">
                        info@moivon.com <FiArrowUpRight />
                      </a>
                    </Text>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="d-flex h-100">
                    <span className={styles.divider}></span>
                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                      <img src="/img/large-logo.svg" alt="logo" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      <section className={`section ${styles.contactSection}`} id="contact-page">
        <Container>
          <Row>
            <Col md={7} className="mb-4">
              <div className={`${styles.contactWrapper} ${styles.paddingR}`}>
                <Heading variant="subHeading">
                  CONTACT US FOR ANY QUESTIONS
                </Heading>
                <Text>
                  If you have any questions or propositions regarding to
                  Moivon’s events - you can contact us and we will reply as soon
                  as possible
                </Text>
                <img
                  src="/img/contact.png"
                  alt="contact"
                  width="100%"
                  height="212"
                />
              </div>
            </Col>
            <Col md={5}>
              <div className={styles.form}>
                <HomeForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;

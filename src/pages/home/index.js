import React from "react";
import styles from "./index.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import TeamMeet from "../../components/TeamMeet";
import Events from "../../components/Events";

import { BsPlayCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

function Home() {
  return (
    <>
      <section className={`${styles.heroSection} section`}>
        <Container>
          <Row>
            <Col md={8}>
              <div className={styles.heroHeading}>
                <Heading mb="50">More of the events you love </Heading>
                <span className={styles.spanHead}>
                  Welcome to Moivon! A connection to creative events, curated
                  for you.
                  <br /> Discover all events and fall in love in each!
                  <br />
                  Lorem ipsum dolorem en rem puto qerqerium si laverawut
                </span>
              </div>
              <div
                className={`${styles.heroIcons} d-flex gap-4 align-items-center`}
              >
                <Button type="primary">Discover events</Button>
                <span>
                  <BsPlayCircle /> Video of our events
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row>
            <Col lg={6}>
              <Row className={styles.customRow}>
                <Col md={4} className={styles.customCol}>
                  <div className={styles.countWrapper}>
                    <h2 className={styles.title}>2400+</h2>
                    <Text>Art Events</Text>
                  </div>
                </Col>
                <Col md={4} className={styles.customCol}>
                  <div className={styles.countWrapper}>
                    <h2 className={styles.title}>1200+</h2>
                    <Text>Positive Reviews</Text>
                  </div>
                </Col>
                <Col md={4} className={styles.customCol}>
                  <div className={styles.countWrapper}>
                    <h2 className={styles.title}>80</h2>
                    <Text>Top Locations</Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.teamSection} section`}>
        <Container>
          <Row>
            <Col>
              <div className={`mx-0 ${styles.sliderTeam}`}>
                <TeamMeet />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={6}>
              <Heading mb="50">Upcoming events for you </Heading>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end align-items-center">
                <a href="#">
                  <span className="text-white">
                    View All <FiArrowUpRight />
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`mx-0 ${styles.slider}`}>
          <Events />
        </div>
      </section>
      <section className={`section ${styles.bottomSection}`}>
        <Container>
          <Row>
            <Col md={6}>
              <Heading>Most popular this week</Heading>
            </Col>
            <Col md={6}>
              <div className={styles.img}>
                <img
                  src="/img/img-bottom.webp"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;

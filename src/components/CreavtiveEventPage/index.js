import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./index.module.css";
import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Button from "../Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeaderTransparent from "../HeaderTransparent";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

export default function CreavtiveEventPage() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    document.querySelector(".offcanvas.offcanvas-top").style.transform =
      "translateY(-100%)";
    setTimeout(() => {
      setShow(false);
    }, 50);
  };

  return (
    <>
      <Offcanvas
        backdrop={false}
        scroll={false}
        show={show}
        placement="top"
        onHide={handleClose}
        style={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(/img/Creativebackground.png)",
          backgroundSize: "cover",
          transform: "none",
        }}
      >
        <Offcanvas.Header closeButton className={styles.offCanvasHeader}>
          <MdArrowDownward />
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Container>
            <Row>
              <Col lg={12}>
                <HeaderTransparent />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className={styles.heroHeading + " mb-5"}>
                  <Heading>
                    FINDING YOUR NEXT CREATIVE EVENT SHOULD BE SO EASY{" "}
                  </Heading>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

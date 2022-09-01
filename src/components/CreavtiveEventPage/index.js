import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./index.module.css";
import React, { useState } from "react";

import Button from "../Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeaderTransparent from "../HeaderTransparent";

import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { useTransparentHeader } from "../../hooks/useTransparentHeader";

export default function CreavtiveEventPage() {
  const { show, onClose } = useTransparentHeader(true);

  return (
    <>
      <Offcanvas
        backdrop={false}
        scroll={false}
        show={show}
        placement="top"
        onHide={onClose}
        style={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(/img/Creativebackground.png)",
          backgroundSize: "cover",
          transform: "none",
        }}
      >
        <Offcanvas.Header closeButton className={styles.offCanvasHeader}>
          <img src="/img/Arrow.svg" alt="Arrow" />
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
                <div className={styles.heroHeading}>
                  <Heading>
                    FINDING YOUR NEXT CREATIVE EVENT SHOULD BE SO EASY{" "}
                  </Heading>
                  <span className={styles.spanHead}>

                    Welcome to Moivon, your one source for uncovering
                    <br /> art, creative, and design events. Explore our curated
                    <br />list made for you and fall in love in each!
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

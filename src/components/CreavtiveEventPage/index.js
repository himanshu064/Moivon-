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
      <div className={styles.CustomContainer}>
        <Container >

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
              </div>
            </Col>

          </Row>
          <Row>
            <Col lg={12}>
              <img className={styles.herosectionImg} src="/img/Arrow.svg" alt="Arrow" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

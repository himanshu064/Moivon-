import React from "react";
import Event from "../../components/Event";
import styles from "./index.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";

const eventData = [
  {
    image: "/img/event-1.png",
    title: "Art1 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
      {
        image: "/img/event-3.png",
      },
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
    ],
  },
  {
    image: "/img/event-2.png",
    title: "Art2 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
      {
        image: "/img/event-3.png",
      },
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
    ],
  },
  {
    image: "/img/event-3.png",
    title: "Art3 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
      {
        image: "/img/event-3.png",
      },
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
    ],
  },
  {
    image: "/img/event-1.png",
    title: "Art4 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
      {
        image: "/img/event-3.png",
      },
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
    ],
  },
  {
    image: "/img/event-2.png",
    title: "Art5 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
      {
        image: "/img/event-3.png",
      },
      {
        image: "/img/event-1.png",
      },
      {
        image: "/img/event-2.png",
      },
    ],
  },
];

function AllEvent() {
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.navHead}>
                <Heading>Events</Heading>
              </div>
            </Col>
          </Row>
          <Row>
            {eventData?.map((data) => (
              <Col md={4} className="mb-3">
                <Event event={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AllEvent;

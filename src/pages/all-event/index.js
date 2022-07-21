import React, { useState } from "react";
import Event from "../../components/Event";
import styles from "./index.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
  const [key, setKey] = useState("home");

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.navHead}>
                <Heading>Events</Heading>
                <Button variant="outline">Sort</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="events" title="All events">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="classic" title="CLASSIC MUSEUM">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="gallery" title="GALLERY">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="feature" title="FEATURE VENUE">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="design" title="DESIGN CONVETION">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="individual" title="INDIVIDUAL">
                  <Row>
                    {eventData?.map((data) => (
                      <Col md={4} className="mb-3">
                        <Event event={data} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AllEvent;

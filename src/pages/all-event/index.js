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
  const [key, setKey] = useState("AllEvent");

  const RenderEvent = () => {
    return (
      <Row>
        {eventData?.map((data) => (
          <Col md={4} className="mb-3">
            <Event event={data} />
          </Col>
        ))}
      </Row>
    );
  };

  const ALL_COMPONENT = {
    AllEvent: RenderEvent,
    Classic: RenderEvent,
    Gallery: RenderEvent,
    Feature: RenderEvent,
    Design: RenderEvent,
    Individual: RenderEvent,
  };

  const randomTabContent = () => {
    const DyanmicComponet = ALL_COMPONENT[key];
    return <DyanmicComponet />;
  };

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.navHead + " mb-4"}>
                <div
                  className={`d-flex align-items-center gap-5 ${styles.topHead}`}
                >
                  <Heading mb="0" variant="subHeading">
                    Events
                  </Heading>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className={`mb-3 customTab`}
                  >
                    <Tab eventKey="AllEvent" title="All events"></Tab>
                    <Tab eventKey="Classic" title="CLASSIC MUSEUM"></Tab>
                    <Tab eventKey="Gallery" title="GALLERY"></Tab>
                    <Tab eventKey="Feature" title="FEATURE VENUE"></Tab>
                    <Tab eventKey="Design" title="DESIGN CONVETION"></Tab>
                    <Tab eventKey="Individual" title="INDIVIDUAL"></Tab>
                  </Tabs>
                </div>
                <div className={styles.sortBtn}>
                  <Button type="outline">Sort</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>{randomTabContent()}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AllEvent;

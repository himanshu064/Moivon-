import React, { useState } from "react";
import styles from "./index.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Text from "../../components/Text";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Event from "../../components/Event";

const eventImg = [
  {
    image: "/img/detail-img.png",
  },
  {
    image: "/img/detail-img.png",
  },
  {
    image: "/img/detail-img.png",
  },
];

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
];
function EventDetail() {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col>
              <div className={`border-b ${styles.topHead}`}>
                <div
                  className={`${styles.eventHead} d-flex align-items-center gap-3`}
                >
                  <Heading mb="0" variant="subHeading">
                    365 Frames-Days
                  </Heading>
                  <span className={styles.type}>CLASSIC MUSEUM</span>
                </div>
                <Button type="outline">Book Now</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <div className={`${styles.imgSlider} py-4`}>
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={pagination}
                  navigation={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {eventImg?.map((data) => (
                    <SwiperSlide>
                      <img src={data?.image} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
            <Col md={5}>
              <div className={`${styles.content} py-4 ps-2`}>
                <div className={styles.gridDiv}>
                  <div className={`${styles.dateDiv}  ${styles.borderRight}`}>
                    <span className={styles.title}>Date</span>
                    <span className={styles.date}>30 june</span>
                  </div>
                  <div
                    className={`${styles.locationDiv}  ${styles.borderRight}`}
                  >
                    <span className={styles.title}>Location</span>
                    <span className={styles.location}>Bourbon st, 40</span>
                  </div>
                  <div className={`${styles.entryDiv}  ${styles.borderRight}`}>
                    <span className={styles.title}>DOORS OPEN</span>
                    <span className={styles.entry}>11:30 AM</span>
                  </div>
                  <div className={`${styles.entryDiv}  ${styles.borderRight}`}>
                    <span className={styles.title}>Entry fee</span>
                    <span className={styles.entry}>$150,00</span>
                  </div>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3>About event</h3>
                  <Text>
                    “I try to make work that joins the seductions of wishful
                    thinking with the criticality of knowing better,” Barbara
                    Kruger has said. An incisive critic of popular culture,
                    Kruger addresses the viewer directly as a way of exposing
                    the power dynamics underlying identity, desire, and
                    consumerism. Kruger’s large-scale commission for MoMA will
                    envelop the Marron Family Atrium with the artist’s bold
                    textual statements about truth, belief, and power. Combining
                    images drawn from mass-media photographs with provocatively
                    concise language, Kruger has been creating explorations of
                    social relationships imbued with her distinctive sense of
                    urgency and humor for more than 40 years. MoMA’s
                    installation will tap into the artist’s long-standing
                    interest in architecture to immerse viewers in a
                    thought-provoking environment, offering multiple points of
                    entry and perspective. With characteristic force, the work
                    will explore the ways that relationships between spatial and
                    political power invariably relate to considerations of
                    inclusion and exclusion, dominance and agency.
                  </Text>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3>VENUE</h3>
                  <Text>
                    Superior Ingredients (Main Room) <br /> 74 Wythe Ave,
                    Brooklyn, NY 11249, USA <br /> Doors open: 11:30 AM
                  </Text>
                  <Button type="outline">OPEN MAP</Button>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3>ABOUT INSTITUTION</h3>
                  <div className="d-flex align-items-center gap-4 py-3">
                    <img src="/img/bg-logo.png" alt="" />
                    <div className={styles.info}>
                      <h4>Moivon Company</h4>
                      <span>eVENTS ORGANIZATOR</span>
                    </div>
                  </div>
                  <Text>
                    Libero et, lorem consectetur ac augue nisl. Nunc accumsan
                    rhoncus congue quisque at praesentyi vulputate consectetur.
                    Eu, auctor duis egestas nulla at praesentyi vulputate
                    consectetur nsectetur ac augu
                  </Text>
                  <Button type="outline">VISIT WEBSITE</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`section ${styles.content} ${styles.lastSection}`}>
        <Container>
          <Row>
            <Col md={6}>
              <h3>RELATED EVENTS</h3>
            </Col>
            <Col md={6}>
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
          <div className={`mx-0 `}>
            <Row>
              {eventData?.map((data) => (
                <Col md={4}>
                  <Event event={data} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
export default EventDetail;

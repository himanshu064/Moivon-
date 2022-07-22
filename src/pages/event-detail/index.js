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
            <Col md={8}>
              <div className={styles.imgSlider}>
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
            <Col md={4}>
              <div className={styles.content}>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3 className={styles.title}>About event</h3>
                  <Text>
                    Libero et, lorem consectetur ac augue nisl. Nunc accumsan
                    rhoncus congue quisque at praesentyi vulputate consectetur.
                    Eu, auctor duis egestas nulla molestie. Amet, justo, id arcu
                    donec id congue morbi.
                  </Text>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3 className={styles.title}>VENUE</h3>
                  <Text>
                    Superior Ingredients (Main Room) <br /> 74 Wythe Ave,
                    Brooklyn, NY 11249, USA <br /> Doors open: 11:30 AM
                  </Text>
                  <Button type="outline">OPEN MAP</Button>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3 className={styles.title}>ABOUT INSTITUTION</h3>
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
    </>
  );
}
export default EventDetail;

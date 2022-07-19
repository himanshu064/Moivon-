import React from "react";
import styles from "./event.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../components/Button";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import EventsInfo from "../EventsInfo";

const teamData = [
  {
    image: "/img/slider-1.webp",
  },
  {
    image: "/img/slider-1.webp",
  },
  {
    image: "/img/slider-1.webp",
  },
  {
    image: "/img/slider-1.webp",
  },
];
function Events() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.5}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.5,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3.5,
          },
        }}
      >
        {teamData?.map((data) => (
          <SwiperSlide>
            <div className={styles.eventWrapper}>
              <div className={styles.image}>
                <img src="/img/event-1.png" alt="" />
              </div>
              <div className={styles.content}>
                <div className="d-flex justify-content-between px-3">
                  <h3>Art Member Monday</h3>
                  <div className="d-flex gap-2">
                    <span className="d-flex">
                      <AiOutlineStar />
                      4.2
                    </span>
                    <span className="d-flex">
                      <AiOutlineHeart />
                      120
                    </span>
                  </div>
                </div>
                <div className="gallery-border">
                  <EventsInfo />
                </div>

                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <div className={styles.entryDiv}>
                    <span className={styles.title}>Entry fee</span>
                    <span className={styles.entry}>$150,00</span>
                  </div>
                  <Button variant="primary">Read more</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Events;

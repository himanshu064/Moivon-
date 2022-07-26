import React from "react";
import styles from "./event.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { Link } from "react-router-dom";

function Event({
  event,
  showArrowOnHover,
  showGalleryOnHover,
  customGridClass,
}) {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <div className={styles.eventWrapper}>
        <div
          className={`${styles.image} event-single-slider ${
            showArrowOnHover ? "all-event-slider" : ""
          }`}
        >
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            navigation={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {event?.gallery?.map((data) => (
              <SwiperSlide>
                <img src={data?.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`${styles.galleryBtn} hide-gallery-btn ${
            showGalleryOnHover ? "show-gallery-btn" : ""
          }`}
        >
          <Button>Gallery</Button>
        </div>
        <div className={styles.content}>
          <div className="d-flex justify-content-between px-3">
            <Link to="/event-detail">
              <h3>{event.title}</h3>
            </Link>

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
          <div className={"gallery-border"} style={{ borderBottom: "0" }}>
            <div className={`${styles.gridDiv} `}>
              <div
                className={`${styles.dateDiv}  ${styles.borderRight} ${customGridClass}`}
              >
                <span className={`${styles.title} title`}>Date</span>
                <span className={`${styles.date} date`}>30 june</span>
              </div>
              <div
                className={`${styles.locationDiv}  ${styles.borderRight} ${customGridClass}`}
              >
                <span className={`${styles.title} title`}>Location</span>
                <span className={`${styles.location} location`}>
                  Bourbon st, 40
                </span>
              </div>
              <div
                className={`${styles.entryDiv}  ${styles.borderRight} ${customGridClass}`}
              >
                <span className={`${styles.title} title`}>Entry fee</span>
                <span className={`${styles.entry} entry`}>$150,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Event;

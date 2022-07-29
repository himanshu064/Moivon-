import React from "react";
import styles from "./event.module.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Event({
  event,
  showArrowOnHover,
  showGalleryOnHover,
  customGridClass,
}) {
  return (
    <>
      <Link to="/event-detail">
        <div className={styles.eventWrapper}>
          <div
            className={`${styles.image} event-single-slider ${
              showArrowOnHover ? "all-event-slider" : ""
            }`}
          >
            <Carousel interval={null}>
              {event?.gallery?.map((data) => (
                <Carousel.Item>
                  <img draggable="false" src={data?.image} alt="" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div
            className={`${styles.galleryBtn} hide-gallery-btn ${
              showGalleryOnHover ? "show-gallery-btn" : ""
            }`}
          >
            <Button>Gallery</Button>
          </div>
          <div className={styles.content}>
            {/* <Link to="/event-detail"> */}
            <div className="d-flex justify-content-between px-3">
              <h3>{event.title}</h3>

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
                  <a
                    href="https://goo.gl/maps/t6xf32hbDghFuCsn8"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noreferrer"
                  >
                    <span className={`${styles.title} title`}>Location</span>
                    <span className={`${styles.location} location`}>
                      {" "}
                      Bourbon st, 40{" "}
                    </span>
                  </a>
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
      </Link>
    </>
  );
}
export default Event;

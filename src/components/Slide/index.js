import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./slide.module.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useSwiper } from "swiper/react";
import { prepareImageSrc } from "../../utils/api";
import { format } from "date-fns";
import { formatCurrency, getMapsLocation } from "../../utils/helpers";

const getEventDetailPath = (id) => `/event-detail/${id}`;

const ContentWrapper = ({ allowClick, eventId, children }) => {
  const Component = allowClick
    ? () => (
        <Link to={`/event-detail/${eventId}`} draggable="false">
          {children}
        </Link>
      )
    : () => <div>{children}</div>;
  return <Component />;
};

function Slide({
  event,
  slideIndex,
  currentIndex,
  showArrowOnHover,
  showGalleryOnHover,
  customGridClass,
  showPreviousAndNextButton = true,
}) {
  const swiper = useSwiper();
  const bootstrapCarouselRef = useRef();

  const allowLinks = slideIndex === currentIndex;

  const imageCarouselHandler = useSwipeable({
    onSwipedLeft: () => bootstrapCarouselRef.current.next(),
    onSwipedRight: () => bootstrapCarouselRef.current.prev(),
    swipeDuration: 1000,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const contentCarouselHandler = useSwipeable({
    onSwipedLeft: () => swiper.slideNext(),
    onSwipedRight: () => swiper.slidePrev(),
    swipeDuration: 2000,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <div className={`${styles.eventWrapper} no-selection`}>
        <div
          className={`${styles.image} event-single-slider ${
            showArrowOnHover ? "all-event-slider" : ""
          }`}
          {...imageCarouselHandler}
          // {...(allowLinks && imageCarouselHandler)}
        >
          {showPreviousAndNextButton && (
            <span
              className="prev-btn"
              onClick={() => swiper.slidePrev()}
            ></span>
          )}
          <Carousel
            // indicators={allowLinks}
            interval={null}
            ref={bootstrapCarouselRef}
          >
            {event?.images?.map((imageData, index) => (
              <Carousel.Item key={`image_slide_${index}`}>
                <Link to={getEventDetailPath(event._id)}>
                  <img
                    draggable="false"
                    src={prepareImageSrc(imageData?.image)}
                    alt={imageData?._id}
                  />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
          {showPreviousAndNextButton && (
            <span
              className="next-btn"
              onClick={() => swiper.slideNext()}
            ></span>
          )}
        </div>
        <div
          className={`${styles.galleryBtn} hide-gallery-btn ${
            showGalleryOnHover ? "show-gallery-btn" : ""
          }`}
        >
          <Link to={getEventDetailPath(event._id)}>
            <Button>Gallery</Button>
          </Link>
        </div>
        <div className={styles.content} {...contentCarouselHandler}>
          <ContentWrapper allowClick={allowLinks} eventId={event._id}>
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
            <div
              className={"gallery-border"}
              style={{ borderBottom: "0" }}
              draggable="false"
            >
              <div className={`${styles.gridDiv} `}>
                <div
                  className={`${styles.dateDiv}  ${styles.borderRight} ${customGridClass}`}
                >
                  <span className={`${styles.title} title`}>Date</span>
                  <span className={`${styles.date} date`}>
                    {event?.dates &&
                      format(new Date(event?.dates), "dd LLL yyyy")}
                  </span>
                </div>
                <div
                  className={`${styles.locationDiv}  ${styles.borderRight} ${customGridClass}`}
                >
                  <a
                    draggable="false"
                    href={allowLinks ? getMapsLocation(event?.location) : ""}
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
                  <span className={`${styles.entry} entry`}>
                    {formatCurrency(event?.price)}
                  </span>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </>
  );
}
export default Slide;

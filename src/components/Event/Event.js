import React from "react";
import classnames from "classnames";
import styles from "./event.module.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { format, isFuture, parseISO } from "date-fns";
import { prepareImageSrc } from "../../utils/api";
import {
  formatCurrency,
  getMapsLocation,
  isValidURL,
} from "../../utils/helpers";
import { EventLoadingTile } from "../EventLoadingTile";

const getEventDetailPath = (id) => `/event-detail/${id}`;

function Event({
  isLoading,
  event,
  showArrowOnHover,
  showGalleryOnHover,
  customGridClass,
}) {
  const navigate = useNavigate();
  const parsedDate = event?.startDate && parseISO(event?.startDate);
  const isFutureDate = parsedDate ? isFuture(parsedDate) : false;

  const onOverlayClick = () => navigate(getEventDetailPath(event._id));

  if (isLoading) {
    return (
      <div className={styles.eventWrapper}>
        <EventLoadingTile />
      </div>
    );
  }

  return (
    <>
      <div
        className={classnames(`eventWrapper ${styles.eventWrapper}`, {
          [styles.hideLightening]: !isFutureDate,
          "lighten-container": !isFutureDate,
        })}
      >
        <div
          className={classnames({
            [styles.eventImageOverlay]: !isFutureDate,
          })}
          onClick={!isFutureDate ? onOverlayClick : null}
        />
        <div
          className={classnames(`${styles.image} event-single-slider`, {
            "all-event-slider": showArrowOnHover && isFutureDate,
          })}
        >
          <Carousel interval={null}>
            {event?.images?.map((imageData, index) => (
              <Carousel.Item key={`image_slide_${index}`}>
                <Link to={getEventDetailPath(event._id)}>
                  <div className={!isFutureDate ? styles.imageContainer : ""}>
                    <img
                      draggable="false"
                      src={prepareImageSrc(imageData?.image)}
                      alt={imageData?._id}
                    />
                    <div className={styles.pastContent}>
                      <p>PAST</p>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {event?.genre && showGalleryOnHover && (
          <div className={styles.galleryBtn}>
            <Link to={getEventDetailPath(event._id)}>
              <Button>{event?.genre?.genre}</Button>
            </Link>
          </div>
        )}
        <div className={styles.content}>
          <Link to={getEventDetailPath(event._id)}>
            <div
              className={`${styles.titleContainer} d-flex justify-content-between align-items-center px-3`}
            >
              <h3 className="text-truncate" title={event.title}>
                {event?.title}
              </h3>

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
              className={`d-flex align-items-center gallery-border ${styles.descriptionContainer}`}
              style={{ borderBottom: "0" }}
            >
              <div className={`${styles.gridDiv} `}>
                <div
                  className={`${styles.dateDiv} ${styles.borderRight} ${customGridClass}`}
                >
                  <span className={`${styles.title} title`}>Date</span>
                  <span className={`${styles.date} date`}>
                    {event?.startDate &&
                      format(new Date(event?.startDate), "dd LLL yyyy")}
                  </span>
                </div>
                <div
                  className={`text-truncate ${styles.locationDiv} ${styles.borderRight} ${customGridClass}`}
                >
                  <a
                    href={getMapsLocation(event?.location)}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noreferrer"
                  >
                    <span className={`${styles.title} title`}>Location</span>
                    <span
                      className={`text-uppercase ${styles.location} location`}
                    >
                      {event?.location}
                      {/* {" "}
                      {isValidURL(event?.location)
                        ? "Open Map"
                        : event?.location}{" "} */}
                    </span>
                  </a>
                </div>
                <div
                  className={`${styles.entryDiv}  ${styles.borderRight} ${customGridClass}`}
                >
                  <span className={`${styles.title} title`}>Entry fee</span>
                  <span className={`${styles.entry} entry`}>
                    {event?.price !== 0 ? formatCurrency(event?.price) : "FREE"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Event;

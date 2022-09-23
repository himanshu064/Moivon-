import React from "react";
import classnames from "classnames";
import styles from "./event.module.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { format } from "date-fns";
import { prepareImageSrc } from "../../utils/api";
import {
  formatCurrency,
  getMapsLocation,
  isValidURL,
} from "../../utils/helpers";
import Mask from "../../components/Mask";


const getEventText = (startDate, endDate) => {
  const parsedStartDate = Date.parse(startDate);
  const parsedEndDate = Date.parse(endDate);
  const todayDate = Date.now();
  // is future event
  const isFutureDate = todayDate < parsedStartDate && todayDate < parsedEndDate;
  if (isFutureDate) {
    return "FUTURE";
  }

  // is past event
  const isPastDate = todayDate > parsedStartDate && todayDate > parsedEndDate;
  if (isPastDate) {
    return "PAST";
  }


  const isEventBetweenStartAndEndDate = todayDate > parsedStartDate && todayDate < parsedEndDate;
  if(isEventBetweenStartAndEndDate) {
    // if the difference in days > 1, show days remaining
    const difference = parsedEndDate - todayDate;
    const differenceInDays = Math.ceil(
      Math.abs(difference / (24 * 60 * 60 * 1000))
    );

    if(differenceInDays <= 1) {
      return "FINAL DAY";
    }

    return differenceInDays;
  }
}

const getEventDetailPath = (id) => `/event-detail/${id}`;

function Event({
  event,
  showArrowOnHover,
  showGalleryOnHover,
  customGridClass,
}) {
  const navigate = useNavigate();
  const eventText = event.startDate && event.endDate && getEventText(event?.startDate, event?.endDate);

  const isFutureDate = typeof eventText === 'number' || ["FINAL DAY", 'FUTURE'].includes(eventText);
  const isDayRemainingMode = typeof eventText === "number" || ["FINAL DAY"].includes(eventText);
  const remainingDaysText = typeof eventText === "number" ? `${eventText} DAYS LEFT` : eventText;

  const onOverlayClick = () => navigate(getEventDetailPath(event._id));
  
  const [maskState, setMaskState] = React.useState(0);

  function goTo(url) {
    setMaskState(1);
    setTimeout(() => {
      setMaskState(2);
      setTimeout(() => {
        setMaskState(3);
        navigate(url);
        setTimeout(() => {
          setMaskState(0);
        }, 2000)
      }, 1500);
    }, 100);
  }

  return (
    <>
      <div className={maskState===1?'m-active':(maskState===2?'m-active state1':(maskState===3?'m-active state2':''))}>
        <Mask />
      </div>
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
          <Carousel interval={null} className={ (event?.images?.length > 1) ? '' : 'event-single-sliderr' }>
            {event?.images?.map((imageData, index) => (
              <Carousel.Item key={`image_slide_${index}`}>
                <Link to={getEventDetailPath(event._id)} draggable="false">
                {/* <span onClick={() => goTo(getEventDetailPath(event._id))}> */}
                  <div className={!isFutureDate ? styles.imageContainer : ""}>
                    <img
                      draggable="false"
                      src={prepareImageSrc(imageData?.image)}
                      alt={imageData?._id}
                    />
                    <div className={styles.pastContent}>
                      <p style={{zIndex: 201, marginBottom: '0px'}}>PAST</p>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {event?.genre && showGalleryOnHover && isFutureDate && (
          <>
            {isDayRemainingMode && (
              <div className={styles.daysReminingInfo}>
                <Link to={getEventDetailPath(event._id)} draggable="false">
                  <Button>{remainingDaysText}</Button>
                </Link>
              </div>
            )}
            <div className={styles.galleryBtn}>
              {/* <span onClick={() => goTo()}> */} 
              <Link to={getEventDetailPath(event._id)} draggable="false">
                <Button>{event?.genre?.genre}</Button>
              </Link>
            </div>
          </>
        )}
        <div className={styles.content}>
          {/* <span onClick={() => goTo(getEventDetailPath(event._id))}> */}
          <Link to={getEventDetailPath(event._id)} draggable="false">
            <div
              className={`${styles.titleContainer} d-flex justify-content-between align-items-center px-3`}
            >
              <h3 className="text-truncate" title={event.title}>
                {event?.title}
              </h3>

              <div className="d-flex gap-2">
                <span className="d-flex align-items-center">
                  <AiOutlineStar />
                  4.2
                </span>
                <span className="d-flex align-items-center">
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

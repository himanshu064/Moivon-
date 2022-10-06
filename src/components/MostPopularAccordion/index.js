import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventAccordion from "../EventAccordion";
import EventFooter from "../EventAccordion/EventFooter";
import Heading from "../Heading";
import styles from "./index.module.css";
import { useQuery } from "@tanstack/react-query";
import { ALL_QUERIES } from "../../utils/endpoints";
import { fetchMostFavoriteEvents } from "../../services/EventService";
import Loader from "../Loader";
import { prepareImageSrc } from "../../utils/api";
import { Link } from "react-router-dom";

const MostPopularAccordion = () => {
  const { isLoading, isError, error, data } = useQuery(
    ALL_QUERIES.QUERY_MOST_POPULAR(),
    () => fetchMostFavoriteEvents()
  );

  const [show, setShow] = useState(null);
  const [lastShow, setLastShow] = useState(Date.now());
  const [time, setTime] = useState(null);
  const [hide, setHide] = useState(false);
  let interval = null;

  function changeShow(next) {
    setLastShow(Date.now());
    setHide(true)
    setTimeout(() => {
      setShow(data?.data?.data[next]._id);
      setHide(false);
    }, 1000)
  }

  function resetInterval() {
    if (interval) return;
    interval = setInterval(() => {
      setTime(Date.now());
    }, 100);
  }

  useEffect(() => {
    if (Date.now() - lastShow >= 8000 && data?.data?.data.length) {
      const current = data?.data?.data?.findIndex((e) => e._id === show);
      const next = (current + 1) % data?.data?.data?.length;
      if (current < 0 || current === next) return;
      changeShow(next);
    }
  }, [time])

  useEffect(() => {
    if (!isLoading) {
      if (window.innerWidth <= 992 || data?.data?.data?.length === 1) {
        setShow(data?.data?.data?.[0]?._id)
      } else {
        setShow(data?.data?.data?.[1]?._id)
      }
      setLastShow(Date.now());
      resetInterval();
    }
    return () => { clearInterval(interval) };
  }, [data?.data]);

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  const getImage = () => {
    const foundObject = data?.data?.data?.find((e) => e._id === show);
    return foundObject?.images?.[0]?.image;
  };

  const getEventLink = () => {
    const foundObject = data?.data?.data?.find((e) => e._id === show);
    return foundObject?._id;
  };

  const selectedEvent = () => {
    return data?.data?.data?.find(itm => itm._id === show);
  }

  return (
    <Container className={`position-relative ${styles.customcontainer} ${hide ? styles.hideTransition : ''}`}>
      <Row className={styles.noPaddingMobileRow}>
        <Col md={5} className={styles.col5}>
          <div className={styles.paddingRight + ' ' + styles.totalContent}>
            <div style={{height:'100%', position: 'relative'}}>
              <div className={styles.headingTablet}>
                <Heading customClass={styles.heading} variant="subHeading" style={{marginBottom: '29px', whiteSpace: 'nowrap'}}>
                  Most popular
                  <br /> this week
                </Heading>
                <div className={styles.navTablet}>
                  {data?.data?.data?.map((event, idx) => (
                    <div key={event._id} onClick={() => setShow(event._id)}
                      className={styles.navLinkTablet + ' ' + ((event._id === show) ? styles.active:'') }>{idx + 1}</div>
                  ))}
                </div>
              </div>
              <div className={`${styles.dreamContent}`}>
                {data?.data?.data?.length > 0 ? (
                  data?.data?.data?.map((event, idx) => (
                    <EventAccordion
                      isExpanded={event._id === show}
                      onExpand={() => setShow(event._id)}
                      key={event._id}
                      event={event}
                    />
                  ))
                ) : (
                  <h3 className="mt-2 text-base text-white">
                    No popular events added!
                  </h3>
                )}
              </div>
              <div className={styles.eventHeaderTablet}>
                {selectedEvent() && selectedEvent()?.title}
              </div>
              {/* <div className={styles.borderBottom}></div> */}
            </div>
          </div>
        </Col>
        <Col md={7} className={styles.col7} style={{paddingLeft: 0}}>
          <div className="w-100 h-100 overflow-hidden">
            {!isLoading && data?.data?.data?.length > 0 && (
              <Link to={`/event-detail/${getEventLink()}`}>
                <img
                  className={styles.image}
                  src={prepareImageSrc(getImage())}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Link>
            )}
          </div>
        </Col>
        <div className={styles.eventFooterTablet}>
          {selectedEvent() && <EventFooter event={selectedEvent()}></EventFooter>}
        </div>
      </Row>
    </Container>
  );
};

export default MostPopularAccordion;

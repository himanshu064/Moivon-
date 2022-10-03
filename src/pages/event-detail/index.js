import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css";

import Container from "react-bootstrap/Container";
import { BiPlus, BiMinus } from "react-icons/bi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Text from "../../components/Text";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Event from "../../components/Event";
import RouteTitle from "../../components/RouteTitle/RouteTitle";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { ALL_QUERIES } from "../../utils/endpoints";
import {
  fetchRelatedEvents,
  fetchSingleEvent,
} from "../../services/EventService";
import { prepareImageSrc } from "../../utils/api";
import {
  formatCurrency,
  getMapsLocation,
  isValidURL,
  prepareURL,
} from "../../utils/helpers";
import Loader from "../../components/Loader";
import AllEventLoadingPlaceholder from "../all-event/AllEventLoadingPlaceholder";

function EventDetail() {
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [fullTitleShow, setFullTitleShow] = useState(false);
  const pagination = {
    clickable: true,
  };
  const { eventId } = useParams();

  // fetching single event to show
  const { data, isLoading, isError, error } = useQuery(
    ALL_QUERIES.QUERY_SINGLE_EVENT({ eventId }),
    () => fetchSingleEvent({ eventId })
  );

  // fetching all events to show at the bottom
  const {
    data: allEventsData,
    isLoading: allEventsIsLoading,
    isError: allEventsIsError,
    error: allEventError,
  } = useQuery(ALL_QUERIES.QUERY_RELATED_EVENTS(), fetchRelatedEvents);

  const armoryRef = useRef();

  const setImageContTop = () => {
    // setTimeout(() => {
      document.getElementById('imag-cont').style.top = getImageContTop() + 'px';
    // }, 20)
  }

  const getImageContTop = () => {
    return armoryRef.current.clientHeight + 40;
  }

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 992) return;
      if (armoryRef.current) {
        setImageContTop();
        console.log(window.pageYOffset, document.getElementById('imag-cont').offsetTop, getImageContTop())
        if (window.pageYOffset <= 35) {
          armoryRef.current.style.position = 'relative';
          armoryRef.current.style.top = 0;
          const itms = document.getElementsByClassName('navbar navbar-expand-lg navbar-light bg-transparent');
          for (let i = 0; i < itms.length; i ++) {
            const itm = itms[i];
            itm.style.removeProperty('top');
            itm.style.removeProperty('transition-delay');
            itm.style.removeProperty('transition-duration');
            itm.classList.add('scroll-down');
            itm.classList.remove('scroll-up');
          }
        }
        else if (window.pageYOffset > 35 && (window.pageYOffset) < (document.getElementById('imag-cont').offsetTop - getImageContTop() + 74 ) ) {
          armoryRef.current.style.position = 'sticky';
          armoryRef.current.style.top = 0;
          const itms = document.getElementsByClassName('navbar navbar-expand-lg navbar-light bg-transparent');
          for (let i = 0; i < itms.length; i ++) {
            const itm = itms[i];
            if ((35 - window.pageYOffset) < -80) {
              itm.style.removeProperty('transition-delay');
              itm.style.removeProperty('transition-duration');
              itm.style.removeProperty('top');
              itm.classList.add('scroll-up');
              itm.classList.remove('scroll-down');
            } else {
              itm.style.transitionDelay = '0s';
              itm.style.transitionDuration = '0s';
              itm.style.top = (35 - window.pageYOffset) + 'px';
            }
          }
        } else {
          armoryRef.current.style.position = 'sticky';
          armoryRef.current.style.top = (-(window.pageYOffset - document.getElementById('imag-cont').offsetTop + getImageContTop() - 70)) + 'px';
          
          const itms = document.getElementsByClassName('navbar navbar-expand-lg navbar-light bg-transparent');
          for (let i = 0; i < itms.length; i ++) {
            const itm = itms[i];
            if ((window.pageYOffset + getImageContTop()) > document.getElementById('imag-cont').offsetTop + getImageContTop() + 250 || document.body.clientHeight-window.scrollY <= window.innerHeight + 5) {
              itm.style.removeProperty('transitionDelay');
              itm.style.removeProperty('transitionDuration');
              itm.style.removeProperty('top');
              itm.classList.add('scroll-down');
              itm.classList.remove('scroll-up');
            } else {
              itm.classList.add('scroll-up');
              itm.classList.remove('scroll-down');
            }
          }
        }
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  React.useEffect(() => {
    const resized = () => {
      let fullTitleShow = false;
      let itm;
      if (window.innerWidth <= 992) itm = document.getElementById('header_tablet');
      else itm = document.getElementById('header')
      if ((itm && !showFullTitle && itm.clientWidth < itm.scrollWidth) || (itm && itm.clientHeight > 50)) fullTitleShow = true;
      setFullTitleShow(fullTitleShow);
    }

    resized();
    window.addEventListener('resize', resized);
    console.log(data)
  }, [data])

  if (isLoading) return <Loader />;

  if (isError) return <p>{error}</p>;

  return (
    <>
      <RouteTitle title="Event Detail" />
      <section className={'section ' + styles.detailSection}>
        <Container className={styles.eventDetailContainer}>

          <Row ref={armoryRef} className={styles.armoryStickyDiv}>
            <Col style={{paddingTop: fullTitleShow?'2px':'11px'}}>
              {
                fullTitleShow ? (
                  <h6
                    className={styles.toggleTitle}
                    onClick={() => { setShowFullTitle((prev) => !prev); setImageContTop(); }}
                  >
                    <span>Full Title</span>
                    {!showFullTitle ? (
                      <BiPlus color="white" size={12} />
                    ) : (
                      <BiMinus color="white" size={12} />
                    )}
                  </h6>
                ) : ''
              }
              <div className={`border-b ${styles.topHead}`}>
                <div
                  className={`${styles.eventHead} d-flex align-items-end w-100`}
                >
                  <Heading
                    mb="-6"
                    variant="subHeading"
                    customClass={styles.eventHeader + ' ' + styles.maxCol7}
                    title={data?.data?.data?.title}
                    style={{
                      "whiteSpace": showFullTitle ? "normal" : "nowrap",
                    }}
                    id='header'
                  >
                    {data?.data?.data?.title}
                  </Heading>
                  {/* <span className={styles.type}>CLASSIC MUSEUM</span> */}
                  <span className={styles.type}>
                    {data?.data?.data?.genre?.genre}
                  </span>
                  {/* <span className={styles.starIcon}>
                    <AiOutlineStar style={{ marginRight: 5, }} size={18} />
                    4.2
                  </span> */}
                  <Button
                    className={styles.bookNowButton}
                    style={{ width: 200, marginLeft: 'auto', marginBottom: '-9px' }}
                    type="outline"
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data?.data?.data?.eventUrl}
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.armoryStickyRow}>
            <Col md={7} className={styles.myCol7}>
              <div className={`${styles.imgSlider}`} style={{top: '114px'}} id="imag-cont">
                {/* <span className="d-flex">
                  <AiOutlineStar />
                  4.2
                </span> */}
                {/* <span className={styles.imgSliderIcon}>
                  <AiOutlineHeart style={{ marginRight: 5 }} />
                  120
                </span> */}
                <Swiper
                  modules={[Pagination, Navigation]}
                  className="swiper-slider-no-zoom custom-icons eventDetailSlider"
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={pagination}
                  navigation={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {data?.data?.data?.images?.map((imageData) => (
                    <SwiperSlide key={imageData._id}>
                      <img
                        src={prepareImageSrc(imageData?.image)}
                        alt={imageData?._id}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
            <Col className={styles.colTablet} style={{paddingTop: fullTitleShow?'2px':'11px'}}>
              {
                fullTitleShow ? (
                  <h6
                    className={styles.toggleTitle}
                    onClick={() => { setShowFullTitle((prev) => !prev); setImageContTop(); }}
                  >
                    <span>Full Title</span>
                    {!showFullTitle ? (
                      <BiPlus color="white" size={12} />
                    ) : (
                      <BiMinus color="white" size={12} />
                    )}
                  </h6>
                ) : ''
              }
              <div className={`${styles.topHead}`}>
                <div
                  className={`${styles.eventHead} d-flex align-items-end w-100`}
                >
                  <Heading
                    mb="-6"
                    variant="subHeading"
                    customClass={styles.eventHeader + ' ' + styles.maxCol7 + ' ' + (showFullTitle ? '' : styles.nowrap)}
                    title={data?.data?.data?.title}
                    id='header_tablet'
                  >
                    {data?.data?.data?.title}
                  </Heading>
                </div>
              </div>
            </Col>
            <Col md={5} className={styles.armoryStickyCol}>
              <div className={`${styles.content}`}>
                <div className={styles.gridDiv}>
                  <div className={`${styles.dateDiv}  ${styles.borderRight}`}>
                    <span className={styles.title}>Date</span>
                    <span className={styles.date}>
                      {data?.data?.data?.startDate &&
                        format(
                          new Date(data?.data?.data?.startDate),
                          "dd LLL yyyy"
                        )}
                    </span>
                  </div>
                  <div
                    className={`text-truncate ${styles.locationDiv}  ${styles.borderRight}`}
                    title={data?.data?.data?.location}
                  >
                    <span className={styles.title}>Location</span>
                    <span className={styles.location}>
                      <a
                        className="text-uppercase"
                        href={
                          data?.data?.data?.location
                            ? getMapsLocation(data?.data?.data?.location)
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {(data?.data?.data?.location || '').split(',')[0]}
                      </a>
                    </span>
                  </div>
                  <div className={`${styles.entryDiv}  ${styles.borderRight}`}>
                    <span className={styles.title}>DOORS OPEN</span>
                    <span className={styles.entry}>
                      {data?.data?.data?.startDate &&
                        format(
                          parseISO(data?.data?.data?.startDate),
                          "hh:mm a"
                        )}
                    </span>
                  </div>
                  <div className={`${styles.entryDiv} ${styles.borderRight}`}>
                    <span className={styles.title}>Entry fee</span>
                    <span className={styles.entry}>
                      {data?.data?.data?.price !== 0
                        ? formatCurrency(data?.data?.data?.price)
                        : "FREE"}
                    </span>
                  </div>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3 className={"mb-4 " + styles.aboutEvent} style={{marginTop:'6px'}}>About event</h3>
                  <Text className={styles.m0 + ' ' + styles.breakSpace}>{data?.data?.data?.description}</Text>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3 className="mb-4">VENUE</h3>
                  {isValidURL(data?.data?.data?.venue) ? null : (
                    <>
                      <Text>{data?.data?.data?.venue}</Text>
                    </>
                  )}
                  <Text>{data?.data?.data?.location}</Text>
                  <Text>{data?.data?.data?.startDate &&
                    format(
                      new Date(data?.data?.data?.startDate),
                      "dd LLL"
                    )} - {data?.data?.data?.startDate &&
                      format(
                        new Date(data?.data?.data?.startDate),
                        "dd LLL yyyy"
                      )} | Doors open: {data?.data?.data?.startDate &&
                      format(
                        parseISO(data?.data?.data?.startDate),
                        "hh:mm a"
                      )}
                  </Text>
                  <a
                    href={
                      data?.data?.data?.venue
                        ? getMapsLocation(
                            `${data?.data?.data?.venue || ""} ${
                              data?.data?.data?.location || ""
                            }`
                          )
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={styles.secondaryButton} style={{marginTop: '18px'}} type="outline">
                      OPEN MAP
                    </Button>
                  </a>
                </div>
                <div className={`border-b ${styles.aboutContent}`}>
                  <h3>ABOUT INSTITUTION</h3>
                  <div className="d-flex gap-2 py-3">
                    <a
                      target="_blank"
                      className="d-flex align-items-center"
                      // href={prepareURL(data?.data?.data?.organizationUrl)}
                      rel="noopener noreferrer"
                    >
                      {/* <img src="/img/bg-logo.png" alt="" /> */}
                      <img
                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${prepareURL(
                          data?.data?.data?.organizationUrl
                        )}&size=32`}
                        alt=""
                        style={{width: '32px'}}
                      />
                    </a>
                    <div className={styles.info}>
                      <a
                        target="_blank"
                        // href={prepareURL(data?.data?.data?.organizationUrl)}
                        rel="noopener noreferrer"
                      >
                        <h4 className="text-uppercase">
                          {data?.data?.data?.organization}
                        </h4>
                      </a>
                      <span>EVENTS ORGANIZATOR</span>
                    </div>
                  </div>
                  <Text>{data?.data?.data?.eventOrgDetail}</Text>
                  <Button
                    className={`${styles.secondaryButton}`}
                    type="outline"
                    style={{marginTop: '18px'}}
                  >
                    <a
                      target="_blank"
                      href={prepareURL(data?.data?.data?.organizationUrl)}
                      rel="noopener noreferrer"
                    >
                      VISIT WEBSITE
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          {/* </Container>
      </section>
      <section className={`section ${styles.content} ${styles.lastSection}`}>
        <Container> */}
        </Container>
        <Container>
          <Row className={styles.content}>
            <Col md={6}>
              <h3 className="mb-4">RELATED EVENTS</h3>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end align-items-center mb-4">
                <Link to="/all-events">
                  <span className={styles.newTextDeco}>
                    View All <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          {/* ${styles.slider} */}
          <div className={`mx-0`}>
            {allEventsIsLoading ? (
              <Row>
                <AllEventLoadingPlaceholder tileCount={3} />
              </Row>
            ) : allEventsIsError ? (
              <p>{allEventError}</p>
            ) : (
              <Row>
                {allEventsData?.data?.data?.map((event) => (
                  <Col md={4} key={event._id}>
                    <Event
                      event={event}
                      showArrowOnHover
                      showGalleryOnHover
                      customGridClass="customGridClass"
                    />
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <div className="spacer-sm"></div>
        </Container>
        <div className={styles.tabletBar}>
          <div className={styles.barPrice}>
            <div className={styles.barPriceStatic}>
              ENTER FEE
            </div>
            <div className={styles.barPriceValue}>
              $250
            </div>
          </div>
          <Button
            className={styles.bookNowButton}
            style={{ width: 200, marginLeft: 'auto', marginBottom: '-9px' }}
            type="outline"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data?.data?.data?.eventUrl}
            >
              Book Now
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
export default EventDetail;

import React, { useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import Slide from "../Slide";
import { fetchUpcomingEvents } from "../../services/EventService";
import { ALL_QUERIES } from "../../utils/endpoints";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import styles from "./eventslider.module.css";

function EventSlider() {
  const swiperRef = useRef();
  // const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading, isError, error } = useQuery(
    ALL_QUERIES.QUERY_UPCOMING_EVENTS(),
    fetchUpcomingEvents
  );

  if (isLoading) return <Loader />;

  if (isError) return <p>{error}</p>;

  const isMinimumThreeSlidesAvailable =
    !isLoading && data?.data?.eventPresent >= 3;

  return (
    <>
      {isMinimumThreeSlidesAvailable && (
        <div
          className={styles.prevSlideButton}
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <BsChevronLeft size={52} />
        </div>
      )}
      <Swiper
        ref={swiperRef}
        className={`eventSlider ${
          isMinimumThreeSlidesAvailable ? "" : "transform-none"
        }`}
        modules={[Navigation, Pagination]}
        initialSlide={0}
        spaceBetween={2}
        slidesPerView={3.15}
        loop={isMinimumThreeSlidesAvailable}
        navigation={isMinimumThreeSlidesAvailable}
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        // cannot grab
        allowTouchMove={false}
        onSlideChange={(s) => console.log("slide change", s)}
        onSwiper={(swiper) => console.log(swiper, "swiper")}
        // onActiveIndexChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        // onClick={(swiper) =>
        //   swiperRef.current.swiper.slideTo(swiper.clickedIndex)
        // }
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1.1,
          },
          // when window width is >= 576px
          576: {
            slidesPerView: 1.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.5,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3.15,
          },
        }}
      >
        {data?.data?.data?.length === 0 && !isLoading ? (
          <h3 className="mt-2 text-center text-base text-white">
            No upcoming events!
          </h3>
        ) : (
          <>
            {data?.data?.data?.map((data, index) => (
              <SwiperSlide key={`slide_${index}`}>
                <Slide
                  event={data}
                  showPreviousAndNextButton={isMinimumThreeSlidesAvailable}
                  showGalleryOnHover
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </>
  );
}
export default EventSlider;

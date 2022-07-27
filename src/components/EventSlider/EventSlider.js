import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Event from "../Event/Event";

const eventData = [
  {
    image: "/img/event-1.png",
    title: "Art1 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-3.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
    ],
  },
  {
    image: "/img/event-2.png",
    title: "Art2 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-3.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
    ],
  },
  {
    image: "/img/event-3.png",
    title: "Art3 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-3.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
    ],
  },
  {
    image: "/img/event-1.png",
    title: "Art4 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-3.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
    ],
  },
  {
    image: "/img/event-2.png",
    title: "Art5 Member Monday",
    gallery: [
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-3.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-1.png",
        title: "Art Member Monday",
      },
      {
        image: "/img/event-2.png",
        title: "Art Member Monday",
      },
    ],
  },
];
function EventSlider() {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Swiper
        className="swiperSliderHome"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.5}
        loop
        centeredSlides={true}
        centeredSlidesBounds={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
            slidesPerView: 3.5,
          },
        }}
      >
        {eventData?.map((data) => (
          <SwiperSlide>
            <Event event={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default EventSlider;

import React from "react";
import styles from "./home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const sliderData = [
  {
    image: "/img/slider-main.png",
  },
  {
    image: "/img/slider-main.png",
  },
  {
    image: "/img/slider-main.png",
  },
  {
    image: "/img/slider-main.png",
  },
];
function HomeSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        {sliderData?.map((data) => (
          <SwiperSlide>
            <div className={styles.wrapper}>
              <div className={styles.image}>
                <img src={data?.image} alt="slider" width="100%" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default HomeSlider;

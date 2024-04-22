import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
8
const CustomSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next", // Chỉ định class của nút "Next"
          prevEl: ".swiper-button-prev", // Chỉ định class của nút "Prev"
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Thêm các slide khác nếu cần */}
      </Swiper>
      <div className="swiper-button-next">Next</div>
      <div className="swiper-button-prev">Prev</div>
    </>
  );
};

export default CustomSwiper;

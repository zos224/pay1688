import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import {faChevronRight,faChevronLeft} from "@fortawesome/free-solid-svg-icons";
type BaseSwiperProps = { slides: string[] };
const BaseSwiper = (props: BaseSwiperProps) => {
  const { slides } = props;
  return (
    <div className="relative">
      <Swiper
        autoplay={true}
        spaceBetween={60}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((src) => (
          <SwiperSlide key={src}>
            <div className="max-w-[140px] max-h-[47px] flex items-center">
              <img src={src} alt={src} className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute -left-5">
        <FontAwesomeIcon icon={faChevronLeft} className="size-5" />
      </div>
      <div className="swiper-button-next">
        <FontAwesomeIcon icon={faChevronRight} className="size-5 text-gray-5" />
      </div>
    </div>
  );
};

export default BaseSwiper;

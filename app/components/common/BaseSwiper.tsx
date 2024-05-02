import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper/modules"
import {faChevronRight,faChevronLeft} from "@fortawesome/free-solid-svg-icons";

type BaseSwiperProps = { slides: string[] };
const BaseSwiper = (props: BaseSwiperProps) => {
  const { slides } = props;
  return (
    <div className="relative">
      <div className="mx-10">
        <Swiper
        modules={[Navigation, Autoplay]}
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
      </div>
      <div className="swiper-button-prev absolute -left-5 top-1/2">
        <FontAwesomeIcon icon={faChevronLeft} className="size-5 cursor-pointer" />
      </div>
      <div className="swiper-button-next absolute -right-5 top-1/2">
        <FontAwesomeIcon icon={faChevronRight} className="size-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default BaseSwiper;

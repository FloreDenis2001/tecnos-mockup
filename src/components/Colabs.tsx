import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import partener1 from "../assets/partener1.jpg";
import partener2 from "../assets/partener2.png";
import partener3 from "../assets/partener3.jpg";
import partener4 from "../assets/partener4.png";
import partener5 from "../assets/partener5.jpg";
import partener6 from "../assets/partener6.jpg";

export default function Colabs() {
  return (
    <div className="colabs-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true} 
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={partener1} alt="Partener 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partener2} alt="Partener 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partener3} alt="Partener 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partener4} alt="Partener 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partener5} alt="Partener 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partener6} alt="Partener 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

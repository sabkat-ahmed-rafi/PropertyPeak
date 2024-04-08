import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <section className="mx-[80px] mt-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <div className="mx-auto ">
              <img className="h-[500px] w-full" src="/house1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="h-[500px] w-full" src="/house2.webp" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="h-[500px] w-full" src="/house3.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="h-[500px] w-full" src="/house4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="h-[500px] w-full" src="/house5.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="h-[500px] w-full" src="/house6.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Slider;

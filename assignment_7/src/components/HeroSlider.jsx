// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { heroBanners } from "../constants";

const HeroSlider = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="rounded-xl"
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`flex flex-col md:flex-row items-center justify-between rounded-xl p-6 md:p-10 ${banner.bgColor}`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">{banner.title}</h2>
                <p className="text-gray-600 text-sm">{banner.subtitle}</p>
                <p className="text-xl font-semibold text-blue-600">{banner.offer}</p>
                <span className="inline-block text-xs bg-red-100 text-red-600 px-2 py-1 mt-2 rounded-md">
                  {banner.tag}
                </span>
              </div>

              {/* Image */}
              <div className="flex-1 mt-4 md:mt-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full md:max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

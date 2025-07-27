import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { heroBanners } from "../constants";

const HeroSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full min-h-[400px] bg-white flex items-center justify-center px-4 py-12 overflow-hidden">
              {/* Top Glowing BG behind text and image */}
              <div className="absolute z-0 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] blur-[150px] rounded-full animate-pulse-mix bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-30"></div>

              {/* Bottom Glowing Fade Effect */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto text-center md:text-left">
                {/* Image */}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-[200px] md:w-[280px] object-contain"
                />

                {/* Text */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1b2430]">
                    {banner.title}
                  </h2>
                  <p className="text-[#5c5c5c] text-base md:text-lg">
                    {banner.subtitle}
                  </p>
                  <p className="text-[#0076ff] text-2xl font-extrabold">
                    {banner.offer}
                  </p>
                  <span className="inline-block text-xs bg-[#ffe0e6] text-[#ff3d60] px-3 py-1 rounded-md">
                    {banner.tag}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

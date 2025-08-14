import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { SparklesIcon } from "lucide-react";

export const CardCarousel = ({
  images,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    .swiper-slide {
      width: 300px !important;
    }
    .swiper-slide img {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none !important;
    }
  `;
  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-black/5 p-2 shadow-lg bg-neutral-800/70 backdrop-blur-md relative">
        {/* Badge */}
        {/* <div className="absolute left-5 top-6 flex items-center gap-1 rounded-lg px-3 py-1 text-base bg-white/10 border border-black/10 shadow-sm z-10">
          <SparklesIcon className="fill-pink-400 stroke-1" />
          Latest Component
        </div> */}
        <div className="mb-6 pt-10 px-8">
          <h3 className="text-4xl font-bold tracking-tight">Card Carousel</h3>
        </div>

        <Swiper
          spaceBetween={50}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          pagination={showPagination}
          navigation={showNavigation ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } : false}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="relative"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx} className="h-[360px]">
              <img
                src={image.src}
                alt={image.alt}
                width={300}
                height={360}
                className="rounded-xl w-full h-full object-cover"
                draggable={false}
              />
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          {showNavigation && (
            <>
              <div className="swiper-button-prev text-white text-3xl -left-5 absolute top-1/2 -translate-y-1/2 z-50 cursor-pointer" />
              <div className="swiper-button-next text-white text-3xl -right-5 absolute top-1/2 -translate-y-1/2 z-50 cursor-pointer" />
            </>
          )}
          {/* Pagination */}
          {showPagination && <div className="swiper-pagination !bottom-6 !relative" />}
        </Swiper>
      </div>
    </section>
  );
};

export default CardCarousel;

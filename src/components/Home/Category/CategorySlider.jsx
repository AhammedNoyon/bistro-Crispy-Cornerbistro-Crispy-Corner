// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// category slider images
import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const CategorySlider = () => {
  return (
    <section>
      <SectionHeading
        heading="order online"
        subHeading="From 11.00am to 10.00pn"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={category1} alt="foods recipe" />
          <h3 className="-mt-16 text-3xl font-normal ml-24 text-white/90">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="foods recipe" />
          \\
          <h3 className="-mt-16 text-3xl font-normal ml-24 text-white/90">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="foods recipe" />
          <h3 className="-mt-16 text-3xl font-normal ml-24 text-white/90">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category4} alt="foods recipe" />
          <h3 className="-mt-16 text-3xl font-normal ml-24 text-white/90">
            DESERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="foods recipe" />
          <h3 className="-mt-16 text-3xl font-normal ml-24 text-white/90">
            SALADS
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategorySlider;

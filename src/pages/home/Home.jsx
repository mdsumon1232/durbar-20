import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Import Swiper and required modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full hero">
          <div className="hero-wrapper w-full py-[300px] text-center ">
            <h2 className="text-white text-center text-[30px] font-bold mb-5">
              Donate blood save life
            </h2>
            <Link
              to="/registration"
              className="text-center mx-auto bg-green-600  text-white py-2 px-4 font-bold rounded-sm"
            >
              Donor Register
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full hero-2">
          <div className="hero-wrapper w-full py-[300px] text-center ">
            <h2 className="text-white text-center text-[30px] font-bold mb-5">
              A small step towards blood donation can give life to someone’s
              special.
            </h2>
            <Link
              to="/registration"
              className="text-center mx-auto bg-green-600  text-white py-2 px-4 font-bold rounded-sm"
            >
              Donor Register
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full hero-3">
          <div className="hero-wrapper w-full py-[300px] text-center ">
            <h2 className="text-white text-center text-[30px] font-bold mb-5">
              Donate blood, donate smile!
            </h2>
            <Link
              to="/registration"
              className="text-center mx-auto bg-green-600  text-white py-2 px-4 font-bold rounded-sm"
            >
              Donor Register
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full hero-4">
          <div className="hero-wrapper w-full py-[300px] text-center ">
            <h2 className="text-white text-center text-[30px] font-bold mb-5">
              Your blood is very precious to someone’s life.
            </h2>
            <Link
              to="/registration"
              className="text-center mx-auto bg-green-600  text-white py-2 px-4 font-bold rounded-sm"
            >
              Donor Register
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

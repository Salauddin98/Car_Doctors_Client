import member1 from "../../../assets/images/team/1.jpg";
import member2 from "../../../assets/images/team/2.jpg";
import member3 from "../../../assets/images/team/3.jpg";
import social from "../../../assets/images/team/Group 9969.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/css";
const Team = () => {
  return (
    <div className="mb-10 mt-20">
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-bold text-orange-600">Team</h3>
        <h2 className="text-5xl">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engineering Plug</h2>
                <p>Engineer Expert</p>
                <div className="card-actions">
                  <img src={social} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engineering Plug</h2>
                <p>Engineer Expert</p>
                <div className="card-actions">
                  <img src={social} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engineering Plug</h2>
                <p>Engineer Expert</p>
                <div className="card-actions">
                  <img src={social} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engineering Plug</h2>
                <p>Engineer Expert</p>
                <div className="card-actions">
                  <img src={social} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;

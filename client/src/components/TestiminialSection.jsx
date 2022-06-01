import { SectionHeader, Testimonial } from "./SmallComponents";
import "./css/Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";

//import images
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

function TestiminialSection() {
  return (
    <section className="testimonialSection">
        <div className="sectionInner">
            <SectionHeader
                title="Testimonials" subtitle="Testimonials"/>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  700: {
                    slidesPerView : 2
                  },
                  1100:{
                    slidesPerView : 3 
                  }
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                 <SwiperSlide>
                  <Testimonial
                    views="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incid"
                    url={person1}
                    name="Paolo dybala"
                    subhead="marketer"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testimonial
                      views="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incid"
                      url={person2}
                      name="samuael daniels"
                      subhead="marketer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                  <Testimonial
                      views="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incid"
                      url={person3}
                      name="Amelia Anna"
                      subhead="marketer"
                    />
                </SwiperSlide>
                
              </Swiper>

        </div>
    </section>
  )
}

export default TestiminialSection

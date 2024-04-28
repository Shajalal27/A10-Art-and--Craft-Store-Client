import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";
import bannerImg4 from "../../assets/banner4.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
    <div className="relative">
        <div className="bg-green-800  opacity-45 bg-cover">
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
        navigation={ true }
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bannerImg1} alt="" className="w-full h-[600px]"/></SwiperSlide>
        <SwiperSlide><img src={bannerImg2} alt="" className="w-full h-[600px]"/></SwiperSlide>
        <SwiperSlide><img src={bannerImg3} alt="" className="w-full h-[600px]"/></SwiperSlide>
        <SwiperSlide><img src={bannerImg4} alt="" className="w-full h-[600px]"/></SwiperSlide>
        
            </Swiper>
        </div>
        <div className="absolute top-10 right-0 z-10">
            <h2 className="text-green-400 md:text-6xl text-3xl font-extrabold  lg:pr-36 pr-6 font-sans ">The Most Creative <br /><span className="bg-blue-600 lg:text-5xl text-2xl italic text-white">Art School</span> That Can <br />Develop Your Talent</h2>

            <div className="pt-24">
                <button className="p-3 bg-orange-400 px-10 py-4 text-2xl font-bold rounded-tl-lg rounded-br-lg">GET STARTED</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;
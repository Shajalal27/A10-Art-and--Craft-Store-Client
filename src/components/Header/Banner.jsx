import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";
import bannerImg4 from "../../assets/banner4.jpg";
import { useTypewriter } from 'react-simple-typewriter'




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing'],
    loop:{},
    typeSpeed:100,
    delaySpeed:40

  })

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
            <h1 className="text-green-400 md:text-6xl text-3xl font-extrabold  lg:pr-48 pr-6 font-sans ">The Most Creative</h1>
            <h2 className="text-4xl pt-4"><span style={{fontStyle:'italic', fontWeight:'bold', color:'orange'
          
          }}>{typeEffect}</span></h2>
            <div className="pt-48">
              <button className="p-3 bg-orange-400 px-10 py-4 text-2xl font-bold rounded-tl-lg rounded-br-lg ">GET STARTED</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;
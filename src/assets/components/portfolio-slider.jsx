import Gambar1 from '../img/portfolio-img.jpg'
import Gambar2 from '../img/portfolio-img2.jpg'
import Gambar3 from '../img/portfolio-img3.jpg'
import Gambar4 from '../img/portfolio-img4.jpg'
import Gambar5 from '../img/portfolio-img5.jpg'
import Gambar6 from '../img/portfolio-img6.jpg'
import Gambar7 from '../img/portfolio-img7.jpg'
import Gambar8 from '../img/portfolio-img8.jpg'
import Gambar9 from '../img/portfolio-img9.jpg'
import Gambar10 from '../img/portfolio-img10.jpg'
import Gambar11 from '../img/portfolio-img11.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




export default function PortfolioSlider() {
    return (
        <>
        <Swiper
            slidesPerView={2.5}
            spaceBetween={25}
            loop={false}
            className="mySwiper hidden lg:block"
            data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"
        >
            {/* 1 */}
            <SwiperSlide>
                <div className='w-[100%] h-screen flex flex-col gap-2'>
                        {/* box atas */}
                        <div className='flex gap-2 w-full h-[50%]'>
                            {/* box kiri */}
                            <div className='h-full w-[45%]'>
                                <img src={Gambar1} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                            </div>
                            {/* box kanan */}
                            <div className='h-full w-[55%] flex flex-col gap-2'>
                                <div className='h-[40%] w-full'>
                                    <img src={Gambar2} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                                </div>
                                <div className='h-[60%] w-full'>
                                    <img src={Gambar3} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                                </div>
                            </div>
                        </div>
                        {/* box bawah */}
                        <div className='w-full h-[50%] relative group transition-all ease-in-out duration-500'>
                            <img src={Gambar4} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                            <div className='h-full w-full bg-[#898D92] bg-opacity-20 backdrop-filter backdrop-blur-[2px] absolute top-0 transition-all ease-in-out duration-500 group-hover:backdrop-blur-none'>
                                <div className='bg-[#666666] cursor-pointer bg-opacity-40 transition-all ease-in-out duration-500 group-hover:scale-105 py-2 px-12 xl:py-4 xl:px-14 4k:py-5 4k:px-20 flex flex-col justify-center items-center gap-1 absolute top-[180px] left-[80px] 2lg:top-[120px] 2lg:left-32 3lg:top-40 3lg:left-40 xl:top-[200px] xl:left-[240px] 4k:top-[220px] 4k:left-[300px]'>
                                    <p className='portfolio-font-2 text-white text-[30px] xl:text-[34px] 4k:text-[38px] font-semibold leading-tight'>See More</p>
                                    <i className="bi bi-arrow-right text-white text-[36px] xl:text-[40px] 4k:text-[44px]"></i>
                                </div>
                            </div>
                        </div>
                </div>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
                <div className='w-[100%] h-screen flex gap-2'>
                    {/* box kiri */}
                    <div className='h-full w-full'>
                        <img src={Gambar5} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                    </div>
                    {/* box kanan */}
                    <div className='h-full w-full flex flex-col gap-2'>
                        <div className='h-[50%] w-full'>
                            <img src={Gambar6} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                        <div className='h-[50%] w-full'>
                            <img src={Gambar7} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
                <div className='w-[100%] h-screen flex gap-2'>
                    {/* box kiri */}
                    <div className='h-full w-full flex flex-col gap-2'>
                        <div className='h-[30%] w-full'>
                            <img src={Gambar8} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                        <div className='h-[70%] w-full'>
                            <img src={Gambar9} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                    </div>
                    {/* box kanan */}
                    <div className='h-full w-full flex flex-col gap-2'>
                        <div className='h-[50%] w-full'>
                            <img src={Gambar10} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                        <div className='h-[50%] w-full'>
                            <img src={Gambar11} alt="" className='h-full w-full object-cover transition-all ease-in-out duration-500'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    );
}

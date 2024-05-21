// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination} from 'swiper/modules';

export default function PriceSlider() {
    const prices= [
        {
            id : 1,
            jenis: 'STANDARD',
            harga: '$400k',
            durasi: '3 hours',
            banyakPhoto: '60 - 80',
            retouch: '25 items',
            end: '10 days'
        },
        {
            id : 2,
            jenis: 'Premium',
            harga: '$550k',
            durasi: '4 hours',
            banyakPhoto: '85 - 90',
            retouch: '35 items',
            end: '7 days'
        },
        {
            id : 3,
            jenis: 'Pro',
            harga: '$600',
            durasi: '6 hours',
            banyakPhoto: '100 - 130',
            retouch: '40 items',
            end: '5 days'
        }
    ]
    return (
        <>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'3'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
        >
            {prices.map((price) => (
                <SwiperSlide key={price.id} className='overflow-visible'>
                    <div className="w-full overflow-visible lg:block hidden">
                        {/* jenis */}
                        <div className="bg-[#898D92] bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 xl:p-10 4k:p-16 flex flex-col gap-8 xl:gap-10 4k:gap-14 transition-all ease-in-out duration-500 border-4 border-transparent hover:border-tertiary overflow-visible">
                            {/* top */}
                            <div className="flex flex-col items-center justify-center gap-0">
                                <p className="price-font-2 text-white text-center text-[32px] xl:text-[36px] 4k:text-[50px]">{price.jenis}</p>
                                <p className="price-font text-white text-center text-[30px] xl:text-[34px] 4k:text-[48px]">{price.harga}</p>
                            </div>
                            {/* middle */}
                            <div className="flex flex-col gap-8 xl:gap-10 4k:gap-14">
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Duration</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.durasi}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Lots of Photos</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.banyakPhoto}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Detailed Retouching</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.retouch}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Finishing</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.end}</p>
                                </div>
                            </div>
                            {/* bottom */}
                            <div className="flex items-center justify-center bg-transparent border-2 4k:border-4 border-white px-2 py-3 xl:px-4 xl:py-5 4k:px-6 4k:py-5">
                                <p className="price-font-2 text-white text-center text-[20px] 2lg::text-[24px] xl:text-[28px] 4k:text-[40px]">Photo Session Schedule</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
}

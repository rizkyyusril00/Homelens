// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination} from 'swiper/modules';

export default function PriceSlider() {
    const nomorWhatsapp = "6285175108289"
    const prices= [
        {
            id : 1,
            star:'bi bi-star-fill text-[#FFDE59]',
            jenis: 'Self Photo',
            harga: 'Rp 10K - Rp 20K',
            durasi: '10 Minutes - 20 Minutes',
            banyakPhoto: '30 - 100',
            retouch: 'All Items',
            end: '10 Minutes'
        },
        {
            id : 2,
            jenis: 'Wedding',
            star:'hidden',
            harga: 'Rp 1.5 Juta - Rp. 2.5 Juta',
            durasi: '1 day',
            banyakPhoto: '50 - 150',
            retouch: '25 items - 50 items',
            end: '1 day'
        },
        {
            id : 3,
            jenis: 'Engagement',
            star:'hidden',
            harga: 'Rp 500K - Rp 1 Juta',
            durasi: '1 hours - 3 hours',
            banyakPhoto: '50 - 100',
            retouch: '20 items - 50 items',
            end: '1 day'
        },
        {
            id : 4,
            jenis: 'Prawedding',
            star:'hidden',
            harga: 'Rp 700K - Rp 1.5 Juta',
            durasi: '1 hours - 2 hours',
            banyakPhoto: '50 - 100',
            retouch: '20 items - 50 items',
            end: '1 day'
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
                                <p className="price-font-2 text-white text-center text-[32px] xl:text-[36px] 4k:text-[50px]"><i className={price.star}></i> {price.jenis}</p>
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
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Retouching</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.retouch}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">Finishing</p>
                                    <p className="price-font-2 text-white text-[20px] xl:text-[28px] 4k:text-[38px] font-light 2xl:font-semibold">{price.end}</p>
                                </div>
                            </div>
                            {/* bottom */}
                            <div className="flex items-center justify-center bg-transparent border-2 4k:border-4 border-white px-2 py-3 xl:px-4 xl:py-5 4k:px-6 4k:py-5 transition-all duration-500 ease-in-out hover:scale-95 hover:bg-secondary cursor-pointer">
                                <a href={`https://wa.me/${nomorWhatsapp}`} target="_blank" rel="noopener noreferrer" className="price-font-2 text-white text-center text-[20px] 2lg::text-[24px] xl:text-[28px] 4k:text-[40px]">Photo Session Schedule</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
}

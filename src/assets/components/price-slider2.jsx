// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function PriceSlider2() {
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
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
        >
        {prices.map((price) => (
                <SwiperSlide key={price.id} className='overflow-visible px-5 xs:px-6 md:px-12 block lg:hidden'>
                    <div className="w-full overflow-visible">
                        {/* jenis */}
                        <div className="bg-[#898D92] bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 flex flex-col gap-8 transition-all ease-in-out duration-500 border-4 border-transparent hover:border-tertiary">
                            {/* top */}
                            <div className="flex flex-col items-center justify-center gap-0">
                                <p className="price-font-2 text-white text-center text-[32px]">{price.jenis}</p>
                                <p className="price-font text-white text-center text-[30px]">{price.harga}</p>
                            </div>
                            {/* middle */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] font-light">Duration</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.durasi}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] font-light">Lots of Photos</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.banyakPhoto}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] font-light">Detailed Retouching</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.retouch}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] font-light">Finishing</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.end}</p>
                                </div>
                            </div>
                            {/* bottom */}
                            <div className="flex items-center justify-center bg-transparent border-2 border-white px-2 py-3">
                                <p className="price-font-2 text-white text-center text-[18px] md:text-[24px]">Photo Session Schedule</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}

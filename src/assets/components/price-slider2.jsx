// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function PriceSlider2() {
    const nomorWhatsapp = "6285175108289"
    const prices= [
        {
            id : 1,
            star:'bi bi-star-fill text-[#FFDE59]',
            jenis: 'Self Photo',
            harga: 'Rp 10K - Rp 20K',
            durasi: '10 Min - 20 Min',
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
            retouch: '25 - 50',
            end: '1 day'
        },
        {
            id : 3,
            jenis: 'Engagement',
            star:'hidden',
            harga: 'Rp 500K - Rp 1 Juta',
            durasi: '1 hours - 3 hours',
            banyakPhoto: '50 - 100',
            retouch: '20 - 50',
            end: '1 day'
        },
        {
            id : 4,
            jenis: 'Prawedding',
            star:'hidden',
            harga: 'Rp 700K - Rp 1.5 Juta',
            durasi: '1 hours - 2 hours',
            banyakPhoto: '50 - 100',
            retouch: '20 - 50',
            end: '1 day'
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
                                <p className="price-font-2 text-white text-center text-[32px] md:text-[36px]"><i className={price.star}></i> {price.jenis}</p>
                                <p className="price-font text-white text-center text-[24px] md:text-[28px] font-semibold">{price.harga}</p>
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
                                    <p className="price-font-2 text-white text-[20px] font-light">Retouching</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.retouch}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="price-font-2 text-white text-[20px] font-light">Finishing</p>
                                    <p className="price-font-2 text-white text-[20px] font-light">{price.end}</p>
                                </div>
                            </div>
                            {/* bottom */}
                            <div className="flex items-center justify-center bg-transparent border-2 border-white px-2 py-3">
                                <a href={`https://wa.me/${nomorWhatsapp}`} target="_blank" rel="noopener noreferrer" className="price-font-2 text-white text-center text-[18px] md:text-[24px]">Photo Session Schedule</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}

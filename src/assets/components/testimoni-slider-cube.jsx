import ReviewProfile from '../img/review-profile.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function SliderCube() {
    const reviews = [
        {
            id : 1,
            img: ReviewProfile,
            nama : 'Jhon Maftuh',
            platform : 'Facebook',
            isiReview : 'Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.'
        },
        {
            id : 2,
            img: ReviewProfile,
            nama : 'Samud Maftuh',
            platform : 'Facebook',
            isiReview : 'Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.'
        },
        {
            id : 3,
            img: ReviewProfile,
            nama : 'Jhon Maftuh',
            platform : 'Facebook',
            isiReview : 'Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.'
        },
        {
            id : 4,
            img: ReviewProfile,
            nama : 'Jhon Maftuh',
            platform : 'Facebook',
            isiReview : 'Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.'
        },
    ]
    return (
        <>
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 0,
            shadowScale: 0,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true}
            loop={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper overflow-hidden bg-secondary lg:hidden block"
        >
            {reviews.map((review,index) =>(
                <SwiperSlide key={index}>
                        <div className='flex flex-col gap-6 py-6 px-6 md:py-8 md:px-[64px] bg-tertiary shadow-sm shadow-primar'>
                            {/* bagian atas */}
                            <div className='flex flex-col gap-4'>
                                {/* mini profile */}
                                <div className='flex items-center gap-4'>
                                    {/* mini img */}
                                    <div className='h-[66px] w-[66px] 3lg:h-[77px] 3lg:w-[77px] 2xl:h-[110px] 2xl:w-[110px] 4k:h-[130px] 4k:w-[130px] rounded-full'>
                                        <img src={review.img} alt="" className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <div className='flex flex-col gap-2 2xl:gap-3 4k:gap-4'>
                                        <p className='testimonials-font-review font-semibold text-white text-2xl md:text-[26px]'>{review.nama}</p>
                                        <p className='testimonials-font-review-platform text-white text-[20px] md:text-[24px] text-start font-semibold'>{review.platform}</p>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-white opacity-50'></div>
                            </div>
                            {/* bagian bawah */}
                            <p className='testimonials-font-review-platform text-white text-[24px] md:text-[28px]  text-start font-light'>{review.isiReview}</p>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
}

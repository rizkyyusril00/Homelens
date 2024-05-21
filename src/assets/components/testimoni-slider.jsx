import ReviewProfile from '../img/review-profile.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function TestimoniSlider() {
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
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper hidden lg:block"
        >
            {reviews.map((review,index) =>(
                <SwiperSlide key={index}>
                    <div className='flex flex-col gap-6 p-6 xl:p-8 4k:p-10 bg-tertiary shadow-sm shadow-primary transition-all duration-500 ease-in-out hover:scale-95'>
                        {/* bagian atas */}
                        <div className='flex flex-col gap-4 xl:gap-6 4k:gap-10'>
                            {/* mini profile */}
                            <div className='flex items-center gap-4 xl:gap-6 4k:gap-10'>
                                {/* mini img */}
                                <div className='h-[66px] w-[66px] 3lg:h-[77px] 3lg:w-[77px] 2xl:h-[110px] 2xl:w-[110px] 4k:h-[130px] 4k:w-[130px] rounded-full'>
                                    <img src={review.img} alt="" className='w-full h-full object-cover rounded-full'/>
                                </div>
                                <div className='flex flex-col gap-2 2xl:gap-3 4k:gap-5'>
                                    <p className='testimonials-font-review text-white text-xl lg:text-2xl 3lg:text-3xl xl:text-[32px] 2xl:text-[36px] 4k:text-[46px]'>{review.nama}</p>
                                    <p className='testimonials-font-review-platform text-white text-[16px] 3lg:text-[20px] xl:text-[22px] 2xl:text-[26px] 4k:text-[42px] font-light text-start'>{review.platform}</p>
                                </div>
                            </div>
                            <div className='w-full h-[2px] bg-white'></div>
                        </div>
                        {/* bagian bawah */}
                        <p className='testimonials-font-review-platform text-white text-[16px] lg:text-[18px] 3lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 4k:text-[44px] text-start font-light'>{review.isiReview}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
}

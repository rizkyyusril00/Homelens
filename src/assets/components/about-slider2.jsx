import AboutImg from '../img/about-img.jpg'
import AboutImg2 from '../img/about-img2.jpg'
import AboutImg3 from '../img/about-img3.jpg'
import AboutImg4 from '../img/about-img4.jpg'
import AboutImg5 from '../img/about-img5.jpg'
import AboutImg6 from '../img/about-img6.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const Images = [
    {
        id : 1,
        name: AboutImg,
    },
    {
        id : 2,
        name: AboutImg2,
    },
    {
        id : 3,
        name: AboutImg3,
    },
    {
        id : 4,
        name: AboutImg4,
    },
    {
        id : 5,
        name: AboutImg5,
    },
    {
        id : 6,
        name: AboutImg6,
    },
];
export default function AboutSliderMobile() {
    return (
        <>
        <Swiper
            id='mySwiper-mobile'
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {Images.map((Image) => (
                <SwiperSlide key={Image.id}>
                    <div className='h-[350px] w-full overflow-hidden'>
                        <img src={Image.name} alt="" className='h-full w-full object-cover'/>
                    </div>
                </SwiperSlide>               
            ))}
        </Swiper>
        </>
    );
}

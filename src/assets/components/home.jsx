import Hero from '../img/hero.png'
import { Link } from 'react-scroll'


export default function Home() {
    return (
        <>
            <section id='home' className="home overflow-hidden">
                <div className="mx-auto">
                    {/* desktop & laptop */}
                    <div className="home-box hidden lg:block h-screen w-full lg:px-14 2lg:px-20 xl:px-24 2xl:px-40">
                        <div className="mx-auto w-full h-screen relative">
                            <img src={Hero} alt="" className='mx-auto w-auto object-cover h-screen animate-fade'/>
                            {/* order button */}
                            <div className='bg-transparent py-6 px-14 2xl:py-12 2xl:px-24 flex justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 border-2 border-[#898D92] group hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out'>
                                <Link to='price' smooth={true} offset={-180} duration={500} className='text-[#898D92] text-[24px] 2xl:text-[34px] 4k:text-[40px] text-center leading-tight group-hover:text-white'>Order Now</Link>
                            </div>
                            <div className='flex flex-col absolute top-1/2 transform -translate-y-1/2'>
                                <p className='hero-fonts font-light text-white lg:text-[70px] 2lg:text-[100px] 2xl:text-[140px] 4k:text-[190px] animate-fade2'>PHOTO</p>
                                <p className='hero-fonts font-light text-white lg:text-[70px] 2lg:text-[100px] 2xl:text-[140px] 4k:text-[190px] pl-20 2xl:pl-28 animate-fade2'>GRAPHY</p>
                            </div>
                            <div className='flex flex-col absolute top-1/2 transform -translate-y-1/2 right-[70px] 2lg:right-36 xl:right-28 2xl:right-56 4k:right-44 w-[250px] 3lg:w-[300px] xl:w-[330px] 2xl:w-[350px] 4k:w-[600px] mt-28 2xl:mt-32 4k:mt-44'>
                                <p className='text-[#898D92] text-[20px] 3lg:text-[24px] xl:text-[30px] 2xl:text-[36px] 4k:text-[55px] leading-tight animate-fade3'>Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.</p>
                            </div>
                            {/* icons */}
                            <div className='flex flex-col items-center justify-center gap-6 xl:gap-8 4k:gap-9 absolute right-0 top-1/2 transform -translate-y-1/2 h-screen'>
                                <div className='bg-tertiary w-[2px] 2xl:w-[4px] 4k:w-[6px] h-[12%] 2lg:mt-8 xl:mt-10 4k:mt-14'></div>
                                <i className="bi bi-twitter-x text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[36px] 4k:text-[48px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-facebook text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[36px] 4k:text-[48px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-linkedin text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[36px] 4k:text-[48px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-instagram text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[36px] 4k:text-[48px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <div className='bg-tertiary w-[2px] 2xl:w-[4px] 4k:w-[6px] h-[12%]'></div>
                            </div>
                        </div>
                    </div>
                    {/* mobile & tablet */}
                    <div className='home-box-mobile block lg:hidden w-full h-screen '>
                        <div className="mx-auto w-full h-screen relative">
                            <p className='text-[#898D92] text-[24px] leading-tight w-[80%] pt-24 md:pt-28 xs:pt-28 px-5 xs:px-6 md:px-12'>Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.</p>
                            <div className='flex items-center justify-center gap-4 mt-6 xs:mt-8 px-5 xs:px-6 md:px-12'>
                                <div className='bg-tertiary w-20 h-[3px]'></div>
                                <a href="https://x.com/?lang=en-id" target='_blank' className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-twitter-x"></i></a>
                                <a href="https://www.facebook.com/" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-facebook"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-linkedin"></i></a>
                                <a href="https://www.instagram.com/?hl=en" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-instagram"></i></a>
                                <div className='bg-tertiary w-20 h-[3px]'></div>
                            </div>
                            <div className='flex flex-col mt-5 xs:mt-12 relative z-20 px-5 xs:px-6 md:px-12'>
                                <p className='hero-fonts text-white text-[80px] md:text-[90px] leading-tight mt-2 md:mt-6 animate-fade2'>PHOTO</p>
                                <p className='hero-fonts text-white text-[80px] md:text-[90px] leading-tight pl-10 mb-16 xs:mb-24 animate-fade2'>GRAPHY</p>
                            </div>
                            <img src={Hero} alt="" className='mx-auto w-full object-cover h-fit md:h-[75%] animate-fade absolute bottom-0'/>
                            {/* order button mobile */}
                            <div className='bg-transparent py-4 px-10 md:py-5 md:px-12 flex justify-center items-center absolute bottom-4 left-1/2 transform -translate-x-1/2 border-2 border-[#898D92] group hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out'>
                                <Link to='price' smooth={true} offset={-180} duration={500} className='text-[#898D92] text-[20px] md:text-[24px] text-center leading-tight group-hover:text-white'>Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
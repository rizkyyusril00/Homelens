import Hero from '../img/hero.png'
import { Link } from 'react-scroll'


export default function Home() {

    return (
        <>
            <section id='home' className="home">
                <div className="mx-auto">
                    <div className="home-box">
                        {/* laptop-pc */}
                        <div className="hidden lg:flex relative overflow-hidden">
                            {/* hero */}
                            <div className='h-[600px] 4k:w-[1300px] xl:h-fit 3lg:h-[700px] absolute bottom-0 lg:left-[180px] 2lg:left-[330px] 3lg:left-[295px] xl:left-[240px] 2xl:left-[510px] 4k:left-[680px] lg:block hidden z-20 animate-fade delay-1000'>
                                <img src={Hero} alt="" className='w-full h-full object-cover'/>
                                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex items-center justify-center w-[238px] h-[66px] 2xl:w-[250px] 2xl:h-[72px] 4k:w-[300px] 4k:h-[95px] border-2 border-[#898D92] group hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out'>
                                    <p className='text-[#898D92] text-[26px] 2xl:text-3xl 4k:text-[36px] text-center leading-tight group-hover:text-white'>Order Now</p>
                                </div>
                            </div>
                            {/* box kiri */}
                            <div className="w-1/2 bg-tertiary h-screen lg:pl-14 2lg:pl-20 xl:pl-24 2xl:pl-40">
                                <div className='relative w-full h-full animate-fade2 z-30'>
                                    <p className='hero-fonts text-white transform translate-y-1/2 leading-tight lg:text-[70px] 2lg:text-[100px] 2xl:text-[130px] 4k:text-[170px] absolute left-0 top-[275px] 2lg:top-36 3lg:top-56 xl:top-[280px] 2xl:top-[350px] 4k:top-[500px] z-30'>PHOTO</p>
                                    <p className='hero-fonts text-white transform translate-y-1/2 leading-tight lg:text-[70px] 2lg:text-[100px] 2xl:text-[130px] 4k:text-[170px] absolute left-16 2lg:left-20 top-[275px] 2lg:top-36 3lg:top-56 xl:top-[280px] 2xl:top-[350px] 4k:top-[500px] mt-[90px] 2lg:mt-[120px] 2xl:mt-[140px] 4k:mt-[170px] z-30'>GRAPHY</p>
                                </div>    
                            </div>
                            {/* box kanan */}
                            <div className="w-1/2 bg-primary h-screen lg:pr-14 2lg:pr-20 xl:pr-24 2xl:pr-40">
                                <div className='relative w-full h-screen'>
                                    {/* icons */}
                                    <div className='flex flex-col items-center gap-6 xl:gap-8 4k:gap-9 absolute right-0 top-10 2lg:top-0 3lg:top-10 xl:top-12 4k:top-[120px]'>
                                        <div className='bg-tertiary w-[2px] 2xl:w-[4px] 4k:w-[6px] h-[170px] 2lg:h-[150px] 3lg:h-[160px] xl:h-[260px] 4k:h-[380px] mt-[90px] 4k:mt-[100px]'></div>
                                        <i className="bi bi-twitter-x text-[20px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                        <i className="bi bi-facebook text-[20px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                        <i className="bi bi-linkedin text-[20px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                        <i className="bi bi-instagram text-[20px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                        <div className='bg-tertiary w-[2px] 2xl:w-[4px] 4k:w-[6px] h-[170px] 2lg:h-[150px] 3lg:h-[160px] xl:h-[260px] 4k:h-[380px]'></div>
                                    </div>
                                    <div className='hero-desc text-white w-[250px] 3lg:w-[300px] xl:w-[330px] 2xl:w-[350px] 4k:w-[600px] absolute bottom-40 left-40 3lg:bottom-[190px] 3lg:left-[200px] xl:bottom-[240px] xl:left-[215px] 2xl:bottom-[230px] 2xl:left-[255px] 4k:bottom-[300px] 4k:left-[355px] z-30 animate-fade3'>
                                        <p className='text-[#898D92] text-[20px] 3lg:text-[24px] xl:text-[30px] 2xl:text-[36px] 4k:text-[50px] leading-tight'>Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mobile-tablet */}
                        <div className="lg:hidden flex flex-col h-screen overflow-hidden">
                            {/* box atas */}
                            <div className='bg-primary px-5 xs:px-6 md:px-12 h-1/2 relative z-20'>
                                <p className='text-[#898D92] text-[24px] leading-tight absolute top-1/2 transform -translate-y-1/2 w-[80%]'>Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.</p>
                                <div className='absolute bottom-20 xs:bottom-24 flex items-center justify-center left-1/2 transform -translate-x-1/2 gap-4'>
                                    <div className='bg-tertiary w-20 h-[3px]'></div>
                                    <a href="https://x.com/?lang=en-id" target='_blank' className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-twitter-x"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.linkedin.com/" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-linkedin"></i></a>
                                    <a href="https://www.instagram.com/?hl=en" target="_blank" className='text-[22px] text-tertiary transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer animate-fade'><i className="bi bi-instagram"></i></a>
                                    <div className='bg-tertiary w-20 h-[3px]'></div>
                                </div>
                                <div className='absolute top-1/2 transform translate-y-1/2 flex flex-col'>
                                    <p className='hero-fonts text-white text-[76px] leading-tight mt-2 animate-fade2'>PHOTO</p>
                                    <p className='hero-fonts text-white text-[76px] leading-tight pl-10 mb-16 xs:mb-24 animate-fade2'>GRAPHY</p>
                                </div>
                            </div>
                            {/* box bawah */}
                            <div className='bg-tertiary px-4 md:px-10 h-1/2 relative z-10 '>
                                <img src={Hero} alt=""  className='absolute bottom-0 md:-bottom-36 right-[2px] animate-fade'/>
                                <div className='w-[238px] h-[66px] border-2 border-[#898D92] absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center group hover:bg-secondary hover:scale-95 transition-all duration-300 ease-in-out z-30 cursor-pointer'>
                                    <Link to='price' smooth={true} offset={-180} duration={500} className='text-[#898D92] text-[22px] text-center leading-tight group-hover:text-white'>Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
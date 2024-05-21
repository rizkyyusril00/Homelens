import Logo from '../img/logo.png'


export default function Footer() {
    return(
        <>
            <section className="footer">
                <div className="mx-auto">
                    <div className="footer-box bg-secondary pt-72 lg:pt-60 pb-10 px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40">
                        {/* Laptop-Desktop */}
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 lg:justify-between">
                            {/* logo */}
                            <div className='w-52 md:w-[220px] lg:w-auto 2xl:w-[300px] 4k:w-[500px]' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                <img src={Logo} alt="" className='w-full h-full'/>
                            </div>
                            {/* icon */}
                            <div className='flex gap-6 2xl:gap-10' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                <i className="bi bi-twitter-x text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-white transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-facebook text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-white transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-linkedin text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-white transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                                <i className="bi bi-instagram text-[22px] 3lg:text-[24px] xl:text-[28px] 2xl:text-[30px] 4k:text-[38px] text-white transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"></i>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-4 mt-32'>
                            <span className='hidden md:block bg-white w-[100px] h-[1px] md:h-[2px] 4k:h-[4px]'></span>
                            <p className='text-white text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px] 4k:text-[32px] leading-tight'>(C) Copyright 2024 Homelens</p>
                            <span className='hidden  md:block bg-white w-[100px] h-[1px] md:h-[2px] 4k:h-[4px]'></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
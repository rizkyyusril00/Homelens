

export default function WhymeCard(){
    return(
        <>
            <div className="hidden lg:flex flex-col gap-20">
                {/* box atas */}
                <div className="flex">
                    {/* box1 */}
                    <div className="w-full transition-all duration-500 ease-in-out hover:scale-105" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50">
                        <div className="flex flex-col gap-4 w-full">
                            <p className="whyme-font text-white text-[70px] 2xl:text-[80px] 4k:text-[90px] text-center">WHY US</p>
                            <p className="whyme-font-desc text-white text-[22px] xl:text-[24px] 2xl:text-[26px] 4k:text-[34px] font-light 2xl:font-semibold text-center">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                        </div>
                    </div>
                </div>
                {/* box bawah */}
                <div className="flex">
                    {/* box1 */}
                    <div className="w-[50%] transition-all duration-500 ease-in-out hover:scale-105" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <div className="flex flex-col gap-4 w-[100%]">
                            <div className="flex items-center justify-center gap-3 2xl:gap-6 4k:gap-8">
                                <i className="bi bi-eye-fill text-white text-[24px] xl:text-[28px] 2xl:text-[34px] 4k:text-[40px]"></i>
                                <p className="whyme-font text-white text-[24px] xl:text-[28px] 2xl:text-[34px] 4k:text-[40px] text-center">Visi</p>
                            </div>
                            <p className="whyme-font-desc text-white text-[22px] xl:text-[24px] 2xl:text-[26px] 4k:text-[34px] font-light 2xl:font-semibold text-center">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                        </div>
                    </div>
                    {/* box2 */}
                    <div className="w-[50%] pl-16 2xl:pl-14 4k:pl-[80px] transition-all duration-500 ease-in-out hover:scale-105" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400"> 
                        <div className="flex flex-col gap-4 w-[100%]">
                            <div className="flex items-center justify-center gap-3 2xl:gap-6 4k:gap-8">
                                <i className="bi bi-pass-fill text-white text-[24px] xl:text-[28px] 2xl:text-[34px] 4k:text-[40px]"></i>
                                <p className="whyme-font text-white text-[24px] xl:text-[28px] 2xl:text-[34px] 4k:text-[40px] text-center">Misi</p>
                            </div>
                            <p className="whyme-font-desc text-white text-[22px] xl:text-[24px] 2xl:te[26px] 4k:text-[34px] font-light 2xl:font-semibold text-center">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
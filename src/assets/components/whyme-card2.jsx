

export default function WhymeCard2(){
    return(
        <>
            <div className="flex flex-col lg:hidden gap-14">
                {/* box1 */}
                <div className="flex flex-col gap-4 border-r-2 border-white px-3 transition-all duration-500 ease-in-out hover:scale-95" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50">
                    <p className="whyme-font text-white text-[50px] md:text-[70px]">WHY ME</p>
                    <p className="whyme-font-desc text-white text-[22px]">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                </div>
                {/* box 2 */}
                <div className="flex flex-col gap-4 border-l-2 border-white px-3 transition-all duration-500 ease-in-out hover:scale-95" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                    <div className="flex flex-col gap-1 2xl:gap-2 4k:gap-3">
                            <i className="bi bi-eye-fill text-white text-[30px]"></i>
                            <p className="whyme-font text-white text-[34px]">Visi</p>
                        </div>
                    <p className="whyme-font-desc text-white text-[22px]">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                </div>
                {/* box 3 */}
                <div className="flex flex-col gap-4 border-r-2 border-white px-3 transition-all duration-500 ease-in-out hover:scale-95" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300">
                    <div className="flex flex-col gap-1 2xl:gap-2 4k:gap-3">
                            <i className="bi bi-pass-fill text-white text-[30px]"></i>
                            <p className="whyme-font text-white text-[34px]">Misi</p>
                        </div>
                    <p className="whyme-font-desc text-white text-[22px]">Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                </div>
            </div>
        </>
    )
}
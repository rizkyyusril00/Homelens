import PortfolioSlider from "./portfolio-slider";
import PortfolioSlider2 from "./portfolio-slider2";


export default function Portfolio(){
    return(
        <>
            <section id="portfolio" className="portfolio">
                <div className="mx-auto">
                    <div className="portfolio-box bg-primary pt-28 lg:pt-10">
                        <p className="portfolio-font text-white text-[40px] xs:text-[50px] md:text-[70px] xl:text-[80px] 4k:text-[90px] px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40 text-end mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Portfolio</p>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50" className="px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40 mb-10 flex float-end gap-2 md:gap-4 xl:gap-6 2xl:gap-8 4k:gap-10">
                            <p className="portfolio-font-2 text-white text-[14px] xs:text-[15px] md:text-[18px] xl:text-[18px] 4k:text-[40px] cursor-pointer transition-all ease-in-out duration-500 hover:-mt-2">Self Photo</p>
                            <p className="portfolio-font-2 text-white text-[14px] xs:text-[15px] md:text-[18px] xl:text-[18px] 4k:text-[40px] cursor-pointer transition-all ease-in-out duration-500 hover:-mt-2">Wedding</p>
                            <p className="portfolio-font-2 text-white text-[14px] xs:text-[15px] md:text-[18px] xl:text-[18px] 4k:text-[40px] cursor-pointer transition-all ease-in-out duration-500 hover:-mt-2">Engagement</p>
                            <p className="portfolio-font-2 text-white text-[14px] xs:text-[15px] md:text-[18px] xl:text-[18px] 4k:text-[40px] cursor-pointer transition-all ease-in-out duration-500 hover:-mt-2">Prawedding</p>
                        </div>
                        <PortfolioSlider />
                        <PortfolioSlider2 />
                    </div>
                </div>
            </section>
        </>
    )
}
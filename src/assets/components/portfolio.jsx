import PortfolioSlider from "./portfolio-slider";
import PortfolioSlider2 from "./portfolio-slider2";


export default function Portfolio(){
    return(
        <>
            <section id="portfolio" className="portfolio">
                <div className="mx-auto">
                    <div className="portfolio-box bg-primary pt-28 lg:pt-10">
                        <p className="portfolio-font text-white text-[60px] px-5 xs:px-6 md:px-12 lg:px-14 2lg:px-20 xl:px-24 2xl:px-40 text-end mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Portfolio</p>
                        <PortfolioSlider />
                        <PortfolioSlider2 />
                    </div>
                </div>
            </section>
        </>
    )
}